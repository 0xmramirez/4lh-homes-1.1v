import React from 'react';
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-lh-blue text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* COLUMNA 1: MARCA */}
            <div>
                <div className="flex flex-col mb-6">
                    <span className="font-heading font-bold text-2xl tracking-widest text-white">4LIVING</span>
                    <span className="text-[0.6rem] tracking-[0.3em] text-lh-gold text-center -ml-12">HOMES</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Maximizamos el valor inmobiliario en South Florida a través de la adquisición estratégica, desarrollo eficiente y comercialización experta.
                </p>
                <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-lh-gold hover:text-black transition-all">
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-lh-gold hover:text-black transition-all">
                        <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-lh-gold hover:text-black transition-all">
                        <Linkedin className="w-5 h-5" />
                    </a>
                </div>
            </div>

            {/* COLUMNA 2: ENLACES RÁPIDOS */}
            <div>
                <h4 className="font-bold text-lg mb-6 text-lh-gold">Menú</h4>
                <ul className="space-y-4 text-gray-400">
                    <li><a href="/" className="hover:text-white transition-colors">Inicio</a></li>
                    <li><a href="/inversionistas" className="hover:text-white transition-colors">Inversionistas</a></li>
                    <li><a href="/proyectos" className="hover:text-white transition-colors">Proyectos</a></li>
                    <li><a href="/nosotros" className="hover:text-white transition-colors">Nuestro Equipo</a></li>
                </ul>
            </div>

            {/* COLUMNA 3: LEGAL */}
            <div>
                <h4 className="font-bold text-lg mb-6 text-lh-gold">Inversión</h4>
                <ul className="space-y-4 text-gray-400">
                    <li><a href="#" className="hover:text-white transition-colors">Modelo de Negocio</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
                </ul>
            </div>

            {/* COLUMNA 4: CONTACTO */}
            <div>
                <h4 className="font-bold text-lg mb-6 text-lh-gold">Contacto</h4>
                <ul className="space-y-4 text-gray-400">
                    <li className="flex items-start">
                        <MapPin className="w-5 h-5 text-lh-gold mr-3 mt-1 shrink-0" />
                        <span>Miami, FL &<br/>Port Charlotte, FL</span>
                    </li>
                    <li className="flex items-center">
                        <Phone className="w-5 h-5 text-lh-gold mr-3 shrink-0" />
                        <span>+1 (XXX) XXX-XXXX</span>
                    </li>
                    <li className="flex items-center">
                        <Mail className="w-5 h-5 text-lh-gold mr-3 shrink-0" />
                        <span>info@4lhgroup.com</span>
                    </li>
                </ul>
            </div>
        </div>

        {/* BARRA INFERIOR */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} 4LH Group. Todos los derechos reservados.</p>
            <div className="mt-4 md:mt-0">
                <span>Designed for Real Estate Excellence</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;