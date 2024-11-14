import React from "react";

interface TestimonyCardProps {
  image: string;
  name: string;
  testimonial: string;
}

export default function TestimonyCard({ image, name, testimonial }: TestimonyCardProps) {
  return (
    <div className="w-[328px] h-[260px] lg:w-[276px] lg:h-[276px] bg-[#e05bff]/20 rounded-[20px] border-2 border-[#e05bff] text-white font-poppins">
      <div className="flex flex-row justify-between items-center ml-11 mr-11 mt-7 mb-5
      lg:ml-4 lg:mr-4 lg:mt-5 lg:mb-5">
        <div className="w-[76.76px] h-[76.76px] rounded-full border border-[#e05bff] flex justify-center items-center">
          <p>{image}</p>
        </div>
        <div className="w-[130px] text-white text-xl font-medium leading-[30px]">
          <p>{name}</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[242.03px] h-[0px] border border-[#ff31ff] mb-3"></div>
      </div>
      <div className="w-[242px] text-white text-sm font-normal leading-[21px] lg:ml-4 lg:mr-4 ml-11 mr-11">
        <p>{testimonial}</p>
      </div>
    </div>
  );
}

