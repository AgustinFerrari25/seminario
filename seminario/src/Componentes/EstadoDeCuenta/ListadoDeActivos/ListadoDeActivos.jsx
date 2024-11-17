import React from 'react';
import './ListadoDeActivos.css';
import ListadoDeActivosOpcion from './ListadoDeActivosOpcion.jsx';
import NumeroAnimado from '../../Comunes/NumeroAnimado.jsx';

const ListadoDeActivos = ({titulo, portfolio, mostrar, duracionDeAnimacion}) => {
    
    const totalInvertido = Object.values(portfolio).reduce((acumulador, activo) => {
        return acumulador + activo.valorNominal;
    }, 0);

    return (
        <div className='listado-de-activos' style={{visibility: (mostrar) ? 'visible' : 'hidden'}}>
            <h2>{titulo}</h2>
            {Object.entries(portfolio).map(([etiqueta, { valorNominal }]) => (
                valorNominal > 0 && (<ListadoDeActivosOpcion
                    key={etiqueta}
                    etiqueta={etiqueta}
                    valorNominal={valorNominal}
                    mostrar={mostrar}
                    duracionDeAnimacion={duracionDeAnimacion}

                    />)
            ))}
            <div className='listado-de-activos-total-invertido'>
                <p className='poppins-bold listado-de-activos-total-etiqueta'>Total invertido:</p>
                <p className='poppins-black listado-de-activos-total-valor'>
                    $
                    <NumeroAnimado
                        valor={totalInvertido}
                        mostrar={mostrar}
                        duracionDeAnimacion={duracionDeAnimacion}/>
                </p>
            </div>
        </div>
    );
}

export default ListadoDeActivos;