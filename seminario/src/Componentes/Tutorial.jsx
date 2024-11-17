import React, { useState } from "react";

import '../Estilos/EstilosTutorial.css'
import '../Estilos/Comunes.css'

// Imports para las distintas secciones
import Operar from './Comunes/Operar/Operar.jsx'
import EstadoDeCuenta from './EstadoDeCuenta/EstadoDeCuenta.jsx'
import FinalDeSemana from "./Comunes/FinalDeSemana/FinalDeSemana.jsx";

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
    const [estadoDeCuenta, setEstadoDeCuenta] = useState(estadoDeCuentaTutorial);
    const [estadoDeCuentaNuevo, setEstadoDeCuentaNuevo] = useState(estadoDeCuentaTutorial);
    const [etapaFinalDeSemana, setEtapaFinalDeSemana] = useState('cotizaciones');
    
    const manejarCambioDeActivo = (indice) => {
        if (indice === 0 && pasoDeTutorialActual === 16) {
            setPasoDeTutorialActual( pasoDeTutorialActual + 1)
        }
        setActivoMostrado(indice);
    };

    const manejarCambioDeSeccion = (seccion) => {
        setSeccionMostrada(seccion);
    };

    const manejarCompraDeActivo = (cantidadComprada) => {
        // Me guardo el activo que se está mostrando para simplificar las cosas
        const activoComprado = activosTutorial[activoMostrado];

        // Chequeo que la cantidad sea válida
        const cantidadNumerica = parseFloat(cantidadComprada); 
        if (isNaN(cantidadNumerica) || cantidadNumerica <= 0) {
            alert('Por favor, ingrese una cantidad válida.');
            return;
        }

        // Me guardo el valor que representa la compra para simplificar las cosas
        const valorTotal = cantidadNumerica * activoComprado.cotizacion;

        // Actualizamos el porfolio dentro de estadoDeCuenta
        setEstadoDeCuenta(prevEstado => {
            // Nuevo portfolio basado en el anterior
            const nuevoPortfolio = { ...prevEstado.portfolio };
            const nuevoValorLiquido = prevEstado.valorLiquido - valorTotal;

            if (nuevoPortfolio[activoComprado.nombre]) {
                // Si ya existe el activo, lo actualizo
                nuevoPortfolio[activoComprado.nombre] = {
                    tenencias: nuevoPortfolio[activoComprado.nombre].tenencias + cantidadNumerica,
                    valorNominal: nuevoPortfolio[activoComprado.nombre].valorNominal + valorTotal
                };
            } else {
                // Si no existe, lo agrego
                nuevoPortfolio[activoComprado.nombre] = {
                    tenencias: cantidadNumerica,
                    valorNominal: valorTotal
                };
            }

            // Devolver el estadoDeCuenta actualizado
            return {
                ...prevEstado,
                valorLiquido: nuevoValorLiquido,
                portfolio: nuevoPortfolio
            };
        });
        if(pasoDeTutorialActual === 30){
            manejarSiguiente();
        }
    };

    const manejarRecotizacionDeActivos = () => {
        setEstadoDeCuentaNuevo(prevEstado => {
            
            const estadoDeCuentaAnterior = JSON.parse(JSON.stringify(estadoDeCuenta));

            const nuevoPortfolio = { ...estadoDeCuentaAnterior.portfolio };

            nuevoPortfolio['Plazo fijo']['valorNominal'] *= 1.2;

            const nuevoValorNeto = Object.values(nuevoPortfolio).reduce((accumulator, item) => {
                return accumulator + item.valorNominal; // Sum the valorNominal
            }, 0);

            // Devolver el estadoDeCuenta actualizado
            return {
                ...estadoDeCuentaAnterior,
                valorNeto: nuevoValorNeto,
                portfolio: nuevoPortfolio
            };
        });
    }

    const manejarSiguiente = () => {
        if (pasoDeTutorialActual < textosTutorial.length - 1) {
            setPasoDeTutorialActual(pasoDeTutorialActual + 1);


            if (pasoDeTutorialActual === 9) {
                setModoTutorialChico(true);
            }

            if (pasoDeTutorialActual === 10) {
                setSeccionMostrada('estadoDeCuenta');
            }

            if (pasoDeTutorialActual >= 13) {
                setMostrarOperar(true);
            }

            if (pasoDeTutorialActual === 14) {
                setSeccionMostrada('operar');

            }

            if (pasoDeTutorialActual === 33) {
                setSeccionMostrada('estadoDeCuenta');

            }

            if (pasoDeTutorialActual === 36) {
                setSeccionMostrada('finalDeSemana');
                manejarRecotizacionDeActivos();

            }

            if(pasoDeTutorialActual === 40) {
                setEtapaFinalDeSemana('objetivo');
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
                funcionEstadoDeCuenta={pasoDeTutorialActual === 33 ? manejarSiguiente : manejarCambioDeSeccion}
                destacarEstadoDeCuenta={pasoDeTutorialActual === 33}
                />
            

            {/* Play Area */}
            <div className="play-area">

                
                {/* modoTutorialChico controla si el tutorial es grande (opcupa toda la ventana)
                    o chico (cuadro de diálogo abajo, dejando espacio para el área de juego) */}
                {modoTutorialChico ? (
                    
                    <> {/* Contenido cuando el diálogo del tutorial está abajo */}
                    
                    {seccionMostrada === 'estadoDeCuenta' && (
                    
                        <EstadoDeCuenta
                            estadoDeCuenta={estadoDeCuenta}
                            valorObjetivo={2000}
                            mostrarValorNeto={pasoDeTutorialActual>10}
                            mostrarValorLiquido={pasoDeTutorialActual>10}
                            mostrarListadoDeActivos={pasoDeTutorialActual>34}
                            mostrarGraficoDeTenencias={pasoDeTutorialActual>33}
                            mostrarBotonTerminarSemana={pasoDeTutorialActual===36}
                            destacarBotonTerminarSemana={pasoDeTutorialActual===36}
                            mostrarValorObjetivo={pasoDeTutorialActual < 0}
                            funcionTerminarSemana={manejarSiguiente}
                            tituloListadoDeActivos={'Listado de activos'}
                        />

                    )}
                    
                    {seccionMostrada === 'operar' && (
                    <Operar
                        activoMostrado={activosTutorial[activoMostrado]}
                        estadoDeCuenta={estadoDeCuenta}

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

                        menuCompraVentaFuncionConfirmar={manejarCompraDeActivo}
                        menuCompraVentaFuncionCancelar={pasoDeTutorialActual == 31 ? manejarSiguiente : null}
                        botonesOperarFuncionComprar={pasoDeTutorialActual === 24 ? manejarSiguiente : null}
                    />
                    )}

                    {seccionMostrada === 'finalDeSemana' && (
                        <FinalDeSemana
                            estadoDeCuentaAnterior={estadoDeCuenta}
                            mostrarEstadoDeCuentaActual={pasoDeTutorialActual > 37}
                            mostrarEstadoDeCuentaNuevo={pasoDeTutorialActual > 38}
                            mostrarPortfolioActual={pasoDeTutorialActual > 37}
                            mostrarPortfolioNuevo={pasoDeTutorialActual > 38}
                            estadoDeCuentaNuevo={estadoDeCuentaNuevo}
                            valorObjetivo={1000}
                            etapa={etapaFinalDeSemana}
                        />
                    )}

                     {/* Contenido de Texto tutorial */}

                    <TutorialChico
                        contenido={textosTutorial[pasoDeTutorialActual].text}
                        manejarAnterior={manejarAnterior}
                        manejarSiguiente={manejarSiguiente}
                        desactivarAnterior={pasoDeTutorialActual===0}
                        desactivarSiguiente={
                            pasoDeTutorialActual === textosTutorial.length - 1 ||
                            pasoDeTutorialActual === 14 ||
                            pasoDeTutorialActual === 16 ||
                            pasoDeTutorialActual === 24 ||
                            pasoDeTutorialActual === 30 ||
                            pasoDeTutorialActual === 31 ||
                            pasoDeTutorialActual === 33 ||
                            pasoDeTutorialActual === 36
                        }
                        abajo={
                            pasoDeTutorialActual > 9 &&
                            pasoDeTutorialActual != 19 &&
                            pasoDeTutorialActual <= 22 ||
                            pasoDeTutorialActual > 24
                        }
                        arriba={
                            pasoDeTutorialActual === 19 ||
                            pasoDeTutorialActual > 22 &&
                            pasoDeTutorialActual < 25
                        }
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

                        {pasoDeTutorialActual === 37 && (
                            <div style={{height: '150px'}}>Acompañamiento</div>
                        )}

                    </>
                )}
            </div>
        </div>
    );
}

export default Tutorial;