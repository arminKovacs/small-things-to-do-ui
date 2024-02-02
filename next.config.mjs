/** @type {import('next').NextConfig} */
const basePath = process.env.BASE_PATH

const nextConfig = {
  output: 'export',
  basePath,
  images: {
    unoptimized: false,
  },
};

export default nextConfig;