import React from 'react';
import { Home, TrendingUp, Search, Hammer } from 'lucide-react';
import { ServiceCard } from './ServiceCard';
import { ServiceItem } from '../types';

export const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: 'rentals',
      title: "Gestión de Alquileres",
      description: "Especialistas en la gestión integral de alquileres en Glew, Almirante Brown y alrededores. Optimizamos alquileres de casas, departamentos y PH, garantizando tranquilidad y seguridad.",
      icon: <Home size={24} />,
      features: [
        "Gestión personalizada de propiedades",
        "Selección rigurosa de inquilinos",
        "Garantía de cobro y contratos seguros",
        "Mantenimiento y atención local"
      ]
    },
    {
      id: 'shopper-investor',
      title: "Inversores Inmobiliarios",
      description: "Detectamos oportunidades de inversión en propiedades de alta rentabilidad en Almirante Brown y zona sur. Analizamos viabilidad, reformas y retorno de inversión real en el mercado local.",
      icon: <TrendingUp size={24} />,
      features: [
        "Oportunidades en Glew y alrededores",
        "Análisis financiero y legal",
        "Cálculo de rentabilidad local",
        "Gestión integral para inversores"
      ]
    },
    {
      id: 'shopper-personal',
      title: "Buscador de Propiedades",
      description: "Encontramos tu hogar ideal en Glew, Almirante Brown y Buenos Aires. Defendemos tus intereses, negociamos el precio y revisamos toda la documentación legal.",
      icon: <Search size={24} />,
      features: [
        "Búsqueda personalizada en zona sur",
        "Negociación experta",
        "Revisión de contratos y escrituras",
        "Acompañamiento en todo el proceso"
      ]
    },
    {
      id: 'renovations',
      title: "Reformas y Adecuación",
      description: "Equipo local especializado en transformar propiedades en Almirante Brown y zona sur. Realizamos reformas, adecuaciones y mejoras para alquiler o venta, adaptadas al mercado argentino.",
      icon: <Hammer size={24} />,
      features: [
        "Diseño y ejecución de obras locales",
        "Home Staging adaptado a la zona",
        "Incremento de valor en el mercado local",
        "Cumplimiento de plazos y calidad"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-gold-600 font-bold tracking-widest text-sm uppercase mb-4">Nuestra Experiencia</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Soluciones Inmobiliarias 360°</h3>
          <p className="text-slate-600 text-lg font-light leading-relaxed">
            Cesar Valls Propiedades unifica todos los servicios necesarios para el éxito inmobiliario en Glew y la zona. 
            Ya sea inversor o propietario particular, tenemos la solución a medida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};