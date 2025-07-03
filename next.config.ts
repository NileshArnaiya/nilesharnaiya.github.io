import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/nilesharnaiya.github.io',
  assetPrefix: '/nilesharnaiya.github.io/',
}

export default nextConfig
