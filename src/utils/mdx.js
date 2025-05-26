import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import rehypePrism from 'rehype-prism-plus';
import remarkGfm from 'remark-gfm';

// Get all blog post files
export const getPostFiles = () => {
  const postsDirectory = path.join(process.cwd(), 'content/blog');
  return fs.readdirSync(postsDirectory).filter(file => file.endsWith('.mdx'));
};

// Get post data by slug
export const getPostBySlug = async slug => {
  const postsDirectory = path.join(process.cwd(), 'content/blog');
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents);

  // Use next-mdx-remote to parse MDX content
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrism],
    },
  });

  return {
    slug,
    frontMatter: data,
    content: mdxSource,
  };
};

// Get all posts data
export const getAllPosts = async () => {
  const files = getPostFiles();
  const posts = [];

  for (const file of files) {
    const slug = file.replace(/\.mdx$/, '');
    const { frontMatter } = await getPostBySlug(slug);
    posts.push({
      ...frontMatter,
      slug,
    });
  }

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
};
