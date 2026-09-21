import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    contentDispositionType: "inline",
    qualities: [75, 95],
  },
};

export default nextConfig;
