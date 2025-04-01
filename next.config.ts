import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export', // Ensures static export for GitHub Pages
  images: {
    unoptimized: true, // GitHub Pages does not support Next.js image optimization
  },
  basePath: '/nilesharnaiya.github.io', // Required for GitHub Pages
  assetPrefix: '/nilesharnaiya.github.io',// Ensures assets load correctly
}

export default nextConfig
