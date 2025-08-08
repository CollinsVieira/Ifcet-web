import { Aside } from "../components/aside";
import { AnimatedTestimonials } from "../components/ui/animated-testimonials";
import { Link } from "react-router-dom";

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
      "Egresado de la Universidad Nacional Pedro Ruiz Gallo, con Maestría en Tributación por la UNT. Especializado en Costos y Presupuestos, Precios de Transferencia, NIIF, Agronegocios de Exportación, Power BI, Google Data Studio y Gestión de Proyectos BPM, en reconocidas instituciones como Universidad ESAN, Universidad Nacional de Ingeniería, etc.",
    name: "Mag. CPC Isrrael Chaquila Carrasco",
    designation: "Auditor Tributario",
    src: "https://www.ifcet.com.pe/wp-content/uploads/2025/08/Mag-CPC-isrrael-chaquila-carrasco-Experto-Costos-Presupuestos-Gestion-Financiera-Internacional-Peru.webp",
  }
  ,
  {
    quote:
      "Con más de 11 años de experiencia en el ámbito tributario y contable, ha liderado funciones clave dentro de SUNAT Lambayeque. Actualmente, se desempeña como Auditora en la Intendencia de Principales Contribuyentes Nacionales",
    name: "Mag. CPC Fiorela Prada Montalvan",
    designation: "Contadora Pública Colegiada",
    src: "https://www.ifcet.com.pe/wp-content/uploads/2025/07/Mag-CPC-Fiorela-Prada-Montalvan-Auditor-Tributario-Peru-1024x976.webp",
  }
];
export function Docentes() {
  return (
    // <div className="relative w-full pt-[110px] md:pt-[110px]"></div>
    <div className="w-full">
      {/* Hero superior (por encima de los Aside) */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="grid md:grid-cols-2 items-center gap-6 md:gap-10">
            {/* Texto */}
            <div className="flex flex-col gap-4 md:gap-6">
              <h1 className="text-[clamp(1.6rem,4.5vw,3rem)] font-bold leading-tight">
                Aprende con docentes expertos del Perú
              </h1>
              <p className="text-white/80">
                Nuestro equipo está conformado por especialistas en contabilidad,
                tributación, finanzas y auditoría. Clases con casos reales, enfoque
                práctico y acompañamiento personalizado.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  to="/cursos"
                  className="px-5 py-2.5 rounded-lg text-sm font-medium bg-[#ffb403] text-black hover:scale-[1.02] transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb403]"
                >
                  Ver cursos
                </Link>
                <a
                  href="/contacto#contacto"
                  className="px-5 py-2.5 rounded-lg text-sm font-medium bg-white/10 text-white border border-white/30 hover:bg-white/15 hover:scale-[1.02] transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Contáctanos
                </a>
              </div>
            </div>

            {/* Imagen/Placeholder */}
            <div className="relative h-[32vh] md:h-[46vh] flex items-center justify-center">
              <div className="h-full w-full flex items-center justify-center border border-dashed border-white/30 rounded-xl">
                {/* Insertar imágen aquí: Fotografía de docentes profesionales en ambiente académico, iluminación suave, espacio negativo lateral */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Layout con Aside a los lados y contenido al centro */}
      <section className="grid grid-cols-1 lg:grid-cols-[1fr_4fr_1fr] grid-rows-1 min-h-screen">
        <div className="hidden lg:block">
          <Aside />
        </div>
        <main className="p-4 sm:p-6 lg:p-8  text-white flex justify-center items-center flex-col w-full">
          <div className="bg-[#101fd2] p-3 sm:p-4 rounded-lg w-fit mx-auto lg:mx-0 mt-2 sm:mt-4">
            <h1 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold text-white text-center lg:text-left">
              Conoce a nuestros docentes
            </h1>
          </div>
          <AnimatedTestimonials testimonials={testimonials} />
          <p className="text-white/70 pt-4 max-w-3xl mx-auto text-pretty text-justify">
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
