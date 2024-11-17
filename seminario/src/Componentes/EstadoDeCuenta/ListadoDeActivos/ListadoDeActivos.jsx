import React from 'react';
import './ListadoDeActivos.css';
import ListadoDeActivosOpcion from './ListadoDeActivosOpcion.jsx';

const ListadoDeActivos = ({titulo, portfolio, mostrar}) => {
    return (
        <div className='listado-de-activos' style={{visibility: (mostrar) ? 'visible' : 'hidden'}}>
            <h2>{titulo}</h2>
            {Object.entries(portfolio).map(([etiqueta, { valorNominal }]) => (
                <ListadoDeActivosOpcion
                    key={etiqueta}
                    etiqueta={etiqueta}
                    valorNominal={valorNominal}
                    />
            ))}
        </div>
    );
}

export default ListadoDeActivos;