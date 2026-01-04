import { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Habilita o modo estrito do React
  reactStrictMode: true,

  // Configuração do ESLint - Ignora erros durante o build
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Suporte a formatos de imagem
  images: {
    formats: ["image/webp"], // Adiciona suporte ao formato WebP
  },

  // Configurações experimentais do Turbopack
  experimental: {
    turbo: {},
  },

  // Transpila pacotes específicos
  transpilePackages: ["footer"],

  // Configura saída standalone
  output: "standalone",
};

export default nextConfig;



