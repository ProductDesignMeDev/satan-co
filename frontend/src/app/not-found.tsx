// app/not-found.tsx
import Link from "next/link";
import Image from "next/image";
import { Error404, FlechaIzquierda } from "@/public";

export default function NotFound() {
  return (
    <main className="flex lg:flex-row lg:justify-between lg:items-start lg:text-start flex-col items-center text-center lg:h-screen h-full lg:ml-24 lg:mr-24 lg:mt-1 mt-24 ml-10 mr-10 mb-[-100px] lg:mb-0 font-poppins">
      <div className="flex flex-col text-white lg:mt-[190px]">
        <div className="lg:hidden flex justify-center">
          <Image src={Error404} alt="404" width={263} height={109} />
        </div>
        <div className="lg:text-[43.32px] text-2xl font-semibold lg:mb-8 mt-8 lg:mt-0">Oops!</div>
        <div className="lg:text-[43.32px] text-2xl font-normal lg:mb-8 mt-4 lg:mt-0">
          Página no encontrada
        </div>
        <div className="lg:text-xl text-xs font-normal lg:mb-11 mt-5 lg:mt-0">
          <span>Esta página no existe o fue eliminada.</span> <br />
          <span>Te sugerimos que vuelvas al inicio.</span>
        </div>
        <Link href="/Home" className="flex items-center justify-center lg:items-start lg:justify-start mt-12 lg:mt-0 mb-28 lg:mb-0">
          <div className="w-[180px] h-12 bg-white rounded-[20px] flex items-center justify-center text-center">
            <div className="text-[#2a1540] text-sm font-normal flex flex-row items-center justify-center text-center space-x-2">
              <div>
                <Image src={FlechaIzquierda} alt="404" width={24} height={24} />
              </div>
              <div>Regresar al inicio</div>
            </div>
          </div>
        </Link>
      </div>
      <div className="lg:mt-[278.53px] lg:block hidden">
        <Image src={Error404} alt="404" width={585} height={273} />
      </div>
    </main>
  );
}
