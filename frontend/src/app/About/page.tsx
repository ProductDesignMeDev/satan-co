import { Wrapper } from "@/components";
import { AboutSection } from "@/components/Cards/AboutCard/AboutSection"

export default function About() {
  return (
    <Wrapper>
      <div className="flex flex-col items-center justify-center space-y-6 mt-12">
        <div className="flex items-center justify-center">
          <h2 className="text-[40px] font-freckle text-center text-primary4">
            ¿Quién es Satan&Co?
          </h2>
        </div>
        <div className="w-[888px] h-[337px] bg-[#e05bff]/15 rounded-3xl flex items-center justify-center">
          <div className="w-[812px] h-[254px] rounded-lg p-8 flex items-center">
            <div className="text-white font-poppins text-[21px] leading-relaxed">
              <p className="mb-4">
                Somos un equipo de familia y amigos cuya pasión por el Cannabis nos
                llevó a iniciar este proyecto con el afán de acercar a los
                cultivadores variedades de primerísimo nivel a un precio accesible,
                socializar la información sobre prácticas y productos para el
                cultivo profesional.
              </p>
              <p>
                Contamos con una amplia trayectoria comprobable en la producción de
                semillas a gran escala, cultivos a gran escala con experiencias
                nacionales e internacionales.
              </p>
            </div>
          </div>
        </div>

      </div>
      <AboutSection />
    </Wrapper>
  );
}