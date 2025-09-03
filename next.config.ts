import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Only use export and basePath for production builds
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    basePath: '/rum-ai-site',
    assetPrefix: '/rum-ai-site',
    trailingSlash: true,
  }),
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js image optimization
  },
};

export default nextConfig;
