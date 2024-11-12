import React from "react";

export default function HomePage() {
  return (
    <div>
      <div className="w-full lg:h-[579px] h-[255px] bg-slate-300 pt-24 text-center flex justify-center items-center">
        <p>Banner</p>
      </div>

      <div className="bg-background ml-4 mr-4 lg:ml-24 lg:mr-24">
        <h1 className=" text-[25px]  text-[#ff31ff] lg:text-[40px] font-normal font-freckle leading-[60px] text-outline text-center lg:mt-28 lg:mb-4 mt-6 mb-3">
          Las más elegidas
        </h1>
        <div className="bg-white border border-black w-full h-40"></div>
        <div className="bg-white border border-black w-full h-40"></div>
        <div className="bg-white border border-black w-full h-40"></div>
      </div>
    </div>
  );
}
