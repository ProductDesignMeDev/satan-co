"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Logo,
  IconInstagram,
  HumoFooterDerecha,
  HumoFooterIzquierda,
} from "@/public";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"; // Íconos para el menú
import Link from "next/link"; // Importar Link de Next.js
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Estado para saber si la página se ha desplazado

  const toggleMenu = () => setIsOpen(!isOpen);
  const pathname = usePathname(); // Usar usePathname() en lugar de useRouter()
  const isActive = (path: string) => pathname === path; // Verificar el pathname

  // Función para cerrar el menú
  const closeMenu = () => setIsOpen(false);

  // Manejar el evento de scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main
      className={`${
        isScrolled
          ? "lg:bg-opacity-60 lg:backdrop-blur-md bg-background"
          : "bg-background"
      } text-white lg:h-24 h-16 fixed w-full transition-all duration-300`}
    >
      <div className="flex items-center justify-between h-full lg:ml-24 lg:mr-24 px-4 lg:px-0">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="hover:text-gray-400" onClick={closeMenu}>
            <Image
              src={Logo}
              alt="Logo"
              width={56}
              height={40}
              className="lg:h-[70px] lg:w-[98px]"
            />
          </Link>
        </div>

        {/* Menú hamburguesa en móvil */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? (
              <HiOutlineX size={24} /> // Icono de cerrar
            ) : (
              <HiOutlineMenu size={24} /> // Icono de hamburguesa
            )}
          </button>
        </div>

        {/* Links de navegación en desktop */}
        <div className="hidden lg:flex flex-row space-x-5">
          <Link
            href="/"
            className={`hover:text-gray-400 pt-2 pb-2 pl-4 pr-4 ${
              isActive("/")
                ? " rounded-[28.02px] border-2 border-[#e05bff]"
                : ""
            } `}
          >
            INICIO
          </Link>
          <Link
            href="/Catalog"
            className={`hover:text-gray-400 pt-2 pb-2 pl-4 pr-4 ${
              isActive("/Catalog")
                ? " rounded-[28.02px] border-2 border-[#e05bff]"
                : ""
            } `}
          >
            CATÁLOGO
          </Link>
          <Link
            href="/Awards"
            className={`hover:text-gray-400 pt-2 pb-2 pl-4 pr-4 ${
              isActive("/Awards")
                ? " rounded-[28.02px] border-2 border-[#e05bff]"
                : ""
            } `}
          >
            PREMIOS
          </Link>
          <Link
            href="/About"
            className={`hover:text-gray-400 pt-2 pb-2 pl-4 pr-4 ${
              isActive("/About")
                ? " rounded-[28.02px] border-2 border-[#e05bff]"
                : ""
            } `}
          >
            QUIÉNES SOMOS
          </Link>
          <Link
            href="/Faq"
            className={`hover:text-gray-400 pt-2 pb-2 pl-4 pr-4 ${
              isActive("/Faq")
                ? " rounded-[28px] border-2 border-[#e05bff]"
                : ""
            } `}
          >
            FAQ&apos;S
          </Link>
        </div>
      </div>

      {/* Menú desplegable en móvil */}
      {isOpen && (
        <div className="lg:hidden absolute lg:top-24 top-[63px] left-0 w-full bg-backgroundgradiant text-white flex flex-col space-y-4 py-6 text-left mt-[-1px]">
          <div className="ml-8 h-screen z-50 text-[32px] font-medium leading-10 flex flex-col space-y-4 pt-16">
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
              <div className="flex flex-row items-center mt-9 mb-5">
                <Image
                  src={IconInstagram}
                  alt="NubeFooterDerecha"
                  width={0}
                  height={0}
                  className="mr-2 mt-1"
                />
                <p className="text-sm font-normal leading-snug ">
                  satanyco.genetics
                </p>
              </div>
              <p className="text-[10.67px] font-normal leading-none">
                © 2024 Satan&Co X Product Design Me
              </p>
            </div>
          </div>

          {/* Imagen fija en el fondo del menú */}
          <div className="flex flex-row justify-between ">
            <div>
              <Image
                src={HumoFooterIzquierda}
                alt="NubeFooterDerecha"
                width={200}
                height={152}
                className="absolute bottom-[-3px] left-[-13px] z-10 mb-32"
              />
            </div>
            <div>
              <Image
                src={HumoFooterDerecha}
                alt="NubeFooterDerecha"
                width={200}
                height={152}
                className="absolute bottom-[-3px] right-0 z-10 mb-32"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
