import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle'); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('loading');
    
    // Simulación de envío
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      
      {/* 1. HERO PREMIUM (Con imagen de fondo y más altura) */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        
        {/* IMAGEN DE FONDO */}
        <div className="absolute inset-0">
            <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
                alt="Office Luxury" 
                className="w-full h-full object-cover"
            />
            {/* Superposición azul oscura para que el texto se lea perfecto */}
            <div className="absolute inset-0 bg-lh-blue/85 mix-blend-multiply"></div>
        </div>

        {/* CONTENIDO CENTRADO */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-lh-gold font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-4 block"
            >
                Estamos listos para escucharle
            </motion.span>
            
            <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
                Hablemos de su <span className="text-lh-gold italic">Futuro</span>
            </motion.h1>
            
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-gray-200 text-lg md:text-xl font-light max-w-2xl mx-auto"
            >
                Un equipo de expertos espera para convertir sus objetivos de inversión en una estrategia sólida en Florida.
            </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* 2. COLUMNA IZQUIERDA: INFORMACIÓN */}
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
            >
                <div>
                    <h2 className="font-heading text-3xl text-lh-blue font-bold mb-6">Información de Contacto</h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                        Preferimos el trato directo. Llámenos, escríbanos o visítenos en nuestras oficinas para una asesoría personalizada.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Tarjeta Teléfono */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-lh-gold transition-colors group">
                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-lh-blue transition-colors">
                            <Phone className="w-6 h-6 text-lh-blue group-hover:text-lh-gold transition-colors" />
                        </div>
                        <h3 className="font-bold text-lh-blue mb-1">Llámenos</h3>
                        <p className="text-gray-500 text-sm mb-2">Lunes a Viernes, 9am - 6pm</p>
                        <a href="tel:+15550000000" className="text-lh-gold font-bold hover:underline">+1 (555) 000-0000</a>
                    </div>

                    {/* Tarjeta Email */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-lh-gold transition-colors group">
                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-lh-blue transition-colors">
                            <Mail className="w-6 h-6 text-lh-blue group-hover:text-lh-gold transition-colors" />
                        </div>
                        <h3 className="font-bold text-lh-blue mb-1">Escríbanos</h3>
                        <p className="text-gray-500 text-sm mb-2">Respuesta en menos de 24h</p>
                        <a href="mailto:info@4lhgroup.com" className="text-lh-gold font-bold hover:underline">info@4lhgroup.com</a>
                    </div>
                </div>

                {/* Ubicaciones */}
                <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-lh-gold">
                    <h3 className="font-heading text-xl font-bold text-lh-blue mb-6 flex items-center">
                        <MapPin className="w-5 h-5 mr-2 text-lh-gold" /> Nuestras Oficinas
                    </h3>
                    
                    <div className="space-y-6">
                        <div className="relative pl-6 border-l border-gray-200">
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                            <h4 className="font-bold text-gray-800">Oficina Principal (Miami)</h4>
                            <p className="text-gray-500 text-sm">123 Brickell Ave, Suite 400<br/>Miami, FL 33131</p>
                        </div>
                        
                        <div className="relative pl-6 border-l border-gray-200">
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-lh-gold"></div>
                            <h4 className="font-bold text-gray-800">Centro de Operaciones (North Port)</h4>
                            <p className="text-gray-500 text-sm">456 Tamiami Trail<br/>North Port, FL 34287</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 3. COLUMNA DERECHA: FORMULARIO */}
            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl border border-gray-100"
            >
                {formStatus === 'success' ? (
                    <div className="text-center py-12">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-10 h-10 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-lh-blue mb-2">¡Mensaje Enviado!</h3>
                        <p className="text-gray-500 mb-6">Gracias por contactarnos. Un asesor de 4LH se pondrá en contacto con usted a la brevedad.</p>
                        <button 
                            onClick={() => setFormStatus('idle')}
                            className="text-lh-gold font-bold hover:underline"
                        >
                            Enviar otro mensaje
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <h3 className="text-xl font-bold text-lh-blue mb-2">Envíenos un mensaje</h3>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Nombre</label>
                                <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lh-gold transition-all" placeholder="Juan" required />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Apellido</label>
                                <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lh-gold transition-all" placeholder="Pérez" required />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Correo Electrónico</label>
                            <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lh-gold transition-all" placeholder="juan@ejemplo.com" required />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Tipo de Consulta</label>
                            <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lh-gold transition-all">
                                <option>Quiero ser Inversionista (Capital)</option>
                                <option>Quiero comprar una propiedad</option>
                                <option>Tengo un terreno para vender</option>
                                <option>Otra consulta</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Mensaje</label>
                            <textarea rows="4" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lh-gold transition-all" placeholder="¿En qué podemos ayudarle?" required></textarea>
                        </div>

                        <button 
                            type="submit" 
                            disabled={formStatus === 'loading'}
                            className="w-full bg-lh-blue text-white font-bold py-4 rounded-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
                        >
                            {formStatus === 'loading' ? 'Enviando...' : (
                                <>Enviar Mensaje <Send className="w-4 h-4" /></>
                            )}
                        </button>
                    </form>
                )}
            </motion.div>

        </div>
      </div>
      
      {/* 4. MAPA VISUAL (Imagen estática elegante) */}
      <section className="h-[400px] w-full relative group overflow-hidden">
        {/* Aquí usaremos una imagen de mapa estilizada. Si tuvieras API Key de Google Maps, iría aquí */}
        <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
            alt="Map Location" 
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-lh-blue/30 flex items-center justify-center">
            <a 
                href="https://goo.gl/maps/tucodigodemapa" 
                target="_blank" 
                rel="noreferrer"
                className="bg-white text-lh-blue px-8 py-3 rounded-full font-bold shadow-2xl hover:bg-lh-gold hover:text-black transition-colors flex items-center gap-2"
            >
                <MapPin className="w-5 h-5" />
                Ver Ubicación en Google Maps
            </a>
        </div>
      </section>

    </div>
  );
};

export default Contact;