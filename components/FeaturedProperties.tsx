import React from 'react';

const propiedades = [
  {
    id: 1,
    titulo: 'Casa en alquiler',
    ubicacion: 'Calle 20 entre 35 y 32, Guernica',
    precio: '$250.000/mes',
    imagen: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&w=600&q=80',
    destacado: true,
  },
  {
    id: 2,
    titulo: 'Local en alquiler',
    ubicacion: 'Intendente Etcheverry 3494, Glew',
    precio: '$180.000/mes',
    imagen: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&w=600&q=80',
    destacado: true,
  },
  {
    id: 3,
    titulo: 'Casa en venta',
    ubicacion: 'Andrade 52, Glew',
    precio: 'USD 85.000',
    imagen: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&w=600&q=80',
    destacado: true,
  },
  {
    id: 4,
    titulo: 'Departamento moderno',
    ubicacion: 'Av. Eva Perón 1234, Glew',
    precio: 'USD 65.000',
    imagen: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&w=600&q=80',
    destacado: true,
  },
  {
    id: 5,
    titulo: 'Casa quinta en venta',
    ubicacion: 'Ruta 210 km 45, Glew',
    precio: 'USD 120.000',
    imagen: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&w=600&q=80',
    destacado: true,
  },
  {
    id: 6,
    titulo: 'Edificio a estrenar',
    ubicacion: 'Calle 33 y 10, Glew',
    precio: 'Consultar',
    imagen: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&w=600&q=80',
    destacado: true,
  },
];

export const FeaturedProperties: React.FC = () => (
  <section id="properties" className="py-20 bg-[#fff]">
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="text-3xl font-bold text-[#f7931e] mb-10 text-center">Propiedades Destacadas</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {propiedades.map((prop) => (
          <div key={prop.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#f7931e] flex flex-col">
            <img src={prop.imagen} alt={prop.titulo} className="w-full h-56 object-cover" />
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-black mb-2">{prop.titulo}</h3>
                <p className="text-sm text-[#f7931e] mb-4">{prop.ubicacion}</p>
              </div>
              <div className="mt-auto">
                <span className="text-lg font-bold text-black">{prop.precio}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
