"use client";
import { useState } from "react";
import SectionTransition from "./SectionTransition";

export default function Team() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 0,
      title: "Nuestro Estudio",
      content: (
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Imágenes del estudio */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Primera imagen - estudio.png */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl group hover:shadow-2xl transition-shadow duration-500">
                <img 
                  src="/estudio.png" 
                  alt="Estudio Jurídico Mercado Ochoa Abogados - Oficinas en todo Neuquén"
                  className="w-full h-96 lg:h-[28rem] object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                {/* Overlay decorativo */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-[#D9B26A]/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <svg className="w-5 h-5 text-[#D9B26A]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Segunda imagen - estudio ochoa.jpg */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl group hover:shadow-2xl transition-shadow duration-500">
                <img 
                  src="/estudio ochoa.jpg" 
                  alt="Estudio Jurídico Mercado Ochoa - Espacios de trabajo y atención al cliente"
                  className="w-full h-96 lg:h-[28rem] object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                {/* Overlay decorativo */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-[#D9B26A]/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <svg className="w-5 h-5 text-[#D9B26A]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contenido del estudio */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h3 className="text-lg lg:text-xl font-bold text-[#D9B26A] font-playfair mb-4">
                Nuestro Estudio
              </h3>
              <p className="text-sm lg:text-base text-white/90 font-source-sans leading-relaxed mb-4">
                Somos un estudio jurídico en todo Neuquén orientado a resultados, comunicación clara y acompañamiento cercano. 
                Nuestra metodología combina prevención del conflicto, negociación y, cuando es necesario, litigio.
              </p>
              <p className="text-sm lg:text-base text-white/80 font-source-sans leading-relaxed">
                Trabajamos con honorarios transparentes, plazos por escrito y reportes periódicos. 
                Si buscás abogados en todo Neuquén que expliquen cada paso sin tecnicismos, estás en el lugar correcto.
              </p>
            </div>
            
            {/* Características del estudio */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#D9B26A] rounded-full"></div>
                <span className="text-white/80 font-source-sans text-sm">5 años de experiencia</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#D9B26A] rounded-full"></div>
                <span className="text-white/80 font-source-sans text-sm">Honorarios transparentes</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#D9B26A] rounded-full"></div>
                <span className="text-white/80 font-source-sans text-sm">Comunicación clara</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#D9B26A] rounded-full"></div>
                <span className="text-white/80 font-source-sans text-sm">Acompañamiento cercano</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: "Nuestro Abogado",
      content: (
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Imagen del abogado */}
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-xl group hover:shadow-2xl transition-shadow duration-500">
              <img 
                src="/abogado ochoa.jpg" 
                alt="Ariel A. Mercado Ochoa - Abogado y Procurador del Estudio Jurídico Mercado Ochoa"
                className="w-full h-96 lg:h-[28rem] object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              {/* Overlay decorativo */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-[#D9B26A]/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <svg className="w-6 h-6 text-[#D9B26A]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Información del abogado */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h3 className="text-lg lg:text-xl font-bold text-[#D9B26A] font-playfair mb-4">
                Ariel A. Mercado Ochoa
              </h3>
              <p className="text-sm lg:text-base text-white/90 font-source-sans leading-relaxed mb-4">
                Soy Ariel A. Mercado Ochoa, abogado y procurador egresado de la Universidad Empresarial Siglo XXI, con especialización en Justicia Constitucional y Derechos Humanos.
                Desde el inicio de mi carrera he desarrollado una práctica jurídica comprometida, enfocada en brindar un servicio profesional serio, accesible y transparente, basado en la responsabilidad y el respeto por cada cliente.
              </p>
              <p className="text-sm lg:text-base text-white/80 font-source-sans leading-relaxed mb-4">
                Durante los últimos años he ejercido activamente la profesión en toda la provincia de Neuquén y Río Negro, representando a personas, familias y trabajadores en causas civiles, de familia, laborales, sucesorias y de accidentes de tránsito, así como en reclamos vinculados a ART, filiación y derechos reales.
              </p>
              <p className="text-sm lg:text-base text-white/80 font-source-sans leading-relaxed mb-4">
                Mi labor se sustenta en la convicción de que el Derecho no solo debe resolver conflictos, sino también proteger derechos, prevenir injusticias y restaurar la confianza en las instituciones. Cada caso merece una mirada personalizada, porque detrás de cada expediente hay una historia, una persona y una expectativa legítima de justicia.
              </p>
              <p className="text-sm lg:text-base text-white/80 font-source-sans leading-relaxed mb-4">
                En el ejercicio diario de la profesión busco combinar la técnica jurídica con la empatía y la escucha activa, acompañando a cada cliente en todo el proceso con claridad, honestidad y dedicación.
                Creo firmemente que una buena defensa se construye desde la confianza mutua, la preparación constante y la ética profesional.
              </p>
              <p className="text-sm lg:text-base text-white/80 font-source-sans leading-relaxed">
                Actualmente soy fundador y titular del Estudio Jurídico Mercado Ochoa Abogados, un espacio concebido para brindar asesoramiento integral, con una atención cercana, eficiente y comprometida con la justicia.
              </p>
            </div>
            
            {/* Especialidades del abogado */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#D9B26A] rounded-full"></div>
                <span className="text-white/80 font-source-sans text-sm">Derecho Civil</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#D9B26A] rounded-full"></div>
                <span className="text-white/80 font-source-sans text-sm">Derecho de Familia</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#D9B26A] rounded-full"></div>
                <span className="text-white/80 font-source-sans text-sm">Derecho Laboral</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#D9B26A] rounded-full"></div>
                <span className="text-white/80 font-source-sans text-sm">Derecho Ambiental</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Nuestra Abogada",
      content: (
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Imagen de la abogada */}
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-xl group hover:shadow-2xl transition-shadow duration-500">
              <img
                src="/mujer.jpeg"
                alt="Dra. María de los Ángeles Dominici - Abogada del Estudio Jurídico Mercado Ochoa"
                className="w-full h-96 lg:h-[28rem] object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

              {/* Overlay decorativo */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-[#D9B26A]/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <svg className="w-6 h-6 text-[#D9B26A]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* Información de la abogada */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h3 className="text-lg lg:text-xl font-bold text-[#D9B26A] font-playfair mb-4">
                Dra. María de los Ángeles Dominici
              </h3>
              <p className="text-sm lg:text-base text-white/90 font-source-sans leading-relaxed mb-4">
                La Dra. María de los Ángeles Dominici integra el equipo de Estudio Jurídico Mercado Ochoa Abogados, aportando una práctica profesional orientada a la excelencia técnica, el trato cercano y la búsqueda de soluciones concretas para cada cliente.
              </p>
              <p className="text-sm lg:text-base text-white/80 font-source-sans leading-relaxed mb-4">
                Su enfoque combina el análisis jurídico riguroso con una comprensión integral del conflicto, entendiendo que cada caso involucra no solo aspectos legales, sino también decisiones personales de relevancia que requieren acompañamiento y claridad.
              </p>
              <p className="text-sm lg:text-base text-white/80 font-source-sans leading-relaxed mb-4">
                En su labor diaria se destaca por la escucha activa, la comunicación directa y el seguimiento constante de los procesos, asegurando que cada cliente cuente con información clara y oportuna para la toma de decisiones.
              </p>
              <p className="text-sm lg:text-base text-white/80 font-source-sans leading-relaxed mb-4">
                Se encuentra en permanente formación, participando activamente en el Instituto de Derecho Procesal de Neuquén y en el Instituto de Derecho de Familia de Río Negro, lo que le permite mantenerse actualizada frente a los desafíos actuales del ejercicio profesional.
              </p>
              <p className="text-sm lg:text-base text-white/80 font-source-sans leading-relaxed mb-4">
                Cuenta además con formación en mediación, incorporando herramientas que favorecen la resolución de conflictos a través del diálogo y la construcción de acuerdos eficientes.
              </p>
              <p className="text-sm lg:text-base text-white/80 font-source-sans leading-relaxed">
                En línea con la filosofía del Estudio, ha incorporado conocimientos en Inteligencia Artificial aplicada al Derecho, contribuyendo a la optimización de los procesos y a la prestación de un servicio jurídico moderno, ágil y de alta calidad.
              </p>
            </div>

            {/* Especialidades de la abogada */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#D9B26A] rounded-full"></div>
                <span className="text-white/80 font-source-sans text-sm">Excelencia técnica</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#D9B26A] rounded-full"></div>
                <span className="text-white/80 font-source-sans text-sm">Escucha activa</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#D9B26A] rounded-full"></div>
                <span className="text-white/80 font-source-sans text-sm">Formación continua</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#D9B26A] rounded-full"></div>
                <span className="text-white/80 font-source-sans text-sm">Mediación e innovación</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="nosotros" className="bg-[#011640] pt-[40rem] sm:pt-[36rem] md:pt-[20rem] lg:pt-80 pb-16 md:pb-20 lg:pb-24 relative overflow-hidden z-10">
      {/* Elementos creativos de fondo */}
      <div aria-hidden className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'linear-gradient(45deg, transparent 25%, rgba(217, 178, 106, 0.1) 25%, rgba(217, 178, 106, 0.1) 50%, transparent 50%, transparent 75%, rgba(217, 178, 106, 0.1) 75%)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        {/* Círculos flotantes */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#D9B26A]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionTransition>
          <div className="text-center mb-16 lg:mb-20">
            {/* H2 - Tamaños optimizados UX/UI */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#D9B26A] font-playfair mb-4 leading-tight">
              Quiénes somos
            </h2>
            <div className="w-20 h-0.5 bg-[#D9B26A] mx-auto mb-8"></div>
          </div>
        </SectionTransition>

        {/* Carrusel */}
        <SectionTransition delay={300}>
          <div className="relative">
            {/* Contenido del carrusel */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide) => (
                  <div key={slide.id} className="w-full flex-shrink-0">
                    {slide.content}
                  </div>
                ))}
              </div>
            </div>

            {/* Controles del carrusel */}
            <div className="flex items-center justify-center gap-4 mt-8">
              {/* Botón anterior */}
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Slide anterior"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Indicadores */}
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-[#D9B26A] scale-125' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Ir al slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Botón siguiente */}
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Slide siguiente"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </SectionTransition>

      </div>
    </section>
  );
}
