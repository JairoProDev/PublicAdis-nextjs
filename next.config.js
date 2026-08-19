/** @type {import('next').NextConfig} */
const publicadisOrigin = (process.env.NEXT_PUBLIC_PUBLICADIS_URL || 'https://publicadis.com').replace(/\/$/, '');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    domains: [
      'randomuser.me',
      'images.unsplash.com',
      'placehold.co',
      'ui-avatars.com',
      'localhost',
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    const agrilsurOrigin = (process.env.AGRILSUR_APP_URL || 'https://agrilsur.vercel.app').replace(/\/$/, '');
    const villaChacoOrigin = (process.env.VILLACHACO_APP_URL || '').replace(/\/$/, '');
    const host = (value) => [{ type: 'host', value }];

    /** @type {import('next/dist/lib/load-custom-routes').Rewrite[]} */
    const beforeFiles = [
      // --- Subdominios *.adis.lat ---
      // Villa Chaco: Next app cuando VILLACHACO_APP_URL está set; si no, HTML estático (rollback).
      ...(villaChacoOrigin
        ? [
            { source: '/', has: host('villachaco.adis.lat'), destination: `${villaChacoOrigin}/` },
            { source: '/:path*', has: host('villachaco.adis.lat'), destination: `${villaChacoOrigin}/:path*` },
          ]
        : [{ source: '/', has: host('villachaco.adis.lat'), destination: '/villachaco/index.html' }]),
      { source: '/', has: host('cristalimag.adis.lat'), destination: '/cristalimag/index.html' },
      // OG/share y assets sin el prefijo /cristalimag/ en el subdominio
      { source: '/images/:path*', has: host('cristalimag.adis.lat'), destination: '/cristalimag/images/:path*' },
      { source: '/robots.txt', has: host('cristalimag.adis.lat'), destination: '/cristalimag/robots.txt' },
      { source: '/sitemap.xml', has: host('cristalimag.adis.lat'), destination: '/cristalimag/sitemap.xml' },
      { source: '/', has: host('lacasadetay.adis.lat'), destination: '/la-casa-de-tay/index.html' },
      { source: '/images/:path*', has: host('lacasadetay.adis.lat'), destination: '/la-casa-de-tay/images/:path*' },
      { source: '/robots.txt', has: host('lacasadetay.adis.lat'), destination: '/la-casa-de-tay/robots.txt' },
      { source: '/sitemap.xml', has: host('lacasadetay.adis.lat'), destination: '/la-casa-de-tay/sitemap.xml' },
      { source: '/favicon.svg', has: host('lacasadetay.adis.lat'), destination: '/la-casa-de-tay/favicon.svg' },
      { source: '/', has: host('quival.adis.lat'), destination: '/quival' },
      { source: '/', has: host('agrilsur.adis.lat'), destination: `${agrilsurOrigin}/p/agrilsur` },
      { source: '/:path*', has: host('agrilsur.adis.lat'), destination: `${agrilsurOrigin}/:path*` },

      // --- Rutas por path ---
      // Legacy path sigue sirviendo el estático (rollback / preview sin cutover de host).
      { source: '/p/villachaco', destination: '/villachaco/index.html' },
      { source: '/p/villachaco/', destination: '/villachaco/index.html' },
      { source: '/villachaco', destination: '/villachaco/index.html' },
      { source: '/villachaco/', destination: '/villachaco/index.html' },
      { source: '/cristalimag', destination: '/cristalimag/index.html' },
      { source: '/cristalimag/', destination: '/cristalimag/index.html' },
      { source: '/p/cristalimag', destination: '/cristalimag/index.html' },
      { source: '/p/cristalimag/', destination: '/cristalimag/index.html' },
      { source: '/la-casa-de-tay', destination: '/la-casa-de-tay/index.html' },
      { source: '/la-casa-de-tay/', destination: '/la-casa-de-tay/index.html' },
      { source: '/p/la-casa-de-tay', destination: '/la-casa-de-tay/index.html' },
      { source: '/p/la-casa-de-tay/', destination: '/la-casa-de-tay/index.html' },
      { source: '/p/agrilsur', destination: `${agrilsurOrigin}/p/agrilsur` },
      { source: '/p/agrilsur/', destination: `${agrilsurOrigin}/p/agrilsur/` },
      { source: '/p/agrilsur/:path*', destination: `${agrilsurOrigin}/p/agrilsur/:path*` },
    ];

    return { beforeFiles };
  },
  async redirects() {
    return [
      {
        source: '/p/quival',
        destination: '/quival',
        permanent: false,
      },
    ];
  },
  publicRuntimeConfig: {
    defaultImages: {
      logo: '/placeholder-logo.png',
      logoWhite: '/placeholder-logo-white.png',
      hero: ['/placeholder-hero-1.jpg', '/placeholder-hero-2.jpg', '/placeholder-hero-3.jpg'],
    },
    publicadisOrigin,
  },
};

module.exports = nextConfig;
