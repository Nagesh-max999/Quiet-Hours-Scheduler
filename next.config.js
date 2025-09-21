const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {}, // keep as object
  },
  async rewrites() {
    return [
      {
        source: '/api/session',
        destination: '/auth/login',
      },
    ];
  },
  webpack: (config) => {
    // Make Webpack recognize "@/..." imports
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};

module.exports = nextConfig;
