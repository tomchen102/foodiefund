/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: {
      compilationMode: "annotation",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*storage.googleapis.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: ["/news", "/news/:id", "/faq"],
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate, proxy-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
