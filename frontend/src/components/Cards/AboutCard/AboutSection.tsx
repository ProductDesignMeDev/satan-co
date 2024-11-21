import { AboutCard } from "@/components";
import { Funda, CoFun, CoFun2 } from "@/public"

export default function AboutSection() {
  return (
    <div className="flex flex-col items-center space-y-4 mt-8 md:space-y-6 md:mt-32">
      <h2 className="text-[20px] font-freckle text-primary4 text-center md:text-[40px]">
        Conocé nuestro equipo
      </h2>
      <div className="flex flex-wrap justify-center gap-4 md:flex-nowrap md:space-x-6">
        <AboutCard imageUrl={Funda} title="Fundador" name="Matias Arreyes" />
        <AboutCard imageUrl={CoFun} title="Co-fundador" name="Ramiro Gopar" />
        <AboutCard imageUrl={CoFun2} title="Co-fundador" name="Emiliano Barrientos" />
      </div>
    </div>
  );
}