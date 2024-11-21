import Image, { StaticImageData } from "next/image";

interface PremioCardProps {
  title: string;
  position: string;
  seedName: string;
  growerInfo: string;
  imageUrl: StaticImageData | string;
}

export default function PrizeCard({
  title,
  position,
  seedName,
  growerInfo,
  imageUrl,
}: PremioCardProps) {
  return (
    <div className="w-full max-w-[275px] h-[335px] bg-[#e05bff]/15 border-2 border-textColor2 rounded-2xl p-4 flex flex-col items-center text-white">
      <Image
        src={imageUrl}
        alt={title}
        width={120}
        height={120}
        className="w-[120px] h-[120px] object-contain"
      />
      <h3 className="mt-4 font-poppins text-[18px] sm:text-[20px] lg:text-[20px] text-center">
        {title}
      </h3>
      <p className="text-[12px] sm:text-[13px] lg:text-[14px] font-poppins text-textColor2 text-center">
        {position}
      </p>
      <hr className="my-2 w-[90%] border-t border-textColor1" />
      <h4 className="text-[11px] sm:text-[12px] lg:text-[13px] font-poppins text-[#FFFFFF]/60">
        Semilla
      </h4>
      <span className="text-[16px] sm:text-[17px] lg:text-[18px] font-poppins text-[#FFFFFF]">
        {seedName}
      </span>
      <hr className="my-2 w-[90%] border-t border-textColor1" />
      <p className="text-[12px] sm:text-[13px] lg:text-[14px] font-poppins text-textColor2 text-center">
        {growerInfo}
      </p>
    </div>
  );
}