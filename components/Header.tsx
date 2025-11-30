import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Propiedades', href: '#properties' },
    { name: 'Servicios', href: '#services' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Contacto', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      setIsMenuOpen(false);
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 border-b ${
        scrolled || isMenuOpen
          ? 'bg-[#f7931e] border-[#f7931e] shadow-sm py-2'
          : 'bg-transparent border-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group z-50"
          >
            <div className="bg-[#f7931e] p-2.5 rounded-full shadow-lg group-hover:bg-black transition-colors">
              <img src="images/logo-cesarvalls.png" alt="Cesar Valls Propiedades" className="w-10 h-10 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold leading-none tracking-tight text-black">Cesar Valls</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-black font-bold mt-0.5">Propiedades</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-black hover:text-white transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-6 py-2.5 bg-black text-[#f7931e] text-sm font-semibold rounded-full hover:bg-[#f7931e] hover:text-black transition-all shadow-lg hover:shadow-black/20 transform hover:-translate-y-0.5 border border-black"
            >
              Contactar
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-black z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 bg-[#f7931e] z-40 transform transition-transform duration-500 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-serif text-3xl font-medium text-black hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="mt-8 px-10 py-4 bg-black text-[#f7931e] text-lg font-medium rounded-full w-full max-w-xs text-center shadow-xl border border-black"
          >
            Contactar
          </a>
        </div>
      </div>
    </header>
  );
};