import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import './GraficoTendencias.css';
import { faL } from '@fortawesome/free-solid-svg-icons';

Chart.register(...registerables);

const TrendChart = ({
    mostrar,
    historialDeCotizaciones
  }) => {
    
    const [maximo, setMaximo] = useState(0);
    const [minimo, setMinimo] = useState(0);

    const calcularMaximo = () => {setMaximo((Math.max(...datos) * 1.05).toFixed(0));}
    const calcularMinimo = () => {setMinimo((Math.min(...datos) * 0.95).toFixed(0))};
    const datos = historialDeCotizaciones ? historialDeCotizaciones : [20, 22, 24, 23, 25, 26, 28, 27, 26, 25, 24, 26];

    useEffect(() => {
      calcularMaximo();
      calcularMinimo();
  }, [historialDeCotizaciones]);

    const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], // Etiquetas de cada punto (puedes cambiarlas según los meses o periodos deseados)
    datasets: [
      {
        label: 'Tendencia de Activos',
        data: datos,
        borderColor: '#8B4513', // Color de la línea
        backgroundColor: 'orange', // Color de los puntos
        fill: false,
        tension: 0.2, // Curvatura de la línea (0 para línea recta)
        pointBackgroundColor: 'orange',
        pointBorderColor: 'orange',
        pointBorderWidth: 4,
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    devicePixelRatio: 2, // Ajusta a 2 o incluso más para pantallas de alta densidad
    plugins: {
      legend: {
        display: false, // Oculta la leyenda (opcional)
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        max: maximo, // Ajusta el máximo del eje Y según el ejemplo (50%) 
        min: minimo,
        ticks: {
          callback: function(value) {
            return historialDeCotizaciones ? '$' + value : value + '%'; // Muestra los valores con el símbolo de porcentaje
          },
          color: 'black', // Color de las etiquetas en el eje Y
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.6)', // Color de las líneas de la cuadrícula
        },
      },
      x: {
        ticks: {
          color: 'black', // Color de las etiquetas en el eje X
        },
        grid: {
          display: false, // Oculta las líneas de la cuadrícula en el eje X
        },
      },
    },
  };

  return (
    <div className='grafico-tendencias-fondo' style={{visibility: (mostrar) ? 'visible' : 'hidden'}}>
        <Line data={data} options={options} />
    </div>
  );
};
{
/*Datos (data): Puedes cambiar el arreglo data con los valores de tus activos financieros. Los valores en labels representan los periodos (meses en este caso), pero también puedes personalizarlos.
Estilos y Colores: Cambié el color de fondo y el de las líneas y puntos para que coincidan con tu imagen de ejemplo.
Opciones (options):
Configura la escala y para empezar en 0 y limitarse al 50%.
Usa tension: 0.4 para darle una leve curvatura a la línea.
Cambia los colores de las etiquetas y líneas de la cuadrícula para que se vean sobre un fondo oscuro.
*/
}
export default TrendChart;
