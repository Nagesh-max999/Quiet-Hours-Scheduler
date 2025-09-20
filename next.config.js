/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {}, // must be an object, not a boolean
  },
};

module.exports = nextConfig;
