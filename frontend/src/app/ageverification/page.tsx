// app/ageverification/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { HiOutlineX } from "react-icons/hi"; // Íconos para el menú
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
    <div className="fixed inset-0 bg-background flex justify-center items-center text-white z-50">
      {/* Humos*/}
      <div className="absolute lg:top-14 top-4 left-0 justify-between">
        <div>
          <Image
            src={HumoEdadIzquierda}
            alt="HumoEdadIzquierda"
            width={90}
            height={160}
            className="lg:w-[181px] lg:h-[320px]"
          />
        </div>
      </div>
      <div className="absolute lg:bottom-16 bottom-6 right-0 justify-between">
        <div>
          {" "}
          <Image
            src={HumoEdadDerecha}
            alt="HumoEdadDerecha"
            width={90}
            height={160}
            className="lg:w-[181px] lg:h-[320px]"
          />
        </div>
      </div>
      {/* Circulos */}
      <div className="absolute bottom-0 left-0 justify-between">
        <div>
          <Image
            src={Ellipse}
            alt="HumoEdadIzquierda"
            width={205}
            height={205}
            className="lg:w-[419px] lg:h-[419px]"
          />
        </div>
      </div>
      <div className="absolute top-0 right-0 justify-between">
        <div>
          {" "}
          <Image
            src={EllipseDerecha}
            alt="HumoEdadDerecha"
            width={205}
            height={205}
            className="lg:w-[419px] lg:h-[419px]"
          />
        </div>
      </div>

      <div className="lg:w-[400px] lg:h-[190px] w-[310px] h-[230px] px-5 lg:pt-5 lg:pb-[30px] bg-[#e05bff]/20 rounded-[15px] border-2 border-[#e05bff] lg:flex-row lg:justify-start lg:items-start lg:gap-5 lg:inline-flex flex flex-col justify-center items-center relative">
        <Image src={Logo} alt="Logo" width={49} height={35} />
        <button onClick={() => handleAgeVerification(false)}>
          <HiOutlineX
            size={24}
            className=" lg:hidden block absolute top-2 right-2"
          />
        </button>
        <div className=" lg:h-[140px] lg:justify-start lg:items-start lg:gap-2.5 lg:flex relative items-center justify-center text-center lg:text-start">
          <div className=" flex-col lg:justify-start lg:items-start lg:gap-[15px] lg:inline-flex justify-center items-center text-center flex space-y-4 lg:space-y-0">
            <div className=" h-[85px] flex-col lg:justify-start lg:items-start gap-[5px] flex text-center lg:text-start ">
              <div className=" text-[#f6f7f8] text-lg font-semibold leading-[30px] flex text-center items-center justify-center lg:text-start ">
                ¿Eres mayor de 18 años?
              </div>
              <div className="text-white text-lg font-normal leading-[25px] flex text-center items-center justify-center lg:text-start ">
                Debes ser mayor de 18 años para ver este contenido.
              </div>
            </div>
            <div className="lg:justify-start lg:items-start gap-[5px] lg:inline-flex space-x-4 lg:space-x-0 ">
              <button
                onClick={() => handleAgeVerification(false)}
                className="px-[15px] py-[5px] bg-white rounded-[100px] flex-col justify-start items-center gap-[12.50px] inline-flex"
              >
                <div className="lg:justify-start items-center gap-[12.50px] inline-flex">
                  <div className="text-center text-[#362151] text-[15px] font-medium leading-[30px]">
                    Salir
                  </div>
                </div>
              </button>
              <button
                onClick={() => handleAgeVerification(true)}
                className="px-[15px] py-[5px] bg-gradient-to-b from-[#e05bff] to-[#863799] rounded-[100px] flex-col justify-start items-center gap-[12.50px] inline-flex"
              >
                <div className="lg:justify-start items-center gap-[12.50px] inline-flex">
                  <div className="text-center text-white text-[15px] font-medium leading-[30px]">
                    Soy mayor de 18
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="w-[30px] h-[30px] relative" />
          <button
            onClick={() => handleAgeVerification(false)}
            className="absolute ml-60 lg:block hidden"
          >
            <HiOutlineX size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgeVerification;
