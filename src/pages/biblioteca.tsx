import { useMemo, useState } from "react";
import libros from "../data/libros.json";

type Libro = {
  nombre?: string;
  categoria?: string;
  imagen: string;
  url: string; // url de Google Drive
};

export function Biblioteca() {
  const data = (libros as Libro[]) ?? [];

  const categorias = useMemo(() => {
    const set = new Set<string>(["Todas"]);
    data.forEach((l) => l.categoria && set.add(l.categoria));
    return Array.from(set);
  }, [data]);

  const [busqueda, setBusqueda] = useState<string>("");
  const [categoria, setCategoria] = useState<string>("Todas");

  const filtrados = useMemo(() => {
    const term = busqueda.trim().toLowerCase();
    return data.filter((l) => {
      const coincideCategoria = categoria === "Todas" || l.categoria === categoria;
      const coincideTexto = term
        ? (l.nombre ?? "").toLowerCase().includes(term) || (l.categoria ?? "").toLowerCase().includes(term)
        : true;
      return coincideCategoria && coincideTexto;
    });
  }, [data, busqueda, categoria]);

  return (
    <section className="min-h-[70vh] w-full bg-gradient-to-b from-slate-900 via-slate-900 to-black text-white">
      <div className="container mx-auto px-6 md:px-8 2xl:px-60 py-10 md:py-16">
        <div className="mb-6 md:mb-8">
          <h1 className="text-[clamp(1.8rem,4.5vw,3rem)] font-bold leading-tight">
            Biblioteca
          </h1>
          <p className="text-white/90 mt-2">
            Descarga materiales y libros de apoyo. Los archivos se descargan desde Google Drive.
          </p>
        </div>

        {/* Controles */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar por nombre o categoría..."
              className="w-full px-4 py-2.5 rounded-lg bg-white text-black placeholder:text-black/60 focus:outline-none focus:ring-2 focus:ring-[#ffb403]"
            />
          </div>
          <div>
            <select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#ffb403]"
            >
              {categorias.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Resultados */}
        {filtrados.length === 0 ? (
          <div className="text-white/80">No se encontraron resultados.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtrados.map((libro, index) => (
              <article
                key={`${libro.url}-${index}`}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col"
              >
                <div className="aspect-[4/3] w-full bg-white/5 flex items-center justify-center">
                  {libro.imagen ? (
                    <img
                      src={libro.imagen}
                      alt={libro.nombre ? `Portada: ${libro.nombre}` : "Portada del libro de la biblioteca"}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center border border-dashed border-white/20">
                      {/* Insertar imagen aquí: Portada simple con título del libro, colores neutros */}
                    </div>
                  )}
                </div>
                <div className="p-4 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    {libro.nombre && (
                      <h3 className="font-semibold truncate" title={libro.nombre}>
                        {libro.nombre}
                      </h3>
                    )}
                    <p className="text-xs text-white/70 truncate">
                      {libro.categoria || "Recurso descargable"}
                    </p>
                  </div>
                  <a
                    href={libro.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="px-4 py-2 rounded-lg text-sm font-medium bg-[#ffb403] text-black hover:scale-[1.02] transition-transform"
                  >
                    Descargar
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
