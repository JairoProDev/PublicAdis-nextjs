/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    domains: ['localhost'],
  },
  // Añadir imágenes de ejemplo para desarrollo (solo para pruebas)
  publicRuntimeConfig: {
    defaultImages: {
      logo: '/placeholder-logo.png',
      logoWhite: '/placeholder-logo-white.png',
      hero: ['/placeholder-hero-1.jpg', '/placeholder-hero-2.jpg', '/placeholder-hero-3.jpg'],
    },
  },
};

module.exports = nextConfig;
