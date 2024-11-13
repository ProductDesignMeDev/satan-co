import Image, { StaticImageData } from "next/image";

interface AboutCardProps {
  imageUrl: StaticImageData | string;
  title: string;
  name: string;
}

export const AboutCard = ({ imageUrl, title, name }: AboutCardProps) => {
  return (
    <div className="w-[375px] h-[456px] rounded-2xl flex flex-col items-center p-4 space-y-4">
      <Image src={imageUrl} alt={name} width={375} height={360} className="rounded-t-2xl object-cover" />
      <div className="text-center">
        <h3 className="text-lg font-poppins text-[20px] text-white">{title}</h3>
        <p className="text-base font-poppins text-white text-[13px]">{name}</p>
      </div>
    </div>
  );
};