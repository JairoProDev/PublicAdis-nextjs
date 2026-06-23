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
    return {
      beforeFiles: [
        { source: '/p/villachaco', destination: '/villachaco/index.html' },
        { source: '/p/villachaco/', destination: '/villachaco/index.html' },
        { source: '/villachaco', destination: '/villachaco/index.html' },
        { source: '/villachaco/', destination: '/villachaco/index.html' },
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
