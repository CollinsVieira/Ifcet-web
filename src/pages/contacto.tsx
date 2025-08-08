import { ContactForm } from "../components/contact";

export function ContactoPage() {
  return (
    <section id="contacto" className="min-h-[70vh] w-full">
      <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-black text-white">
        <div className="container mx-auto px-6 md:px-8 2xl:px-60 py-10 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex flex-col gap-6 justify-center">
              <h1 className="text-[clamp(1.8rem,4.5vw,3rem)] font-bold leading-tight">
                Contáctanos
              </h1>
              <p className="text-white/90">
                ¿Tienes preguntas sobre nuestros cursos o certificaciones? Déjanos tus
                datos y nuestro equipo te ayudará a elegir el programa ideal para ti.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/90">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h3 className="font-semibold">Teléfonos</h3>
                  <p className="text-sm mt-2">+51 950 268 312</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h3 className="font-semibold">Correos</h3>
                  <p className="text-sm mt-2">administracion@ifcet.com.pe</p>
                  <p className="text-sm">informes@ifcet.com.pe</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:col-span-2">
                  <h3 className="font-semibold">Ubicación</h3>
                  <p className="text-sm mt-2">Calle las Rosas #110, Chiclayo, Perú</p>
                  <p className="text-sm mt-2"><b>Referencia:</b> Atrás del colegio María Reyna</p>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>

          <div className="mt-12">
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <iframe
                title="Mapa de ubicación IFCET"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d306.6193495707982!2d-79.84853575670742!3d-6.78564527942149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2spe!4v1754672782502!5m2!1ses-419!2spe"
                width="100%"
                height="360"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


