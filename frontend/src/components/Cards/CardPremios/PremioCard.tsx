import Image, { StaticImageData } from "next/image";

interface PremioCardProps {
  title: string;
  position: string;
  seedName: string;
  growerInfo: string;
  imageUrl: StaticImageData | string;
}

export const PremioCard = ({ title, position, seedName, growerInfo, imageUrl }: PremioCardProps) => {
  return (
    <div className="w-[275px] h-[380px] bg-[#e05bff]/20  rounded-lg p-4 flex flex-col items-center text-white">
      <Image src={imageUrl} alt={title} width={181} height={77} />
      <h3 className="mt-2 font-poppins text-[19.07px]">{title}</h3>
      <p className="text-[11.74px] font-poppins text-textColor2">{position}</p>
      <hr className="my-2 w-full border-t border-textColor1" />
      <h4 className="text-[11px] font-poppins text-[#FFFFFF]">Semilla</h4>
      <span className="text-[16.14px] font-poppins text-[#FFFFFF]">{seedName}</span>
      <hr className="my-2 w-full border-t border-textColor1" />
      <p className="text-[11.74] font-poppins text-textColor2">{growerInfo}</p>
    </div>
  );
};
