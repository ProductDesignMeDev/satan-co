// app/not-found.tsx
import Link from "next/link";
import Image from "next/image";
import { Error404, FlechaIzquierda } from "@/public";

export default function NotFound() {
  return (
    <main className="flex flex-row justify-between h-screen lg:ml-24 lg:mr-24 ">
      <div className="flex flex-col text-white lg:mt-[190px]">
        <div className="text-[43.32px] font-semibold lg:mb-8">Oops!</div>
        <div className="text-[43.32px] font-normal lg:mb-8">
          Página no encontrada
        </div>
        <div className="text-xl font-normal lg:mb-11">
  <span>Esta página no existe o fue eliminada. Te</span> <br />
  <span>sugerimos que vuelvas al inicio.</span>
</div>
        <Link href="/">
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
      <div className="lg:mt-[278.53px]">
        <Image src={Error404} alt="404" width={585} height={273} />
      </div>
    </main>
  );
}
