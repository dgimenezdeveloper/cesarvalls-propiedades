import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#000000] text-[#ffffff] py-12 border-t border-[#f7931e]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo y contacto */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/logo-cesarvalls.png" alt="Cesar Valls Propiedades" className="w-10 h-10 object-contain bg-[#f7931e] rounded-full p-1" />
              <span className="font-serif text-xl font-bold text-[#f7931e]">Cesar Valls Propiedades</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-[#f7931e]">
              A la hora de comprar, vender o alquilar hacelo siempre acompañado de un profesional matriculado.<br/>
              Andrade 52, Glew<br/>
              <a href="tel:1155125144" className="underline text-white">1155125144</a><br/>
              Matrícula 4220
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/cesarvalls.propiedades" target="_blank" rel="noopener noreferrer" className="hover:text-[#f7931e] transition-colors"><Facebook size={20} /></a>
              <a href="https://www.instagram.com/cesarvalls.propiedades/" target="_blank" rel="noopener noreferrer" className="hover:text-[#f7931e] transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-[#f7931e] transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-[#f7931e] font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#f7931e] transition-colors">Compra y Venta</a></li>
              <li><a href="#" className="hover:text-[#f7931e] transition-colors">Alquileres</a></li>
              <li><a href="#" className="hover:text-[#f7931e] transition-colors">Tasaciones</a></li>
              <li><a href="#" className="hover:text-[#f7931e] transition-colors">Asesoramiento</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#f7931e] font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#f7931e] transition-colors">Nosotros</a></li>
              <li><a href="#" className="hover:text-[#f7931e] transition-colors">Equipo</a></li>
              <li><a href="#" className="hover:text-[#f7931e] transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#f7931e] font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#f7931e] transition-colors">Aviso Legal</a></li>
              <li><a href="#" className="hover:text-[#f7931e] transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-[#f7931e] transition-colors">Política de Cookies</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-[#f7931e] pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Cesar Valls Propiedades. Todos los derechos reservados.</p>
          <p className="mt-2 md:mt-0">Sitio desarrollado para la inmobiliaria Cesar Valls.</p>
        </div>
      </div>
    </footer>
  );
};
