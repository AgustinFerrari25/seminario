import React, { act } from 'react';
import './ListadoDeActivosOpcion.css';
import NumeroAnimado from '../../Comunes/NumeroAnimado';

const ListadoDeActivosOpcion = ({etiqueta, valorNominal, duracionDeAnimacion, mostrar}) => {
    return (
        <div className='listado-de-activos-opcion'>
            <p className='listado-de-activos-opcion-etiqueta poppins-medium'>
                {etiqueta}
            </p>
            <p className='listado-de-activos-opcion-valor-nominal poppins-black'>
                $<NumeroAnimado valor={valorNominal} mostrar={mostrar} duracionDeAnimacion={duracionDeAnimacion}/>
                </p>
        </div>
    );
}

export default ListadoDeActivosOpcion;