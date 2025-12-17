import React from 'react';
// IMPORTANTE: Si subes un video a assets, descomenta la linea de abajo y pon el nombre correcto:
// import videoBg from '../../assets/tu-video.mp4'; 

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      
      {/* --- FONDO (VIDEO O COLOR) --- */}
      <div className="absolute inset-0 bg-lh-blue">
        {/* Si tienes video, descomenta estas lineas de abajo: */}
        {/* <video 
          className="w-full h-full object-cover opacity-60" 
          src={videoBg} 
          autoPlay loop muted playsInline 
        /> 
        */}
        {/* Mientras no haya video, usamos este gradiente para que se vea bien */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-lh-blue/50" />
      </div>

      {/* --- CONTENIDO --- */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight animate-fade-in-up">
          Construyendo el Futuro de <br />
          <span className="text-lh-gold">South Florida</span>
        </h1>
        
        <p className="text-gray-200 text-lg md:text-2xl max-w-2xl mb-10 font-light">
          Especialistas en inversión inmobiliaria, adquisición de terrenos y desarrollo residencial.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-lh-gold text-black font-bold py-4 px-10 rounded hover:bg-white transition duration-300">
            VER PROYECTOS
          </button>
          <button className="border-2 border-white text-white font-bold py-4 px-10 rounded hover:bg-white hover:text-black transition duration-300">
            SOY INVERSIONISTA
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;