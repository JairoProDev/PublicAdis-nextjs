import React, { useState, useMemo } from 'react';
import Layout from '../../src/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import BlogSidebar from '../../src/components/BlogSidebar';
import { blogPosts } from '../../src/data/blog-posts';

// Function to calculate relevance score for search
function calculateRelevance(post, searchTerm) {
  if (!searchTerm) return 1;

  const searchLower = searchTerm.toLowerCase();
  const titleScore = post.title.toLowerCase().includes(searchLower) ? 3 : 0;
  const excerptScore = post.excerpt.toLowerCase().includes(searchLower) ? 2 : 0;
  const contentScore = post.content.toLowerCase().includes(searchLower) ? 1 : 0;
  const categoryScore = post.category.toLowerCase().includes(searchLower) ? 1.5 : 0;

  return titleScore + excerptScore + contentScore + categoryScore;
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter and sort posts based on search term and category
  const filteredPosts = useMemo(() => {
    let posts = [...blogPosts];

    // Filter by category
    if (selectedCategory !== 'all') {
      posts = posts.filter(post => post.category === selectedCategory);
    }

    // If there's a search term, filter and sort by relevance
    if (searchTerm) {
      posts = posts
        .map(post => ({
          ...post,
          relevance: calculateRelevance(post, searchTerm),
        }))
        .filter(post => post.relevance > 0)
        .sort((a, b) => b.relevance - a.relevance);
    } else {
      // If no search term, sort by date
      posts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    return posts;
  }, [selectedCategory, searchTerm]);

  const handleSearch = term => {
    setSearchTerm(term);
  };

  const handleCategoryChange = category => {
    setSelectedCategory(category);
  };

  return (
    <Layout
      title="Blog | PublicAdis"
      description="Artículos y consejos sobre publicidad, marketing digital y estrategias para hacer crecer tu negocio"
    >
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Nuestro Blog</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Artículos, consejos y estrategias sobre publicidad, marketing digital y todo lo que
              necesitas para hacer crecer tu negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Blog Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map(post => (
                  <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <Link href={`/blog/${post.slug}`} className="block">
                      <div className="relative h-48 w-full">
                        <Image src={post.image} alt={post.title} fill className="object-cover" />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <span className="text-sm text-blue-600">{post.category}</span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-sm text-gray-500">{post.readTime}</span>
                        </div>
                        <h2 className="text-xl font-semibold mb-2 hover:text-blue-600 transition-colors duration-200">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center">
                          <div className="relative h-10 w-10 rounded-full overflow-hidden">
                            <Image
                              src={post.authorImage}
                              alt={post.author}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium">{post.author}</p>
                            <p className="text-sm text-gray-500">{post.date}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>

              {/* No Results Message */}
              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No se encontraron artículos
                  </h3>
                  <p className="text-gray-600">
                    Intenta ajustar tu búsqueda o explorar otras categorías.
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <BlogSidebar
                onSearch={handleSearch}
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
