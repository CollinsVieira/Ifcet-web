import { Aside } from "../components/aside";
import { Cursos } from "../components/cursos";
import { HeroSlider } from "../components/hero-slider";

export function CursosPage() {
  return (
    <div className="w-full">
      {/* Slider */}
      <HeroSlider />
      {/* Slider */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_4fr_1fr] min-h-screen max-w-full overflow-x-hidden gap-4">
        <aside className="col-span-1 hidden lg:block">
          <Aside />
        </aside>
        <main className="col-span-1 lg:col-span-1 w-full overflow-hidden">
          <section className="bg-white md:py-8 px-4">
            <div className="container mx-auto max-w-full">
              <div className="bg-[#101fd2] p-4 rounded-lg w-fit mx-auto md:mx-0 mt-4">
                <h1 className="text-lg md:text-3xl font-bold text-white text-center">
                  Cursos disponibles del mes
                </h1>
              </div>
              <div className="mt-4">
                <p className="hidden md:block text-gray-500 md:pb-4">
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
    </div>
  );
}
