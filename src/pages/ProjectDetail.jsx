import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projectsData';
import { MapPin, BedDouble, Bath, Ruler, ArrowLeft, CheckCircle } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams(); // Capturamos el ID de la URL
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div className="pt-32 text-center">Proyecto no encontrado. <Link to="/proyectos" className="text-lh-gold">Volver</Link></div>;
  }

  return (
    <div className="pt-20 bg-white min-h-screen">
      
      {/* 1. HERO DEL PROYECTO (Imagen Grande) */}
      <div className="relative h-[50vh] md:h-[60vh] w-full">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-0 left-0 p-8 md:p-16 text-white max-w-4xl">
            <Link to="/proyectos" className="inline-flex items-center text-sm mb-4 hover:text-lh-gold transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Volver al Portafolio
            </Link>
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-2">{project.title}</h1>
            <div className="flex items-center text-gray-200">
                <MapPin className="w-5 h-5 mr-2 text-lh-gold" />
                {project.location}
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-12">
        
        {/* 2. COLUMNA IZQUIERDA (Info Principal) */}
        <div className="md:col-span-2 space-y-8">
            <div>
                <h2 className="font-heading text-2xl text-lh-blue font-bold mb-4">Sobre la Propiedad</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                    {project.description} Este modelo cuenta con acabados de primera calidad, techos altos y una distribución pensada para maximizar la entrada de luz natural. (Aquí podrías poner una descripción más larga en tu base de datos).
                </p>
            </div>

            {/* Características */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-100">
                    <BedDouble className="w-6 h-6 mx-auto text-lh-gold mb-2" />
                    <p className="font-bold text-lh-blue">{project.specs.beds} Habitaciones</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-100">
                    <Bath className="w-6 h-6 mx-auto text-lh-gold mb-2" />
                    <p className="font-bold text-lh-blue">{project.specs.baths} Baños</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-100">
                    <Ruler className="w-6 h-6 mx-auto text-lh-gold mb-2" />
                    <p className="font-bold text-lh-blue">{project.specs.sqft} SqFt</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-100">
                    <CheckCircle className="w-6 h-6 mx-auto text-lh-gold mb-2" />
                    <p className="font-bold text-lh-blue">Garantía 4LH</p>
                </div>
            </div>

            {/* Galería (Simulada) */}
            <div>
                <h3 className="font-heading text-xl text-lh-blue font-bold mb-4">Galería</h3>
                <div className="grid grid-cols-2 gap-4">
                    <img src="https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&q=80" className="rounded-lg h-48 object-cover w-full" alt="Interior 1" />
                    <img src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80" className="rounded-lg h-48 object-cover w-full" alt="Interior 2" />
                </div>
            </div>
        </div>

        {/* 3. COLUMNA DERECHA (Precio y Contacto) */}
        <div>
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 sticky top-24">
                <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">Precio de Venta</p>
                <div className="text-4xl font-heading font-bold text-lh-blue mb-6">{project.price}</div>
                
                <div className="space-y-4">
                    <button className="w-full bg-lh-gold text-black font-bold py-4 rounded hover:bg-yellow-500 transition shadow-lg">
                        Agendar Visita
                    </button>
                    <button className="w-full border-2 border-lh-blue text-lh-blue font-bold py-4 rounded hover:bg-blue-50 transition">
                        Descargar Brochure
                    </button>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100">
                    <h4 className="font-bold text-lh-blue mb-2">Agente Asignado</h4>
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                        <div>
                            <p className="text-sm font-bold">Equipo 4LH</p>
                            <p className="text-xs text-gray-500">+1 (555) 000-0000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;