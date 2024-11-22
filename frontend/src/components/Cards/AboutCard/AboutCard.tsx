import Image, { StaticImageData } from "next/image";

interface AboutCardProps {
  imageUrl: StaticImageData | string;
  title: string;
  name: string;
}

export default function AboutCard({ imageUrl, title, name }: AboutCardProps) {
  return (
    <div className="w-[156px] h-[211px] rounded-2xl flex flex-col items-center p-4 space-y-2 md:w-[375px] md:h-[456px]">
      <div className="rounded-2xl border-2 border-borderpink md:w-full md:h-[360px] overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          width={156}
          height={160}
          className="rounded-2xl object-cover md:w-full md:h-[360px]"
        />
      </div>
      <div className="text-center">
        <h3 className="text-[13px] font-poppins text-white md:text-lg md:text-[20px]">
          {title}
        </h3>
        <p className="text-[10px] font-poppins text-white md:text-base md:text-[13px]">
          {name}
        </p>
      </div>
    </div>
  );
}