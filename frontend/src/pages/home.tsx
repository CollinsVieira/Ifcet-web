import { Cursos } from "../components/cursos";
import { HeroSlider } from "../components/hero-slider";
import { Aside } from "../components/aside";

export function Home() {
  return (
    <>
      {/* Slider */}
      <HeroSlider />
      {/* Slider */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_6fr_1fr] grid-rows-1 min-h-screen">
        <aside className="col-span-1 hidden lg:block">
          <Aside />
        </aside>
        <main className="col-span-1">
          <section className="bg-white py-8 px-4 lg:mx-4">
            <div className="container mx-auto">
              <div className="bg-[#101fd2] p-4 rounded-lg w-fit mx-auto md:mx-0">
                <h1 className="text-lg  md:text-3xl font-bold text-white text-center">
                  Cursos disponibles del mes
                </h1>
              </div>
              <div className="mt-4">
                <p className="hidden md:block">
                  Explora nuestros cursos a través de nuestras áreas de
                  formación de Tributación, Contabilidad, Finanzas, Laboral,
                  Auditoría y Gubernamental.
                </p>
              </div>
            </div>
            <Cursos />
          </section>
        </main>
        <aside className="col-span-1 hidden lg:block">
          <Aside />
        </aside>
      </div>
    </>
  );
}
