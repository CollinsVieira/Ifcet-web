import { useEffect, useRef, useState } from "react";

export function Aside() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFixed, setIsFixed] = useState(false);
  const [fixedLeft, setFixedLeft] = useState(0);
  const [fixedWidth, setFixedWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Offset equivalente a top-20 (5rem => 80px)
  const stickyOffsetPx = 80;

  useEffect(() => {
    const updateMetrics = () => {
      const element = containerRef.current;
      if (!element) return;
      const rect = element.getBoundingClientRect();
      setFixedLeft(rect.left);
      setFixedWidth(rect.width);
    };

    const onScroll = () => {
      const element = containerRef.current;
      if (!element) return;
      const initialTop = element.dataset.initialTop
        ? Number(element.dataset.initialTop)
        : (() => {
            const top = element.getBoundingClientRect().top + window.scrollY;
            element.dataset.initialTop = String(top);
            return top;
          })();
      const shouldFix = window.scrollY >= initialTop - stickyOffsetPx;
      setIsFixed(shouldFix);
    };

    // Inicializar medidas y listeners
    updateMetrics();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateMetrics);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateMetrics);
    };
  }, []);

  const handleMoreInfo = () => {
    // Aquí puedes agregar la lógica para redirigir a la página de seminarios
    window.open(
      "https://www.ifcet.com.pe/seminarios-peritaje-contable",
      "_blank"
    );
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside className="hidden lg:block z-10">
      <div
        ref={containerRef}
        className={`${isFixed ? "fixed top-20" : "relative"} h-screen mt-20`}
        style={isFixed ? { left: fixedLeft, width: fixedWidth } : undefined}
      >
        <div className="px-4">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            {/* Header de la publicidad */}
            <div className="bg-gradient-to-r from-[#101fd2] to-[#ffbb01] px-4 py-3">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-bold text-sm">PUBLICIDAD</h3>
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                  </div>
                  <button
                    onClick={handleClose}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Contenido del gif */}
            <div className="p-4">
              <div className="relative group">
                <img
                  src="https://www.ifcet.com.pe/wp-content/uploads/2025/01/CIE-HORIZONTAL.jpg"
                  alt="Seminarios de Peritaje Contable"
                  className="w-full h-auto rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300"
                />

                {/* Overlay con información */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 mx-4">
                      <p className="text-gray-800 font-semibold text-sm">
                        Seminarios de Peritaje Contable
                      </p>
                      <p className="text-gray-600 text-xs">IFCET Perú</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Información adicional */}
              <div className="mt-4 text-center">
                <h4 className="font-bold text-gray-900 text-lg mb-2">
                  Seminarios de Peritaje Contable
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  Especialízate en peritaje contable con nuestros seminarios
                  profesionales
                </p>

                {/* Botón CTA */}
                <button
                  onClick={handleMoreInfo}
                  className="w-full bg-[#101fd2] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#0a1a9e] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  Más Información
                </button>

                {/* Badge de descuento */}
                <div className="mt-3 inline-block bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  ¡20% DESCUENTO!
                </div>
              </div>
            </div>

            {/* Footer de la publicidad */}
            <div className="bg-gray-50 px-4 py-2 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                Publicidad • IFCET Perú
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
