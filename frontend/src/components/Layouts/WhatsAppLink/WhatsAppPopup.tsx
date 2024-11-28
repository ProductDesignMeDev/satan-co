import Image from "next/image";
import { Logo } from "@/public";

interface WhatsAppPopupProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappUrl: string;
}

export default function WhatsAppPopup({
  isOpen,
  onClose,
  whatsappUrl,
}: WhatsAppPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[310px] h-[270px] sm:w-[400px] sm:h-[333px] bg-[#45205D] rounded-2xl border-2 border-borderpink p-4 sm:p-6 text-center text-white flex flex-col items-center justify-between">
        <Image
          src={Logo}
          alt="Logo Satan&Co"
          className="w-[44px] h-[39px] sm:w-[65px] sm:h-[65px] mb-3 sm:mb-4"
        />
        <h2 className="text-[16px] sm:text-[22px] font-poppins font-bold">
          ¿Salir de Satan&Co?
        </h2>
        <p className="mt-2 text-[12px] sm:text-[16px] font-poppins leading-tight">
          El enlace te llevará a la siguiente página web:
        </p>
        <input
          type="text"
          value={whatsappUrl}
          readOnly
          className="mt-3 w-full px-2 sm:px-3 py-1 sm:py-2 text-center rounded-lg border border-gray-400 bg-[#4E2A6D] text-white text-[11px] sm:text-[14px] font-poppins"
        />
        <div className="mt-4 sm:mt-5 w-full flex items-center justify-center gap-2 sm:gap-3">
          <button
            onClick={onClose}
            className="w-[80px] h-[35px] sm:w-[100px] sm:h-[40px] bg-[#45205D] text-white border border-white rounded-3xl text-[10px] sm:text-[15px]  font-poppins"
          >
            Volver
          </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[110px] h-[35px] sm:w-[135px] sm:h-[40px] bg-white text-black rounded-3xl text-[10px] sm:text-[15px]  font-poppins flex items-center justify-center"
            >
              Visitar página
            </a>
          </div>
      </div>
    </div>
  );
}