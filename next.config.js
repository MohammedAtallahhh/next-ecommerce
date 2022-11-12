/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: "http://localhost:3000",
    MONGODB_URL:
      "mongodb+srv://oglu:123@cluster0.fbcbjk7.mongodb.net/next-shop?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;
