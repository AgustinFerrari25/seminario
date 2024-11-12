import React, { useState } from "react";

import '../Estilos/EstilosTutorial.css'
import '../Estilos/Comunes.css'

// Imports para las distintas secciones
import Operar from './Comunes/Operar/Operar.jsx'
import EstadoDeCuenta from './EstadoDeCuenta/EstadoDeCuenta.jsx'

// Imports para header
import Header from "./Comunes/Header.jsx";

// Imports de variables de prueba hardcodeadas
import textosTutorial from "./Tutorial/textosTutorial.js";
import activosTutorial from "./Tutorial/activosTutorial.js";
import estadoDeCuentaTutorial from "./Tutorial/estadoDeCuentaTutorial.js";

// Imports para tutorial grande
import TutorialGrande from "./Tutorial/tutorial-grande.jsx";

// Imports para tutorial chico
import TutorialChico from "./Tutorial/tutorial-chico.jsx";

const Tutorial = () => {
    const [pasoDeTutorialActual, setPasoDeTutorialActual] = useState(0);
    const [modoTutorialChico, setModoTutorialChico] = useState(false);
    const [mostrarOperar, setMostrarOperar] = useState(false);
    const [activoMostrado, setActivoMostrado] = useState(0);
    const [seccionMostrada, setSeccionMostrada] = useState('');
    
    const manejarCambioDeActivo = (indice) => {
        if (indice === 0 && pasoDeTutorialActual === 16) {
            setPasoDeTutorialActual( pasoDeTutorialActual + 1)
        }
        setActivoMostrado(indice);
    };

    const manejarCambioDeSeccion = (seccion) => {
        setSeccionMostrada(seccion);
    };

    const manejarSiguiente = () => {
        if (pasoDeTutorialActual < textosTutorial.length - 1) {
            setPasoDeTutorialActual(pasoDeTutorialActual + 1);


            if (pasoDeTutorialActual === 9) {
                setModoTutorialChico(true);
            }

            if (pasoDeTutorialActual >= 10) {
                setSeccionMostrada('estadoDeCuenta');
            }

            if (pasoDeTutorialActual >= 13) {
                setMostrarOperar(true);
            }

            if (pasoDeTutorialActual >= 14) {
                setSeccionMostrada('operar');

            }
        }
    };

    const manejarAnterior = () => {
        if (pasoDeTutorialActual > 0) {
            setPasoDeTutorialActual(pasoDeTutorialActual - 1);
            if (pasoDeTutorialActual === 10) {
                setModoTutorialChico(false);
            }
        }
    };



    return (
        
        <div className="wrapper-general">

            {/* Header */}
            <Header
                modoDeJuego={"Aprendizaje"}
                mostrarEstadoDeCuenta={pasoDeTutorialActual >= 10}
                mostrarOperar={mostrarOperar}
                destacarOperar={pasoDeTutorialActual===14}
                funcionOperar={pasoDeTutorialActual === 14 ? manejarSiguiente : manejarCambioDeSeccion}
                funcionEstadoDeCuenta={manejarCambioDeSeccion}
                />
            

            {/* Play Area */}
            <div className="play-area">

                
                {/* modoTutorialChico controla si el tutorial es grande (opcupa toda la ventana)
                    o chico (cuadro de diálogo abajo, dejando espacio para el área de juego) */}
                {modoTutorialChico ? (
                    
                    <> {/* Contenido cuando el diálogo del tutorial está abajo */}
                    
                    {seccionMostrada === 'estadoDeCuenta' && (
                    
                        <EstadoDeCuenta
                            estadoDeCuenta={estadoDeCuentaTutorial}
                            mostrarValores={pasoDeTutorialActual>10}
                            mostrarListadoDeActivos={pasoDeTutorialActual>21}
                            mostrarGraficoDeTenencias={pasoDeTutorialActual>21}
                        />

                    )}
                    
                    {seccionMostrada === 'operar' && (
                    <Operar
                        activoMostado={activosTutorial[activoMostrado]}
                        estadoDeCuenta={estadoDeCuentaTutorial}

                        mostrarMenuSeleccionActivos={pasoDeTutorialActual >= 14}
                        menuActivosCondicionDestacar={pasoDeTutorialActual===16}
                        menuActivosOpcionADestacar={0}
                        menuActivosFuncionNavegacion={manejarCambioDeActivo}

                        mostrarDescripcionDelActivo={pasoDeTutorialActual > 16}
                        mostrarCotizacion={pasoDeTutorialActual > 17}
                        mostrarGraficoTendencias={pasoDeTutorialActual > 18}
                        mostrarValorLiquido={pasoDeTutorialActual>19}
                        mostrarTenencias={pasoDeTutorialActual>20}
                        mostrarCaracteristicas={pasoDeTutorialActual>21}
                        mostrarBotonesOperar={pasoDeTutorialActual > 22}
                    />
                    )}

                     {/* Contenido de Texto tutorial */}

                    <TutorialChico
                        contenido={textosTutorial[pasoDeTutorialActual].text}
                        manejarAnterior={manejarAnterior}
                        manejarSiguiente={manejarSiguiente}
                        desactivarAnterior={pasoDeTutorialActual===0}
                        desactivarSiguiente={(pasoDeTutorialActual === textosTutorial.length - 1 || pasoDeTutorialActual === 14 || pasoDeTutorialActual === 16)}
                        abajo={pasoDeTutorialActual > 9 && pasoDeTutorialActual != 19 && pasoDeTutorialActual <= 22 }
                        arriba={pasoDeTutorialActual === 19 || pasoDeTutorialActual > 22 }
                        />
                    </>
                 
                    ) : (

                    <> {/* Contenido cuando el diálogo del tutorial está arriba */}

                        <TutorialGrande
                            contenido={textosTutorial[pasoDeTutorialActual].text}
                            manejarAnterior={manejarAnterior}
                            manejarSiguiente={manejarSiguiente}
                            desactivarAnterior={pasoDeTutorialActual===0}
                            desactivarSiguiente={pasoDeTutorialActual === textosTutorial.length - 1}
                        />

                    </>
                )}
            </div>
        </div>
    );
}

export default Tutorial;