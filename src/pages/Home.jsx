import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import { projects } from '../data/projectsData'; // Importamos tus proyectos
import { ArrowRight, Star, ShieldCheck, Users, TrendingUp } from 'lucide-react';

const Home = () => {
  // Tomamos solo los primeros 3 proyectos para mostrar en la portada
  const featuredProjects = projects.slice(0, 3);

  return (
    <div>
      
      <Hero />

      {/* 2. INTRODUCCIÓN / VISIÓN */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-lh-gold font-bold tracking-widest uppercase text-sm">Sobre 4LH Group</span>
              <h2 className="font-heading text-4xl text-lh-blue mt-2 mb-6 font-bold">
                Expertos en Desarrollo Inmobiliario en <span className="text-lh-gold">South Florida</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                No somos solo constructores; somos estrategas de inversión. Identificamos las zonas de mayor crecimiento en North Port y Port Charlotte para desarrollar propiedades que maximizan el retorno de nuestros socios y la calidad de vida de nuestros compradores.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                    <ShieldCheck className="w-8 h-8 text-lh-gold mr-3 shrink-0" />
                    <div>
                        <h4 className="font-bold text-lh-blue">Seguridad</h4>
                        <p className="text-sm text-gray-500">Activos tangibles y gestión transparente.</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <TrendingUp className="w-8 h-8 text-lh-gold mr-3 shrink-0" />
                    <div>
                        <h4 className="font-bold text-lh-blue">Plusvalía</h4>
                        <p className="text-sm text-gray-500">Zonas de revalorización acelerada.</p>
                    </div>
                </div>
              </div>

              <Link to="/nosotros" className="text-lh-blue font-bold border-b-2 border-lh-gold pb-1 hover:text-lh-gold transition-colors inline-flex items-center">
                Conozca a nuestro equipo <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="relative">
              {/* Imagen decorativa */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-lh-gold/20 rounded-full z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop" 
                alt="Construction Site" 
                className="relative z-10 rounded-2xl shadow-2xl w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-8 -right-6 bg-white p-6 rounded-lg shadow-xl z-20 max-w-xs border-l-4 border-lh-blue hidden md:block">
                <div className="flex items-center mb-2">
                    <Users className="w-5 h-5 text-lh-gold mr-2" />
                    <span className="font-bold text-lh-blue">Atención Personalizada</span>
                </div>
                <p className="text-xs text-gray-500">Acompañamiento integral desde la selección del lote hasta la entrega de llaves.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROYECTOS DESTACADOS (Dinámico) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <h2 className="font-heading text-4xl text-lh-blue font-bold">Proyectos Recientes</h2>
                    <p className="text-gray-500 mt-2">Oportunidades de inversión y vivienda disponibles.</p>
                </div>
                <Link to="/proyectos" className="hidden md:flex items-center bg-lh-blue text-white px-6 py-3 rounded hover:bg-gray-800 transition">
                    Ver Portafolio Completo <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {featuredProjects.map((project) => (
                    <Link to={`/proyectos/${project.id}`} key={project.id} className="group">
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100">
                            <div className="relative h-64 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-lh-blue shadow-sm">
                                    {project.status === 'sale' ? 'En Venta' : project.status === 'construction' ? 'En Obra' : 'Vendido'}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-heading text-lg font-bold text-lh-blue mb-1 group-hover:text-lh-gold transition-colors truncate">{project.title}</h3>
                                <p className="text-gray-500 text-sm mb-4">{project.location}</p>
                                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                                    <span className="font-bold text-xl text-lh-blue">{project.price}</span>
                                    <span className="text-xs text-gray-400 font-semibold">Ver Detalles &rarr;</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-8 text-center md:hidden">
                <Link to="/proyectos" className="inline-flex items-center bg-lh-blue text-white px-6 py-3 rounded hover:bg-gray-800 transition">
                    Ver Todos <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
            </div>
        </div>
      </section>

      {/* 4. TESTIMONIOS (Social Proof) */}
      <section className="py-20 bg-lh-blue text-white relative overflow-hidden">
        {/* Patrón de fondo */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-16">Lo que dicen nuestros socios</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
                {/* Testimonio 1 */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-lh-gold transition-colors">
                    <div className="flex justify-center mb-4">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-lh-gold fill-current" />)}
                    </div>
                    <p className="text-gray-300 italic mb-6">"La transparencia en los reportes de obra y la puntualidad en los retornos hacen de 4LH mi opción preferida para diversificar en dólares."</p>
                    <div>
                        <h4 className="font-bold text-white">Carlos M.</h4>
                        <p className="text-xs text-lh-gold uppercase tracking-widest">Inversor desde Colombia</p>
                    </div>
                </div>

                {/* Testimonio 2 */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-lh-gold transition-colors transform md:-translate-y-4">
                    <div className="flex justify-center mb-4">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-lh-gold fill-current" />)}
                    </div>
                    <p className="text-gray-300 italic mb-6">"Compré mi casa en pre-construcción con ellos en North Port. El proceso fue impecable y la calidad de los acabados superó mis expectativas."</p>
                    <div>
                        <h4 className="font-bold text-white">Familia Rodríguez</h4>
                        <p className="text-xs text-lh-gold uppercase tracking-widest">Propietarios</p>
                    </div>
                </div>

                {/* Testimonio 3 */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-lh-gold transition-colors">
                    <div className="flex justify-center mb-4">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-lh-gold fill-current" />)}
                    </div>
                    <p className="text-gray-300 italic mb-6">"Un equipo profesional que entiende tanto el mercado americano como las necesidades del inversor latino. 100% Recomendados."</p>
                    <div>
                        <h4 className="font-bold text-white">Andrés V.</h4>
                        <p className="text-xs text-lh-gold uppercase tracking-widest">Socio Capitalista</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
};

export default Home;