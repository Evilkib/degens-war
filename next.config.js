/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@coinbase/onchainkit"],
  async headers() {
    return [
      {
        source: "/.well-known/farcaster.json",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Content-Type", value: "application/json" },
        ],
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;