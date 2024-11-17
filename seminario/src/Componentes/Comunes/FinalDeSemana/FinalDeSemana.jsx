import React, { useState } from "react";
import './FinalDeSemana.css';
import ValorInfo from "../../EstadoDeCuenta/ValorInfo";
import ListadoDeActivos from "../../EstadoDeCuenta/ListadoDeActivos/ListadoDeActivos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const FinalDeSemana = ({
    estadoDeCuentaAnterior,
    estadoDeCuentaNuevo,
    valorObjetivo,
    funcionSiguiente,
    funcionAnterior,
    desactivarAnterior,
    desactivarSiguiente,
    mostrarEstadoDeCuentaActual,
    mostrarEstadoDeCuentaNuevo,
    mostrarPortfolioActual,
    mostrarPortfolioNuevo,
    mostrarBotonesAnteriorSiguiente,
    etapa
    }) => {


        return (
            
            
            <div className="final-de-semana-wrapper">
                <h2>¡Semana finalizada!</h2>

                {/* Cotizaciones */}
                
                {etapa === 'cotizaciones' && (

                    <div className="final-de-semana-columnas">
                        
                        {/* Cotizaciones antes */}
                        
                        <div className="final-de-semana-columna">
                            <h3 style={{visibility: (mostrarEstadoDeCuentaActual) ? 'visible' : 'hidden'}}>Valores actuales</h3>
                            <ValorInfo
                                titulo="Valor neto"
                                valor={estadoDeCuentaAnterior['valorNeto']}
                                mostrar={mostrarEstadoDeCuentaActual}
                            />
                            <ListadoDeActivos
                                mostrar={mostrarPortfolioActual}
                                portfolio={estadoDeCuentaAnterior['portfolio']}
                                titulo={'Cotizaciones'}
                            />
                        </div>
                        
                        {/* Cotizaciones después */}
                        
                        <div className="final-de-semana-columna">
                            <h3 style={{visibility: (mostrarEstadoDeCuentaNuevo) ? 'visible' : 'hidden'}}>Nuevos valores</h3>
                            <ValorInfo
                                titulo="Valor neto"
                                valor={estadoDeCuentaNuevo['valorNeto']}
                                mostrar={mostrarEstadoDeCuentaNuevo}
                            />
                            <ListadoDeActivos
                                mostrar={mostrarPortfolioNuevo}
                                portfolio={estadoDeCuentaNuevo['portfolio']}
                                titulo={'Cotizaciones'}
                            />
                        </div>
                    </div>

                )}

                {etapa === 'objetivo' && (

                <div className="final-de-semana-columnas">
                    
                    {/* Cotizaciones antes */}
                    
                    <div className="final-de-semana-columna">
                        <h3 style={{visibility: (mostrarEstadoDeCuentaNuevo) ? 'visible' : 'hidden'}}>Valores actuales</h3>
                        <ValorInfo
                            titulo="Valor neto"
                            valor={estadoDeCuentaNuevo['valorNeto']}
                            mostrar={mostrarEstadoDeCuentaActual}
                        />
                    </div>
                    
                    {/* Cotizaciones después */}
                    
                    <div className="final-de-semana-columna">
                        <h3 style={{visibility: (mostrarEstadoDeCuentaActual) ? 'visible' : 'hidden'}}>Nuevos valores</h3>
                        <ValorInfo
                            titulo="Valor objetivo"
                            valor={valorObjetivo}
                            mostrar={mostrarEstadoDeCuentaNuevo}
                        />
                    </div>
                </div>

                )}

                <div className="final-de-semana-botones" style={{visibility: (mostrarBotonesAnteriorSiguiente) ? 'visible' : 'hidden'}}>
                    <button
                        onClick={funcionAnterior}
                        disabled={desactivarAnterior}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} /> Anterior
                    </button>
                    <button
                        onClick={funcionSiguiente}
                        disabled={desactivarSiguiente}
                    >
                        Siguiente <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>       
            </div>
        )
};

export default FinalDeSemana;