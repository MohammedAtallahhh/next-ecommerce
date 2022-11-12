/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: process.env.NEXT_PUBLIC_URL,
    MONGODB_URL: process.env.NEXT_PUBLIC_MONGODB_URL,
    ACCESS_TOKEN_SECRET: process.env.NEXT_PUBLIC_ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET: process.env.NEXT_PUBLIC_REFRESH_TOKEN_SECRET,
  },
  // env: {
  //   BASE_URL: "http://localhost:3000",
  //   MONGODB_URL:
  //     "mongodb+srv://oglu:123@cluster0.fbcbjk7.mongodb.net/next-shop?retryWrites=true&w=majority",
  //   ACCESS_TOKEN_SECRET: "C9gkaTwNkDtVs!gQEMXG28DR(WSfRUq4P@bGBJpNUb&TmET$#Q",
  //   REFRESH_TOKEN_SECRET:
  //     "fUMbD%YWF5xG#uI9cvX7hEA&*azL+ptPS8q^3Z!RHej(s2dgC)nT$mw@QyVJr6K4",
  // },
};

module.exports = nextConfig;
