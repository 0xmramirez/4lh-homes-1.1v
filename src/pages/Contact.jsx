import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID; 
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

    console.log("Intentando enviar con:");
    console.log("Service ID:", SERVICE_ID);
    console.log("Template ID:", TEMPLATE_ID);
    console.log("Public Key:", PUBLIC_KEY);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          setStatus('success');
          form.current.reset();
          setTimeout(() => setStatus(''), 5000); // Limpiar mensaje a los 5s
      }, (error) => {
          setStatus('error');
          console.log(error.text);
      });
  };

  return (
    <div className="pt-20 font-sans bg-gray-50 min-h-screen">
      
      {/* HEADER SIMPLE */}
      <section className="bg-lh-blue py-20 text-center px-6">
        <h1 className="font-heading text-4xl md:text-5xl text-white font-bold mb-4">
            Empecemos la Conversación
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto font-light text-lg">
            Estamos listos para asesorarle en su próximo proyecto de inversión o construcción en Florida.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-16">
        
        {/* 1. INFORMACIÓN DE CONTACTO (Izquierda) */}
        <div className="space-y-10">
            <div>
                <h2 className="font-heading text-3xl font-bold text-lh-blue mb-6">Datos de Contacto</h2>
                <p className="text-gray-600 mb-8">
                    Visítenos en nuestras oficinas o contáctenos directamente. Nuestro equipo habla español e inglés.
                </p>
            </div>

            <div className="space-y-6">
                <div className="flex items-start">
                    <div className="w-12 h-12 bg-lh-gold/10 rounded-full flex items-center justify-center text-lh-gold shrink-0 mr-4">
                        <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-lh-blue">Oficina Principal</h3>
                        <p className="text-gray-600">123 Investment Blvd, Suite 400<br/>Miami, FL 33130</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="w-12 h-12 bg-lh-gold/10 rounded-full flex items-center justify-center text-lh-gold shrink-0 mr-4">
                        <Mail className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-lh-blue">Correo Electrónico</h3>
                        <p className="text-gray-600">info@4lhgroup.com</p>
                        <p className="text-xs text-gray-400 mt-1">Respuesta en menos de 24h</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="w-12 h-12 bg-lh-gold/10 rounded-full flex items-center justify-center text-lh-gold shrink-0 mr-4">
                        <Phone className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-lh-blue">Teléfono</h3>
                        <p className="text-gray-600">+1 (305) 555-0123</p>
                        <p className="text-gray-600">+1 (305) 555-0124</p>
                    </div>
                </div>
            </div>
        </div>

        {/* 2. FORMULARIO (Derecha) */}
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="font-heading text-2xl font-bold text-lh-blue mb-6">Envíenos un mensaje</h3>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
                
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Nombre</label>
                        <input type="text" name="user_name" required className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-lh-gold transition-colors" placeholder="Su nombre" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Teléfono</label>
                        <input type="tel" name="user_phone" className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-lh-gold transition-colors" placeholder="+1 (555)..." />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Correo Electrónico</label>
                    <input type="email" name="user_email" required className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-lh-gold transition-colors" placeholder="ejemplo@correo.com" />
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Interés Principal</label>
                    <select name="interest" className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-lh-gold transition-colors">
                        <option value="Inversión">Quiero Invertir Capital</option>
                        <option value="Construcción">Construir mi Casa (Lote Propio)</option>
                        <option value="Compra">Comprar Proyecto Terminado</option>
                        <option value="Otro">Otro</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Mensaje</label>
                    <textarea name="message" required rows="4" className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-lh-gold transition-colors" placeholder="¿Cómo podemos ayudarle?"></textarea>
                </div>

                <button 
                    type="submit" 
                    disabled={status === 'sending'}
                    className={`w-full py-4 rounded font-bold uppercase tracking-widest text-white transition-all flex items-center justify-center gap-2 ${status === 'sending' ? 'bg-gray-400 cursor-not-allowed' : 'bg-lh-gold hover:bg-black shadow-lg hover:shadow-xl'}`}
                >
                    {status === 'sending' ? 'Enviando...' : (
                        <>Enviar Mensaje <Send className="w-4 h-4" /></>
                    )}
                </button>

                {/* MENSAJES DE ESTADO */}
                {status === 'success' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded border border-green-200">
                        <CheckCircle className="w-5 h-5" />
                        <span>¡Mensaje enviado! Nos pondremos en contacto pronto.</span>
                    </motion.div>
                )}
                
                {status === 'error' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded border border-red-200">
                        <AlertCircle className="w-5 h-5" />
                        <span>Hubo un error. Por favor intente más tarde o escríbanos directo.</span>
                    </motion.div>
                )}

            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;