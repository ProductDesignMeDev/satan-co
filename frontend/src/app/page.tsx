import { Wrapper } from "@/components";
import Image from "next/image";
import { Banner } from "@/public";
export default function Home() {
  return (
    <main>
      <div className="lg:h-[579px] w-full h-full">
        <Image src={Banner} alt="Banner" width={1366} height={579} />
      </div>
      <Wrapper>
        <div></div>
      </Wrapper>
    </main>
  );
}
