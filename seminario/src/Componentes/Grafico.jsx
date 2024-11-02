import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const Grafico = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');
        const graficoActivos = new Chart(ctx, {
            type: 'pie', // Cambia el tipo de gráfico según tus necesidades
            data: {
                labels: ['Acciones', 'Bonos', 'Fondos Mutuos', 'Inmuebles'],
                datasets: [{
                    label: 'Porcentaje de Tenencia',
                    data: [40, 30, 20, 10], // Puedes modificar estos datos según tu lógica
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Distribución de Activos Financieros'
                    }
                }
            }
        });

        // Limpiar el gráfico al desmontar el componente
        return () => {
            graficoActivos.destroy();
        };
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center">Tenencia de Activos Financieros</h2>
            <canvas ref={canvasRef} width="400" height="200"></canvas>
        </div>
    );
};

export default Grafico;