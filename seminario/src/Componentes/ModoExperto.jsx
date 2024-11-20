import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../Estilos/EstilosTutorial.css'
import '../Estilos/Comunes.css'

// Imports para las distintas secciones
import InicioDeSemana from './Comunes/InicioDeSemana.jsx'
import EstadoDeCuenta from './EstadoDeCuenta/EstadoDeCuenta.jsx'
import Operar from './Comunes/Operar/Operar.jsx'
import FinalDeSemana from "./Comunes/FinalDeSemana/FinalDeSemana.jsx";

// Imports para header
import Header from "./Comunes/Header.jsx";

// Imports de variables de prueba hardcodeadas
import activosModoExperto from "./ModoExperto/activosModoExperto.js";
import estadoDeCuentaModoExperto from "./ModoExperto/estadoDeCuentaModoExperto.js";
import noticias from './ModoExperto/noticias.js'

const ModoExperto = () => {

    const [numeroDeSemana, setNumeroDeSemana] = useState(0);
    const [activoMostrado, setActivoMostrado] = useState(0);
    const [seccionMostrada, setSeccionMostrada] = useState('inicioDeSemana');
    const [estadoDeCuenta, setEstadoDeCuenta] = useState(estadoDeCuentaModoExperto);
    const [estadoDeCuentaNuevo, setEstadoDeCuentaNuevo] = useState(estadoDeCuentaModoExperto);
    const [etapaFinalDeSemana, setEtapaFinalDeSemana] = useState(0);
    const [etapaInicioDeSemana, setEtapaInicioDeSemana] = useState(0);

    const valorObjetivo = 20000;
    const cantidadMaximaDeSemanas = 10;
    const etapasInicioDesemana = ['introduccion', 'noticias'];
    const etapasFinalDeSemana = ['cotizaciones', 'objetivo', 'noticias', 'comienzoDeNuevaSemana'];

    const navigate = useNavigate();
    
    const manejarCambioDeActivo = (indice) => {
        setActivoMostrado(indice);
    };

    const manejarCambioDeSeccion = (seccion) => {
        setSeccionMostrada(seccion);
    };

    const manejarCompraDeActivo = (cantidadComprada) => {
        // Me guardo el activo que se está mostrando para simplificar las cosas
        const activoComprado = activosModoExperto[numeroDeSemana][activoMostrado];

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
    };

    const manejarVentaDeActivo = (cantidadComprada) => {
        // Me guardo el activo que se está mostrando para simplificar las cosas
        const activoVendido = activosModoExperto[numeroDeSemana][activoMostrado];

        // Chequeo que la cantidad sea válida
        const cantidadNumerica = parseFloat(cantidadComprada); 
        if (isNaN(cantidadNumerica) || cantidadNumerica <= 0) {
            alert('Por favor, ingrese una cantidad válida.');
            return;
        }

        // Me guardo el valor que representa la compra para simplificar las cosas
        const valorTotal = cantidadNumerica * activoVendido.cotizacion;

        // Actualizamos el porfolio dentro de estadoDeCuenta
        setEstadoDeCuenta(prevEstado => {
            // Nuevo portfolio basado en el anterior
            const nuevoPortfolio = { ...prevEstado.portfolio };
            const nuevoValorLiquido = prevEstado.valorLiquido + valorTotal;

            if (nuevoPortfolio[activoVendido.nombre]) {
                // Si ya existe el activo, lo actualizo
                nuevoPortfolio[activoVendido.nombre] = {
                    tenencias: nuevoPortfolio[activoVendido.nombre].tenencias - cantidadNumerica,
                    valorNominal: nuevoPortfolio[activoVendido.nombre].valorNominal - valorTotal
                };
            }

            // Devolver el estadoDeCuenta actualizado
            return {
                ...prevEstado,
                valorLiquido: nuevoValorLiquido,
                portfolio: nuevoPortfolio
            };
        });
    };

    const manejarRecotizacionDeActivos = (nuevoNumeroDeSemana) => {
        setEstadoDeCuentaNuevo(prevEstado => {
            
            const estadoDeCuentaAnterior = JSON.parse(JSON.stringify(estadoDeCuenta));

            const nuevoPortfolio = { ...estadoDeCuentaAnterior.portfolio };
            console.log(`numeroDeSemanaAjustado es ${nuevoNumeroDeSemana}`);

            switch(numeroDeSemana){
                case 0:
                    nuevoPortfolio['Apple Inc.']['valorNominal'] *= 1.03;
                    nuevoPortfolio['Tesla Inc.']['valorNominal'] *= 0.85;
                    nuevoPortfolio['Meta Platforms Inc. (Facebook)']['valorNominal'] *= 1.2;
                    nuevoPortfolio['NVIDIA Corporation']['valorNominal'] *= 1.05;
                    nuevoPortfolio['Coca-Cola Company']['valorNominal'] *= 0.7;
                    break;
                case 1:
                    nuevoPortfolio['Apple Inc.']['valorNominal'] *= 0.8365;
                    nuevoPortfolio['Tesla Inc.']['valorNominal'] *= 1.0935;
                    nuevoPortfolio['NVIDIA Corporation']['valorNominal'] *= 1.0423;
                    nuevoPortfolio['Coca-Cola Company']['valorNominal'] *= 1.0212;
                    break;
            }
            
            const nuevoValorNeto = Object.values(nuevoPortfolio).reduce((accumulator, item) => {
                return accumulator + item.valorNominal; // Sum the valorNominal
            }, 0) + estadoDeCuentaAnterior.valorLiquido;

            // Devolver el estadoDeCuenta actualizado
            return {
                ...estadoDeCuentaAnterior,
                valorNeto: nuevoValorNeto,
                portfolio: nuevoPortfolio
            };
        });
    };

    const manejarAvanzarEtapaInicioSemana = () => {
        const nuevaEtapaInicioDeSemana = etapaInicioDeSemana + 1;
        if (nuevaEtapaInicioDeSemana === etapasInicioDesemana.length){
            setSeccionMostrada('estadoDeCuenta');
            setEtapaInicioDeSemana(0);
            console.log(`Inicio de semana terminado, comenzando juego`);
        } else {
            setEtapaInicioDeSemana(nuevaEtapaInicioDeSemana);
            console.log(`
                Avanzado a la etapa ${nuevaEtapaInicioDeSemana} de inicio de semana,
                 ${etapasInicioDesemana[nuevaEtapaInicioDeSemana]}`);
        }
    };

    const manejarRetrocederEtapaInicioSemana = () => {
        const nuevaEtapaInicioDeSemana = etapaInicioDeSemana - 1;
        if (nuevaEtapaInicioDeSemana >= 0){
            setEtapaInicioDeSemana(nuevaEtapaInicioDeSemana);
            console.log(`
                Retrocediento a la etapa ${nuevaEtapaInicioDeSemana} de inicio de semana,
                 ${etapasInicioDesemana[nuevaEtapaInicioDeSemana]}`);
        }
    };

    const terminarSemana = () => {
        manejarRecotizacionDeActivos(numeroDeSemana);
        const nuevoNumeroDeSemana = numeroDeSemana + 1;
        setNumeroDeSemana(nuevoNumeroDeSemana);
        setSeccionMostrada('finalDeSemana');
    }

    const manejarAvanzarEtapaFinalDeSemana = () => {
        const nuevaEtapaFinalDeSemana = etapaFinalDeSemana + 1;
        if (nuevaEtapaFinalDeSemana === etapasFinalDeSemana.length){
            const nuevoEstadoDeCuenta = JSON.parse(JSON.stringify(estadoDeCuentaNuevo));
            setEstadoDeCuenta({...nuevoEstadoDeCuenta});
            setSeccionMostrada('estadoDeCuenta');
            setEtapaFinalDeSemana(0);
            console.log(`
                Comenzando una nueva semana, la número ${numeroDeSemana}.`)
        } else {
            setEtapaFinalDeSemana(nuevaEtapaFinalDeSemana);
            console.log(`
                Avanzado a la etapa ${nuevaEtapaFinalDeSemana} de final de semana,
                 ${etapasFinalDeSemana[nuevaEtapaFinalDeSemana]}`)
        }
    };

    const manejarRetrocederEtapaFinalDeSemana = () => {
        const nuevaEtapaFinalDeSemana = etapaFinalDeSemana - 1;
        if (nuevaEtapaFinalDeSemana >= 0){
            setEtapaFinalDeSemana(nuevaEtapaFinalDeSemana);
            console.log(`
                Retrocediendo a la etapa ${nuevaEtapaFinalDeSemana} de final de semana,
                 ${etapasFinalDeSemana[nuevaEtapaFinalDeSemana]}`)
        }
    };

    return (
        
        <div className="wrapper-general">

            {/* Header */}
            <Header
                modoDeJuego={"Aprendizaje"}
                mostrarTodosLosBotones={true}
                funcionOperar={manejarCambioDeSeccion}
                funcionEstadoDeCuenta={manejarCambioDeSeccion}
                funcionNoticias={manejarCambioDeSeccion}
                />
            

            {/* Play Area */}
            <div className="play-area">

                {seccionMostrada === 'inicioDeSemana' && (
                    <InicioDeSemana
                        estadoDeCuenta={estadoDeCuenta}
                        valorObjetivo={valorObjetivo}
                        funcionSiguiente={manejarAvanzarEtapaInicioSemana}
                        funcionAnterior={manejarRetrocederEtapaInicioSemana}
                        desactivarAnterior={etapaInicioDeSemana === 0}
                        etapa={etapasInicioDesemana[etapaInicioDeSemana]}
                        noticias={noticias[numeroDeSemana]}
                        />
                    )}

                {seccionMostrada === 'estadoDeCuenta' && (
                    <EstadoDeCuenta
                        estadoDeCuenta={estadoDeCuenta}
                        valorObjetivo={valorObjetivo}
                        mostrarValorNeto={true}
                        mostrarValorLiquido={true}
                        mostrarValorObjetivo={true}
                        mostrarListadoDeActivos={true}
                        mostrarGraficoDeTenencias={true}
                        mostrarBotonTerminarSemana={true}
                        funcionTerminarSemana={terminarSemana}
                        tituloListadoDeActivos={'Listado de activos'}
                    />
                    )}
                    
                {seccionMostrada === 'operar' && (
                <Operar
                    activoMostrado={activosModoExperto[numeroDeSemana][activoMostrado]}
                    activos={activosModoExperto[numeroDeSemana]}
                    estadoDeCuenta={estadoDeCuenta}

                    mostrarMenuSeleccionActivos={true}
                    menuActivosFuncionNavegacion={manejarCambioDeActivo}

                    mostrarDescripcionDelActivo={true}
                    mostrarCotizacion={true}
                    mostrarGraficoTendencias={true}
                    mostrarValorLiquido={true}
                    mostrarTenencias={true}
                    mostrarCaracteristicas={true}
                    mostrarBotonesOperar={true}

                    menuCompraVentaFuncionComprar={manejarCompraDeActivo}
                    menuCompraVentaFuncionVender={manejarVentaDeActivo}
                />
                )}

                {seccionMostrada === 'finalDeSemana' && (
                    <FinalDeSemana
                        estadoDeCuentaAnterior={estadoDeCuenta}
                        mostrarEstadoDeCuentaActual={true}
                        mostrarEstadoDeCuentaNuevo={true}
                        mostrarPortfolioActual={true}
                        mostrarPortfolioNuevo={true}
                        estadoDeCuentaNuevo={estadoDeCuentaNuevo}
                        valorObjetivo={valorObjetivo}
                        etapa={etapasFinalDeSemana[etapaFinalDeSemana]}
                        mostrarBotonesAnteriorSiguiente={true}
                        desactivarAnterior={etapaFinalDeSemana===0}
                        funcionAnterior={manejarRetrocederEtapaFinalDeSemana}
                        funcionSiguiente={manejarAvanzarEtapaFinalDeSemana}
                        noticias={noticias[numeroDeSemana]}
                        numeroDeSemana={numeroDeSemana}
                        cantidadMaximaDeSemanas={cantidadMaximaDeSemanas}
                    />
                )}

            </div>
        </div>
    );
}

export default ModoExperto;