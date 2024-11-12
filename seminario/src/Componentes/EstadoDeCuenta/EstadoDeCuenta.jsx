import React from 'react';
import './EstadoDeCuenta.css'
import Valores from './Valores.jsx'
import GraficoDeTenencias from './GraficoDeTenencias.jsx'
import ListadoDeActivos from './ListadoDeActivos/ListadoDeActivos.jsx'

const EstadoDeCuenta = ({
    estadoDeCuenta,
    mostrarValores,
    mostrarListadoDeActivos,
    mostrarGraficoDeTenencias
}) => {
    return (
        <div className="estado-de-cuenta">
            <Valores
                valorNeto={estadoDeCuenta['valorNeto']}
                valorLiquido={estadoDeCuenta['valorLiquido']}
                mostrar={mostrarValores}
                />
            <div className='estado-de-cuenta-tenencias'>
                <ListadoDeActivos
                    portfolio={estadoDeCuenta['portfolio']}
                    mostrar={mostrarListadoDeActivos}
                />
                <GraficoDeTenencias
                    datos={estadoDeCuenta['portfolio']}  
                    mostrar={mostrarGraficoDeTenencias}
                    />
            </div>
            
        </div>
    )
};

export default EstadoDeCuenta;