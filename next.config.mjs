/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH

const nextConfig = {
  output: 'export',
  basePath,
  images: {
    unoptimized: false,
  },
};

export default nextConfig;