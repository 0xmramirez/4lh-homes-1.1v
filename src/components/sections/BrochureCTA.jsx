import React, { useState } from 'react';
import { Download, CheckCircle, Lock } from 'lucide-react';

const BrochureCTA = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    // Simulación de envío (Aquí conectaríamos con Mailchimp más adelante)
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      // Aquí se dispararía la descarga real del PDF
      // window.open('/assets/dossier-4lh-2025.pdf', '_blank'); 
    }, 1500);
  };

  return (
    <section className="py-20 bg-lh-blue relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-bottom-right pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* IMAGEN / PORTADA VISUAL */}
          <div className="md:w-1/2 bg-gray-100 relative min-h-[300px]">
            <img 
              src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1000&auto=format&fit=crop" 
              alt="Luxury Interior" 
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-lh-blue/40 flex items-center justify-center p-8">
                {/* Simulación visual de la portada del PDF */}
                <div className="bg-white p-6 shadow-2xl max-w-[200px] transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="h-4 w-12 bg-lh-blue mb-4"></div>
                    <div className="h-2 w-full bg-gray-200 mb-2"></div>
                    <div className="h-2 w-2/3 bg-gray-200 mb-2"></div>
                    <div className="mt-8 border-t pt-2">
                        <p className="text-[10px] text-lh-gold font-bold uppercase tracking-widest">Dossier 2025</p>
                        <p className="text-xs font-bold text-lh-blue">Oportunidades de Inversión</p>
                    </div>
                </div>
            </div>
          </div>

          {/* FORMULARIO DE CAPTURA */}
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="font-heading text-3xl font-bold text-lh-blue mb-2">Descargue el Dossier 2025</h2>
            <p className="text-gray-600 mb-8">
              Obtenga acceso detallado a nuestros números, historial de proyectos y proyecciones de rentabilidad en North Port y Port Charlotte.
            </p>

            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center animate-fade-in-up">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                <h3 className="font-bold text-green-800 text-lg">¡Gracias por su interés!</h3>
                <p className="text-green-600 text-sm mb-4">La descarga ha comenzado automáticamente.</p>
                <button 
                    onClick={() => setStatus('idle')}
                    className="text-sm text-green-700 underline hover:text-green-900"
                >
                    Volver al formulario
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">Correo Electrónico Corporativo</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="ejemplo@empresa.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lh-gold focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-lh-blue text-white font-bold py-4 rounded-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-2 group"
                >
                  {status === 'loading' ? 'Procesando...' : (
                    <>
                      <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                      DESCARGAR PDF
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center text-xs text-gray-400 mt-4 gap-1">
                    <Lock className="w-3 h-3" />
                    <span>Sus datos están seguros. No enviamos spam.</span>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default BrochureCTA;