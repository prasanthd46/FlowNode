import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'img.clerk.com'
      },{
        protocol: 'https',
        hostname: 'ucarecdn.com'
      }
    ]
  }
};

export default nextConfig;
