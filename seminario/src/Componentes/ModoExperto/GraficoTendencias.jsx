import React from 'react';
import { Line } from 'react-chartjs-2';

const TrendChart = () => {
  const data = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'], // Etiquetas de cada punto (puedes cambiarlas según los meses o periodos deseados)
    datasets: [
      {
        label: 'Tendencia de Activos',
        data: [20, 22, 24, 23, 25, 26, 28, 27, 26, 25, 24, 26], // Datos de ejemplo
        borderColor: '#8B4513', // Color de la línea
        backgroundColor: 'orange', // Color de los puntos
        fill: false,
        tension: 0.4, // Curvatura de la línea (0 para línea recta)
        pointBackgroundColor: 'orange',
        pointBorderColor: 'orange',
        pointBorderWidth: 4,
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    devicePixelRatio: 2, // Ajusta a 2 o incluso más para pantallas de alta densidad
    plugins: {
      legend: {
        display: false, // Oculta la leyenda (opcional)
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 50, // Ajusta el máximo del eje Y según el ejemplo (50%)
        ticks: {
          callback: function(value) {
            return value + '%'; // Muestra los valores con el símbolo de porcentaje
          },
          color: 'white', // Color de las etiquetas en el eje Y
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)', // Color de las líneas de la cuadrícula
        },
      },
      x: {
        ticks: {
          color: 'white', // Color de las etiquetas en el eje X
        },
        grid: {
          display: false, // Oculta las líneas de la cuadrícula en el eje X
        },
      },
    },
  };

  return (
    <div style={{ backgroundColor: '#4B4B7C', padding: '20px', borderRadius: '8px' }}>
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
