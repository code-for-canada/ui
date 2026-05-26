import type { NextConfig } from "next";
import path from "node:path";

const isProd = process.env.NODE_ENV === "production";

// Point the design system's <Link> at next/link (see lib/router-link.ts).
const routerLinkShim = path.resolve(process.cwd(), "lib/router-link.ts");

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/ui" : "",
  assetPrefix: isProd ? "/ui/" : "",
  transpilePackages: ["@code-for-canada/ui"],
  images: {
    unoptimized: true,
  },
  turbopack: {
    resolveAlias: {
      "@code-for-canada/ui/router-link": "./lib/router-link.ts",
    },
  },
  webpack: (config) => {
    config.resolve.alias["@code-for-canada/ui/router-link$"] = routerLinkShim;
    return config;
  },
};

export default nextConfig;
