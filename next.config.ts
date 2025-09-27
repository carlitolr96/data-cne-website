import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export', // activa exportación estática
  images: {
    unoptimized: true, // para que Azure no falle con la optimización de imágenes
  },
};

export default nextConfig;
