// src/data/projectsData.js

export const projects = [
  {
    id: 1,
    title: "Single Family",
    location: "8048 Sherwood cir, LaBelle, FL",
    price: "289,000",
    status: "sale", // valores: 'sale', 'sold', 'construction'
    specs: { beds: 3, baths: 2, sqft: 1687 }, // Total
    image: "/images/proyectos/sherwood-area.png", 
    completion: "Enero 2025",
    description: "Modelo de alto rendimiento para renta. Diseño contemporáneo con acabados de lujo."
  },
  {
    id: 2,
    title: "Duplex",
    location: "Port Charlotte, FL",
    price: "385,000",
    status: "sale",
    specs: { beds: 3, baths: 2, sqft: 1850 },
    image: "https://images.unsplash.com/photo-1600596542815-6000214136f5?q=80&w=1000&auto=format&fit=crop",
    completion: "Lista para entrega",
    description: "Ubicación estratégica cerca de escuelas. Ideal para familias o renta a largo plazo."
  },
  {
    id: 3,
    title: "Villa Premium - Biscayne Dr",
    location: "North Port, FL",
    price: "VENDIDO",
    status: "sold",
    specs: { beds: 4, baths: 3, sqft: 2100 },
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=1000&auto=format&fit=crop",
    completion: "Entregado 2023",
    description: "Proyecto exitoso con ROI del 18% para nuestros inversores."
  },
  {
    id: 4,
    title: "Modelo Inversión - Pan American Blvd",
    location: "North Port, FL",
    price: "410,000",
    status: "construction",
    specs: { beds: 3, baths: 2, sqft: 1900 },
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop",
    completion: "Marzo 2025",
    description: "En fase de acabados. Oportunidad de preventa disponible."
  },
  {
    id: 99, 
    title: "Expansión South Carolina",
    location: "Greenville / Columbia, SC", 
    specs: "Próximo Desarrollo",
    price: "Próximamente",
    image: "https://images.unsplash.com/photo-1572973802773-6c8411d73a6a?q=80&w=2000&auto=format&fit=crop", 
    status: "coming_soon" 
  }
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