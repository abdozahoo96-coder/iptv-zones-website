/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  // Hide the dev overlay error popup for extension/MetaMask errors
  devIndicators: {
    buildActivity: false,
  },
};

module.exports = nextConfig;
