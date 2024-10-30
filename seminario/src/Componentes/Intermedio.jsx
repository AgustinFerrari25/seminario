import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Estilos/EstilosIntermedio.css'
import { 
    faArrowLeft, 
    faGear, 
    faScaleBalanced, 
    faChevronLeft, 
    faChevronRight, 
    faDollarSign, 
    faChartLine,
    faPlay
} from "@fortawesome/free-solid-svg-icons";
import carpinchoLogo from '../img/carpincho-moneda.png';
import carpinchoCharacter from '../img/carpincho-traje.jpeg';

const Intermedio = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);
    const [isContentLowered, setIsContentLowered] = useState(false);
    const [showMarket, setShowMarket] = useState(false);
    const [showChoice, setShowChoice] = useState(true);
    const [skipTheory, setSkipTheory] = useState(false);

    const theoreticalSteps = [
        {
            text: (<>¡Bienvenido al nivel intermedio! Antes de comenzar, me gustaría saber: ¿Ya tenés conocimientos sobre inversiones de renta variable, como acciones y criptomonedas?</>),
            showChoice: true
        },
        {
            text: (<>En este nivel aprenderemos sobre los <strong>activos de renta variable</strong>. A diferencia de la renta fija, en estos casos no sabemos de antemano cuánta ganancia obtendremos.</>),
        },
        {
            text: (<>La renta variable funciona diferente: compramos un activo esperando que su valor suba en el tiempo, pero esto no está garantizado. El activo puede subir o bajar de valor según diferentes factores.</>),
        },
        {
            text: (<>Los principales ejemplos de renta variable son las <strong>acciones</strong> (comprás una parte de una empresa) y las <strong>criptomonedas</strong> (monedas digitales descentralizadas).</>),
        },
        {
            text: (<>Un factor muy importante en la renta variable son las <strong>noticias</strong>. Los precios pueden variar significativamente cuando hay anuncios importantes sobre una empresa o el mercado en general.</>),
        },
        {
            text: (<>Por ejemplo, si una empresa anuncia buenos resultados trimestrales, es probable que su acción suba. Por el contrario, si hay una noticia negativa como un escándalo, el precio puede caer drásticamente.</>),
        },
        {
            text: (<>Esto genera <strong>volatilidad</strong>, que es qué tanto varía el precio de un activo en el tiempo. A mayor volatilidad, mayor posibilidad de ganancia... ¡pero también de pérdida!</>),
        },
        {
            text: (<>Las criptomonedas son especialmente volátiles. Sus precios pueden variar enormemente en cuestión de horas o incluso minutos. Esto las hace muy atractivas pero también muy riesgosas.</>),
        },
        {
            text: (<>Una estrategia común es diversificar las inversiones: no poner todos los huevos en la misma canasta. Así reducimos el riesgo de perder todo si un activo particular cae.</>),
        },
        {
            text: (<>Antes de pasar a la práctica, te invito a ver este breve video que resume los conceptos que acabamos de ver sobre la renta variable y sus características principales.
                   <div className="video-container">
                       <a href="https://www.youtube.com/watch?v=7TfvHR50cGg" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="video-link">
                           <FontAwesomeIcon icon={faPlay} /> Ver video resumen
                       </a>
                   </div>
                </>),
        },
    ];

    const practicalSteps = [
        {
            text: (<>Veamos cómo funciona esto en la práctica. Esta es la pantalla de trading, donde podemos ver el precio actual del activo y las últimas noticias relevantes.</>),
            showImage: true,
            image: "../img/tutorial/mercado-01.png",
        },
        // Agrega aquí más pasos prácticos
    ];

    const allSteps = skipTheory ? practicalSteps : [...theoreticalSteps, ...practicalSteps];

    const handleNext = () => {
        if (currentStep < allSteps.length - 1) {
            setCurrentStep(currentStep + 1);
            if (currentStep === allSteps.length - 2) {
                setIsContentLowered(true);
            }
            if (currentStep >= allSteps.length - 2) {
                setShowMarket(true);
            }
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
            if (currentStep === allSteps.length - 1) {
                setIsContentLowered(false);
            }
            if (currentStep <= allSteps.length - 2) {
                setShowMarket(false);
            }
        }
    };

    const handleChoice = (knowsTopic) => {
        setShowChoice(false);
        if (knowsTopic) {
            setSkipTheory(true);
            setCurrentStep(0); // Irá directo a los pasos prácticos
        } else {
            setCurrentStep(currentStep + 1); // Continuará con la teoría
        }
    };

    return (
        <>
            <header className="headerTuto">
                <div>
                    <img 
                        onClick={() => navigate("/")} 
                        src={carpinchoLogo} 
                        alt="Carpincho de Wall Street" 
                        className="logoMenu" 
                    />
                    <p><FontAwesomeIcon icon={faScaleBalanced} /> Nivel Intermedio</p>
                    {showMarket && <p><FontAwesomeIcon icon={faChartLine} /> Mercado Activo</p>}
                </div>

                <div>
                    <p><FontAwesomeIcon icon={faDollarSign} /><strong>10000,00</strong></p>
                    <div className="header-icons">
                        <FontAwesomeIcon 
                            icon={faArrowLeft} 
                            onClick={() => navigate(-1)} 
                            className="back-icon" 
                        />
                        <FontAwesomeIcon 
                            icon={faGear} 
                            className="settings-icon" 
                        />
                    </div>
                </div>
            </header>
            
            <div className="play-area">
                {isContentLowered ? (
                    <>
                        <div style={{width: '80%', height: '80%'}}>
                            {allSteps[currentStep].showImage && allSteps[currentStep].image && (
                                <img src={allSteps[currentStep].image} alt="Tutorial Step" /> //aca empezar con la parte practica
                            )}
                        </div>

                        <div className="tutorial-content-small">
                            <button 
                                onClick={handlePrevious} 
                                disabled={currentStep === 0}
                            >
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </button>

                            <div className="tutorial-box-small">
                                <h2 className="poppins-black">El carpincho de Wall Street</h2>
                                <p className="oxanium-text">{allSteps[currentStep].text}</p>
                            </div>
                            <img 
                                src={carpinchoCharacter} 
                                alt="Carpincho character" 
                                className="character-image-small" 
                            />

                            <button 
                                onClick={handleNext} 
                                disabled={currentStep === allSteps.length - 1}
                            >
                                <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="tutorial-content-big">
                            <div className="tutorial-box-big">
                                <h2 className="poppins-black">El carpincho de Wall Street</h2>
                                <p className="poppins-light">{allSteps[currentStep].text}</p>
                                {showChoice && allSteps[currentStep].showChoice && (
                                    <div className="choice-buttons">
                                        <button 
                                            className="choice-button"
                                            onClick={() => handleChoice(true)}
                                        >
                                            Sí, ya conozco
                                        </button>
                                        <button 
                                            className="choice-button"
                                            onClick={() => handleChoice(false)}
                                        >
                                            No, quiero aprender
                                        </button>
                                    </div>
                                )}
                            </div>
                            <img 
                                src={carpinchoCharacter} 
                                alt="Carpincho character" 
                                className="character-image-big" 
                            />
                        </div>
                        
                        <div className="navigation-buttons poppins-black">
                            <button 
                                onClick={handlePrevious} 
                                disabled={currentStep === 0}
                            >
                                <FontAwesomeIcon icon={faChevronLeft} /> Anterior
                            </button>
                            <button 
                                onClick={handleNext} 
                                disabled={currentStep === allSteps.length - 1 || showChoice}
                            >
                                Siguiente <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default Intermedio;