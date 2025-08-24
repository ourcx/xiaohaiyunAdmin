import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['s2.loli.net'],
    // 如果需要更多域名，可以这样添加：
    // domains: ['s2.loli.net', 'example.com', 'another-domain.com'],
  },
};

export default nextConfig;
