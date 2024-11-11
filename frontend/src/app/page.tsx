import { HomeCard, Wrapper } from "@/components";
import Image from "next/image";
import { Banner } from "@/public";
export default function Home() {
  return (
    <Wrapper >
        <h1 className="text-3xl text-white">Home</h1>
        <div className="bg-white border border-black w-full h-40"></div>
        <div className="bg-white border border-black w-full h-40"></div>
        <div className="bg-white border border-black w-full h-40"></div>
    </Wrapper>
  );
}
