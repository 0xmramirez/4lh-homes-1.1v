// src/data/projectsData.js

export const projects = [
    {
      id: 1,
      title: "Duplex Moderno - Dickinson Dr",
      location: "North Port, FL",
      price: "$459,900",
      status: "construction", // valores: 'sale', 'sold', 'construction'
      specs: { beds: 6, baths: 4, sqft: 2400 }, // Total del duplex
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop", // Foto temporal (luego pones la tuya real)
      completion: "Enero 2025",
      description: "Modelo de alto rendimiento para renta. Diseño contemporáneo con acabados de lujo."
    },
    {
      id: 2,
      title: "Residencia Familiar - Tropical Ave",
      location: "Port Charlotte, FL",
      price: "$385,000",
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
      price: "$410,000",
      status: "construction",
      specs: { beds: 3, baths: 2, sqft: 1900 },
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop",
      completion: "Marzo 2025",
      description: "En fase de acabados. Oportunidad de preventa disponible."
    }
  ];

  // CASOS DE ÉXITO 
export const successStories = [
    {
        id: 101,
        title: "Multifamily House Rockford, IL",
        subtitle: "May Street 412",
        specs: "5 Apartamentos | 4 Garajes",
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80", // Foto similar a la de Rockford
        location: "Illinois, USA"
    },
    {
        id: 102,
        title: "Cartagena, Colombia",
        subtitle: "Morros Ío Manzanillo",
        specs: "Apartamento 110 MT | 2 Habitaciones",
        image: "https://images.unsplash.com/photo-1596200216447-97d8ccf99b19?auto=format&fit=crop&q=80", // Foto estilo playa/edificio
        location: "Cartagena, CO"
    },
    {
        id: 103,
        title: "Medellín, Colombia",
        subtitle: "Nativo Madera",
        specs: "Apartamento 135 MT | 3 Habitaciones",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80", // Edificio moderno
        location: "Medellín, CO"
    }
];