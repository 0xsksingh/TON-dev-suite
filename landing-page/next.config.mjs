/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@web3-name-sdk/core", "@web3-name-sdk/register"],
  images: {
    domains: ["images.unsplash.com"],
  },
  typescript: {
    ignoreBuildErrors : true
  },
  eslint: {
    ignoreDuringBuilds : true
  }
}

export default nextConfig
