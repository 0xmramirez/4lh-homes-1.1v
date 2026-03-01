import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Wifi,
  TreePine,
  Ruler,
  BedDouble,
  Bath,
  Compass,
  Download,
  ShoppingCart,
  Cross,
  Building2,
  Loader2,
} from "lucide-react";

// IMPORTANTE: Estilos base del mapa y componentes de MapCN
import "maplibre-gl/dist/maplibre-gl.css";
import {
  Map,
  MapMarker,
  MarkerContent,
  MapRoute,
  MarkerLabel,
} from "@/components/ui/map";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const DesarrolloExclusivo = () => {
  const [activeMap, setActiveMap] = useState(0);
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [isFetchingRoute, setIsFetchingRoute] = useState(false);

  // Coordenadas del Lote (Westminster, SC)
  const origin = { lng: -83.1042, lat: 34.576 };

  // Datos de los destinos
  const locations = [
    {
      id: 0,
      title: "Walmart Supercenter",
      time: "20 min",
      distance: "14.6 millas",
      icon: <ShoppingCart className="w-5 h-5" />,
      lng: -82.9669,
      lat: 34.6853,
    },
    {
      id: 1,
      title: "Centro Médico Upstate",
      time: "21 min",
      distance: "13.4 millas",
      icon: <Cross className="w-5 h-5" />,
      lng: -82.9463,
      lat: 34.675,
    },
    {
      id: 2,
      title: "Greenville, SC",
      time: "1 hora",
      distance: "52.2 millas",
      icon: <Building2 className="w-5 h-5" />,
      lng: -82.394,
      lat: 34.8526,
    },
  ];

  // API de OSRM para trazar la ruta real por las carreteras
  useEffect(() => {
    async function fetchRoute() {
      setIsFetchingRoute(true);
      try {
        const destination = locations[activeMap];
        const response = await fetch(
          `https://router.project-osrm.org/route/v1/driving/${origin.lng},${origin.lat};${destination.lng},${destination.lat}?overview=full&geometries=geojson`,
        );
        const data = await response.json();

        if (data.routes?.length > 0) {
          setRouteCoordinates(data.routes[0].geometry.coordinates);
        }
      } catch (error) {
        console.error("Error al obtener la ruta OSRM:", error);
      } finally {
        setIsFetchingRoute(false);
      }
    }

    fetchRoute();
  }, [activeMap]);

  return (
    <div className="font-sans bg-[#D1D0CB] text-[#2E2E2E] selection:bg-[#203354] selection:text-[#D1D0CB]">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2000&auto=format&fit=crop"
            alt="Serena Hills Lake and Forest"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#203354]/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#203354]/90"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <img
              src="/Serena_Hills_logo_arena.png"
              alt="Serena Hills"
              className="h-32 md:h-48 mb-8 object-contain drop-shadow-2xl"
            />
            <p className="text-[#D1D0CB] tracking-[0.4em] uppercase text-sm md:text-lg mb-8 font-light drop-shadow-md">
              Reconecta con lo esencial
            </p>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "6rem" }}
              transition={{ duration: 1.5, delay: 1 }}
              className="w-px bg-[#D1D0CB]/50 mb-8"
            ></motion.div>
            <p className="text-[#D1D0CB] text-xl md:text-2xl font-light leading-relaxed max-w-2xl italic">
              "No es solo un lugar, es un estado mental."
            </p>
          </motion.div>
        </div>

        <Link
          to="/"
          className="absolute top-8 left-6 md:left-12 z-20 inline-flex items-center text-[#D1D0CB] hover:text-white transition-colors text-xs uppercase tracking-widest font-bold"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Volver
        </Link>
      </section>

      {/* 2. EL CONCEPTO E HISTORIA */}
      <section className="py-32 px-6 bg-[#203354] text-[#D1D0CB]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="text-[#8A887E] tracking-widest uppercase text-sm mb-4 block font-bold">
              Historia del Proyecto
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#D1D0CB] mb-8 leading-tight">
              Una presencia que eleva el estándar.
            </h2>
            <div className="space-y-6 text-[#A2A092] font-light text-lg leading-relaxed">
              <p>
                En una comunidad donde la arquitectura tradicional convive con
                la serenidad del bosque y la vista abierta hacia el lago, surge
                una residencia concebida para marcar una diferencia sutil pero
                poderosa.
              </p>
              <p>
                <strong>Serena Hills SC</strong> nace con una intención clara:
                elevar el estándar sin romper la armonía. La fachada en tonos
                oscuros aporta carácter y sofisticación, mientras que sus
                proporciones equilibradas respetan el contexto existente.
              </p>
              <p className="italic border-l-2 border-[#6E6353] pl-6 py-2 mt-8 text-[#D1D0CB]">
                No compite con sus vecinas. Las complementa y las eleva. No se
                diseñó solo para habitarse; se diseñó para permanecer.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative h-[600px] rounded-t-full overflow-hidden shadow-2xl border-4 border-[#6E6353]/30"
          >
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop"
              alt="Fachada Bosque"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>
        </div>
      </section>

      {/* 3. ARQUITECTURA Y PLANOS */}
      <section className="py-32 px-6 bg-[#D1D0CB] text-[#2E2E2E]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-20">
            <span className="text-[#6E6353] font-bold tracking-widest uppercase text-sm mb-4 block">
              Planos Arquitectónicos
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#203354]">
              Modern Farmhouse
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="bg-[#A2A092]/20 p-8 rounded-2xl border border-[#8A887E]/30 relative shadow-lg"
            >
              <div className="absolute top-4 right-4 bg-[#203354] text-[#D1D0CB] text-xs font-bold px-4 py-2 uppercase tracking-widest z-10">
                1,552 SQ FT
              </div>
              <img
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop"
                alt="Planos Casa"
                className="w-full h-auto object-contain mix-blend-darken opacity-80"
              />
            </motion.div>

            <div className="space-y-10">
              <p className="text-lg text-[#6E6353] leading-relaxed">
                Descubra la armonía perfecta entre la arquitectura sofisticada y
                la serenidad de la naturaleza. Un juego de techos a dos aguas de
                gran pendiente y elegante revestimiento vertical.
              </p>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  {
                    icon: <BedDouble />,
                    title: "3 Habitaciones",
                    sub: "Opción de oficina integrada",
                  },
                  { icon: <Bath />, title: "2 Baños", sub: "Acabados premium" },
                  {
                    icon: <Ruler />,
                    title: "1 Piso",
                    sub: "Integración espacial total",
                  },
                  {
                    icon: <Compass />,
                    title: "Outdoor Living",
                    sub: "Porche frontal y posterior",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="border-b border-[#8A887E]/40 pb-4"
                  >
                    <div className="w-6 h-6 text-[#203354] mb-2">
                      {item.icon}
                    </div>
                    <p className="font-bold text-xl">{item.title}</p>
                    <p className="text-sm text-[#6E6353]">{item.sub}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. MOODBOARD DE INTERIORISMO */}
      <section className="py-32 bg-[#6E6353] px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-[#D1D0CB] tracking-widest uppercase text-sm mb-2 block font-bold">
                Diseño Interior
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-white">
                Atmósfera Atemporal
              </h2>
            </div>
            <p className="text-[#D1D0CB] max-w-md text-right font-light">
              Paleta de colores orgánicos, maderas naturales y acentos en negro
              mate que crean una estética serena y sofisticada.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop",
                title: "Cocina",
                desc: "Madera en contraste con blancos marmolados. Salpicadero en piedra y grifería color negro.",
                delay: 0,
              },
              {
                img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1000&auto=format&fit=crop",
                title: "Baños",
                desc: "Muebles en madera natural, lavamanos de sobreponer, espejos negros en arco y pisos en mosaico.",
                delay: 12,
              },
              {
                img: "https://images.unsplash.com/photo-1600607687931-cebf10cb4cb0?q=80&w=1000&auto=format&fit=crop",
                title: "Living Room",
                desc: "Chimenea en piedra blanca, mueble multimedia en arco, techo abovedado y conexión exterior.",
                delay: 0,
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className={`bg-[#D1D0CB] rounded-sm overflow-hidden group md:translate-y-${card.delay}`}
              >
                <div className="h-72 overflow-hidden relative">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl text-[#203354] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#2E2E2E] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* 5. EL LOTE Y UBICACIÓN (MAPA REAL INTERACTIVO CON MAPCN Y OSRM) */}
      <section className="py-32 px-6 bg-[#F9F9F8] text-[#2E2E2E]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <span className="text-[#8A887E] tracking-widest uppercase text-sm mb-4 block font-bold">
              El Triángulo de Oro
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#203354] mb-4">
              Conectividad Estratégica
            </h2>
            <p className="text-lg text-[#6E6353] max-w-2xl mx-auto">
              Foxwood Hills ofrece el equilibrio perfecto entre la serenidad del
              Lake Hartwell y la cercanía a centros urbanos.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Menú lateral interactivo */}
            <div className="lg:col-span-4 space-y-4">
              {locations.map((loc, index) => (
                <motion.div
                  key={loc.id}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setActiveMap(index)}
                  className={`cursor-pointer p-6 rounded-xl border-2 transition-all duration-300 flex items-center gap-4 ${activeMap === index ? "bg-[#203354] border-[#203354] text-[#D1D0CB] shadow-xl" : "bg-white border-[#D1D0CB] text-[#2E2E2E] hover:border-[#8A887E]"}`}
                >
                  <div
                    className={`p-3 rounded-full ${activeMap === index ? "bg-[#6E6353]" : "bg-[#F9F9F8]"}`}
                  >
                    {loc.icon}
                  </div>
                  <div>
                    <h4
                      className={`font-bold ${activeMap === index ? "text-white" : "text-[#203354]"}`}
                    >
                      {loc.title}
                    </h4>
                    <p
                      className={`text-sm ${activeMap === index ? "text-[#A2A092]" : "text-[#8A887E]"}`}
                    >
                      {loc.time} • {loc.distance}
                    </p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-8 p-6 bg-white border border-[#D1D0CB] rounded-xl shadow-sm"
              >
                <h4 className="font-bold text-[#203354] mb-3 border-b border-[#D1D0CB] pb-2">
                  Detalles del Lote 116
                </h4>
                <ul className="space-y-2 text-sm text-[#6E6353]">
                  <li>
                    <strong>Dirección:</strong> 105 Mount Bay Dr.
                  </li>
                  <li>
                    <strong>Área:</strong> 0.292 Acres
                  </li>
                  <li>
                    <strong>Dimensiones:</strong> 77' x 170'
                  </li>
                  <li>
                    <strong>Amenidades HOA:</strong> Piscina, Tenis
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* MAPA REAL MAPCN + OSRM */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="lg:col-span-8 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-[#D1D0CB]"
            >
              {/* Loader mientras carga la ruta OSRM */}
              {isFetchingRoute && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/40 backdrop-blur-sm">
                  <div className="bg-white p-4 rounded-xl shadow-lg flex flex-col items-center">
                    <Loader2 className="w-8 h-8 animate-spin text-[#203354] mb-2" />
                    <span className="text-xs font-bold text-[#203354] uppercase tracking-wider">
                      Calculando Ruta...
                    </span>
                  </div>
                </div>
              )}

              {/* Componente de MapCN */}
              <Map
                mapStyle="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
                center={[-82.75, 34.65]}
                zoom={10.5}
              >
                {/* Ruta dibujada dinámicamente por la API OSRM */}
                {routeCoordinates.length > 0 && (
                  <MapRoute
                    coordinates={routeCoordinates}
                    color="#203354" // Azul Marino Serena Hills
                    width={5}
                    opacity={0.8}
                  />
                )}

                {/* Marcador de Origen: Serena Hills */}
                <MapMarker longitude={origin.lng} latitude={origin.lat}>
                  <MarkerContent>
                    <div className="size-5 rounded-full bg-[#6E6353] border-2 border-white shadow-xl animate-pulse" />
                    <MarkerLabel
                      position="bottom"
                      className="font-bold text-[#2E2E2E] bg-white px-2 py-1 rounded shadow-md mt-1 border border-[#D1D0CB]"
                    >
                      Serena Hills
                    </MarkerLabel>
                  </MarkerContent>
                </MapMarker>

                {/* Marcador de Destino (Dinámico) */}
                <MapMarker
                  longitude={locations[activeMap].lng}
                  latitude={locations[activeMap].lat}
                >
                  <MarkerContent>
                    <div className="size-6 rounded-full bg-[#203354] border-2 border-[#D1D0CB] shadow-xl flex items-center justify-center text-white">
                      <MapPin className="w-3 h-3" />
                    </div>
                    <MarkerLabel
                      position="top"
                      className="font-bold text-white bg-[#203354] px-2 py-1 rounded shadow-md mb-1"
                    >
                      {locations[activeMap].title}
                    </MarkerLabel>
                  </MarkerContent>
                </MapMarker>
              </Map>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. PERFIL DEL COMPRADOR */}
      <section className="py-24 bg-[#2E2E2E] text-[#D1D0CB] px-6 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <TreePine className="w-16 h-16 mx-auto text-[#8A887E] mb-8" />
          <h2 className="font-serif text-3xl md:text-5xl mb-8 leading-tight">
            "Escapa del bullicio, no de tu vida profesional."
          </h2>
          <p className="text-lg font-light text-[#A2A092] leading-relaxed max-w-2xl mx-auto">
            Diseñada para el teletrabajo y el descanso. Un refugio que ofrece
            una oficina dedicada, conexión de alta velocidad y espacios
            luminosos que se integran con la naturaleza. Lista para que conectes
            tu laptop y comiences a disfrutar.
          </p>
        </motion.div>
      </section>

      {/* 7. INVERSIÓN Y CTA */}
      <section className="py-32 bg-[#203354] px-6 text-center border-t-4 border-[#6E6353]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <span className="text-[#8A887E] tracking-widest uppercase text-sm mb-4 block font-bold">
            Oportunidad de Inversión
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#D1D0CB] mb-6">
            Capitalice en Alta Plusvalía
          </h2>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="my-12 p-8 border border-[#6E6353]/40 bg-[#2E2E2E]/30 rounded-lg inline-block cursor-pointer shadow-2xl"
          >
            <p className="text-[#A2A092] text-sm uppercase tracking-widest mb-2">
              Valor Estimado del Activo Final
            </p>
            <p className="text-5xl md:text-6xl font-bold text-white tracking-tight">
              $325,000 - $375,000
            </p>
          </motion.div>

          <p className="text-[#D1D0CB] text-lg font-light mb-12 max-w-xl mx-auto">
            Asegure su participación en una propiedad diseñada para competir
            fuertemente en el mercado y elevar el estándar de la comunidad.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contacto"
              className="bg-[#D1D0CB] text-[#203354] px-10 py-5 font-bold hover:bg-white transition-colors uppercase tracking-widest text-sm flex items-center justify-center shadow-lg"
            >
              Agendar Reunión de Inversión
            </Link>
            <button className="border border-[#D1D0CB] text-[#D1D0CB] px-10 py-5 font-bold hover:bg-[#D1D0CB]/10 transition-colors uppercase tracking-widest text-sm flex items-center justify-center">
              <Download className="w-4 h-4 mr-2" /> Descargar Dossier PDF
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default DesarrolloExclusivo;
