import React, { useState } from "react";
import './FinalDeSemana.css';
import ValorInfo from "../../EstadoDeCuenta/ValorInfo";
import ListadoDeActivos from "../../EstadoDeCuenta/ListadoDeActivos/ListadoDeActivos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faChevronLeft, faChevronRight, faMinus, faEquals } from "@fortawesome/free-solid-svg-icons";

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
    etapa,
    noticias,
    numeroDeSemana,
    cantidadMaximaDeSemanas
    }) => {

        const variacionEnValorNeto = estadoDeCuentaNuevo['valorNeto'] - estadoDeCuentaAnterior['valorNeto'];
        const diferenciaRespectoDeObjetivo = estadoDeCuentaNuevo['valorNeto'] - valorObjetivo;

        return (
            
            
            <div className="final-de-semana-wrapper">
                <h2 className="poppins-black">¡Semana finalizada!</h2>

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
                                duracionDeAnimacion={1000}
                            />
                            <ListadoDeActivos
                                mostrar={mostrarPortfolioNuevo}
                                portfolio={estadoDeCuentaNuevo['portfolio']}
                                titulo={'Cotizaciones'}
                                duracionDeAnimacion={1500}
                            />
                        </div>
                    </div>

                )}

                {/* Evolución de objetivo */}

                {etapa === 'objetivo' && (
                
                <div className="final-de-semana-objetivo">
                    <h3>Progreso del objetivo</h3>
                    <div className="final-de-semana-objetivo-evolucion-valores">
                        <ValorInfo
                                titulo="Valor neto anterior"
                                valor={estadoDeCuentaAnterior['valorNeto']}
                                mostrar={mostrarEstadoDeCuentaActual}
                                duracionDeAnimacion={500}
                            />
                        <FontAwesomeIcon icon={faMinus}/>
                        <ValorInfo
                                titulo="Nuevo valor neto"
                                valor={estadoDeCuentaNuevo['valorNeto']}
                                mostrar={mostrarEstadoDeCuentaActual}
                                duracionDeAnimacion={500}
                            />
                        <FontAwesomeIcon icon={faEquals}/>
                        <ValorInfo
                                titulo="Variación"
                                valor={variacionEnValorNeto}
                                mostrar={mostrarEstadoDeCuentaActual}
                                duracionDeAnimacion={500}
                                incluirSigno={true}
                            />
                    </div>
                    <div className="final-de-semana-objetivo-evolucion-valores">
                        <ValorInfo
                                titulo="Nuevo valor neto"
                                valor={estadoDeCuentaNuevo['valorNeto']}
                                mostrar={mostrarEstadoDeCuentaActual}
                                duracionDeAnimacion={1000}
                            />
                        <FontAwesomeIcon icon={faMinus}/>
                        <ValorInfo
                                titulo="Valor objetivo"
                                valor={valorObjetivo}
                                mostrar={mostrarEstadoDeCuentaNuevo}
                                duracionDeAnimacion={1000}
                            />
                        <FontAwesomeIcon icon={faEquals}/>
                        <ValorInfo
                                titulo="Diferencia respecto de objetivo"
                                valor={diferenciaRespectoDeObjetivo}
                                mostrar={mostrarEstadoDeCuentaNuevo}
                                duracionDeAnimacion={2000}
                                incluirSigno={true}
                            />
                    </div>
                </div>

                )}

                {etapa === 'noticias' && (
                
                <>
                    <h3 className="poppins-black">Últimas noticias</h3>
                    
                    <div className="final-de-semana-noticias">
                    
                        <div className="final-de-semana-noticia">
                            <h4 className="poppins-bold">{noticias[0]['titulo']}</h4>
                            <p>{noticias[0]['cuerpo']}</p>
                        </div>

                        <div className="final-de-semana-noticia">
                        <h4 className="poppins-bold">{noticias[1]['titulo']}</h4>
                        <p>{noticias[1]['cuerpo']}</p>
                        </div>

                        <div className="final-de-semana-noticia">
                        <h4 className="poppins-bold">{noticias[2]['titulo']}</h4>
                        <p>{noticias[2]['cuerpo']}</p>
                        </div>

                    </div>
                </>

                )}

                {etapa === 'comienzoDeNuevaSemana' && (
                        <p className='final-de-semana-texto-nueva-semana poppins-black'
                            >
                                {`Comenzando la semana número ${numeroDeSemana + 1} de ${cantidadMaximaDeSemanas}`}
                        </p>
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