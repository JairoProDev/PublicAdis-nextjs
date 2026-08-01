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
    const host = (value) => [{ type: 'host', value }];
    return {
      beforeFiles: [
        // --- Subdominios *.adis.lat (canónico mientras publicadis.com esté caído) ---
        // Villa Chaco
        { source: '/', has: host('villachaco.adis.lat'), destination: '/villachaco/index.html' },
        { source: '/robots.txt', has: host('villachaco.adis.lat'), destination: '/villachaco/robots.txt' },
        { source: '/sitemap.xml', has: host('villachaco.adis.lat'), destination: '/villachaco/sitemap.xml' },
        { source: '/images/:path*', has: host('villachaco.adis.lat'), destination: '/villachaco/images/:path*' },
        { source: '/:path*', has: host('villachaco.adis.lat'), destination: '/villachaco/:path*' },

        // Cristalimag
        { source: '/', has: host('cristalimag.adis.lat'), destination: '/cristalimag/index.html' },
        { source: '/robots.txt', has: host('cristalimag.adis.lat'), destination: '/cristalimag/robots.txt' },
        { source: '/sitemap.xml', has: host('cristalimag.adis.lat'), destination: '/cristalimag/sitemap.xml' },
        { source: '/images/:path*', has: host('cristalimag.adis.lat'), destination: '/cristalimag/images/:path*' },
        { source: '/:path*', has: host('cristalimag.adis.lat'), destination: '/cristalimag/:path*' },

        // Quival (página Next en Publicadis)
        { source: '/', has: host('quival.adis.lat'), destination: '/quival' },
        { source: '/:path*', has: host('quival.adis.lat'), destination: '/:path*' },

        // Agrilsur (app Vercel)
        { source: '/', has: host('agrilsur.adis.lat'), destination: `${agrilsurOrigin}/p/agrilsur` },
        { source: '/:path*', has: host('agrilsur.adis.lat'), destination: `${agrilsurOrigin}/:path*` },

        // --- Rutas por path (fallback) ---
        { source: '/p/villachaco', destination: '/villachaco/index.html' },
        { source: '/p/villachaco/', destination: '/villachaco/index.html' },
        { source: '/villachaco', destination: '/villachaco/index.html' },
        { source: '/villachaco/', destination: '/villachaco/index.html' },
        { source: '/cristalimag', destination: '/cristalimag/index.html' },
        { source: '/cristalimag/', destination: '/cristalimag/index.html' },
        { source: '/p/cristalimag', destination: '/cristalimag/index.html' },
        { source: '/p/cristalimag/', destination: '/cristalimag/index.html' },
        { source: '/p/agrilsur', destination: `${agrilsurOrigin}/p/agrilsur` },
        { source: '/p/agrilsur/', destination: `${agrilsurOrigin}/p/agrilsur/` },
        { source: '/p/agrilsur/:path*', destination: `${agrilsurOrigin}/p/agrilsur/:path*` },
      ],
    };
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
