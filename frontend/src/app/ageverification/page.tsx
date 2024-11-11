// app/ageverification/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { HiOutlineX } from "react-icons/hi"; // Íconos para el menú
import { Logo, HumoEdadIzquierda, HumoEdadDerecha, Ellipse, EllipseDerecha } from "@/public";

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
      <div className="absolute top-14 left-0 justify-between">
        <div>
          <Image
            src={HumoEdadIzquierda}
            alt="HumoEdadIzquierda"
            width={181}
            height={320}
          />
        </div>
      </div>
      <div className="absolute bottom-16 right-0 justify-between">
        <div>
          {" "}
          <Image
            src={HumoEdadDerecha}
            alt="HumoEdadDerecha"
            width={181}
            height={320}
          />
        </div>
      </div>
         {/* Circulos */}
         <div className="absolute bottom-0 left-0 justify-between">
        <div>
          <Image
            src={Ellipse}
            alt="HumoEdadIzquierda"
            width={419}
            height={419}
          />
        </div>
      </div>
      <div className="absolute top-0 right-0 justify-between">
        <div>
          {" "}
          <Image
            src={EllipseDerecha}
            alt="HumoEdadDerecha"
            width={419}
            height={419}
          />
        </div>
      </div>

      <div className="w-[400px] h-[190px] px-5 pt-5 pb-[30px] bg-[#e05bff]/20 rounded-[15px] border-2 border-[#e05bff] justify-start items-start gap-5 inline-flex">
        <Image
          src={Logo}
          alt="Logo"
          width={49}
          height={35}
          className="w-[49.05px] h-[35px] rounded-[0.05px]"
        />

        <div className="grow shrink basis-0 h-[140px] justify-start items-start gap-2.5 flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-[15px] inline-flex">
            <div className="self-stretch h-[85px] flex-col justify-start items-start gap-[5px] flex">
              <div className="self-stretch text-[#f6f7f8] text-lg font-semibold leading-[30px]">
                ¿Eres mayor de 18 años?
              </div>
              <div className="self-stretch text-white text-lg font-normal leading-[25px]">
                Debes ser mayor de 18 años para ver este contenido.
              </div>
            </div>
            <div className="justify-start items-start gap-[5px] inline-flex">
              <button
                onClick={() => handleAgeVerification(false)}
                className="px-[15px] py-[5px] bg-white rounded-[100px] flex-col justify-start items-center gap-[12.50px] inline-flex"
              >
                <div className="justify-start items-center gap-[12.50px] inline-flex">
                  <div className="text-center text-[#362151] text-[15px] font-medium leading-[30px]">
                    Salir
                  </div>
                </div>
              </button>
              <button
                onClick={() => handleAgeVerification(true)}
                className="px-[15px] py-[5px] bg-gradient-to-b from-[#e05bff] to-[#863799] rounded-[100px] flex-col justify-start items-center gap-[12.50px] inline-flex"
              >
                <div className="justify-start items-center gap-[12.50px] inline-flex">
                  <div className="text-center text-white text-[15px] font-medium leading-[30px]">
                    Soy mayor de 18
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="w-[30px] h-[30px] relative" />
          <HiOutlineX size={24} className="absolute ml-64" />
        </div>
      </div>
    </div>
  );
};

export default AgeVerification;
