import React, { useState } from 'react';
import "./ValorInfo.css";
import "../../Estilos/Comunes.css";
import NumeroAnimado from '../Comunes/NumeroAnimado';
import useExplicacionEnHover from '../../hooks/explicacionEnHover';

const ValorInfo = ({ titulo, valor, explicacion, pequenio, mostrar, duracionDeAnimacion, incluirSigno}) => {

    const { textoExplicacion, mostrarExplicacion, ocultarExplicacion } = useExplicacionEnHover();

    const valorEsPositivo = valor >= 0;
    const signo = valorEsPositivo ? '+' : '';
    const estiloSegunSigno = valorEsPositivo ? 'valor-info-valor-positivo' : 'valor-info-valor-negativo';
    const valorSinSigno = Math.abs(valor).toFixed(2);

    return (
        <div
            className={`valor-info explicado-en-hover ${pequenio ? 'pequenio' : ''}`}
            style={{display: (mostrar) ? 'block' : 'none'}}
            >
            <h3 className="valor-info-titulo poppins-bold">{titulo}</h3>
            <div className="valor-info-contenido"
                            onMouseEnter={() => mostrarExplicacion(explicacion)}
                            onMouseLeave={ocultarExplicacion}
                            >
                <img src={require('../../img/simbolo-pesos.png')} alt="Símbolo de pesos" className="simbolo-pesos" />
                <p className={`valor-info-valor poppins-black ${incluirSigno ? estiloSegunSigno : ''}`}>
                    {incluirSigno ? signo : ''}
                    {valorEsPositivo ? '' : '-'}
                    $
                    <NumeroAnimado
                        valor={valorSinSigno}
                        mostrar={mostrar}
                        duracionDeAnimacion={duracionDeAnimacion}/>
                    </p>
                {textoExplicacion &&
                    (<div className="explicacion-en-hover">
                        <p>{textoExplicacion}</p>
                    </div>)}
            </div>

            
        </div>
    );
};

export default ValorInfo;
