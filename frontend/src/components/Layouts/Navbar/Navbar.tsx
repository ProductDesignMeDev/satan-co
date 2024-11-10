"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Logo } from "@/public";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"; // Íconos para el menú
import Link from "next/link"; // Importar Link de Next.js

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Función para cerrar el menú
  const closeMenu = () => setIsOpen(false);

  return (
    <main className="bg-background text-white h-24">
      <div className="flex items-center justify-between h-full lg:ml-24 lg:mr-24 px-4 lg:px-0">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={Logo} alt="Logo" width={56} height={40} />
        </div>

        {/* Menú hamburguesa en móvil */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? (
              <HiOutlineX size={30} /> // Icono de cerrar
            ) : (
              <HiOutlineMenu size={30} /> // Icono de hamburguesa
            )}
          </button>
        </div>

        {/* Links de navegación en desktop */}
        <div className="hidden lg:flex flex-row space-x-12">
          <Link href="/" className="hover:text-gray-400">
            INICIO
          </Link>
          <Link href="/Catalog" className="hover:text-gray-400">
            CATÁLOGO
          </Link>
          <Link href="/Awards" className="hover:text-gray-400">
            PREMIOS
          </Link>
          <Link href="/About" className="hover:text-gray-400">
            QUIÉNES SOMOS
          </Link>
          <Link href="/Faq" className="hover:text-gray-400">
            FAQ&apos;S
          </Link>
        </div>
      </div>

      {/* Menú desplegable en móvil */}
      {isOpen && (
        <div className="lg:hidden absolute top-24 left-0 w-full bg-background text-white flex flex-col space-y-4 py-6 text-left z-50 mt-[-1px]">
          <div className="ml-8 h-screen text-[32px] font-medium font-['Poppins'] leading-[48px] flex flex-col space-y-4">
            <Link href="/" className="hover:text-gray-400" onClick={closeMenu}>
              Inicio
            </Link>
            <Link
              href="/Catalog"
              className="hover:text-gray-400"
              onClick={closeMenu}
            >
              Catálogo
            </Link>
            <Link
              href="/Awards"
              className="hover:text-gray-400"
              onClick={closeMenu}
            >
              Premios
            </Link>
            <Link
              href="/About"
              className="hover:text-gray-400"
              onClick={closeMenu}
            >
              Quiénes somos
            </Link>
            <Link
              href="/Faq"
              className="hover:text-gray-400"
              onClick={closeMenu}
            >
              FAQ&apos;S {/* Comillas escapadas */}
            </Link>
            <div className="">
              <p className="text-sm font-normal font-['Poppins'] leading-snug mt-9 mb-5">
                satanyco.genetics
              </p>
              <p className="text-[10.67px] font-normal font-['Poppins'] leading-none">
                © 2024 Satan&Co X Product Design Me
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
