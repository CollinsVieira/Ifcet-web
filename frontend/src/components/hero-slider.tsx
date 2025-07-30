import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import './swipermodules.css';

export function HeroSlider() {
    const slides = [
        {
            title: "Formación Profesional de Excelencia",
            subtitle: "Desarrolla las habilidades que necesitas para el futuro",
            description: "En IFCET te preparamos para los desafíos del mundo laboral con programas actualizados y docentes expertos.",
            image: "../assets/RV.jpg"
        },
        {
            title: "Cursos Especializados",
            subtitle: "Aprende de los mejores profesionales",
            description: "Nuestros cursos están diseñados para brindarte conocimientos prácticos y teóricos de alta calidad.",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=800&fit=crop"
        },
        {
            title: "Infraestructura Moderna",
            subtitle: "Ambientes de aprendizaje óptimos",
            description: "Contamos con laboratorios equipados y tecnología de vanguardia para tu formación profesional.",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop"
        },
        {
            title: "Certificaciones Reconocidas",
            subtitle: "Títulos con validez oficial",
            description: "Al finalizar nuestros programas obtienes certificaciones reconocidas por instituciones educativas.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop"
        },
        {
            title: "Bolsa de Trabajo",
            subtitle: "Conectamos talento con oportunidades",
            description: "Nuestros egresados tienen acceso a nuestra red de empresas asociadas y oportunidades laborales.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop"
        }
    ];

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        // Si la imagen falla, usar una imagen de respaldo
        const target = e.target as HTMLImageElement;
        target.src = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop";
    };

    return (
        <div className="h-screen w-full">
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
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="relative">
                        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
                        <img 
                            src={slide.image} 
                            alt={slide.title}
                            className="absolute inset-0 w-full h-full object-cover"
                            onError={handleImageError}
                        />
                        <div className="relative z-20 flex flex-col justify-center items-center h-full text-white text-center px-8">
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                                {slide.title}
                            </h1>
                            <p className="text-xl md:text-2xl font-semibold mb-4 max-w-2xl">
                                {slide.subtitle}
                            </p>
                            <p className="text-lg md:text-xl max-w-3xl leading-relaxed">
                                {slide.description}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
} 