import { HomeCard, Wrapper } from "@/components";
import Image from "next/image";
import { Banner } from "@/public";
export default function Home() {
  return (
    <main className="lg:pt-24 pt-16">
      <div className="lg:h-[579px] w-full h-full">
        <Image src={Banner} alt="Banner" width={1366} height={579} />
      </div>
      <Wrapper>
        <div className="flex pt-44">
          <HomeCard />
        </div>
      </Wrapper>
    </main>
  );
}
