/* eslint-disable @next/next/no-page-custom-font */
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { usePathname } from "next/navigation"; // Importar usePathname
import "./globals.css";
import { Footer, Navbar, WhatsAppLink } from "@/components";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const router = useRouter();
  const pathname = usePathname(); // Obtener la ruta actual

  useEffect(() => {
    const ageVerified = localStorage.getItem("ageVerified");
    if (ageVerified !== "true" && pathname !== "/ageverification") {
      router.push("/ageverification");
    }
  }, [router, pathname]);

  return (
    <html lang="en">
      <head>
        
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Freckle+Face&family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
        
        {process.env.NODE_ENV === 'production' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function (c, s, q, u, a, r, e) {
                    c.hj = c.hj || function() { (c.hj.q = c.hj.q || []).push(arguments) };
                    c._hjSettings = { hjid: 5209883, hjsv: 6 }; // Usando tu ID de Hotjar
                    r = s.getElementsByTagName('head')[0];
                    e = s.createElement('script');
                    e.async = true;
                    e.src = q + c._hjSettings.hjid + u;
                    r.appendChild(e);
                })(window, document, 'https://static.hj.contentsquare.net/c/csq-', '.js', 5209883);
              `,
            }}
          />
        )}
      </head>
      <body className="flex flex-col min-h-screen ">
        <Navbar />
        <main className="flex-1" >{children}</main>
        <Footer />
        <WhatsAppLink 
          phoneNumber="+5492235837103" 
          message="¡Hola! Me gustaría obtener más información."
        />
      </body>
    </html>
  );
}