import { Aside } from "../components/aside";
import { AnimatedTestimonials } from "../components/ui/animated-testimonials";

const testimonials = [
  {
    quote:
      "El Auditor William Mendoza Tarrillo es un profesional de excelencia, con una amplia experiencia en el rubro y un enfoque en la excelencia académica.",
    name: "Mag. CPC. William Mendoza Tarrillo",
    designation: "Auditor Tributario",
    src: "https://www.ifcet.com.pe/wp-content/uploads/2025/07/Mag-CPC-William-Mendoza-Tarrillo-Tributario-Auditor-Fiscalizador-Peru.webp",
  },
  {
    quote:
      "El Auditor William Mendoza Tarrillo es un profesional de excelencia, con una amplia experiencia en el rubro y un enfoque en la excelencia académica.",
    name: "Mag. CPC. William Mendoza Tarrillo",
    designation: "Auditor Tributario",
    src: "https://www.ifcet.com.pe/wp-content/uploads/2025/07/Mag-CPC-William-Mendoza-Tarrillo-Tributario-Auditor-Fiscalizador-Peru.webp",
  },
  {
    quote:
      "El Auditor William Mendoza Tarrillo es un profesional de excelencia, con una amplia experiencia en el rubro y un enfoque en la excelencia académica.",
    name: "Mag. CPC. William Mendoza Tarrillo",
    designation: "Auditor Tributario",
    src: "https://www.ifcet.com.pe/wp-content/uploads/2025/07/Mag-CPC-William-Mendoza-Tarrillo-Tributario-Auditor-Fiscalizador-Peru.webp",
  },
  {
    quote:
      "El Auditor William Mendoza Tarrillo es un profesional de excelencia, con una amplia experiencia en el rubro y un enfoque en la excelencia académica.",
    name: "Mag. CPC. William Mendoza Tarrillo",
    designation: "Auditor Tributario",
    src: "https://www.ifcet.com.pe/wp-content/uploads/2025/07/Mag-CPC-William-Mendoza-Tarrillo-Tributario-Auditor-Fiscalizador-Peru.webp",
  },
  {
    quote:
      "El Auditor William Mendoza Tarrillo es un profesional de excelencia, con una amplia experiencia en el rubro y un enfoque en la excelencia académica.",
    name: "Mag. CPC. William Mendoza Tarrillo",
    designation: "Auditor Tributario",
    src: "https://www.ifcet.com.pe/wp-content/uploads/2025/07/Mag-CPC-William-Mendoza-Tarrillo-Tributario-Auditor-Fiscalizador-Peru.webp",
  },
];
export function Docentes() {
  return (
    // <div className="relative w-full pt-[110px] md:pt-[110px]"></div>
    <div className="relative w-full">
      <section className="grid grid-cols-1 lg:grid-cols-[1fr_4fr_1fr] grid-rows-1 min-h-screen">
        <div className="hidden lg:block">
          <Aside />
        </div>
        <main className="p-4 sm:p-6 lg:p-8 bg-[#f3f3f3] flex justify-center items-center flex-col">
          <div className="bg-[#101fd2] p-3 sm:p-4 rounded-lg w-fit mx-auto lg:mx-0 mt-2 sm:mt-4">
            <h1 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold text-white text-center lg:text-left">
              Conoce a nuestros docentes
            </h1>
          </div>
          <AnimatedTestimonials testimonials={testimonials} />
          <p className="text-gray-500 pt-4 max-w-3xl mx-auto text-pretty text-justify">
            En IFCET, contamos con <b>docentes</b> expertos en contabilidad y
            altamente calificados con experiencia sólida en contabilidad,
            tributación, auditoría y gestión empresarial. Estos especialistas,
            acreditados por la <b>SUNAT</b>, el MEF y universidades reconocidas,
            lideran cada curso con un enfoque técnico y actualizado. Además,
            aplican metodologías activas, <b>casos reales</b> y normativa
            vigente, lo que permite una formación práctica y alineada al entorno
            laboral actual. Durante las clases en vivo por Zoom, brindan
            orientación personalizada, resolviendo dudas y guiando tu avance
            profesional. Aprende con los mejores docentes contables del sistema
            peruano y fortalece tu carrera desde cualquier lugar del país.
          </p>
        </main>
        <div className="hidden lg:block">
          <Aside />
        </div>
      </section>
    </div>
  );
}
