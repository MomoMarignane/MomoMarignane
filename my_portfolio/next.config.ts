import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  // Configuration pour les connexions externes
  serverExternalPackages: [],
  // Optimisation des images
  images: {
    unoptimized: true
  },
  // Désactiver ESLint pendant le build de production si nécessaire
  eslint: {
    // Warning: This allows production builds to successfully complete even if your project has ESLint errors.
    ignoreDuringBuilds: process.env.NODE_ENV === 'production',
  },
  // Configuration du serveur
  ...(process.env.NODE_ENV === 'production' && {
    assetPrefix: process.env.ASSET_PREFIX || '',
  }),
};

export default nextConfig;
