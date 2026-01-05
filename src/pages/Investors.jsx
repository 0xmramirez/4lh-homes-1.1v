import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import ProfitChart from '../components/ui/ProfitChart';
import {
  TrendingUp,
  BadgeDollarSign,
  FileText,
  Megaphone, 
  DollarSign
} from 'lucide-react';

// --- DATOS DEL CICLO DE INVERSIÓN (ENFOQUE FINANCIERO ACTUALIZADO) ---
const investmentCycle = [
  {
    id: 1,
    step: "01",
    title: "Estructuración Legal",
    description: "Firma de contrato y constitución de vehículo legal (LLC). Su capital entra seguro a una cuenta Escrow gestionada por terceros.",
    icon: <FileText className="w-6 h-6 text-lh-gold" />
  },
  {
    id: 2,
    step: "02",
    title: "Asignación de Activo",
    description: "Su capital se vincula a un lote específico. Usted recibe los títulos que certifican su participación legal en la propiedad.",
    icon: <TrendingUp className="w-6 h-6 text-lh-gold" />
  },
  {
    id: 3,
    step: "03",
    title: "Desarrollo y Valorización",
    description: "Durante la construcción (10-12 meses), su inversión gana valor (Equity) automáticamente a medida que la obra avanza.",
    icon: <Megaphone className="w-6 h-6 text-lh-gold" />
  },
  {
    id: 4,
    step: "04",
    title: "Venta y Retorno",
    description: "Cierre de venta (Closing). Se liquida la inversión y se transfiere su capital más los rendimientos pactados a su cuenta.",
    icon: <DollarSign className="w-6 h-6 text-lh-gold" />
  }
];

const Investors = () => {
  return (
    <div className="pt-20 bg-gray-50 overflow-x-hidden">

      {/* 1. HERO RESPONSIVE */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-lh-blue">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
            alt="Luxury Home"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-4xl sm:text-5xl md:text-7xl text-white mb-6 tracking-wide leading-tight"
          >
            Inversión <span className="text-lh-gold italic">Inteligente</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 font-light"
          >
            Maximice su capital con proyectos residenciales de alto valor en Florida.
          </motion.p>
        </div>
      </section>

      {/* 2. DATOS QUE IMPACTAN */}
      <section className="relative z-20 px-4 md:px-10 -mt-10">
        <div className="bg-white shadow-xl rounded-2xl border-b border-gray-100 p-8 md:p-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 text-center">
            <div>
              <div className="text-3xl md:text-5xl font-sans font-bold text-lh-blue mb-2">
                +<CountUp end={18} duration={2.5} enableScrollSpy />%
              </div>
              <p className="text-gray-500 text-xs md:text-sm uppercase tracking-widest font-sans">ROI Estimado</p>
            </div>

            <div>
              <div className="text-3xl md:text-5xl font-sans font-bold text-lh-blue mb-2">
                <CountUp end={14} duration={3} enableScrollSpy />
              </div>
              <p className="text-gray-500 text-xs md:text-sm uppercase tracking-widest font-sans">Meses Promedio</p>
            </div>

            <div>
              <div className="text-3xl md:text-5xl font-sans font-bold text-lh-blue mb-2">
                +<CountUp end={50} duration={2} enableScrollSpy />
              </div>
              <p className="text-gray-500 text-xs md:text-sm uppercase tracking-widest font-sans">Proyectos</p>
            </div>

            <div>
              <div className="text-3xl md:text-5xl font-sans font-bold text-lh-blue mb-2">
                100%
              </div>
              <p className="text-gray-500 text-xs md:text-sm uppercase tracking-widest font-sans">Gestión Integral</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MODELOS DE INVERSIÓN */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-lh-blue mb-4">Modelos de Inversión</h2>
            <div className="w-24 h-1 bg-lh-gold mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Adaptamos la estrategia a su objetivo financiero. Ya sea que busque rentabilidad pura o patrimonialización.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* OPCIÓN 1 */}
            <div className="relative group overflow-hidden rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-2 bg-lh-gold"></div>
              <div className="p-8 md:p-10">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-yellow-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-lh-gold group-hover:text-white transition-colors">
                  <span className="text-2xl md:text-3xl font-bold">1</span>
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-lh-blue mb-4">Participar con Nosotros</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                  Ideal para quienes desean aportar capital y buscan una rentabilidad líquida sobre el proyecto sin complicaciones de gestión.
                </p>

                <Link
                  to="/oportunidades-inversion"
                  className="block w-full bg-lh-gold text-black font-bold py-4 rounded shadow-md hover:bg-yellow-500 transition-all text-center uppercase tracking-wider text-sm"
                >
                  Quiero Invertir Capital
                </Link>
                
              </div>
            </div>

            {/* OPCIÓN 2 */}
            <div className="relative group overflow-hidden rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-2 bg-lh-blue"></div>
              <div className="p-8 md:p-10">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-lh-blue group-hover:text-white transition-colors">
                  <span className="text-2xl md:text-3xl font-bold">2</span>
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-lh-blue mb-4">Construir tu Propiedad</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                  Ponga su patrimonio a nombre suyo. Construimos uno de nuestros 6 modelos en su propio lote.
                </p>
                <Link to="/proyectos" className="block w-full py-3 border-2 border-gray-200 text-gray-600 font-bold rounded hover:border-lh-blue hover:text-lh-blue transition-colors text-sm md:text-base text-center">
                  Ver Modelos de Casas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GRÁFICA vs TEXTO */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h2 className="font-heading text-3xl md:text-4xl text-lh-blue mb-6">Rentabilidad Superior</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              Mientras los instrumentos tradicionales ofrecen retornos limitados, nuestro modelo de desarrollo inmobiliario captura el valor creado desde la construcción.
            </p>
            <ul className="space-y-4 font-heading text-base md:text-lg">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-lh-gold rounded-full shrink-0"></span> Sin intermediarios costosos.
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-lh-gold rounded-full shrink-0"></span> Control total de la obra.
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-4 md:p-6 rounded-2xl shadow-xl border border-gray-100 order-1 md:order-2"
          >
            <ProfitChart />
          </motion.div>
        </div>
      </section>

      {/* 5. CICLO DE CAPITAL (NUEVO DISEÑO HIGH CONTRAST) */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
          
          {/* Patrón de puntos sutil en el fondo */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px]"></div>

          <div className="max-w-5xl mx-auto px-6 relative z-10">
              <div className="text-center mb-20">
                  <span className="text-lh-gold font-bold tracking-widest uppercase text-sm">Modelo de Negocio</span>
                  <h2 className="font-heading text-4xl md:text-5xl font-bold mt-2 text-white">El Ciclo de su Capital</h2>
              </div>

              <div className="relative">
                  {/* LÍNEA CENTRAL */}
                  <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-800 md:-translate-x-1/2"></div>

                  <div className="space-y-16">
                      {investmentCycle.map((item, index) => (
                          <div key={item.id} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                              
                              {/* MITAD VACÍA */}
                              <div className="flex-1 hidden md:block"></div>

                              {/* ICONO CENTRAL (Negro con borde amarillo) */}
                              <div className="absolute left-4 md:left-1/2 w-14 h-14 bg-black rounded-full flex items-center justify-center border-2 border-lh-gold z-10 md:-translate-x-1/2 transform -translate-y-1/2 md:translate-y-0 mt-8 md:mt-0 shadow-[0_0_15px_rgba(255,212,0,0.3)]">
                                  {item.icon}
                              </div>

                              {/* TARJETA (BLANCA) - ESTILO NUEVO */}
                              <div className="flex-1 pl-16 md:pl-0 w-full">
                                  <div className={`bg-white p-8 rounded-xl shadow-2xl relative group ${index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'}`}>
                                      
                                      {/* Número Gigante de Fondo (Gris muy claro) */}
                                      <span className="absolute top-2 right-4 text-6xl font-bold text-gray-100 select-none">
                                          {item.step}
                                      </span>
                                      
                                      <h3 className="text-xl font-bold text-black mb-3 relative z-10">{item.title}</h3>
                                      <p className="text-gray-600 text-sm leading-relaxed relative z-10 font-medium">
                                          {item.description}
                                      </p>
                                  </div>
                              </div>

                          </div>
                      ))}
                  </div>
              </div>

          </div>
      </section>

      {/* 6. POR QUÉ SOUTH FLORIDA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="font-heading text-3xl md:text-4xl text-lh-blue mb-6">
                ¿Por qué <span className="text-lh-gold">South Florida?</span>
              </h2>
              <p className="font-sans text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
                El flujo constante de migración interna y la política fiscal favorable crean el ecosistema perfecto.
              </p>

              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="bg-blue-50 p-3 md:p-4 rounded-xl mr-4 md:mr-5 group-hover:bg-lh-blue transition-colors duration-300 shrink-0">
                    <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-lh-blue group-hover:text-lh-gold transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lh-blue text-lg md:text-xl mb-1">Alta Demanda</h4>
                    <p className="font-sans text-gray-500 text-sm md:text-base">Déficit habitacional histórico que impulsa precios.</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-blue-50 p-3 md:p-4 rounded-xl mr-4 md:mr-5 group-hover:bg-lh-blue transition-colors duration-300 shrink-0">
                    <BadgeDollarSign className="w-6 h-6 md:w-8 md:h-8 text-lh-blue group-hover:text-lh-gold transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lh-blue text-lg md:text-xl mb-1">Beneficios Fiscales</h4>
                    <p className="font-sans text-gray-500 text-sm md:text-base">Florida no tiene impuesto estatal sobre la renta.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative bg-gray-100 rounded-3xl h-[300px] md:h-[450px] overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1535498730771-e735b998cd64?q=80&w=1000&auto=format&fit=crop"
                alt="Florida Map"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-[200px] md:max-w-xs border-l-4 border-lh-gold">
                <p className="text-lh-gold font-bold text-[10px] md:text-xs tracking-widest mb-1">ZONA DE ACTUACIÓN</p>
                <p className="font-heading text-lh-blue font-bold text-base md:text-xl">Port Charlotte & North Port</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. PREGUNTAS FRECUENTES (FAQ) */}
      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-lh-blue">Preguntas Frecuentes</h2>
            <p className="text-gray-500 mt-2 text-sm md:text-base">Respuestas claras para decisiones seguras.</p>
          </div>

          <div className="space-y-4">
            <details className="group bg-white p-5 md:p-6 rounded-lg shadow-sm cursor-pointer border-l-4 border-transparent hover:border-lh-gold transition-all">
              <summary className="flex justify-between items-center font-bold text-lh-blue list-none text-base md:text-lg">
                <span>¿Cuál es el monto mínimo de inversión?</span>
                <span className="transition-transform duration-300 group-open:rotate-180 text-lh-gold">▼</span>
              </summary>
              <p className="text-gray-600 mt-4 text-sm md:text-base leading-relaxed">
                Nuestros modelos de participación suelen comenzar desde montos accesibles para socios capitalistas. Contáctenos para ver la lista de precios actualizada.
              </p>
            </details>

            <details className="group bg-white p-5 md:p-6 rounded-lg shadow-sm cursor-pointer border-l-4 border-transparent hover:border-lh-gold transition-all">
              <summary className="flex justify-between items-center font-bold text-lh-blue list-none text-base md:text-lg">
                <span>¿Qué garantías tengo sobre mi capital?</span>
                <span className="transition-transform duration-300 group-open:rotate-180 text-lh-gold">▼</span>
              </summary>
              <p className="text-gray-600 mt-4 text-sm md:text-base leading-relaxed">
                Su inversión está 100% respaldada por activos tangibles. Trabajamos con contratos legales transparentes y compañías de título certificadas.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 md:py-20 text-center bg-gray-50">
        <h2 className="font-heading text-3xl md:text-4xl text-lh-blue mb-8">¿Hablamos de Números?</h2>
        <Link to="/contacto" className="bg-lh-gold hover:bg-yellow-600 text-white px-8 py-3 md:px-10 md:py-4 rounded font-bold tracking-widest transition-all transform hover:-translate-y-1 shadow-lg text-sm md:text-base">
          AGENDAR LLAMADA
        </Link>
      </section>

    </div>
  );
};

export default Investors;