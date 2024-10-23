import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../Estilos/EstilosTutorial.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faGear, faGraduationCap, faChevronLeft, faChevronRight , faDollarSign , faMoneyBill} from "@fortawesome/free-solid-svg-icons"
import carpinchoLogo from '../img/carpincho-moneda.png';
import carpinchoCharacter from '../img/carpincho-traje.jpeg';


const Tutorial = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);
    const [isContentLowered, setIsContentLowered] = useState(false);
    const [showOperar, setShowOperar] = useState(false);
    const [showValor, setShowValor] = useState(false);

    const tutorialSteps = [
        {
            text: (<>¡Bienvenido a mi academia! Es mi objetivo que puedas aprender a invertir como un verdadero experto, ¡y hagas rendir esos ahorros!. Comencemos conociendo algunos conceptos básicos de las inversiones. </>),
        },
        {
            text: (<>El objetivo de invertir es lograr que nuestro dinero incremente su valor. Existe un montón de motivos para querer invertir: incrementar nuestros ingresos, crear un fondo para retirarnos en un futuro; cualquier motivo es válido. Lo importante es tener en cuenta un principio básico: el dinero, si no se invierte, <strong>pierde valor..</strong></>),
        },
        {
            text: (<>Para evitar que nuestro dinero se desvalorice, entonces, debemos invertirlo. Hay muchísimas maneras de hacerlo, pero la amplia mayoría sigue un principio básico: usamos nuestro dinero para obtener un <strong>activo</strong> que incremente su valor en el tiempo, para luego venderlo y generar una ganancia.</>),
        },
        {
            text: (<>En otras palabras, compramos un activo a un 'precio' determinado y lo vendemos a otro 'precio' más alto del que lo compramos, y esa diferencia de precio es nuestra <strong>ganancia</strong>, a la que también se llama <strong>renta</strong>. Al precio de un activo también se lo llama <strong>cotización</strong>.</>),
        },
        {
            text: (<>Imagino que te estarás preguntando por qué los activos incrementan su valor en el tiempo. Esto depende del tipo de activo, y vas a aprender cómo funciona cada uno a lo largo de las distintas lecciones.</>),
        },
        {
            text: (<>Comencemos por el tipo de activo más básico: los <strong>activos de renta fija</strong>. El término 'renta fija' hace referencia a que vamos a saber de antemano cuánta ganancia (renta) vamos a obtener de la inversión. </>),
        },
        {
            text: (<>Este tipo de activo puede pensarse básicamente como un préstamo. Nosotros le prestamos nuestro dinero a una entidad por un tiempo determinado a cambio de que cuando nos lo devuelvan, lo hagan con un <strong>interés</strong> (es decir, que nos devuelvan más dinero del que les prestamos). Ese interés se pacta antes de que se realice la inversión, y no va a cambiar en el tiempo, por eso se dice que la renta es fija.</>),
        },
        {
            text: (<>Ejemplos de este tipo de activo son los <strong>plazos fijos</strong> (le 'prestamos' al banco), <strong>cauciones</strong> (le 'prestamos' a una persona en el mercado), las <strong>obligaciones negociables</strong> (le 'prestamos' a una empresa) y los <strong>bonos</strong> (le 'prestamos al gobierno).</>),
        },
        {
            text: (<>Los activos de renta fija son inversiones muy seguras, ya que siempre sabemos cuánto dinero vamos a ganar, y cuándo vamos a recibirlo. No hay <strong>volatilidad</strong>, es decir, no va a haber ningún cambio en nuestra renta ni en las condiciones del acuerdo. Es por este motivo por el cual son inversiones que generalmente dan ganancias pequeñas, y sirven más para cuidar el valor de nuestro dinero que para incrementar nuestro <strong>patrimonio</strong> .</>),
        },
        {
            text: (<>Como regla general, mientras <strong>más potencial de ganancia</strong> ofrezca una inversión, <strong>más alto es el riesgo</strong> que esta implica. Una buena regla general para las inversiones es tener en cuenta que si algo parece demasiado bueno para ser cierto, probablemente lo sea.</>),
        },
        {
            text: (<>Comencemos haciendo tu primera inversión para terminar de entender estos conceptos.</>),
        },
        {
            text: (<>Esta es la pantalla principal de nuestro broker. Tiene información clave sobre el <strong>estado de tu cuenta</strong>.</>),
            showImage: true,
            image: "../img/tutorial/tutorial-01.png",
        },
        {
            text: (<>De momento se ve un poco vacía, pero va a ir completándose a medida que aprendamos más.</>),
            showImage: true,
            image: "../img/tutorial/tutorial-02.png",
        },
        {
            text: (<>Esto significa cada uno de los números que ves en pantalla.</>),
            showImage: true,
            image: "../img/tutorial/tutorial-03.png",
        },
        {
            text: (<>Vamos a hacer nuestra primera inversión entrando a la opción destacada en la barra superior.</>),
            showImage: true,
            image: "../img/tutorial/tutorial-04.png",
        },
        {
            text: (<>Esta pantalla nos permite elegir entre las distintas opciones que tenemos para invertir.</>),
            showImage: true,
            image: "../img/tutorial/tutorial-05.png",
        },
        {
            text: (<>Seleccionando una, podemos acceder a detalles sobre ella. Seleccionemos “Plazo Fijo”.</>),
            showImage: true,
            image: "../img/tutorial/tutorial-06.png",
        },
        {
            text: (<>En este caso, tenemos una descripción del tipo de activo. En otras lecciones tendremos descripciones más detalladas sobre el activo en sí, pero no nos adelantemos.</>),
            showImage: true,
            image: "../img/tutorial/tutorial-07.png",
        },
        {
            text: (<>Esta tabla, que cambia dependiendo del tipo de activo, muestra la cotización actual, y nos indica si se modificó respecto de la última cotización. Esto va a tener más sentido luego.</>),
            showImage: true,
            image: "../img/tutorial/tutorial-08.png",
        },
        {
            text: (<>Este gráfico muestra la evolución de la cotización del activo a lo largo del tiempo. Es útil para poder tener una idea general de cómo se comporta. Es muy útil para activos <strong>volátiles</strong>.</>),
            showImage: true,
            image: "../img/tutorial/tutorial-09.png",
        },
        {
            text: (<>Esta tabla nos muestra nuestras <strong>tenencias</strong>, es decir, cuánto tenemos invertido en este <strong>activo</strong>. Nos muestra cuántas unidades tenemos, si aplica, y su <strong>cotización</strong> actual.</>),
            showImage: true,
            image: "../img/tutorial/tutorial-10.png",
        },
        {
            text: (<>En este apartado tenemos características generales del <strong>activo</strong>, que nos pueden ayudar a decidir si nos conviene invertir.</>),
            showImage: true,
            image: "../img/tutorial/tutorial-11.png",
        },
        {
            text: (<>Finalmente, tenemos los botones de compra y venta del activo. Para <strong>plazo fijo</strong> en particular, no aplica la venta y por eso lo vemos oscurecido.</>),
            showImage: true,
            image: "../img/tutorial/tutorial-12.png",
        },
        {
            text: (<>Hagamos clic en <strong>Comprar</strong> para hacer nuestra primera inversión.</>),
            showImage: true,
            image: "../img/tutorial/tutorial-13.png",
        },
    ];

    const handleNext = () => {
        if (currentStep < tutorialSteps.length - 1) {
            setCurrentStep(currentStep + 1);
            if (currentStep === 9) {
                setIsContentLowered(true);
            }

            if (currentStep >= 13) {
                setShowOperar(true);
            }

            if (currentStep >= 14) {
                setShowValor(true);
            }
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
            if (currentStep === 10) {
                setIsContentLowered(false);
            }
        }
        if (currentStep < 15) {
            setShowOperar(false);
        }
        if (currentStep < 16) {
            setShowValor(false);
        }
    };



    return (
        <>
            {/* Header */}
            <header className="headerTuto">
                <div>
                
                <img 
                    onClick={() => navigate("/")} 
                    src={carpinchoLogo} 
                    alt="Carpincho de Wall Street" 
                    className="logoMenu" 
                />
                
                <p><FontAwesomeIcon icon={faGraduationCap} /> Modo aprendizaje</p>
                {showOperar && <p><FontAwesomeIcon icon={faMoneyBill} /></p>}
                </div>

                <div>
                {showValor && <p><FontAwesomeIcon icon={faDollarSign} /><strong>1000,00</strong></p>}

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
            
            {/* Play Area */}
            <div className="play-area">

                {isContentLowered ? (
                    
                    <> {/* Contenido cuando el diálogo del tutorial está abajo */}
                    
                    <div style={{width: '80%', height: '80%'}}>
                        {tutorialSteps[currentStep].showImage && tutorialSteps[currentStep].image && (
                            <img src={tutorialSteps[currentStep].image} alt="Tutorial Step" />
                        )}
                    </div>

                    <div className="tutorial-content-small">
                            
                        {/* Botón Previous */}
                        <button 
                            onClick={handlePrevious} 
                            disabled={currentStep === 0}
                        >
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>

                        {/* Cuadro de diálogo y foto de carpincho */}
                            <div className="tutorial-box-small">
                                <h2 className="poppins-black">El carpincho de Wall Street</h2>
                                <p className="poppins-light ">{tutorialSteps[currentStep].text}</p>
                            </div>
                            <img 
                                src={carpinchoCharacter} 
                                alt="Carpincho character" 
                                className="character-image-small" 
                            />

                        {/* Botón Next */}
                        <button 
                            onClick={handleNext} 
                            disabled={currentStep === tutorialSteps.length - 1}
                        >
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>

                    </div>
                    
                    </>
                 
                    ) : (

                    <> {/* Contenido cuando el diálogo del tutorial está abajo */}

                        <div className="tutorial-content-big">
                            <div className="tutorial-box-big">
                                <h2 className="poppins-black">El carpincho de Wall Street</h2>
                                <p className="poppins-light ">{tutorialSteps[currentStep].text}</p>
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
                                disabled={currentStep === tutorialSteps.length - 1}
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

export default Tutorial;