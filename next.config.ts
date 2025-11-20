import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'a-static.mlcdn.com.br', // Um dos domínios da Magalu
      },
      // --- ADICIONE ESTE NOVO AQUI ---
      {
        protocol: 'https',
        hostname: 'm.magazineluiza.com.br', // O domínio que deu erro agora
        port: '',
        pathname: '/**',
      },
      // -------------------------------
      {
        protocol: 'https',
        hostname: 'i.zst.com.br',
      },
      {
        protocol: 'https',
        hostname: 'images-americanas.b2w.io',
      }
    ],
  },
};

export default nextConfig;