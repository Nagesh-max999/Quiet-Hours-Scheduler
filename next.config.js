/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
<<<<<<< HEAD
    serverActions: {}, // must be an object, not a boolean
  },
};

module.exports = nextConfig;
=======
    serverActions: true,
  },
  images: {
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig
>>>>>>> b88f03c (Initial commit of Quiet Hours Scheduler project)
