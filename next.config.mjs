/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "github.blog",
      "images.unsplash.com",
      "api.microlink.io",
      "i.pinimg.com",
    ],
  },
  // Disable symlinks to fix Windows build permission issues
  output: 'standalone',
  experimental: {
    // Disable symlinks during build process
    outputFileTracingRoot: process.cwd(),
    outputFileTracingExcludes: {
      '*': [
        'node_modules/**/*',
      ],
    },
  },
};

export default nextConfig;
