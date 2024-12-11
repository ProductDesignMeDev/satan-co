import { AboutCard } from "@/components";
import { Funda , CoFun2  } from "@/public"

export default function AboutSection() {
  return (
    <div className="flex flex-col items-center space-y-1 mt-2 md:space-y-6 md:mt-32">
      <h2 className="text-[25px] font-freckle text-outline text-primary4 text-center md:text-[40px] leading-[0.9]">
        Conocé nuestro <span className="block sm:inline">equipo</span>
      </h2>
      <div className="flex flex-wrap justify-center  gap-1 md:flex-nowrap md:space-x-3">
        <AboutCard imageUrl={Funda} title="Fundador" name="Matias Arreyes" />
        <AboutCard imageUrl={CoFun2} title="Co-fundador" name="Emiliano Barrientos" />
      </div>
    </div>
  );
}