import { Swiper, SwiperSlide } from "swiper/react";
import "./swipermodules.css";
import { FreeMode, Pagination } from "swiper/modules";
import { Card } from "./card";

export function Cursos() {
  const cursos = [
    {
      img: "https://www.ifcet.com.pe/wp-content/uploads/2024/11/ECE.jpg",
      title: "Curso Especializado en Contabilidad Minera",
      duration: "10 horas",
      docente: "Juan Perez",
      Inicio: "10 de Julio",
      Horario: "10:00 a.m. - 12:00 p.m.",
      lessons: 6,
      students: 15,
      hours: "10 horas",
      enlace: "https://wa.link/1eucxp"
    },
    {
      img: "https://www.ifcet.com.pe/wp-content/uploads/2024/12/CCNIFF.jpg",
      title: "Curso Especializado de Contabilidad Financiera",
      duration: "120 horas",
      docente: "CPC. María González",
      Inicio: "15 de Julio",
      Horario: "6:00 p.m. - 8:00 p.m.",
      lessons: 8,
      students: 22,
      hours: "120 horas",
    },
    {
      img: "https://www.ifcet.com.pe/wp-content/uploads/2024/11/ECE.jpg",
      title: "Excel Avanzado para Contadores",
      duration: "8 horas",
      docente: "Ing. Carlos Mendoza",
      Inicio: "20 de Julio",
      Horario: "2:00 p.m. - 4:00 p.m.",
      lessons: 4,
      students: 18,
      hours: "8 horas",
    },
    {
      img: "https://www.ifcet.com.pe/wp-content/uploads/2024/12/CCNIFF.jpg",
      title: "Auditoría Empresarial",
      duration: "160 horas",
      docente: "CPC. Ana Torres",
      Inicio: "25 de Julio",
      Horario: "7:00 p.m. - 9:00 p.m.",
      lessons: 12,
      students: 25,
      hours: "160 horas",
    },
    {
      img: "https://www.ifcet.com.pe/wp-content/uploads/2024/11/ECE.jpg",
      title: "Tributación Actualizada",
      duration: "60 horas",
      docente: "CPC. Roberto Silva",
      Inicio: "30 de Julio",
      Horario: "5:00 p.m. - 7:00 p.m.",
      lessons: 10,
      students: 20,
      hours: "60 horas",
    },
    {
      img: "https://www.ifcet.com.pe/wp-content/uploads/2024/12/CCNIFF.jpg",
      title: "Análisis de Costos",
      duration: "100 horas",
      docente: "CPC. Jessica Bravo",
      Inicio: "5 de Agosto",
      Horario: "6:30 p.m. - 8:30 p.m.",
      lessons: 7,
      students: 16,
      hours: "100 horas",
    },
  ];

  return (
    <section className="bg-white md:py-8 overflow-x-hidden">
      <div className="container mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          freeMode={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3.2,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[FreeMode, Pagination]}
          className="courses-swiper"
        >
          {cursos.map((curso, index) => (
            <SwiperSlide key={index} className="pb-8">
              <Card
                img={curso.img}
                title={curso.title}
                docente={curso.docente}
                Inicio={curso.Inicio}
                lessons={curso.lessons}
                students={curso.students}
                hours={curso.hours}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
