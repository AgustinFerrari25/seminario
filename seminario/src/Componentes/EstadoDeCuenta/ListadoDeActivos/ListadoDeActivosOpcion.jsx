import React, { act } from 'react';
import './ListadoDeActivosOpcion.css';

const ListadoDeActivosOpcion = ({etiqueta, valorNominal}) => {
    return (
        <div className='listado-de-activos-opcion'>
            <p className='listado-de-activos-opcion-etiqueta poppins-medium'>
                {etiqueta}
            </p>
            <p className='listado-de-activos-opcion-valor-nominal poppins-black'>
                ${valorNominal.toLocaleString('es-AR', { minimumFractionDigits: 2 })}
                </p>
        </div>
    );
}

export default ListadoDeActivosOpcion;