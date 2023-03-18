/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    async redirects() {
      return [
        {
          source: "/contact",
          destination: "https://nomadcoders.co",
          permanent: false,
        },
      ];
    },
  },
};

module.exports = nextConfig;
