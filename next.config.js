const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {}, // keep as object, not boolean
  },
  images: {
    domains: ['images.unsplash.com'], // keep your allowed domains
  },
  webpack: (config) => {
    // Make Webpack recognize "@/..." imports
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};

module.exports = nextConfig;

