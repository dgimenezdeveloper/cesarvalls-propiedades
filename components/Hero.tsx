import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#f7931e] scroll-mt-0">
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Texto principal */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#f7931e] text-[#f7931e] text-xs font-bold uppercase tracking-wider mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#f7931e] animate-pulse"></span>
              Inmobiliaria en Glew
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-[1.1] mb-8">
              Tu próxima propiedad,<br />
              <span className="text-white italic relative inline-block">
                nuestra prioridad.
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-black opacity-60" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00026 6.99997C28.4906 3.99999 68.2885 1.74834 198.001 2.00002" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
              </span>
            </h1>
            <p className="text-lg text-black mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Compra, venta y alquiler de propiedades en Glew y alrededores. Atención personalizada, profesional matriculado y la confianza de siempre.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#properties"
                onClick={(e) => { e.preventDefault(); document.getElementById('properties')?.scrollIntoView({behavior: 'smooth'}); }}
                className="w-full sm:w-auto px-8 py-4 bg-black text-[#f7931e] rounded-lg font-medium hover:bg-[#f7931e] hover:text-black transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 border border-black"
              >
                Ver Propiedades <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}); }}
                className="w-full sm:w-auto px-8 py-4 bg-white text-black border border-[#f7931e] rounded-lg font-medium hover:bg-[#f7931e] hover:text-white transition-all"
              >
                Contactar Ahora
              </a>
            </div>
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-white/50">
              <div>
                <p className="text-3xl font-serif font-bold text-black">10+</p>
                <p className="text-xs text-black uppercase tracking-wide">Años de experiencia</p>
              </div>
              <div className="w-px h-10 bg-white"></div>
              <div>
                <p className="text-3xl font-serif font-bold text-black">100%</p>
                <p className="text-xs text-black uppercase tracking-wide">Clientes satisfechos</p>
              </div>
            </div>
          </div>
          {/* Imagen visual */}
          <div className="flex-1 relative w-full lg:h-[600px]">
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl h-full transform transition-transform hover:scale-[1.01] duration-700 border-4 border-white">
              <img 
                src="/images/logo-cesarvalls.png" 
                alt="Cesar Valls Propiedades" 
                className="w-full h-full object-contain bg-white p-10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              {/* Badge flotante */}
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm p-5 rounded-xl shadow-xl border border-white/40 max-w-xs">
                <div className="flex gap-1 text-[#f7931e] mb-2">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <p className="text-sm font-medium text-black italic">"Excelente atención y gestión. ¡Muy recomendable!"</p>
              </div>
            </div>
            {/* Elementos decorativos */}
            <div className="absolute -z-10 top-10 -right-10 w-64 h-64 bg-white/20 rounded-full blur-3xl mix-blend-multiply animate-pulse"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-black/20 rounded-full blur-3xl mix-blend-multiply"></div>
          </div>
        </div>
      </div>
    </section>
  );
};