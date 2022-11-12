/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: process.env.NEXT_PUBLIC_URL,
    MONGODB_URL: process.env.NEXT_PUBLIC_MONGODB_URL,
    ACCESS_TOKEN_SECRET: process.env.NEXT_PUBLIC_ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET: process.env.NEXT_PUBLIC_REFRESH_TOKEN_SECRET,
  },
};

module.exports = nextConfig;
