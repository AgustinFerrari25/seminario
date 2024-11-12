import React from "react";
import './Caracteristicas.css'
import CirculosDePuntajeContenedor from './Caracteristicas/CirculosDePuntajeContenedor'

const Caracteristicas = ({destacado, mostrar, puntajes}) => {
    return (
        <div
            className={`
                caracteristicas-wrapper
                ${destacado? 'destacado' : ''}
                `}
            style={{visibility: (mostrar) ? 'visible' : 'hidden'}}
            >
            <h4 className="caracteristicas-titulo poppins-black">Características</h4>
            <div className="caracteristicas-puntaje poppins-medium">
                    <p>Volatilidad</p>
                    <CirculosDePuntajeContenedor puntaje={puntajes['volatilidad']}/>
            </div>
            <div className="caracteristicas-puntaje poppins-medium">
                    <p>Potencial de crecimiento</p>
                    <CirculosDePuntajeContenedor puntaje={puntajes['potencialDeCrecimiento']}/>
            </div>
            <div className="caracteristicas-puntaje poppins-medium">
                <p>Susceptibilidad a eventos</p>
                <CirculosDePuntajeContenedor puntaje={puntajes['susceptibilidadAEventos']}/>    
            </div>
        </div>
    )
};

export default Caracteristicas;