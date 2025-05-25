import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '../data/blog-posts';

export default function BlogSidebar({ onSearch, selectedCategory, onCategoryChange }) {
  const [email, setEmail] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];
  const recentPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  const handleSearch = e => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  const handleSubscribe = e => {
    e.preventDefault();
    // Here you would typically handle the newsletter subscription
    console.log('Subscribing email:', email);
    alert('¡Gracias por suscribirte! Te mantendremos informado.');
    setEmail('');
  };

  return (
    <aside className="space-y-8">
      {/* Search */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Buscar</h2>
        <div className="relative">
          <input
            type="search"
            placeholder="Buscar artículos..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={handleSearch}
          />
          <svg
            className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Categorías</h2>
        <div className="space-y-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`block w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                selectedCategory === category ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'
              }`}
            >
              {category === 'all' ? 'Todos' : category}
              <span className="float-right text-gray-500">
                {category === 'all'
                  ? blogPosts.length
                  : blogPosts.filter(post => post.category === category).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Artículos Recientes</h2>
        <div className="space-y-4">
          {recentPosts.map(post => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="flex items-start space-x-4 group"
            >
              <div className="relative w-20 h-20 flex-shrink-0">
                <Image src={post.image} alt={post.title} fill className="rounded-lg object-cover" />
              </div>
              <div>
                <h3 className="text-sm font-medium group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="bg-blue-50 rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-2">Suscríbete a nuestro newsletter</h2>
        <p className="text-gray-600 mb-4">
          Recibe las últimas noticias y consejos sobre publicidad y marketing digital.
        </p>
        <form onSubmit={handleSubscribe} className="space-y-4">
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Suscribirse
          </button>
        </form>
      </div>
    </aside>
  );
}
