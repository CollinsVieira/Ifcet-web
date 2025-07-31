import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "./swipermodules.css";
import personas from "../assets/4-personas.webp";
import personasMobile from "../assets/4-personas-mobile.webp";
import personapc from "../assets/personapc.webp";
import { Link } from "react-router-dom";

const destacados = [
  {
    title: "Peritaje Contable",
    link: "",
  },
  {
    title: "Contabilidad de Costos",
    link: "",
  },
  {
    title: "Contabilidad Comercial",
    link: "",
  },
  {
    title: "Presupuesto Público",
    link: "",
  },
];

export function HeroSlider() {
  return (
    <div className="h-[80vh] md:h-[65vh]  w-full">
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="h-full w-full"
        loop={true}
      >
        <SwiperSlide>
          <section className="bg-[#101fd2] h-full w-full">
            <div
              className="w-full h-full flex justify-center items-center flex-col text-white gap-y-4
             md:flex-row-reverse"
            >
              <img
                src={personapc}
                alt="chica con una computadora"
                className="object-cover order-2"
              />
              <div
                className="flex flex-col gap-y-4 md:text-left 
              md:w-[30%] md:p-10 md:bg-white/15 md:rounded-2xl md:border-1 md:border-white/30"
              >
                <h1 className="text-4xl font-bold md:order-2">
                  Expertos que transforman el conocimiento
                </h1>
                <p className="text-lg md:order-3">
                  Cursos especializados en finanzas y contabilidad
                </p>
                <a
                  href="#"
                  className="text-sm hidden md:block bg-[#ffb403] text-white px-4 py-2 rounded-lg order-4 w-fit"
                >
                  ¡Contactanos!
                </a>
              </div>
              <a
                href="#"
                className="text-sm bg-[#ffb403] text-white px-4 py-2 rounded-lg order-4 w-fit self-center md:hidden"
              >
                ¡Contactanos!
              </a>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="h-full w-full bg-[#101fd2] flex justify-center items-center relative">
            <div className="md:block hidden">
              <img
                src={personas}
                alt="4 docentes"
                className="w-full h-full object-fit absolute inset-0"
              />
            </div>
            <div className="md:hidden flex justify-center items-center flex-col gap-y-4 text-white">
              <h1 className="text-4xl font-bold">
                Conoce nuestros cursos destacados
              </h1>
              <p className="text-lg">Especializate con los mejores del Perú.</p>
              <img
                src={personasMobile}
                alt="2 docentes"
                className="w-full h-full object-contain pl-4"
              />
              <a
                href="#"
                className="text-sm bg-[#ffb403] text-white px-4 py-2 rounded-lg"
              >
                ¡Conoce más!
              </a>
            </div>
            <div className="md:flex flex-row gap-x-4 pb-10 items-end justify-between h-full relative z-10 px-10 w-full hidden">
              {destacados.map((destacado, index) => (
                <div
                  className="flex flex-col gap-y-2 flex-1 items-center"
                  key={index}
                >
                  <div className="w-fit flex flex-col bg-black/50 px-6 py-3 rounded-lg border-white border-1 text-center">
                    <h1 className="text-white text-pretty">
                      {destacado.title}
                    </h1>
                  </div>
                  <div className="w-full flex justify-center mt-2">
                    <Link
                      to={destacado.link}
                      className="bg-white text-black px-4 py-1 rounded-lg border-black text-sm"
                    >
                      Más información
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
