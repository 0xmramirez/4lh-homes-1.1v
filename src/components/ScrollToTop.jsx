import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Obtenemos la ruta actual (pathname)
  const { pathname } = useLocation();

  useEffect(() => {
    // Cada vez que cambie el 'pathname', subimos el scroll a 0,0
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Este componente no renderiza nada visual
};

export default ScrollToTop;