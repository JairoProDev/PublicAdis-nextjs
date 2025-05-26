import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import Layout from '../../../src/components/Layout';
import { getGuideBySlug, getGuideFiles } from '../../../src/utils/guides';
import { guiasCategories } from '../../../src/data/guias';

const components = {
  Image: props => (
    <div className="relative w-full h-[400px] my-8">
      <Image {...props} fill className="object-cover rounded-lg" />
    </div>
  ),
  pre: props => <pre {...props} className="language-javascript my-8 rounded-lg" />,
  h2: props => <h2 {...props} className="text-2xl font-bold mt-8 mb-4" />,
  h3: props => <h3 {...props} className="text-xl font-semibold mt-6 mb-3" />,
  p: props => <p {...props} className="my-4 text-gray-700 leading-relaxed" />,
  ul: props => <ul {...props} className="list-disc list-inside my-4 space-y-2" />,
  ol: props => <ol {...props} className="list-decimal list-inside my-4 space-y-2" />,
};

export default function GuidePage({ guide }) {
  if (!guide) {
    return <div>Guía no encontrada</div>;
  }

  return (
    <Layout>
      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="relative h-[400px] mb-8">
          <Image
            src={guide.frontmatter.coverImage}
            alt={guide.frontmatter.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="flex items-center mb-6 space-x-4">
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
          <span className="text-sm text-gray-600">{guide.frontmatter.duration}</span>
          <span className="text-sm text-gray-600">Por {guide.frontmatter.author}</span>
          <span className="text-sm text-gray-600">
            Actualizado: {new Date(guide.frontmatter.updatedAt).toLocaleDateString()}
          </span>
        </div>

        <h1 className="text-4xl font-bold mb-4">{guide.frontmatter.title}</h1>
        <p className="text-xl text-gray-600 mb-8">{guide.frontmatter.description}</p>

        <div className="prose prose-lg max-w-none">
          <MDXRemote {...guide.content} components={components} />
        </div>

        {guide.frontmatter.resources && guide.frontmatter.resources.length > 0 && (
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Recursos Descargables</h3>
            <ul className="space-y-3">
              {guide.frontmatter.resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.file}
                    download
                    className="flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = [];

  for (const category of guiasCategories) {
    const files = getGuideFiles(category.id);
    const categoryPaths = files.map(file => ({
      params: {
        category: category.id,
        slug: file.replace(/\.mdx$/, ''),
      },
    }));
    paths.push(...categoryPaths);
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const guide = await getGuideBySlug(params.category, params.slug);

  if (!guide) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      guide,
    },
  };
}
