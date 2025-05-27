import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism-plus';

// Get all guide files from a category
export const getGuideFiles = category => {
  const guidesDirectory = path.join(process.cwd(), 'content/guias', category);
  if (!fs.existsSync(guidesDirectory)) return [];
  return fs.readdirSync(guidesDirectory).filter(file => file.endsWith('.mdx'));
};

// Get guide data by category and slug
export const getGuideBySlug = async (category, slug) => {
  const fullPath = path.join(process.cwd(), 'content/guias', category, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrism],
    },
  });

  return {
    slug,
    category,
    frontmatter: data,
    content: mdxSource,
  };
};

// Get all guides from a category
export const getGuidesByCategory = async category => {
  const files = getGuideFiles(category);
  const guides = await Promise.all(
    files.map(async fileName => {
      const slug = fileName.replace(/\.mdx$/, '');
      const guide = await getGuideBySlug(category, slug);
      return guide;
    })
  );

  return guides.filter(Boolean).sort((a, b) => {
    if (!a?.frontmatter?.updatedAt || !b?.frontmatter?.updatedAt) return 0;
    return new Date(b.frontmatter.updatedAt) - new Date(a.frontmatter.updatedAt);
  });
};

// Get all categories with their guides
export const getAllCategoriesWithGuides = async () => {
  const categoriesDir = path.join(process.cwd(), 'content/guias');
  const categories = fs.readdirSync(categoriesDir).filter(path => !path.includes('.'));

  const categoriesWithGuides = await Promise.all(
    categories.map(async category => {
      const guides = await getGuidesByCategory(category);
      return {
        category,
        guides,
      };
    })
  );

  return categoriesWithGuides;
};
