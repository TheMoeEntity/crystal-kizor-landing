import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    include: ["tests/**/*.test.ts"],
    restoreMocks: true,
    unstubGlobals: true,
  },
  resolve: {
    // Resolve the "@/..." imports from tsconfig.json.
    tsconfigPaths: true,
    // Next.js-only modules have no meaning outside the Next runtime. Swap them
    // for no-op stubs so server code can be unit tested in plain Node.
    alias: {
      "server-only": new URL("./tests/stubs/server-only.ts", import.meta.url).pathname,
      "next/cache": new URL("./tests/stubs/next-cache.ts", import.meta.url).pathname,
    },
  },
});
