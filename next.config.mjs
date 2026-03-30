/** @type {import('next').NextConfig} */
const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig = {
    reactStrictMode: true,
    ...(isStaticExport
        ? {
              output: "export",
              basePath: "/advisor-bi",
              images: { unoptimized: true },
              trailingSlash: true,
          }
        : {}),
};

export default nextConfig;
