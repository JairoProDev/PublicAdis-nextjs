/**
 * Ruta genérica Publicadis — /p/{slug}
 * Los sitios estáticos se sirven vía rewrites en next.config.js (ej. villachaco).
 * Fase 2: renderer dinámico desde publicadis_sites en Supabase.
 */
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const STATIC_SLUGS = new Set(['villachaco']);

export default function PublicadisBusinessPage() {
  const router = useRouter();
  const slug = typeof router.query.slug === 'string' ? router.query.slug : '';

  if (!slug || STATIC_SLUGS.has(slug)) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{slug} | Publicadis</title>
        <meta name="robots" content="noindex" />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-6 text-center">
        <p className="text-sm uppercase tracking-widest text-slate-500 mb-2">Publicadis</p>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Sitio en preparación</h1>
        <p className="text-slate-600 max-w-md mb-8">
          El sitio profesional de <strong>{slug}</strong> se publicará pronto en esta URL.
        </p>
        <Link
          href={`https://buscadis.com/p/${slug}`}
          className="text-orange-600 font-semibold hover:underline"
        >
          Ver perfil en Buscadis →
        </Link>
      </main>
    </>
  );
}
