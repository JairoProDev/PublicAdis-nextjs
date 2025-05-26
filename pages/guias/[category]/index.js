import React from 'react';
import Layout from '../../../src/components/Layout';
import { getGuidesByCategory } from '../../../src/utils/guides';
import { guiasCategories } from '../../../src/data/guias';
import Link from 'next/link';
import Image from 'next/image';

export default function CategoryPage({ category, guides }) {
  const categoryInfo = guiasCategories.find(cat => cat.id === category);

  return (
    <Layout
      title={`${categoryInfo?.name || category} | Guías PublicAdis`}
      description={`Guías y recursos sobre ${categoryInfo?.name || category} para mejorar tu presencia digital.`}
    >
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{categoryInfo?.name || category}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {categoryInfo?.description || `Explora nuestras guías sobre ${category}`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map(guide => (
            <Link
              key={guide.slug}
              href={`/guias/${category}/${guide.slug}`}
              className="block group"
            >
              <article className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={guide.frontmatter.coverImage}
                    alt={guide.frontmatter.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
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
                    <span className="text-sm text-gray-500">{guide.frontmatter.duration}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    {guide.frontmatter.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2">{guide.frontmatter.description}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = guiasCategories.map(category => ({
    params: { category: category.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { category } = params;
  const guides = await getGuidesByCategory(category);

  if (!guides) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      category,
      guides,
    },
    revalidate: 3600,
  };
} 