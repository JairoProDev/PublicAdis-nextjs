import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const GuideCard = ({ guide }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={guide.frontmatter.coverImage}
          alt={guide.frontmatter.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <span
            className={`text-sm font-medium px-3 py-1 rounded-full ${
              guide.frontmatter.level === 'Principiante'
                ? 'bg-green-100 text-green-800'
                : guide.frontmatter.level === 'Intermedio'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
            }`}
          >
            {guide.frontmatter.level}
          </span>
          <span className="ml-2 text-sm text-gray-600">{guide.frontmatter.duration}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{guide.frontmatter.title}</h3>
        <p className="text-gray-600 mb-4">{guide.frontmatter.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-sm text-gray-500">Por {guide.frontmatter.author}</span>
          </div>
          <Link
            href={`/guias/${guide.category}/${guide.slug}`}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Leer más →
          </Link>
        </div>
      </div>
    </div>
  );
};

const GuidesList = ({ guides, category }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">{category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map(guide => (
          <GuideCard key={guide.slug} guide={guide} />
        ))}
      </div>
    </div>
  );
};

export default GuidesList;
