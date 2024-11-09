import React, { useState } from 'react';
import "./ValorInfo.css";
import "../../Estilos/Comunes.css";
import useExplicacionEnHover from '../../hooks/explicacionEnHover';

const ValorInfo = ({ titulo, valor, explicacion, pequenio}) => {

    const { textoExplicacion, mostrarExplicacion, ocultarExplicacion } = useExplicacionEnHover();


    return (
        <div className={`valor-info explicado-en-hover ${pequenio ? 'pequenio' : ''}`}>
            <h3 className="valor-info-titulo poppins-bold">{titulo}</h3>
            <div className="valor-info-contenido"
                            onMouseEnter={() => mostrarExplicacion(explicacion)}
                            onMouseLeave={ocultarExplicacion}
                            >
                <img src={require('../../img/simbolo-pesos.png')} alt="Símbolo de pesos" className="simbolo-pesos" />
                <p className="valor-info-valor poppins-black">${valor.toLocaleString('es-AR', { minimumFractionDigits: 2 })}</p>
                {textoExplicacion &&
                    (<div className="explicacion-en-hover">
                        <p>{textoExplicacion}</p>
                    </div>)}
            </div>

            
        </div>
    );
};

export default ValorInfo;
