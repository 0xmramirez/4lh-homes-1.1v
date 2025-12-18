import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { investmentPools } from '../data/investmentData';
import { ArrowLeft, ShieldCheck, PieChart, AlertCircle, FileText, Check, Copy } from 'lucide-react';

const InvestOpportunityDetail = () => {
  const { id } = useParams();
  const pool = investmentPools.find(p => p.id === parseInt(id));
  const [activeTab, setActiveTab] = useState('about'); // 'about', 'highlights', 'risk'

  if (!pool) return <div className="text-white pt-32 text-center">Oportunidad no encontrada</div>;

  // Cálculo de porcentaje para la barra
  const percent = Math.min((pool.raised / pool.goal) * 100, 100);

  return (
    <div className="pt-24 min-h-screen bg-[#050505] text-gray-300 pb-20"> {/* Fondo casi negro */}
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER DE NAVEGACIÓN */}
        <div className="mb-8">
            <Link to="/oportunidades-inversion" className="inline-flex items-center text-sm text-gray-500 hover:text-lh-gold transition-colors mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" /> Volver al mercado
            </Link>
            <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-white">{pool.title}</h1>
                <span className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded border border-gray-700 uppercase tracking-wider">
                    {pool.tag}
                </span>
            </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 items-start">
            
            {/* --- COLUMNA IZQUIERDA (CONTENIDO PRINCIPAL) --- */}
            <div className="lg:col-span-2 space-y-8">
                
                {/* 1. IMAGEN PRINCIPAL */}
                <div className="rounded-2xl overflow-hidden border border-gray-800 h-[400px] relative group">
                    <img src={pool.image} alt={pool.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
                </div>

                {/* 2. PESTAÑAS DE NAVEGACIÓN (Estilo Reference) */}
                <div className="border-b border-gray-800 flex gap-8 text-sm font-bold overflow-x-auto">
                    <button 
                        onClick={() => setActiveTab('about')}
                        className={`pb-4 border-b-2 transition-colors ${activeTab === 'about' ? 'border-lh-gold text-white' : 'border-transparent text-gray-500 hover:text-gray-300'}`}
                    >
                        Acerca de
                    </button>
                    <button 
                        onClick={() => setActiveTab('highlights')}
                        className={`pb-4 border-b-2 transition-colors ${activeTab === 'highlights' ? 'border-lh-gold text-white' : 'border-transparent text-gray-500 hover:text-gray-300'}`}
                    >
                        Aspectos destacados
                    </button>
                    <button 
                        onClick={() => setActiveTab('risk')}
                        className={`pb-4 border-b-2 transition-colors ${activeTab === 'risk' ? 'border-lh-gold text-white' : 'border-transparent text-gray-500 hover:text-gray-300'}`}
                    >
                        Riesgo & Legal
                    </button>
                </div>

                {/* 3. CONTENIDO DE LAS PESTAÑAS */}
                <div className="min-h-[300px]">
                    {activeTab === 'about' && (
                        <div className="animate-fade-in space-y-6">
                            <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
                                <h3 className="text-white font-bold mb-4 text-lg">Resumen del Proyecto</h3>
                                <p className="leading-relaxed text-gray-400 mb-4">{pool.description}</p>
                                <p className="leading-relaxed text-gray-400">
                                    Este vehículo de inversión permite participar directamente en la plusvalía generada por la construcción. 
                                    A diferencia de un REIT, usted tiene visibilidad directa sobre el activo específico (Lote 42).
                                </p>
                            </div>
                        </div>
                    )}

                    {activeTab === 'highlights' && (
                        <div className="animate-fade-in">
                            <h3 className="text-white font-bold mb-6 text-lg">Datos Clave</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {pool.highlights.map((item, index) => (
                                    <div key={index} className="bg-[#111] p-4 rounded-xl border border-gray-800">
                                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{item.label}</p>
                                        <p className="text-white font-bold text-lg">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'risk' && (
                        <div className="animate-fade-in space-y-4">
                             <div className="bg-[#111] p-6 rounded-xl border border-gray-800 flex items-start gap-4">
                                <ShieldCheck className="w-6 h-6 text-lh-gold shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-white font-bold mb-1">Colateral Real</h4>
                                    <p className="text-sm text-gray-400">La inversión está respaldada por la propiedad inmobiliaria. En caso de impago, los inversores tienen derechos sobre el activo.</p>
                                </div>
                             </div>
                             <div className="bg-[#111] p-6 rounded-xl border border-gray-800 flex items-start gap-4">
                                <AlertCircle className="w-6 h-6 text-gray-500 shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-white font-bold mb-1">Riesgo de Construcción</h4>
                                    <p className="text-sm text-gray-400">Existen riesgos inherentes a retrasos climáticos o de permisos que podrían extender el plazo estimado de 12 meses.</p>
                                </div>
                             </div>
                        </div>
                    )}
                </div>

            </div>


            {/* --- COLUMNA DERECHA (SIDEBAR FLOTANTE - ESTILO REFERENCE) --- */}
            <div className="lg:col-span-1">
                <div className="sticky top-24 bg-[#111] border border-gray-800 rounded-2xl p-6 shadow-2xl">
                    
                    {/* Header Card */}
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <p className="text-3xl font-bold text-white mb-1">
                                {pool.goal.toLocaleString()} <span className="text-sm text-gray-500 font-normal">USD Goal</span>
                            </p>
                            <p className="text-xs text-gray-500">
                                {percent}% del objetivo recaudado
                            </p>
                        </div>
                        <span className="bg-green-900/30 text-green-400 border border-green-900 text-[10px] font-bold px-2 py-1 rounded uppercase">
                            Open
                        </span>
                    </div>

                    {/* Barra de Progreso */}
                    <div className="w-full bg-gray-800 h-2 rounded-full mb-8 overflow-hidden">
                        <div className="bg-lh-gold h-full rounded-full" style={{ width: `${percent}%` }}></div>
                    </div>

                    {/* Grid de Datos Financieros */}
                    <div className="space-y-4 mb-8">
                        <div className="flex justify-between items-center py-3 border-b border-gray-800">
                            <span className="text-gray-400 text-sm">Plazo Estimado</span>
                            <span className="text-white font-bold">{pool.term}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-gray-800">
                            <span className="text-gray-400 text-sm">Rentabilidad (ROI)</span>
                            <span className="text-lh-gold font-bold text-lg">{pool.roi}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-gray-800">
                            <span className="text-gray-400 text-sm">Ticket Mínimo</span>
                            <span className="text-white font-bold">${pool.min_investment.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-gray-800">
                            <span className="text-gray-400 text-sm">Cierre de Ronda</span>
                            <span className="text-white font-bold">23 Días</span>
                        </div>
                    </div>

                    {/* Botones de Acción */}
                    <Link to="/contacto" className="block w-full bg-lh-gold text-black font-bold py-4 rounded-lg text-center hover:bg-yellow-400 transition-colors mb-4 shadow-[0_0_20px_rgba(255,212,0,0.1)]">
                        Invertir Ahora
                    </Link>
                    
                    <button className="block w-full bg-transparent border border-gray-700 text-gray-300 font-bold py-3 rounded-lg text-center hover:border-gray-500 hover:text-white transition-colors text-sm">
                        Descargar Dossier (PDF)
                    </button>

                    <p className="text-center text-xs text-gray-600 mt-4">
                        Al invertir, usted acepta los Términos y Condiciones de 4LH Group.
                    </p>

                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default InvestOpportunityDetail;