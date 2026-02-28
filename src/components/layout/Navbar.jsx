import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Esta función define cómo se ve el enlace cuando está activo vs inactivo
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-black font-bold border-b-2 border-black pb-1 transition-all" // Estilo ACTIVO (tipo Bootstrap active)
      : "text-gray-600 hover:text-black font-medium transition-colors hover:border-b-2 hover:border-gray-200 pb-1"; // Estilo NORMAL

  const menuItems = [
    { name: "Inicio", path: "/" },
    { name: "Proyectos", path: "/proyectos" },
    { name: "Inversionistas", path: "/inversionistas" },
    { name: "Sobre Nosotros", path: "/nosotros" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">

          {/* LOGO (Izquierda) */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
    
    <img 
        src="/images/logo/logo4lhOR.png" 
        alt="4LH Group Logo" 
        // CAMBIO AQUÍ: h-16 (más grande) o prueba h-20 si lo quieres enorme
        className="h-14 w-auto object-contain" 
    />

</div>

          {/* MENU ESCRITORIO (Centro/Derecha) */}
          <div className="hidden lg:flex space-x-8">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={navLinkClass}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* BOTÓN HAMBURGUESA (Móvil) */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MENU MÓVIL DESPLEGABLE */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "block px-3 py-2 text-base font-bold text-black bg-gray-50"
                    : "block px-3 py-2 text-base font-medium text-gray-600 hover:text-black hover:bg-gray-50"
                }
                onClick={() => setIsOpen(false)} // Cierra el menú al hacer click
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;