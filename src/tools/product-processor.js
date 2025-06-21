#!/usr/bin/env node
/**
 * Product Processor Script
 * This is a master script that handles the complete product image pipeline:
 * 1. Generates CSV file from the catalog
 * 2. Creates placeholder images
 * 3. Optionally searches and downloads real images (if API keys are provided)
 * 4. Updates catalog with correct image paths
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const readline = require('readline');

// Import our tools
const { generateCsvForImageProcessing } = require('./image-downloader');
const { generatePlaceholders } = require('./local-placeholder');
const { updateCatalogImagePaths } = require('./update-catalog-paths');

// Configuration
const API_KEYS = {
  UNSPLASH_API_KEY: process.env.UNSPLASH_API_KEY || '',
  PEXELS_API_KEY: process.env.PEXELS_API_KEY || '',
  PIXABAY_API_KEY: process.env.PIXABAY_API_KEY || '',
};

// Create a readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Helper function to run a command
const runCommand = command => {
  return new Promise((resolve, reject) => {
    console.log(`\nRunning: ${command}`);
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return reject(error);
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
      }
      console.log(stdout);
      resolve(stdout);
    });
  });
};

// Main workflow function
const processProducts = async () => {
  try {
    // Clear console
    console.clear();
    console.log('===== QUIVAL Product Image Processor =====\n');

    // Step 1: Generate CSV file
    console.log('Step 1: Generating CSV file from catalog data...');
    generateCsvForImageProcessing();

    // Step 2: Generate placeholders
    console.log('\nStep 2: Generating placeholder images...');
    await generatePlaceholders();

    // Step 3: Ask if user wants to search for real images
    const hasApiKey = Object.values(API_KEYS).some(key => key && key.length > 0);

    if (hasApiKey) {
      const answer = await new Promise(resolve => {
        rl.question('\nDo you want to search for real images using API keys? (y/n) ', resolve);
      });

      if (answer.toLowerCase() === 'y') {
        console.log('\nStep 3: Searching for real images...');

        // Determine which search engines to use based on available API keys
        const engines = [];
        if (API_KEYS.UNSPLASH_API_KEY) engines.push('unsplash');
        if (API_KEYS.PEXELS_API_KEY) engines.push('pexels');
        if (API_KEYS.PIXABAY_API_KEY) engines.push('pixabay');

        // Check if Python script exists
        const pythonScript = path.join(process.cwd(), 'src/tools/process_images.py');
        if (fs.existsSync(pythonScript)) {
          // Construct command with API keys
          const apiKeyArgs = Object.entries(API_KEYS)
            .filter(([_, value]) => value)
            .map(([key, value]) => `${key}=${value}`)
            .join(' ');

          // Run Python script with engines and API keys
          await runCommand(`python "${pythonScript}" --engines ${engines.join(' ')} ${apiKeyArgs}`);
        } else {
          console.log('Python image processor not found. Skipping real image search.');
        }
      }
    }

    // Step 4: Update catalog with image paths
    console.log('\nStep 4: Updating catalog with image paths...');
    updateCatalogImagePaths();

    console.log('\n===== Processing Complete =====');
    console.log('The catalog has been updated with image paths.');
    console.log('You can now view the products with their images in the application.');
  } catch (error) {
    console.error('Error in product processing:', error);
  } finally {
    rl.close();
  }
};

// Run the workflow
processProducts();
