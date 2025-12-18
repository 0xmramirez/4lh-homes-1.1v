import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer'; 
import BrochureCTA from './components/sections/BrochureCTA';
import Investors from './pages/Investors';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import InvestOpportunities from './pages/InvestOpportunities';
import InvestOpportunityDetail from './pages/InvestmentOppDetail';

function App() {
  return (
    <div className="font-sans text-gray-800 flex flex-col min-h-screen">
      <ScrollToTop />

      <Navbar />
      
      {/* Contenido Principal */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inversionistas" element={<Investors />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/proyectos/:id" element={<ProjectDetail />} />
          <Route path="/oportunidades-inversion" element={<InvestOpportunities />} />
          <Route path="/oportunidades-inversion/:id" element={<InvestOpportunityDetail />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>

      {/* SECCIONES GLOBALES INFERIORES */}
      <BrochureCTA /> 
      <Footer />      
    </div>
  );
}

export default App;