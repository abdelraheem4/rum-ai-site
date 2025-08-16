import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js image optimization
  },
  basePath: '/rum-ai-site', // Your actual repo name
  assetPrefix: '/rum-ai-site',
  trailingSlash: true, // Recommended for GitHub Pages
};

export default nextConfig;
