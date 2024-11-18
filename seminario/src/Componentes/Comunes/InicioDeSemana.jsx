import React, { useState } from "react";
import './InicioDeSemana.css';
import ValorInfo from "../EstadoDeCuenta/ValorInfo";
import ListadoDeActivos from "../EstadoDeCuenta/ListadoDeActivos/ListadoDeActivos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faChevronLeft, faChevronRight, faMinus, faEquals } from "@fortawesome/free-solid-svg-icons";

const FinalDeSemana = ({
    estadoDeCuenta,
    valorObjetivo,
    funcionSiguiente,
    funcionAnterior,
    desactivarAnterior,
    desactivarSiguiente,
    etapa,
    noticias
    }) => {

        return (
            
            
            <div className="inicio-de-semana-wrapper">
                

                {/* Información sobre lección */}
                
                {etapa === 'introduccion' && (
                    <div className="inicio-de-semana-objetivo">
                        <h2 className="poppins-black">¡Comienzo de la lección!</h2>
                        <h3 className="poppins-bold">Este es tu valor neto inicial, y tu objetivo</h3>
                        
                        <div className="inicio-de-semana-objetivo-valores">
                            <ValorInfo
                                    titulo="Valor neto inicial"
                                    valor={estadoDeCuenta['valorNeto']}
                                    mostrar={true}
                                    duracionDeAnimacion={500}
                                />
                            <ValorInfo
                                    titulo="Valor neto objetivo"
                                    valor={valorObjetivo}
                                    mostrar={true}
                                    duracionDeAnimacion={500}
                                />
                        </div>

                        <div className="inicio-de-semana-objetivo-reglas">
                            <p>Los parámetros de esta lección son los siguientes:</p>
                            <ul>
                                <li><span className="poppins-bold">• Duración:</span> 10 semanas.</li>
                                <li><span className="poppins-bold">• Eventos:</span> 3 por semana.</li>
                                <li><span className="poppins-bold">• Tipo de activo:</span> acciones.</li>
                                <li><span className="poppins-bold">• Cantidad de activos disponibles:</span> 20.</li>
                            </ul>
                            
                        </div>

                    </div>
                )}

                {etapa === 'noticias' && (
                    <>
                        <h2 className="poppins-black">Últimas noticias</h2>
                        
                        <div className="inicio-de-semana-noticias">
                        
                            <div className="inicio-de-semana-noticia">
                                <h3 className="poppins-bold">{noticias[0]['titulo']}</h3>
                                <p>{noticias[0]['cuerpo']}</p>
                            </div>

                            <div className="inicio-de-semana-noticia">
                                <h3 className="poppins-bold">{noticias[1]['titulo']}</h3>
                                <p>{noticias[1]['cuerpo']}</p>
                            </div>

                            <div className="inicio-de-semana-noticia">
                                <h3 className="poppins-bold">{noticias[2]['titulo']}</h3>
                                <p>{noticias[2]['cuerpo']}</p>
                            </div>

                        </div>
                        </>
                )}
                
                <div className="inicio-de-semana-botones">
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