import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registramos los componentes de barras
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ProfitChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Esto permite que se adapte mejor al contenedor
    plugins: {
      legend: {
        display: false, // Ocultamos la leyenda porque las etiquetas de abajo ya lo dicen todo
      },
      tooltip: {
        backgroundColor: '#0f172a', // Tu azul oscuro de fondo
        titleFont: { family: "'Lato', sans-serif", size: 13 },
        bodyFont: { family: "'Lato', sans-serif", size: 14, weight: 'bold' },
        padding: 12,
        cornerRadius: 8,
        displayColors: false, // Quita el cuadradito de color del tooltip
        callbacks: {
          label: (context) => `Retorno: ${context.raw}%`
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)', // Líneas de fondo muy sutiles
        },
        ticks: {
          font: { family: "'Lato', sans-serif" },
          callback: (value) => value + '%' // Añade % al eje Y
        }
      },
      x: {
        grid: { display: false }, // Sin líneas verticales para más limpieza
        ticks: {
          font: { family: "'Lato', sans-serif", weight: 'bold' },
          color: '#333'
        }
      }
    },
    animation: {
      duration: 2000, // 2 segundos de animación (más lento = más elegante)
      easing: 'easeOutBounce', // Un pequeño "rebote" al final para que se sienta vivo
      delay: (context) => {
        // Truco pro: Retrasar cada barra un poco para que suban en escalera
        return context.dataIndex * 300; 
      },
    },
  };

  const data = {
    labels: ['Banco (Plazo Fijo)', 'Bolsa (S&P 500)', '4LH Real Estate'],
    datasets: [
      {
        label: 'Retorno Anual Estimado',
        data: [4, 8, 18], // Los datos
        backgroundColor: [
          'rgba(200, 200, 200, 0.4)', // Gris suave
          'rgba(200, 200, 200, 0.4)', // Gris suave
          'rgba(212, 175, 55, 1)',    // TU DORADO INTENSO
        ],
        // Bordes redondeados solo arriba (moderno)
        borderRadius: {
            topLeft: 8,
            topRight: 8,
            bottomLeft: 0,
            bottomRight: 0
        },
        borderSkipped: false,
        barThickness: 50, // Barras más anchas y sólidas
      },
    ],
  };

  // Envolvemos en un div con altura fija para controlar el tamaño
  return (
    <div className="h-[300px] w-full">
      <Bar options={options} data={data} />
    </div>
  );
};

export default ProfitChart;