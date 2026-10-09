import type { NextConfig } from "next";
import { readServerEnv } from "./src/schemas/env.schema";

// Fail fast: refuse to start (or deploy) with invalid server configuration.
readServerEnv(process.env);

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
