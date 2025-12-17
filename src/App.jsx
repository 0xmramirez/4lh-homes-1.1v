import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer'; 
import BrochureCTA from './components/sections/BrochureCTA';
import Hero from './components/sections/Hero';
import Investors from './pages/Investors';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';

const Home = () => (
    <>
      <Hero />
      <div className="py-20 text-center text-gray-500">Más contenido de inicio próximamente...</div>
      {/* Puedes poner el Brochure aquí en la Home también si quieres */}
    </>
);

function App() {
  return (
    <div className="font-sans text-gray-800 flex flex-col min-h-screen">
      <Navbar />
      
      {/* Contenido Principal */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inversionistas" element={<Investors />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/proyectos/:id" element={<ProjectDetail />} />
          <Route path="/nosotros" element={<div className="pt-24 text-center">Nosotros</div>} />
          <Route path="/contacto" element={<div className="pt-24 text-center">Contacto</div>} />
        </Routes>
      </main>

      {/* SECCIONES GLOBALES INFERIORES */}
      <BrochureCTA /> 
      <Footer />      
    </div>
  );
}

export default App;