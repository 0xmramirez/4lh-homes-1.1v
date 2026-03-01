import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, MapPin, Ruler, BedDouble, Bath, ArrowRight, Shovel, BrickWall, Megaphone, HandCoins } from 'lucide-react';
// 👇 AÑADIMOS clientProjects A LA IMPORTACIÓN 👇
import { projects, clientProjects, successStories } from '../data/projectsData';

const timelineStages = [
    {
        id: 1,
        phase: "FASE 01",
        title: "Selección y ubicación",
        description: "Selección de lote alineados al modelo de casa. Trámite de permisos para inicio de obra. Inicie con lotes aprobados.",
        icon: <MapPin className="w-8 h-8" />,
        position: "bottom"
    },
    {
        id: 2,
        phase: "FASE 02",
        title: "Adecuación + Fundaciones",
        description: "Preparación del terreno, movimientos de tierra y construcción de las bases sólidas de la propiedad.",
        icon: <Shovel className="w-8 h-8" />,
        position: "top"
    },
    {
        id: 3,
        phase: "FASE 03",
        title: "Construcción",
        description: "Proceso de levantamiento de muros, estructura, techos y cerramientos de la casa.",
        icon: <BrickWall className="w-8 h-8" />,
        position: "bottom"
    },
    {
        id: 4,
        phase: "FASE 04",
        title: "Acabados y Marketing",
        description: "Finalización de interiores/exteriores y comienzo de la estrategia de comercialización de la propiedad.",
        icon: <Megaphone className="w-8 h-8" />,
        position: "top"
    },
    {
        id: 5,
        phase: "FASE 05",
        title: "Venta y Retorno",
        description: "Cierre de la venta de la propiedad y distribución de la rentabilidad a los participantes de la inversión.",
        icon: <HandCoins className="w-8 h-8" />,
        position: "bottom"
    }
];

const Projects = () => {
    return (
        <div className="font-sans bg-lh-gray">

            {/* 1. HERO SECTION INDUSTRIAL */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-black">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop"
                        alt="Construction Site Heavy Machinery"
                        className="w-full h-full object-cover grayscale"
                    />
                    <div className="absolute inset-0 bg-black/90"></div>
                </div>

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-lh-gold font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-4 block font-sans">
                            Nuestra Colección
                        </span>
                        <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Portafolio de <span className="text-transparent bg-clip-text bg-gradient-to-r from-lh-gold to-yellow-200">Proyectos</span>
                        </h1>
                        <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed font-sans">
                            Explore nuestros modelos de desarrollo residencial. Diseños eficientes optimizados para la rentabilidad y el estilo de vida moderno de Florida.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. TIMELINE (Etapas del Proyecto) */}
            <section className="pb-24 pt-20 bg-white relative overflow-hidden px-6">
                <div className="absolute inset-0 pointer-events-none opacity-10">
                    <div className="absolute bottom-0 left-10 w-64 h-64 border-4 border-black transform rotate-45 translate-y-1/2 -translate-x-1/2"></div>
                    <div className="absolute bottom-20 left-20 w-32 h-32 border-4 border-lh-gold transform rotate-12"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 border-4 border-black transform -rotate-12 translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute top-1/2 left-0 w-full h-px bg-gray-100 border-t border-dashed border-gray-300"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="font-heading text-4xl font-bold text-black mb-4">Etapas del Proceso</h2>
                        <div className="w-24 h-1 bg-lh-gold mx-auto"></div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-4 relative">
                        {timelineStages.map((stage, index) => (
                            <div key={stage.id} className="relative flex-1 flex flex-col items-center w-full md:w-auto z-10 group">

                                {/* TEXTO ARRIBA */}
                                {stage.position === 'top' && (
                                    <div className="hidden md:flex flex-col items-center text-center mb-8 relative">
                                        <h3 className="font-heading font-bold text-lg mb-2">{stage.title}</h3>
                                        <p className="text-sm text-gray-600 max-w-[200px] font-sans">{stage.description}</p>
                                        <div className="absolute -bottom-8 left-1/2 w-px h-8 border-l-2 border-dashed border-black"></div>
                                    </div>
                                )}

                                {/* CÍRCULO CENTRAL */}
                                <div className="relative z-20">
                                    <div className="w-32 h-32 md:w-40 md:h-40 bg-lh-blue rounded-full flex flex-col items-center justify-center text-white border-4 border-transparent group-hover:border-lh-gold transition-all duration-300 shadow-xl">
                                        <span className="text-lh-gold font-bold tracking-widest text-sm mb-2 font-sans">{stage.phase}</span>
                                        <div className="text-white group-hover:text-lh-gold transition-colors">
                                            {stage.icon}
                                        </div>
                                    </div>
                                </div>

                                {/* TEXTO ABAJO */}
                                {stage.position === 'bottom' && (
                                    <div className="flex flex-col items-center text-center mt-8 relative">
                                        <div className="hidden md:block absolute -top-8 left-1/2 w-px h-8 border-l-2 border-dashed border-black"></div>
                                        <h3 className="font-heading font-bold text-lg mb-2">{stage.title}</h3>
                                        <p className="text-sm text-gray-600 max-w-[200px] font-sans">{stage.description}</p>
                                    </div>
                                )}

                                {/* TEXTO MÓVIL */}
                                <div className="md:hidden flex flex-col items-center text-center mt-6">
                                    {stage.position === 'top' && (
                                        <>
                                            <h3 className="font-heading font-bold text-lg mb-2">{stage.title}</h3>
                                            <p className="text-sm text-gray-600 max-w-xs font-sans">{stage.description}</p>
                                        </>
                                    )}
                                </div>

                                {/* LÍNEAS CONECTORAS */}
                                {index < timelineStages.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 left-1/2 w-full h-px border-t-2 border-dashed border-black/30 -translate-y-1/2 z-0" style={{ left: '50%', width: '100%' }}></div>
                                )}
                                {index < timelineStages.length - 1 && (
                                    <div className="md:hidden absolute bottom-[-3rem] left-1/2 w-px h-12 border-l-2 border-dashed border-black/30 -translate-x-1/2"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ==============================================
                SECCIÓN A: PROYECTOS 4LH
                ============================================== */}
            <section className="py-10 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto flex justify-between items-center border-b border-gray-200 pb-6">
                    <h2 className="text-2xl font-bold text-lh-blue font-heading">Proyectos 4LH</h2>
                    <div className="relative hidden md:block">
                        <input type="text" placeholder="Buscar por zona, precio..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-lh-gold w-64 bg-white font-sans" />
                        <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                    </div>
                </div>
            </section>

            <section className="py-6 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects && projects.map((project, index) => (
                        <Link to={`/proyectos/${project.id}`} key={project.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group border border-gray-100 h-full flex flex-col"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 bg-lh-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider font-sans">
                                        {{
                                            'sale': 'En Venta',
                                            'construction': 'En Construcción',
                                            'sold': 'Vendido',
                                            'rented': 'Rentada'
                                        }[project.status] || 'Desconocido'}
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                                        <h3 className="text-2xl font-bold text-white mb-1 font-heading">{project.title}</h3>
                                        <div className="flex items-center text-gray-300 text-sm font-sans">
                                            <MapPin className="w-4 h-4 mr-1 text-lh-gold" /> {project.location}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 flex-grow flex flex-col justify-between">
                                    <div className="flex justify-between items-center mb-6 bg-gray-50 p-4 rounded-lg">
                                        <div className="flex items-center gap-2">
                                            <Ruler className="w-5 h-5 text-gray-400" />
                                            <span className="font-bold text-lh-blue font-sans">{project.specs.sqft} <span className="text-xs font-normal text-gray-500">Sq Ft</span></span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <BedDouble className="w-5 h-5 text-gray-400" />
                                            <span className="font-bold text-lh-blue font-sans">{project.specs.beds} <span className="text-xs font-normal text-gray-500">Hab</span></span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Bath className="w-5 h-5 text-gray-400" />
                                            <span className="font-bold text-lh-blue font-sans">{project.specs.baths} <span className="text-xs font-normal text-gray-500">Baños</span></span>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1 font-sans">Precio</p>
                                            <p className="text-3xl font-heading font-bold text-lh-blue">${project.price}</p>
                                        </div>
                                        <div className="w-12 h-12 bg-lh-gold rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                                            <ArrowRight className="w-6 h-6" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>


            {/* ==============================================
                SECCIÓN B: PROYECTOS DE CLIENTES (NUEVA)
                ============================================== */}
            <section className="py-10 px-6 bg-gray-50 mt-10">
                <div className="max-w-7xl mx-auto flex justify-between items-center border-b border-gray-200 pb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-lh-blue font-heading">Proyectos de Clientes</h2>
                        <p className="text-gray-500 text-sm mt-1">Casas personalizadas construidas a medida.</p>
                    </div>
                </div>
            </section>

            <section className="py-6 px-6 bg-gray-50 mb-20">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* 👇 Mapeamos el nuevo arreglo clientProjects 👇 */}
                    {clientProjects && clientProjects.map((project, index) => (
                        <Link to={`/proyectos/${project.id}`} key={project.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group border border-gray-100 h-full flex flex-col"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        
                                    />
                                    <div className="absolute top-4 left-4 bg-black text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider font-sans">
                                        Entregado
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                                        <h3 className="text-2xl font-bold text-white mb-1 font-heading">{project.title}</h3>
                                        <div className="flex items-center text-gray-300 text-sm font-sans">
                                            <MapPin className="w-4 h-4 mr-1 text-lh-gold" /> {project.location}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 flex-grow flex flex-col justify-between">
                                    <div className="flex justify-between items-center mb-6 bg-gray-50 p-4 rounded-lg">
                                        <div className="flex items-center gap-2">
                                            <Ruler className="w-5 h-5 text-gray-400" />
                                            <span className="font-bold text-lh-blue font-sans">{project.specs.sqft} <span className="text-xs font-normal text-gray-500">Sq Ft</span></span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <BedDouble className="w-5 h-5 text-gray-400" />
                                            <span className="font-bold text-lh-blue font-sans">{project.specs.beds} <span className="text-xs font-normal text-gray-500">Hab</span></span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Bath className="w-5 h-5 text-gray-400" />
                                            <span className="font-bold text-lh-blue font-sans">{project.specs.baths} <span className="text-xs font-normal text-gray-500">Baños</span></span>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1 font-sans">Inversión</p>
                                            <p className="text-3xl font-heading font-bold text-lh-blue">${project.price}</p>
                                        </div>
                                        <div className="w-12 h-12 bg-lh-gold rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                                            <ArrowRight className="w-6 h-6" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* 5. SECCIÓN: CASOS DE ÉXITO */}
            <section className="bg-black py-20 text-white">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="mb-12 border-b border-gray-800 pb-4">
                        <span className="text-lh-gold font-bold tracking-widest uppercase text-xs font-sans mb-2 block">Trayectoria</span>
                        <h2 className="font-heading text-3xl md:text-4xl font-bold">Casos de Éxito</h2>
                        <p className="text-gray-400 mt-2 font-sans">Proyectos entregados y gestión de activos internacionales.</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {successStories && successStories.map((story) => (
                            <div key={story.id} className="group cursor-pointer w-full md:w-[30%] min-w-[300px]">
                                <div className="relative h-80 rounded-2xl overflow-hidden mb-6 border border-gray-800 group-hover:border-lh-gold transition-colors">
                                    <img
                                        src={story.image}
                                        alt={story.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>

                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="bg-lh-gold text-black font-bold text-center py-2 rounded uppercase tracking-widest text-sm shadow-lg font-sans">
                                            Vendido
                                        </div>
                                    </div>
                                </div>

                                <h3 className="font-heading text-xl font-bold text-white mb-1">
                                    {story.title}
                                </h3>
                                <p className="text-gray-400 text-sm uppercase mb-1 font-sans tracking-wide">{story.subtitle}</p>
                                <p className="text-gray-600 text-xs uppercase tracking-wider font-sans">{story.specs}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Projects;