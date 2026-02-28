import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projectsData';
import { MapPin, BedDouble, Bath, Ruler, ArrowLeft, CheckCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));
  
  // Estado para la Galería Interactiva (Lightbox)
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) {
    return (
      <div className="pt-32 text-center font-sans text-gray-600">
        Proyecto no encontrado. <Link to="/proyectos" className="text-lh-gold font-bold">Volver al Portafolio</Link>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-white min-h-screen font-sans text-gray-800">
      
      {/* =========================================
          MODAL LIGHTBOX (Galería en pantalla completa)
          ========================================= */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button 
                className="absolute top-6 right-6 text-white hover:text-lh-gold transition-colors z-50"
                onClick={() => setSelectedImage(null)}
            >
                <X className="w-10 h-10" />
            </button>
            <motion.img 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                src={selectedImage} 
                alt="Vista ampliada del proyecto" 
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()} // Evita que se cierre si haces clic en la foto
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================
          1. HERO DEL PROYECTO (Imagen Principal)
          ========================================= */}
      <div className="relative h-[50vh] md:h-[60vh] w-full">
        {/* Etiqueta de Estado Dinámica */}
        <div className="absolute top-4 left-4 z-10 bg-lh-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider font-sans shadow-md">
            {{
                'sale': 'En Venta',
                'construction': 'En Construcción',
                'sold': 'Vendido'
            }[project.status] || 'Desconocido'}
        </div>

        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-0 left-0 p-8 md:p-16 text-white max-w-4xl z-10">
            <Link to="/proyectos" className="inline-flex items-center text-sm mb-4 hover:text-lh-gold transition-colors uppercase tracking-widest font-bold">
                <ArrowLeft className="w-4 h-4 mr-2" /> Volver al Portafolio
            </Link>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-3">{project.title}</h1>
            <div className="flex items-center text-gray-200 text-lg">
                <MapPin className="w-5 h-5 mr-2 text-lh-gold" />
                {project.location}
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-12">
        
        {/* =========================================
            2. COLUMNA IZQUIERDA (Información y Galería)
            ========================================= */}
        <div className="lg:col-span-2 space-y-12">
            
            {/* Descripción */}
            <section>
                <h2 className="font-heading text-2xl md:text-3xl text-lh-blue font-bold mb-6">Sobre la Propiedad</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                    {project.description} 
                    <br/><br/>
                    Nuestro diseño insignia combina eficiencia constructiva con acabados de primera calidad, techos altos y una distribución pensada para maximizar la entrada de luz natural. Un activo ideal tanto para el disfrute familiar como para la optimización del retorno de inversión.
                </p>
            </section>

            {/* Características (Specs) */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 p-6 rounded-xl text-center border border-gray-100 hover:shadow-md transition-shadow">
                    <BedDouble className="w-8 h-8 mx-auto text-lh-gold mb-3" />
                    <p className="font-bold text-lh-blue text-lg">{project.specs.beds} Habitaciones</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl text-center border border-gray-100 hover:shadow-md transition-shadow">
                    <Bath className="w-8 h-8 mx-auto text-lh-gold mb-3" />
                    <p className="font-bold text-lh-blue text-lg">{project.specs.baths} Baños</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl text-center border border-gray-100 hover:shadow-md transition-shadow">
                    <Ruler className="w-8 h-8 mx-auto text-lh-gold mb-3" />
                    <p className="font-bold text-lh-blue text-lg">{project.specs.sqft} SqFt</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl text-center border border-gray-100 hover:shadow-md transition-shadow">
                    <CheckCircle className="w-8 h-8 mx-auto text-lh-gold mb-3" />
                    <p className="font-bold text-lh-blue text-lg">Garantía 4LH</p>
                </div>
            </section>

            {/* Galería Dinámica */}
            <section>
                <h3 className="font-heading text-2xl text-lh-blue font-bold mb-6">Galería del Proyecto</h3>
                
                {project.gallery && project.gallery.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {project.gallery.map((imgUrl, index) => (
                            <div 
                                key={index} 
                                className="overflow-hidden rounded-xl cursor-pointer group relative bg-gray-100 aspect-square shadow-sm"
                                onClick={() => setSelectedImage(imgUrl)}
                            >
                                <img 
                                    src={imgUrl} 
                                    alt={`Vista ${index + 1} - ${project.title}`} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-bold text-sm tracking-widest uppercase drop-shadow-md border-b-2 border-lh-gold pb-1">
                                        Ampliar
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-gray-50 p-12 rounded-xl text-center border border-gray-100">
                        <p className="text-gray-500 font-medium">Pronto añadiremos más imágenes de este proyecto.</p>
                    </div>
                )}
            </section>
        </div>

        {/* =========================================
            3. COLUMNA DERECHA (Panel de Precios y Contacto)
            ========================================= */}
        <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 sticky top-28">
                <p className="text-gray-400 text-sm uppercase tracking-widest mb-2 font-bold">Precio Estimado</p>
                <div className="text-5xl font-heading font-bold text-lh-blue mb-8">${project.price}</div>
                
                <div className="space-y-4">
                    <Link to="/contacto" className="w-full bg-lh-gold text-black font-bold py-4 rounded-lg hover:bg-yellow-500 transition-colors shadow-lg flex justify-center items-center uppercase tracking-wide">
                        Contactar Asesor
                    </Link>
                    <button className="w-full border-2 border-lh-blue text-lh-blue font-bold py-4 rounded-lg hover:bg-lh-blue hover:text-white transition-colors uppercase tracking-wide">
                        Descargar Dossier
                    </button>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-100">
                    <h4 className="font-bold text-lh-blue mb-4 uppercase tracking-wider text-sm">Atención al Inversor</h4>
                    <div className="flex items-center">
                        <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mr-4 border border-gray-200 shadow-inner">
                            <span className="text-lh-gold font-black text-lg">4LH</span>
                        </div>
                        <div>
                            <p className="text-base font-bold text-gray-800">Equipo Comercial</p>
                            <p className="text-sm text-gray-500">info@4lhgroup.com</p>
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