import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Lock, Download } from 'lucide-react';
// 1. AQUÍ ESTÁ LA IMPORTACIÓN CLAVE: Traemos los datos de tu "base de datos"
import { investmentPools } from '../data/investmentData';

const InvestOpportunities = () => {
    return (
        <div className="pt-20 min-h-screen bg-lh-gray">

            {/* HERO DE LA SECCIÓN */}
            <section className="bg-lh-blue text-white py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <Link to="/inversionistas" className="inline-flex items-center text-gray-400 hover:text-lh-gold mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Volver a Inversionistas
                    </Link>
                    <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                        Oportunidades de <span className="text-lh-gold">Capital</span>
                    </h1>
                    <p className="text-gray-300 max-w-2xl text-lg">
                        Proyectos activos recibiendo aportes de capital. Rentabilidades superiores al mercado tradicional con respaldo en activos reales.
                    </p>
                </div>
            </section>

            {/* LISTADO DE PROYECTOS (POOLS) */}
            <section className="py-16 px-6 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* 2. AQUÍ OCURRE LA MAGIA: Recorremos la lista de datos automáticamente */}
                    {investmentPools.map((pool) => (
                        <motion.div
                            key={pool.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl hover:border-lh-gold transition-all duration-300 ${pool.status === 'closed' ? 'opacity-70 grayscale hover:grayscale-0' : ''}`}
                        >
                            <div className="relative h-56">
                                <img src={pool.image} alt={pool.title} className="w-full h-full object-cover" />
                                
                                {/* Badge dinámico según estado */}
                                <div className={`absolute top-4 right-4 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${pool.status === 'open' ? 'bg-green-500 animate-pulse' : 'bg-gray-600'}`}>
                                    {pool.status === 'open' ? 'Abierto' : 'Cerrado'}
                                </div>
                                
                                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent">
                                    <h3 className="text-xl font-bold text-white">{pool.title}</h3>
                                    <p className="text-gray-300 text-sm">Inversión Inmobiliaria</p>
                                </div>
                            </div>

                            <div className="p-6">
                                {/* Datos Clave Dinámicos */}
                                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                                    <div>
                                        <p className="text-gray-500 text-xs uppercase">Rentabilidad</p>
                                        <p className="font-bold text-lh-blue text-lg">{pool.roi}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-xs uppercase">Plazo</p>
                                        <p className="font-bold text-lh-blue text-lg">{pool.term}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-xs uppercase">Ticket Mín.</p>
                                        <p className="font-bold text-lh-blue text-lg">${pool.min_investment.toLocaleString()}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-xs uppercase">Pagos</p>
                                        <p className="font-bold text-lh-blue text-lg">{pool.payout}</p>
                                    </div>
                                </div>

                                {/* Barra de Progreso Dinámica */}
                                <div className="mb-6">
                                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                                        <span>Progreso de Recaudo</span>
                                        {/* Calculamos el porcentaje real */}
                                        <span className="font-bold text-lh-gold">
                                            {Math.round((pool.raised / pool.goal) * 100)}%
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div 
                                            className={`h-2 rounded-full ${pool.status === 'open' ? 'bg-lh-gold shadow-[0_0_10px_#ffd400]' : 'bg-gray-500'}`} 
                                            style={{ width: `${Math.min((pool.raised / pool.goal) * 100, 100)}%` }}
                                        ></div>
                                    </div>
                                </div>

                                {/* Botones de Acción */}
                                <div className="space-y-3">
                                    {pool.status === 'open' ? (
                                        <Link
                                            to={`/oportunidades-inversion/${pool.id}`} // <--- ENLACE DINÁMICO AL ID
                                            className="block w-full bg-lh-gold text-black font-bold py-3 rounded text-center hover:bg-yellow-500 transition-colors"
                                        >
                                            Ver Detalles
                                        </Link>
                                    ) : (
                                        <button disabled className="block w-full bg-gray-100 text-gray-400 font-bold py-3 rounded text-center cursor-not-allowed">
                                            Convocatoria Cerrada
                                        </button>
                                    )}
                                    
                                    <button className="block w-full border border-gray-200 text-gray-600 font-bold py-3 rounded text-center hover:border-lh-blue hover:text-lh-blue transition-colors flex items-center justify-center gap-2">
                                        <Download className="w-4 h-4" /> Financials
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* --- PROYECTO "PRÓXIMAMENTE" (Este lo dejamos fijo o lo añadimos a la data si quieres) --- */}
                    <div className="bg-lh-blue rounded-2xl overflow-hidden shadow-xl border border-gray-800 text-white relative overflow-hidden group flex flex-col">
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffd400_1px,transparent_1px)] [background-size:20px_20px]"></div>
                        <div className="relative z-10 p-8 h-full flex flex-col justify-center text-center flex-grow">
                            <div className="w-16 h-16 bg-lh-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 text-lh-gold">
                                <Lock className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-heading font-bold mb-2">Próximo Lanzamiento</h3>
                            <p className="text-gray-400 mb-8 text-sm">Estamos finalizando la estructuración legal de un nuevo desarrollo Multifamily.</p>
                            <Link to="/contacto" className="w-full border border-lh-gold text-lh-gold font-bold py-3 rounded hover:bg-lh-gold hover:text-black transition-colors mt-auto">
                                Unirme a Lista de Espera
                            </Link>
                        </div>
                    </div>

                </div>

                <div className="mt-16 border-t border-gray-200 pt-8 text-xs text-gray-500 max-w-4xl mx-auto text-center leading-relaxed">
                    <p className="mb-2 font-bold">Aviso Importante:</p>
                    <p>La información presentada no constituye una oferta de venta de valores...</p>
                </div>
            </section>
        </div>
    );
};

export default InvestOpportunities;