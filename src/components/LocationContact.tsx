import SectionTransition from "./SectionTransition";
import ScrollReveal from "./ScrollReveal";

const ADDRESS = "San Martín 196, Of. 5, Cipolletti, Río Negro";
const MAP_QUERY = "San Martín 196, Cipolletti, Río Negro, Argentina";
const MAP_LAT: number | null = null;
const MAP_LNG: number | null = null;
const HAS_COORDS = MAP_LAT !== null && MAP_LNG !== null;
const PHONE_DISPLAY = "299-4728756";
const PHONE_DIAL = "+5492994728756";
const EMAIL = "mercadoochoaabogados@gmail.com";
const WHATSAPP_URL = `https://wa.me/5492994728756?text=${encodeURIComponent("Hola, quisiera hacer una consulta.")}`;
const MAPS_LINK = HAS_COORDS
  ? `https://www.google.com/maps/search/?api=1&query=${MAP_LAT},${MAP_LNG}`
  : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`;
const MAP_EMBED_SRC = HAS_COORDS
  ? `https://www.google.com/maps?q=${MAP_LAT},${MAP_LNG}&z=17&output=embed`
  : `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=17&iwloc=near&output=embed`;

export default function LocationContact() {
  return (
    <section id="ubicacion-contacto" className="bg-white py-20 md:py-24 lg:py-28 relative px-6 sm:px-8 md:px-4 creative-section">
      {/* Fondo creativo */}
      <div aria-hidden className="absolute inset-0 pointer-events-none select-none overflow-hidden floating-elements">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ 
            background: 'linear-gradient(rgba(217, 177, 102, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(217, 177, 102, 0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        <div className="absolute top-20 right-20 w-36 h-36 bg-[#D9B26A]/5 rounded-full morphing-shape"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-[#011640]/5 rounded-full morphing-shape"></div>
      </div>

      <div className="relative max-w-content container-px mx-auto">
        <SectionTransition>
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#011640] font-playfair mb-4 leading-tight">
              Ubicación y Contacto
            </h2>
            <div className="w-20 h-0.5 bg-[#D9B26A] mx-auto mb-6"></div>
            <p className="text-base lg:text-lg text-[#6B7280] font-source-sans max-w-3xl mx-auto leading-relaxed">
              Visitanos en nuestras oficinas o contactanos por los medios que prefieras.
            </p>
          </div>
        </SectionTransition>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
          {/* Columna izquierda: datos y CTAs */}
          <SectionTransition delay={150}>
            <ScrollReveal direction="left" delay={200}>
              <div className="bg-white p-6 border border-gray-200 shadow-lg h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
              <div className="space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-playfair font-bold text-[#011640] text-lg mb-2">Dirección</h3>
                    <p className="text-[#4b5563] font-source-sans text-sm leading-relaxed">{ADDRESS}</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-playfair font-semibold text-[#011640] text-sm mb-1">WhatsApp / Tel</h4>
                      <p className="text-[#4b5563] font-source-sans text-sm">
                        <a href={`tel:${PHONE_DIAL}`} className="underline decoration-[#D9B26A]/50 underline-offset-2">
                          {PHONE_DISPLAY}
                        </a>
                      </p>
                    </div>
                    <div>
                      <h4 className="font-playfair font-semibold text-[#011640] text-sm mb-1">Email</h4>
                      <p className="text-[#4b5563] font-source-sans text-sm">
                        <a href={`mailto:${EMAIL}`} className="underline decoration-[#D9B26A]/50 underline-offset-2">
                          {EMAIL}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-playfair font-semibold text-[#011640] text-sm mb-1">Instagram</h4>
                      <a href="https://instagram.com/mercadoochoaabogados" target="_blank" rel="noopener noreferrer" className="text-[#D9B26A] hover:text-[#011640] text-sm font-source-sans">
                        @mercadoochoaabogados
                      </a>
                    </div>
                    <div>
                      <h4 className="font-playfair font-semibold text-[#011640] text-sm mb-1">LinkedIn</h4>
                      <a href="https://www.linkedin.com/in/ariel-a-mercado-ochoa-11b05a2a0/" target="_blank" rel="noopener noreferrer" className="text-[#D9B26A] hover:text-[#011640] text-sm font-source-sans">
                        Ariel A. Mercado Ochoa
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 py-2 font-semibold text-[#011640] bg-[#D9B26A] hover:bg-[#c19a4d] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 text-sm">
                      Abrir WhatsApp
                    </a>
                    <a href={`tel:${PHONE_DIAL}`} className="inline-flex items-center justify-center px-4 py-2 font-semibold text-[#011640] bg-[#D9B26A] hover:bg-[#c19a4d] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 text-sm">
                      Llamar ahora
                    </a>
                    <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 py-2 font-semibold text-[#011640] border border-[#D9B26A] bg-white hover:bg-[#D9B26A] hover:text-white transition-all duration-300 hover:shadow-lg text-sm">
                      Cómo llegar
                    </a>
                  </div>

                  <div className="bg-[#D9B26A]/10 border border-[#D9B26A]/20 p-4 transition-all duration-300 hover:bg-[#D9B26A]/15">
                    <p className="text-[#011640] font-playfair font-semibold text-sm">¿Necesitás asesoría legal?</p>
                    <p className="text-[#6B7280] text-sm font-source-sans mt-1">
                      Contanos tu caso por WhatsApp {PHONE_DISPLAY}. Respondemos con un diagnóstico inicial y próximos pasos.
                    </p>
                  </div>
                </div>
              </div>
              </div>
            </ScrollReveal>
          </SectionTransition>

          {/* Columna derecha: mapa */}
          <SectionTransition delay={250}>
            <ScrollReveal direction="right" delay={300}>
              <div className="bg-white p-2 sm:p-4 border border-gray-200 shadow-lg h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
                <div className="relative overflow-hidden aspect-[4/3] bg-[#F2F2F2] flex-1">
                  <iframe
                    title="Mapa: cómo llegar al Estudio Jurídico Mercado Ochoa Abogados"
                    src={MAP_EMBED_SRC}
                    className="w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    aria-label="Mapa embebido con la ubicación del estudio"
                  />
                </div>
                <div className="flex justify-end mt-3">
                  <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-[#011640] font-playfair underline underline-offset-4 hover:text-[#D9B26A] transition-colors duration-300">
                    Ver en Google Maps
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </SectionTransition>
        </div>
      </div>
    </section>
  );
}
