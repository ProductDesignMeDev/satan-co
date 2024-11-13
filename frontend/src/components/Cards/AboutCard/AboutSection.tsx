import { AboutCard } from "./AboutCard";
import { Fundador, CoFundador, CoFundador2 } from "@/public";

export const AboutSection = () => {
  return (
    <div className="flex flex-col items-center space-y-6 mt-32">
      <h2 className="text-[40px] font-freckle text-primary4 text-center">
        Conocé nuestro equipo
      </h2>
      <div className="flex space-x-6 justify-center">
        <AboutCard imageUrl={Fundador} title="Fundador" name="Matias Arreyes" />
        <AboutCard imageUrl={CoFundador} title="Co-fundador" name="Ramiro Gopar" />
        <AboutCard imageUrl={CoFundador2} title="Co-fundador" name="Emiliano Barrientos" />
      </div>
    </div>
  );
};