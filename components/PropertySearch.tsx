import React, { useState } from 'react';

const tipos = ['Casa', 'Departamento', 'PH', 'Terreno', 'Local'];
const operaciones = ['Venta', 'Alquiler'];

export const PropertySearch: React.FC<{ onSearch: (filters: any) => void }> = ({ onSearch }) => {
  const [tipo, setTipo] = useState('');
  const [operacion, setOperacion] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [dormitorios, setDormitorios] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ tipo, operacion, ubicacion, dormitorios });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-4 items-center justify-center -mt-24 relative z-20 border border-[#f7931e]">
      <select value={tipo} onChange={e => setTipo(e.target.value)} className="p-3 rounded border w-40">
        <option value="">Tipo</option>
        {tipos.map(t => <option key={t} value={t}>{t}</option>)}
      </select>
      <select value={operacion} onChange={e => setOperacion(e.target.value)} className="p-3 rounded border w-40">
        <option value="">Operación</option>
        {operaciones.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
      <input type="text" value={ubicacion} onChange={e => setUbicacion(e.target.value)} placeholder="Ubicación, barrio o localidad" className="p-3 rounded border w-56" />
      <select value={dormitorios} onChange={e => setDormitorios(e.target.value)} className="p-3 rounded border w-40">
        <option value="">Dormitorios</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4+">4+</option>
      </select>
      <button type="submit" className="bg-[#f7931e] text-black font-bold px-8 py-3 rounded-lg hover:bg-black hover:text-[#f7931e] border border-[#f7931e] transition-all">Buscar</button>
    </form>
  );
};
