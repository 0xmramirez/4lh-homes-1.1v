import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Globe, Award, Linkedin, Mail } from 'lucide-react';

const About = () => {
  // DATOS DEL EQUIPO (Placeholder)
  // Aquí luego pondremos las fotos reales y nombres de tus socios
  const teamMembers = [
    {
      id: 1,
      name: "Rodrigo Buitrago",
      role: "CEO & Co-Founder",
      image: "/images/equipo/PHOTO-2024-05-24-15-06-41.webp",
      bio: "Experto en desarrollo inmobiliario con más de 15 años de experiencia liderando proyectos en Colombia y Florida."
    },
    {
      id: 2,
      name: "Juan David Ramírez",
      role: "Director de Operaciones",
      image: "/images/equipo/IMG_1744.webp",
      bio: "Especialista en gestión de obra y optimización de recursos. Garantiza la ejecución perfecta de cada vivienda."
    },
    {
      id: 3,
      name: "Isabel Ochoa",
      role: "Head of Sales",
      image: "/images/equipo/IMG_9126 2.webp",
      bio: "Encargada de las relaciones con inversionistas y la estrategia de comercialización de activos."
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      
      {/* 1. HERO CON TEXTO GRANDE */}
      <section className="relative bg-lh-dark py-24 px-6 text-center overflow-hidden">
        {/* Fondo decorativo sutil */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute right-0 top-0 w-96 h-96 bg-lh-gold rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lh-gold font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Nuestra Esencia
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-6xl text-white font-bold mb-8 leading-tight"
          >
            Más que Constructores, somos su <span className="text-lh-gold italic">Socio Estratégico</span>
          </motion.h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
            Nacimos de la visión de conectar capital inteligente con oportunidades reales de desarrollo en South Florida, brindando seguridad y rentabilidad en cada ladrillo.
          </p>
        </div>
      </section>

      {/* 2. NUESTRA HISTORIA (TEXTO + IMAGEN) */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
                <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop" 
                    alt="Team meeting" 
                    className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-xl shadow-xl max-w-xs border-l-4 border-lh-gold hidden md:block">
                    <p className="font-heading text-5xl font-bold text-lh-blue mb-2">15+</p>
                    <p className="text-gray-500 text-sm uppercase tracking-wider">Años de Experiencia Combinada</p>
                </div>
            </div>
            
            <div>
                <h2 className="font-heading text-4xl text-lh-blue font-bold mb-6">Del éxito local a la expansión internacional</h2>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                    <p>
                        4LH Group consolida la experiencia de profesionales que han liderado exitosamente desarrollos inmobiliarios en Colombia y Estados Unidos.
                    </p>
                    <p>
                        Entendimos que el inversor latino busca algo más que rentabilidad: busca <strong>seguridad jurídica y dolarización de patrimonio</strong>. Por eso, especializamos nuestra operación en South Florida, una región con un déficit habitacional histórico y un crecimiento demográfico que garantiza la demanda.
                    </p>
                    <p>
                        Nuestro modelo elimina la incertidumbre de la construcción tradicional, ofreciendo un sistema "Llave en Mano" donde nosotros gestionamos el 100% de la operación.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* 3. VALORES (ICONOS) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="font-heading text-3xl font-bold text-lh-blue">Nuestros Pilares</h2>
                <div className="w-20 h-1 bg-lh-gold mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center group">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-lh-blue transition-colors">
                        <Target className="w-8 h-8 text-lh-blue group-hover:text-lh-gold transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-lh-blue mb-3">Enfoque en Resultados</h3>
                    <p className="text-gray-600">No especulamos. Elegimos proyectos basándonos en datos duros de mercado y proyecciones conservadoras.</p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center group">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-lh-blue transition-colors">
                        <Globe className="w-8 h-8 text-lh-blue group-hover:text-lh-gold transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-lh-blue mb-3">Visión Global</h3>
                    <p className="text-gray-600">Conectamos oportunidades locales con capital global, entendiendo las necesidades fiscales del inversor extranjero.</p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center group">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-lh-blue transition-colors">
                        <Award className="w-8 h-8 text-lh-blue group-hover:text-lh-gold transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-lh-blue mb-3">Excelencia Constructiva</h3>
                    <p className="text-gray-600">Calidad superior en acabados y procesos. Construimos casas que nosotros mismos querríamos habitar.</p>
                </div>
            </div>
        </div>
      </section>

      {/* 4. EL EQUIPO */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-lh-blue mb-4">Liderazgo</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Conozca a los profesionales detrás de su inversión.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
            {teamMembers.map((member) => (
                <div key={member.id} className="group text-center">
                    {/* Foto con efecto */}
                    <div className="relative w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-lh-gold transition-colors duration-500">
                        <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                        />
                    </div>
                    
                    <h3 className="text-2xl font-heading font-bold text-lh-blue">{member.name}</h3>
                    <p className="text-lh-gold font-bold text-sm uppercase tracking-widest mb-4">{member.role}</p>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 px-4">{member.bio}</p>
                    
                    {/* Iconos Sociales */}
                    <div className="flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a href="#" className="text-gray-400 hover:text-lh-blue"><Linkedin className="w-5 h-5"/></a>
                        <a href="#" className="text-gray-400 hover:text-lh-blue"><Mail className="w-5 h-5"/></a>
                    </div>
                </div>
            ))}
        </div>
      </section>

    </div>
  );
};

export default About;