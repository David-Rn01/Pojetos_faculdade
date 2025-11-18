import type { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  // --- ADICIONE ESTA PARTE ---
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co', // Domínio do erro atual
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com', // Domínio que você usou antes
        port: '',
        pathname: '/**',
      },
    ],
  },
  // --------------------------
};

export default nextConfig;