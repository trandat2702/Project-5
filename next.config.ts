import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */

  reactStrictMode: false,
  experimental: {
    serverComponentsExternalPackages: [],
  },
  // Thêm retry cho RSC
  async rewrites() {
    return [];
  },
  // Tăng timeout
  httpAgentOptions: {
    keepAlive: true,
  },
};

export default nextConfig;
