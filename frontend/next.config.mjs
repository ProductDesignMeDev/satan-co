/** @type {import('next').NextConfig} */
const nextConfig = {
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // Reemplaza con tu dominio
        port: "",
        pathname: "/**",
      },
    ],
  },
};


export default nextConfig;
