import React from 'react';

interface Propiedad {
  id: number;
  titulo: string;
  ubicacion: string;
  precio: string;
  imagen: string;
  tipo: string;
  operacion: string;
  dormitorios: string;
}

export const PropertyDetail: React.FC<{ propiedad: Propiedad; onBack: () => void }> = ({ propiedad, onBack }) => {
  if (!propiedad) return null;
  return (
    <section className="py-16 bg-white min-h-[60vh]">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <button
          onClick={onBack}
          className="mb-6 px-5 py-2 bg-black text-[#f7931e] rounded hover:bg-[#f7931e] hover:text-black font-semibold transition-colors"
        >
          ← Volver a resultados
        </button>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#f7931e]">
          <img src={propiedad.imagen} alt={propiedad.titulo} className="w-full h-80 object-cover" />
          <div className="p-8">
            <h1 className="text-3xl font-bold text-black mb-2">{propiedad.titulo}</h1>
            <p className="text-[#f7931e] mb-2">{propiedad.ubicacion}</p>
            <p className="text-lg font-bold text-black mb-4">{propiedad.precio}</p>
            <div className="flex gap-6 mb-4">
              <span className="bg-[#f7931e] text-black px-4 py-1 rounded-full text-sm font-semibold">{propiedad.tipo}</span>
              <span className="bg-black text-[#f7931e] px-4 py-1 rounded-full text-sm font-semibold">{propiedad.operacion}</span>
              <span className="bg-gray-100 text-black px-4 py-1 rounded-full text-sm font-semibold">{propiedad.dormitorios} Dormitorios</span>
            </div>
            <p className="text-black mb-4">Para más información o coordinar una visita, contactanos por WhatsApp o completá el formulario de contacto.</p>
            <a href="https://wa.me/541155125144" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#f7931e] text-black font-bold px-8 py-3 rounded-lg hover:bg-black hover:text-[#f7931e] border border-[#f7931e] transition-all">Contactar por WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
};
