import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, BedDouble, Bath, Ruler, CheckCircle, Clock, DollarSign } from 'lucide-react';
// CORRECCIÓN AQUÍ: Importamos AMBAS listas
import { projects, successStories } from '../data/projectsData'; 

const Projects = () => {
  const [filter, setFilter] = useState('all'); // 'all', 'sale', 'construction', 'sold'

  // Lógica de filtrado
  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    return project.status === filter;
  });

  return (
    <div className="pt-24 min-h-screen bg-gray-50 pb-0">
      
      {/* HEADER DE LA PÁGINA */}
      <div className="text-center max-w-3xl mx-auto px-6 mb-16">
        <h1 className="font-heading text-4xl md:text-5xl text-lh-blue mb-4">Nuestro Portafolio</h1>
        <p className="text-gray-500 text-lg">
          Calidad constructiva y rentabilidad en cada metro cuadrado. Explore nuestros desarrollos recientes en South Florida.
        </p>
      </div>

      {/* BOTONES DE FILTRO */}
      <div className="flex flex-wrap justify-center gap-4 mb-12 px-4">
        <FilterButton label="Todos" active={filter === 'all'} onClick={() => setFilter('all')} />
        <FilterButton label="En Venta" active={filter === 'sale'} onClick={() => setFilter('sale')} />
        <FilterButton label="En Construcción" active={filter === 'construction'} onClick={() => setFilter('construction')} />
        <FilterButton label="Vendidos / Entregados" active={filter === 'sold'} onClick={() => setFilter('sold')} />
      </div>

      {/* GRID DE PROYECTOS ACTIVOS (FLORIDA) */}
      <motion.div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        <AnimatePresence>
          {filteredProjects.map((project) => (
             <Link to={`/proyectos/${project.id}`} key={project.id}>
                <ProjectCard project={project} />
             </Link>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* --- NUEVA SECCIÓN: CASOS DE ÉXITO (TRAYECTORIA) --- */}
      <section className="bg-black py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
            
            <div className="mb-12 border-b border-gray-800 pb-4">
                <h2 className="font-heading text-3xl md:text-4xl font-bold">Casos de Éxito</h2>
                <p className="text-gray-400 mt-2">Nuestra trayectoria en desarrollo internacional y multifamily.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* AHORA SÍ FUNCIONARÁ PORQUE YA IMPORTAMOS successStories */}
                {successStories.map((story) => (
                    <div key={story.id} className="group cursor-pointer">
                        <div className="relative h-80 rounded-2xl overflow-hidden mb-6 border border-gray-800 group-hover:border-lh-gold transition-colors">
                            <img 
                                src={story.image} 
                                alt={story.title} 
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                            
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-lh-gold text-black font-bold text-center py-2 rounded uppercase tracking-widest text-sm shadow-lg">
                                    Vendido
                                </div>
                            </div>
                        </div>

                        <h3 className="font-mono text-lg font-bold uppercase tracking-wide text-white mb-1">
                            {story.title}
                        </h3>
                        <p className="text-gray-400 text-sm uppercase mb-1">{story.subtitle}</p>
                        <p className="text-gray-600 text-xs uppercase tracking-wider">{story.specs}</p>
                    </div>
                ))}
            </div>

        </div>
      </section>

    </div>
  );
};

// --- COMPONENTE DE TARJETA INDIVIDUAL ---
const ProjectCard = ({ project }) => {
  const getStatusBadge = (status) => {
    switch(status) {
      case 'sale': return <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"><DollarSign className="w-3 h-3"/> DISPONIBLE</span>;
      case 'construction': return <span className="bg-lh-gold/20 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"><Clock className="w-3 h-3"/> EN OBRA</span>;
      case 'sold': return <span className="bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"><CheckCircle className="w-3 h-3"/> VENDIDO</span>;
      default: return null;
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
        
        <div className="absolute top-4 left-4">
            {getStatusBadge(project.status)}
        </div>
        <div className="absolute bottom-4 left-4 text-white">
            <p className="text-2xl font-bold font-heading">{project.price}</p>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-heading text-xl font-bold text-lh-blue mb-2 group-hover:text-lh-gold transition-colors">
            {project.title}
        </h3>
        
        <div className="flex items-center text-gray-500 mb-4 text-sm">
            <MapPin className="w-4 h-4 mr-1 text-lh-gold" />
            {project.location}
        </div>

        <div className="flex justify-between border-t border-b border-gray-100 py-4 mb-4">
            <div className="flex flex-col items-center">
                <BedDouble className="w-5 h-5 text-gray-400 mb-1" />
                <span className="text-xs font-bold text-gray-600">{project.specs.beds} Hab</span>
            </div>
            <div className="flex flex-col items-center border-l border-gray-100 pl-4 md:pl-6">
                <Bath className="w-5 h-5 text-gray-400 mb-1" />
                <span className="text-xs font-bold text-gray-600">{project.specs.baths} Baños</span>
            </div>
            <div className="flex flex-col items-center border-l border-gray-100 pl-4 md:pl-6">
                <Ruler className="w-5 h-5 text-gray-400 mb-1" />
                <span className="text-xs font-bold text-gray-600">{project.specs.sqft} SqFt</span>
            </div>
        </div>

        <p className="text-gray-500 text-sm mb-4 line-clamp-2">
            {project.description}
        </p>

        <div className="flex items-center justify-between mt-4">
             <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                Entrega: {project.completion}
             </span>
             <button className="text-lh-blue font-bold text-sm hover:text-lh-gold transition-colors flex items-center gap-1">
                Ver Detalles &rarr;
             </button>
        </div>
      </div>
    </motion.div>
  );
};

const FilterButton = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
      active 
        ? 'bg-lh-blue text-white shadow-lg transform scale-105' 
        : 'bg-white text-gray-500 border border-gray-200 hover:border-lh-gold hover:text-lh-gold'
    }`}
  >
    {label}
  </button>
);

export default Projects;