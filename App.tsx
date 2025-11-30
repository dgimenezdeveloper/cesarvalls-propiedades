import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Renovations } from './components/Renovations';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AIChat } from './components/AIChat';
import { BuscadorDemo } from './BuscadorDemo';
import { QuickContact } from './components/QuickContact';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Header />
      <main>
        <Hero />
        <BuscadorDemo />
        <Services />
        <Renovations />
        <Contact />
      </main>
      <Footer />
      <AIChat />
      <QuickContact />
    </div>
  );
}

export default App;
