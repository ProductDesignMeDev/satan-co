/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com', // Reemplaza con tu dominio
          port: '', // Deja vacío si no hay un puerto específico
          pathname: '/**', // Permite todas las rutas dentro de este dominio
        },
      ],
    },
  };
  
  module.exports = nextConfig;