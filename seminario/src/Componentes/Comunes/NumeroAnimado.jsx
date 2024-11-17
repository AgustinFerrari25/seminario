import React, { useState, useEffect } from 'react';

const NumeroAnimado = ({ valor, mostrar, duracionDeAnimacion }) => {
    const [valorMostrado, setValorMostrado] = useState(0);

    useEffect(() => {
        if (mostrar) {
            let inicio = 0;
            const fin = valor;
            const duracion = duracionDeAnimacion ? duracionDeAnimacion : 0; // Duration in milliseconds
            const intervaloDeIncremento = 50; // Time between increments in milliseconds
            const pasosTotales = Math.ceil(duracion / intervaloDeIncremento);
            const incremento = (fin - inicio) / pasosTotales;

            const intervalo = setInterval(() => {
                inicio += incremento;
                if (inicio >= fin) {
                    inicio = fin;
                    clearInterval(intervalo);
                }
                setValorMostrado(Math.round(inicio));
            }, intervaloDeIncremento);
        } else {
            setValorMostrado(0); // Reset to 0 when not visible
        }
    }, [mostrar, valor]);

    return <span>{valorMostrado.toLocaleString('es-AR', { minimumFractionDigits: 2 })}</span>;
};

export default NumeroAnimado;