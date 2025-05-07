import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./app/*"]
    }
  }
};

export default nextConfig;
