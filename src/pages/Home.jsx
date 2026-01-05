import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, TrendingUp, Building, Wallet, HardHat } from 'lucide-react';

// IMÁGENES DEL CARRUSEL (Asegúrate de tener estas o usar las tuyas locales)
const heroImages = [
    "https://images.unsplash.com/photo-1600596542815-e32c2159f828?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&w=2000&auto=format&fit=crop"
];

const Home = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="font-sans text-gray-800">

            {/* 1. HERO SECTION (CARRUSEL) */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-black">
                    <AnimatePresence mode='wait'>
                        <motion.img
                            key={currentImage}
                            src={heroImages[currentImage]}
                            alt="Hero Background"
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5 }}
                            className="absolute inset-0 w-full h-full object-cover opacity-60"
                        />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-lh-gold font-bold tracking-[0.3em] uppercase text-sm md:text-base mb-6 block">
                            Bienvenidos a 4LH Group
                        </span>
                        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
                            Inversión Inmobiliaria <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lh-gold to-yellow-200">
                                Verticalmente Integrada
                            </span>
                        </h1>
                        <p className="text-gray-200 text-lg md:text-2xl font-light mb-10 max-w-3xl mx-auto leading-relaxed">
                            Desarrolladora inmobiliaria especializada en construcción residencial y gestión de capital en <span className="text-white font-bold">Florida y South Carolina</span>.
                        </p>

                        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                            <Link to="/proyectos" className="px-8 py-4 bg-lh-gold text-black font-bold text-lg rounded hover:bg-white transition-all w-full md:w-auto min-w-[200px]">
                                Ver Propiedades
                            </Link>
                            <Link to="/inversionistas" className="px-8 py-4 bg-transparent border border-white text-white font-bold text-lg rounded hover:bg-white hover:text-black transition-all w-full md:w-auto min-w-[200px] flex items-center justify-center gap-2">
                                Invertir Capital <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Indicadores */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
                    {heroImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImage(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImage ? 'bg-lh-gold w-8' : 'bg-white/50 hover:bg-white'
                                }`}
                        />
                    ))}
                </div>
            </section>

            {/* 2. NUEVA SECCIÓN: QUIÉNES SOMOS (Rescatando info corporativa) */}
            <section className="py-24 bg-white px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-black mb-6">
                        Más que constructores, somos su socio local en Florida
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-12">
                        4LH Group nace para cerrar la brecha entre el inversor internacional y el mercado inmobiliario americano.
                        Eliminamos intermediarios innecesarios al controlar <strong>toda la cadena de valor</strong>: compramos la tierra, desarrollamos el proyecto, construimos con equipos propios y comercializamos el activo final.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                            <Building className="w-10 h-10 text-lh-gold mx-auto mb-4" />
                            <h3 className="font-bold text-xl mb-2">Desarrollo</h3>
                            <p className="text-sm text-gray-500">Identificación de lotes premium y gestión de permisos en tiempo récord.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                            <HardHat className="w-10 h-10 text-lh-gold mx-auto mb-4" />
                            <h3 className="font-bold text-xl mb-2">Construcción</h3>
                            <p className="text-sm text-gray-500">Ejecución de obra con estándares de calidad superiores y control de costos.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                            <Wallet className="w-10 h-10 text-lh-gold mx-auto mb-4" />
                            <h3 className="font-bold text-xl mb-2">Capital</h3>
                            <p className="text-sm text-gray-500">Estructuración de vehículos de inversión para maximizar el retorno del socio.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. POR QUÉ FLORIDA / ESTADÍSTICAS */}
            <section className="py-20 bg-lh-dark text-white border-y border-gray-800">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
                    <div>
                        <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6 text-lh-gold border border-gray-700">
                            <Shield className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 font-heading">Seguridad Jurídica</h3>
                        <p className="text-gray-400">Proteja su patrimonio en una economía dolarizada con títulos de propiedad a su nombre.</p>
                    </div>
                    <div>
                        <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6 text-lh-gold border border-gray-700">
                            <TrendingUp className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 font-heading">Demanda Creciente</h3>
                        <p className="text-gray-400">South Florida y Port Charlotte lideran el crecimiento demográfico en EE.UU., garantizando la revalorización.</p>
                    </div>
                    <div>
                        <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6 text-lh-gold border border-gray-700">
                            <Star className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 font-heading">Experiencia Probada</h3>
                        <p className="text-gray-400">Un equipo multidisciplinario con trayectoria exitosa en Colombia y Estados Unidos.</p>
                    </div>
                </div>
            </section>

            {/* 4. PROYECTO DESTACADO (BEST SELLER) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative order-2 lg:order-1">
                        <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-lh-gold"></div>
                        <img
                            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2000&auto=format&fit=crop"
                            alt="Casa Modelo"
                            className="rounded shadow-2xl relative z-10 w-full h-[500px] object-cover"
                        />
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-lh-gold"></div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <span className="text-lh-gold font-bold tracking-widest uppercase text-sm">Modelo Destacado</span>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 mb-6 text-black">Modelo "The Palm"</h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Diseñado para maximizar el valor de reventa. Nuestro modelo insignia combina eficiencia constructiva con acabados de lujo, ideal tanto para familias como para inversores de renta larga.
                        </p>

                        <div className="grid grid-cols-2 gap-8 mb-8 border-y border-gray-100 py-6">
                            <div>
                                <p className="text-3xl font-bold text-black">1,800</p>
                                <p className="text-gray-400 text-sm uppercase tracking-wider">Sq Ft Totales</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-black">10 Meses</p>
                                <p className="text-gray-400 text-sm uppercase tracking-wider">Tiempo Ejecución</p>
                            </div>
                        </div>

                        <Link to="/proyectos/1" className="bg-black text-white px-8 py-3 rounded hover:bg-lh-gold hover:text-black transition-all inline-flex items-center gap-2 font-bold">
                            Ver Detalles Completos <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* 6. SECCIÓN DE TESTIMONIOS (Rescatado de la web anterior) */}
            <section className="py-24 bg-gray-50 px-6">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-black mb-4">Lo que dicen nuestros socios</h2>
                    <div className="w-20 h-1 bg-lh-gold mx-auto"></div>
                </div>

                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                    {/* Testimonio 1 */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 italic text-gray-600 relative">
                        <div className="text-6xl text-lh-gold opacity-30 absolute top-4 left-4 font-serif">"</div>
                        <p className="mb-6 relative z-10">
                            "Invertir con 4LH me dio la tranquilidad de tener mi capital respaldado en ladrillos en USA. La transparencia en los reportes de obra es impecable."
                        </p>
                        <div className="flex items-center justify-center gap-3 not-italic">
                            <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                                {/* Usa una foto real o un placeholder */}
                                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Cliente" />
                            </div>
                            <div className="text-left">
                                <p className="font-bold text-black text-sm">Carlos M.</p>
                                <p className="text-xs text-gray-400">Inversionista desde 2021</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonio 2 */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 italic text-gray-600 relative">
                        <div className="text-6xl text-lh-gold opacity-30 absolute top-4 left-4 font-serif">"</div>
                        <p className="mb-6 relative z-10">
                            "El proceso de construcción de mi casa en North Port fue mucho más rápido de lo esperado. Cumplieron con los tiempos a pesar de los retos del clima."
                        </p>
                        <div className="flex items-center justify-center gap-3 not-italic">
                            <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Cliente" />
                            </div>
                            <div className="text-left">
                                <p className="font-bold text-black text-sm">Sarah Jenkins</p>
                                <p className="text-xs text-gray-400">Propietaria Modelo Palm</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonio 3 */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 italic text-gray-600 relative">
                        <div className="text-6xl text-lh-gold opacity-30 absolute top-4 left-4 font-serif">"</div>
                        <p className="mb-6 relative z-10">
                            "Excelente equipo humano. Me guiaron no solo en la construcción, sino en toda la estructura legal para traer mi capital desde Colombia."
                        </p>
                        <div className="flex items-center justify-center gap-3 not-italic">
                            <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                                <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="Cliente" />
                            </div>
                            <div className="text-left">
                                <p className="font-bold text-black text-sm">Andrés R.</p>
                                <p className="text-xs text-gray-400">Socio de Capital</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CTA FINAL */}
            <section className="py-20 bg-lh-gold text-center px-6">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-black mb-4">¿Listo para comenzar su proyecto?</h2>
                <p className="text-black/80 max-w-2xl mx-auto mb-8 text-lg">
                    Ya sea que busque construir su hogar soñado o diversificar su portafolio de inversión.
                </p>
                <div className="flex justify-center gap-4">
                    <Link to="/contacto" className="bg-black text-white px-8 py-3 rounded font-bold hover:bg-white hover:text-black transition-colors shadow-lg">
                        Contactar Asesor
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default Home;