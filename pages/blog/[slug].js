import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../src/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '../../src/data/blog-posts';

// This function gets called at build time
export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const paths = blogPosts.map(post => ({
    params: { slug: post.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This function gets called at build time
export async function getStaticProps({ params }) {
  const post = blogPosts.find(post => post.slug === params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return {
    props: {
      post,
      relatedPosts,
    },
  };
}

export default function BlogPost({ post, relatedPosts }) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return (
      <Layout title="Cargando... | PublicAdis">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-12"></div>
            <div className="h-64 bg-gray-200 rounded mb-8"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={`${post.title} | PublicAdis Blog`} description={post.excerpt}>
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <header className="max-w-4xl mx-auto text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-500">{post.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <p className="text-xl text-gray-600 mb-8">{post.excerpt}</p>
            <div className="flex items-center justify-center gap-4">
              <div className="relative h-12 w-12 rounded-full overflow-hidden">
                <Image src={post.authorImage} alt={post.author} fill className="object-cover" />
              </div>
              <div className="text-left">
                <p className="font-medium">{post.author}</p>
                <p className="text-gray-500">{post.date}</p>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative h-[400px] md:h-[600px] max-w-6xl mx-auto mb-12 rounded-lg overflow-hidden">
            <Image src={post.image} alt={post.title} fill className="object-cover" priority />
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Author Bio */}
          <div className="max-w-4xl mx-auto mt-16 p-8 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-6">
              <div className="relative h-24 w-24 rounded-full overflow-hidden flex-shrink-0">
                <Image src={post.authorImage} alt={post.author} fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{post.author}</h3>
                <p className="text-gray-600 mb-4">
                  Co-founder de PublicAdis. Dominio de nuevas tecnologias, publicidad digital y estrategias de crecimiento. Ayudando a empresas a
                  alcanzar su máximo potencial en el mundo digital.
                </p>
                <div className="flex gap-4">
                  <a
                    href={post.authorSocial.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Twitter
                  </a>
                  <a
                    href={post.authorSocial.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="max-w-6xl mx-auto mt-16">
              <h2 className="text-3xl font-bold mb-8">Artículos Relacionados</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map(relatedPost => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="block group"
                  >
                    <article className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="relative h-48">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <span className="text-sm text-blue-600">{relatedPost.category}</span>
                        <h3 className="text-xl font-semibold mt-2 group-hover:text-blue-600 transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 mt-2 line-clamp-2">{relatedPost.excerpt}</p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </Layout>
  );
}
