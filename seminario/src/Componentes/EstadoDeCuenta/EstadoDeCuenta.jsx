import React from 'react';
import './EstadoDeCuenta.css'
import Valores from './Valores.jsx'
import GraficoDeTenencias from './GraficoDeTenencias.jsx'
import ListadoDeActivos from './ListadoDeActivos/ListadoDeActivos.jsx'
import BotonTerminarSemana from './BotonTerminarSemana.jsx';

const EstadoDeCuenta = ({
    estadoDeCuenta,
    mostrarValorNeto,
    mostrarValorLiquido,
    mostrarValorObjetivo,
    mostrarListadoDeActivos,
    tituloListadoDeActivos,
    mostrarGraficoDeTenencias,
    destacarGraficoDeTenencias,
    mostrarBotonTerminarSemana,
    destacarBotonTerminarSemana,
    desactivarBotonTerminarSemana,
    funcionTerminarSemana,
    valorObjetivo
}) => {
    return (
        <div className="estado-de-cuenta">
            <Valores
                valorNeto={estadoDeCuenta['valorNeto']}
                valorLiquido={estadoDeCuenta['valorLiquido']}
                valorObjetivo={valorObjetivo}
                mostrarValorLiquido={mostrarValorLiquido}
                mostrarValorNeto={mostrarValorNeto}
                mostrarValorObjetivo={mostrarValorObjetivo}
                />
            <div className='estado-de-cuenta-tenencias'>
                <GraficoDeTenencias
                    datos={estadoDeCuenta['portfolio']}  
                    mostrar={mostrarGraficoDeTenencias}
                    destacar={destacarGraficoDeTenencias}
                    />
                <div className='estado-de-cuenta-tenencias-listado-y-boton'>
                    <ListadoDeActivos
                        portfolio={estadoDeCuenta['portfolio']}
                        mostrar={mostrarListadoDeActivos}
                        titulo={tituloListadoDeActivos}
                    />
                    <BotonTerminarSemana
                        mostrar={mostrarBotonTerminarSemana}
                        funcionTerminarSemana={funcionTerminarSemana}
                        desactivado={desactivarBotonTerminarSemana}
                        destacado={destacarBotonTerminarSemana}
                    />
                </div>
            </div>
            
        </div>
    )
};

export default EstadoDeCuenta;