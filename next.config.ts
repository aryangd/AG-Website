import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/AG-Website" : "",
  assetPrefix: isProd ? "/AG-Website/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
