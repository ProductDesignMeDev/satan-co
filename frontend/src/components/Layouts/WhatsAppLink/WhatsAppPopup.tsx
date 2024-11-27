
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
        <div
          className="sm:w-[400px] sm:h-[333px] w-[310px] h-[230px] bg-[#45205D] rounded-2xl border-2 border-borderpink p-6 text-center text-white"
        >
          <h2 className="text-[18px] md:text-[22px] font-poppins">¿Salir de Satan&Co?</h2>
          <p className="mt-4 font-poppins text-[15px] sm:text-[16px]">
            El enlace te llevará a la siguiente página web:
          </p>
          <input
            type="text"
            value={whatsappUrl}
            readOnly
            className="mt-4 w-full px-2 py-1 rounded-lg border-2 bg-[#45205D]"
          />
          <div className="mt-6 flex justify-between">
            <button
              onClick={onClose}
              className="px-4 py-2  bg-[#45205D] text-white border-2 border-white rounded-3xl"
            >
              Volver
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-300 text-black rounded-3xl"
            >
              Visitar página
            </a>
          </div>
        </div>
      </div>
    );
}