/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/about",
        headers: [
          {
            key: "x-custom-header",
            value: "my custom header value",
          },
          {
            key: "x-another-custom-header",
            value: "my other custom header value",
          },
        ],
      },
    ];
  },
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
  compress: false,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  trailingSlash: true,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig
