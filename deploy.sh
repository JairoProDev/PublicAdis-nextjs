#!/usr/bin/env bash

# Build the project
echo "Building project..."
npm run build

# Create a temporary directory for deployment
echo "Creating temporary directory..."
mkdir -p tmp/deploy

# Copy the built files to the temporary directory
echo "Copying files..."
cp -r dist/* tmp/deploy/

# Switch to gh-pages branch
echo "Switching to gh-pages branch..."
git checkout gh-pages || git checkout -b gh-pages

# Remove existing files
echo "Cleaning existing files..."
rm -rf *

# Copy the new files
echo "Moving new files..."
cp -r tmp/deploy/* .

# Clean up
echo "Cleaning up..."
rm -rf tmp

# Add all files
echo "Adding files to git..."
git add .

# Commit
echo "Committing changes..."
git commit -m "Deploy to GitHub Pages"

# Push
echo "Pushing to GitHub..."
git push origin gh-pages

# Switch back to main branch
echo "Switching back to main branch..."
git checkout main

echo "Deployment complete!" 