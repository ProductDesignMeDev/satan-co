
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Logo,
  HumoEdadIzquierda,
  HumoEdadDerecha,
  Ellipse,
  EllipseDerecha,
} from "@/public";

const AgeVerification = () => {
  const router = useRouter();

  // Verificar si ya se ha validado la edad
  useEffect(() => {
    const ageVerified = localStorage.getItem("ageVerified");
    if (ageVerified === "true") {
      router.push("/Home"); // Redirigir a Home si ya se verificó la edad
    }
  }, [router]);

  const handleAgeVerification = (isAdult: boolean) => {
    localStorage.setItem("ageVerified", JSON.stringify(isAdult));
    if (isAdult) {
      router.push("/Home");
    } else {
      window.location.href = "https://www.google.com"; // Si no es mayor de 18, redirige a Google
    }
  };

  return (
    <>
    <head >
        <title>Verificación de Edad | Acceso Restringido para Mayores de Edad</title>
        <meta name="description" content="Acceso restringido para mayores de edad. Verifica tu edad para ingresar y explorar contenido sobre cannabis de forma segura y responsable." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
    
    <div className="fixed inset-0 bg-background flex justify-center items-center text-white z-50 font-poppins">
      <div className="">
      {/* Humos*/}
      <div className="absolute lg:top-14 top-4 left-0 justify-between">
        <div>
          <Image
            src={HumoEdadIzquierda}
            alt="HumoEdadIzquierda"
            className="lg:w-[181px] lg:h-[320px] w-[90px] h-[160px]"
          />
        </div>
      </div>
      <div className="absolute lg:bottom-16 bottom-6 right-0 justify-between">
        <div>
          {" "}
          <Image
            src={HumoEdadDerecha}
            alt="HumoEdadDerecha"
            className="lg:w-[181px] lg:h-[320px] w-[90px] h-[160px]"
          />
        </div>
      </div>
      {/* Circulos */}
      <div className="absolute bottom-0 left-0 justify-between">
        <div>
          <Image
            src={Ellipse}
            alt="HumoEdadIzquierda"
            className="lg:w-[419px] lg:h-[419px] w-[205px] h-[205px]"
          />
        </div>
      </div>
      <div className="absolute top-0 right-0 justify-between">
        <div>
          {" "}
          <Image
            src={EllipseDerecha}
            alt="HumoEdadDerecha"
            className="lg:w-[419px] lg:h-[419px] w-[205px] h-[205px]"
          />
        </div>
      </div>

      <div className="w-[310px] lg:w-[400px] h-[280px] lg:h-[258px] px-5 py-5 bg-[#e05bff]/20 rounded-[15px] border-2 border-[#e05bff] flex flex-col items-center justify-center text-center relative space-y-2]">
        <Image src={Logo} alt="Logo" className="w-20 h-16" />

        <div className="flex flex-col items-center space-y-4">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-[#f6f7f8] text-lg font-semibold leading-[30px]">
            ¿Eres mayor de edad?
            </div>
            <div className="text-white text-lg font-normal leading-[25px]">
              Para acceder, confirma que tienes<br className="hidden lg:block" /> más de 18 años.
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={() => handleAgeVerification(false)}
              className="w-24 h-10 px-[15px] py-[5px] border border-white rounded-full text-white text-[15px] font-medium leading-[30px]"
            >
              No
            </button>
            <button
              onClick={() => handleAgeVerification(true)}
              className="w-24 h-10 px-[15px] py-[5px] bg-white rounded-full text-[#362151] text-[15px] font-medium leading-[30px]"
            >
              Si
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default AgeVerification;
