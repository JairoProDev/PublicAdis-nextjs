import React, { useState } from 'react';
import Layout from '../src/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '../src/data/blog-posts';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts =
    selectedCategory === 'all'
      ? blogPosts
      : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <Layout
      title="Blog | PublicAdis"
      description="Artículos y consejos sobre publicidad, marketing digital y estrategias para hacer crecer tu negocio"
    >
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Nuestro Blog</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Artículos, consejos y estrategias sobre publicidad, marketing digital y todo lo que
              necesitas para hacer crecer tu negocio.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } transition-colors duration-200`}
              >
                {category === 'all' ? 'Todos' : category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </section>
    </Layout>
  );
}
