// src/data/projectsData.js

import { each } from "chart.js/helpers";

// PROYECTOS 4LH
export const projects = [
  {
    id: 1,
    title: "Single Family",
    location: "8048 Sherwood cir, LaBelle, FL",
    price: "284,000",
    status: "sale", // valores: 'sale', 'sold', 'construction', rented
    specs: { beds: 3, baths: 2, sqft: 1292 }, // Total
    image: "/images/proyectos/sherwood/sherwood-area.png",
    gallery: [
        "/images/proyectos/sherwood/sherwood-area.png", // Puedes repetir la principal
        "/images/proyectos/sherwood/sherwood_entrance_2.png", // Ejemplo foto 2
        "/images/carrusel/sherwood_st_1.jpg",  // Ejemplo foto 3
        "/images/proyectos/sherwood/baño_staging_03.png",  // Ejemplo foto 3
        "/images/proyectos/sherwood/Habitacion_Staging.png",  // Ejemplo foto 3
        "/images/proyectos/sherwood/cocina_staging03.png",  // Ejemplo foto 3
    ], 
    completion: "Enero 2025",
    description: "Esta residencia unifamiliar totalmente nueva y cuidadosamente diseñada, situada en el corazón de Labelle, ofrece una vida moderna con un toque de encanto sureño. Con 3 amplios dormitorios, 2 baños y 157 m² de superficie construida, esta casa es perfecta para familias y para recibir invitados. Disfrute de la distribución diáfana, con una cocina gourmet con encimeras de cuarzo, elegantes electrodomésticos de acero inoxidable y una isla peninsular. La suite principal incluye un vestidor y un baño en suite con dos lavabos y una lujosa ducha a ras de suelo. Otros aspectos destacados son las ventanas de bajo consumo energético, un amplio garaje para un coche y un patio trasero privado listo para que le dé su toque personal. Situada cerca de colegios, restaurantes y zonas de ocio al aire libre, esta propiedad ofrece comodidad y un estilo de vida tranquilo."
  },
  {
    id: 2,
    title: "Duplex Dickinson Dr",
    location: "6940 Dickinson Dr, Sebring, FL",
    price: "1,675 c/u",
    status: "rented",
    specs: { beds: 3, baths: 2, sqft: 1240 },
    image: "/images/proyectos/dickinson1.png",
    completion: "Lista para entrega",
    description: "¡Vive donde otros vacacionan! Tu refugio de lujo en el corazón de Sun 'n Lake ¿Buscas el equilibrio perfecto entre serenidad, deporte y conveniencia? Bienvenido a 6940 Dickinson Dr, una ubicación privilegiada en la exclusiva comunidad de Sun 'n Lake en Sebring. Imagina despertar a solo pasos de campos de golf de 18 hoyos de clase mundial, donde cada tarde es una oportunidad para mejorar tu hándicap. Al vivir aquí, no solo compras una propiedad, adquieres un estilo de vida: Clubhouse Exclusivo: Disfruta de cenas gourmet en el restaurante del club o relájate en la espectacular piscina estilo resort tras una jornada activa. Salud de Primer Nivel: La tranquilidad mental es total al estar a minutos de uno de los hospitales más completos y avanzados de Florida, ideal para profesionales del sector salud o familias que priorizan el bienestar. Entorno Natural: Calles tranquilas, paisajes verdes y la seguridad de una comunidad consolidada. ¡No dejes pasar la oportunidad de construir o vivir en el epicentro del confort en Sebring!"
  },
  {
    id: 3,
    title: "Single Family",
    location: "5523 Cortez Blvd, Sebring, FL",
    price: "2,100 c/u",
    status: "rented",
    specs: { beds: 3, baths: 2, sqft: 1270 },
    image: "/images/proyectos/cortz_blvd_1.png",
    completion: "Entregado 202",
    description: "Esta hermosa casa de 3/2 está ubicada en la comunidad Sun N Lake. Amplia planta abierta que permite la entrada de mucha luz natural en las zonas de estar. Concepto abierto con gran salón con iluminación LED empotrada. La hermosa cocina cuenta con una isla, encimeras de cuarzo, electrodomésticos de acero inoxidable y armarios de madera blanca. Los baños también cuentan con encimeras de cuarzo y el baño principal tiene lavabos dobles. Se instaló suelo de vinilo en toda la casa. Bonito patio trasero con mucho espacio para una piscina, y la casa también cuenta con un sistema de riego. Esta propiedad goza de proximidad a una gran variedad de servicios, como centros comerciales, restaurantes, centros médicos, colegios y mucho más."
  },
  {
    id: 4, 
    title: "Expansión South Carolina",
    location: "105 Mount Bay Dr, Westminster, SC",
    specs: { beds: 3, baths: 2, sqft: 1552 }, 
    price: "Próximamente",
    image: "/images/carrusel/SC_render_carrusel.png", 
    status: "construction",
  }
];

// PROYECTOS CLIENTES 4LH
export const clientProjects = [
    {
    id: 101,
    title: "Single Family",
    location: "3830 El Rado Av, Sebring, FL",
    price: "2,100 c/u",
    status: "rented",
    specs: { beds: 3, baths: 2, sqft: 1270 },
    image: "/images/proyectos/elrado1.jpg",
    completion: "Entregado 202",
    description: "Esta hermosa casa de 3/2 está ubicada en la comunidad Sun N Lake. Amplia planta abierta que permite la entrada de mucha luz natural en las zonas de estar. Concepto abierto con gran salón con iluminación LED empotrada. La hermosa cocina cuenta con una isla, encimeras de cuarzo, electrodomésticos de acero inoxidable y armarios de madera blanca. Los baños también cuentan con encimeras de cuarzo y el baño principal tiene lavabos dobles. Se instaló suelo de vinilo en toda la casa. Bonito patio trasero con mucho espacio para una piscina, y la casa también cuenta con un sistema de riego. Esta propiedad goza de proximidad a una gran variedad de servicios, como centros comerciales, restaurantes, centros médicos, colegios y mucho más."
  },
  {
    id: 102,
    title: "Duplex 6941",
    location: "6941 Dickinson Dr, Sebring, FL",
    price: "1,675 c/u",
    status: "rented",
    specs: { beds: 3, baths: 2, sqft: 1240 },
    image: "/images/proyectos/dickinson1.png",
    completion: "Lista para entrega",
    description: "¡Vive donde otros vacacionan! Tu refugio de lujo en el corazón de Sun 'n Lake ¿Buscas el equilibrio perfecto entre serenidad, deporte y conveniencia? Bienvenido a 6940 Dickinson Dr, una ubicación privilegiada en la exclusiva comunidad de Sun 'n Lake en Sebring. Imagina despertar a solo pasos de campos de golf de 18 hoyos de clase mundial, donde cada tarde es una oportunidad para mejorar tu hándicap. Al vivir aquí, no solo compras una propiedad, adquieres un estilo de vida: Clubhouse Exclusivo: Disfruta de cenas gourmet en el restaurante del club o relájate en la espectacular piscina estilo resort tras una jornada activa. Salud de Primer Nivel: La tranquilidad mental es total al estar a minutos de uno de los hospitales más completos y avanzados de Florida, ideal para profesionales del sector salud o familias que priorizan el bienestar. Entorno Natural: Calles tranquilas, paisajes verdes y la seguridad de una comunidad consolidada. ¡No dejes pasar la oportunidad de construir o vivir en el epicentro del confort en Sebring!"
  },
    
];

// CASOS DE ÉXITO 
export const successStories = [
  {
    id: 101,
    title: "Multifamily House Rockford, IL",
    subtitle: "May Street 412",
    specs: "5 Apartamentos | 4 Garajes",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80", 
    location: "Illinois, USA"
  },
  {
    id: 102,
    title: "Cartagena, Colombia",
    subtitle: "Morros ÍO Manzanillo",
    specs: "Apartamento 110 MT | 2 Habitaciones | 2 baños",
    image: "https://images.unsplash.com/photo-1596200216447-97d8ccf99b19?auto=format&fit=crop&q=80", 
    location: "Cartagena, CO"
  },
  {
    id: 103,
    title: "Medellín, Colombia",
    subtitle: "Nativo Madera",
    specs: "Apartamento 135 MT | 3 Habitaciones | 4 baños",
    image: "/images/proyectos/Captura de pantalla 2024-06-03 a las 14.40.11.webp", 
    location: "Medellín, CO"
  },
  {
    id: 104,
    title: "Medellín, Colombia",
    subtitle: "Nativo Agua",
    specs: "Apartamento 85 MT | 2 Habitaciones | 2 baños",
    image: "/images/proyectos/IMG_3651.webp", 
    location: "Medellín, CO"
  },
  {
    id: 105,
    title: "Medellín, Colombia",
    subtitle: "MONTESOLE",
    specs: "Apartamento 85 MT | 2 Habitaciones | 2 baños",
    image: "/images/proyectos/IMG_3650.webp", 
    location: "Medellín, CO"
  },
];