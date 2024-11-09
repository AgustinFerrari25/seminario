import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import '../Estilos/EstilosTutorial.css'
import '../Estilos/Comunes.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import carpinchoLogo from '../img/carpincho-moneda.png';
import carpinchoCharacter from '../img/carpincho-traje.jpeg';
import MenuSeleccionActivos from './Comunes/Operar/MenuSeleccionActivos/MenuSeleccionActivos.jsx';
import Valores from './EstadoDeCuenta/Valores.jsx';
import Operar from './Comunes/Operar/Operar.jsx'

// Imports para header
import Header from "./Comunes/Header.jsx";

// Imports para tutorial grande
import TutorialGrande from "./Tutorial/tutorial-grande.jsx";

// Imports para tutorial chico
import CuadroDeDialogoChico from "./Tutorial/tutorial-chico/cuadro-de-dialogo-chico.jsx";
import TutorialChico from "./Tutorial/tutorial-chico.jsx";

const Tutorial = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);
    const [isContentLowered, setIsContentLowered] = useState(false);
    const [mostrarOperar, setMostrarOperar] = useState(false);
    const [showValor, setShowValor] = useState(false);
    const [showSideBar, setShowSideBar] = useState(false);
    const [mostrarEstadoDeCuenta, setMostrarEstadoDeCuenta] = useState(false);
    const [showText ,setShowText] = useState(false);
    const [activoMostrado, setActivoMostrado] = useState(0)

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
            showImage: false,
            image: "../img/tutorial/tutorial-01.png",
        },
        {
            text: (<>De momento se ve un poco vacía, pero va a ir completándose a medida que aprendamos más.</>),
            showImage: false,
            image: "../img/tutorial/tutorial-02.png",
        },
        {
            text: (<><strong>Pasando el mouse por arriba de cada valor</strong>, verás significa cada uno de los números que hay en pantalla.</>),
            showImage: false,
            image: "../img/tutorial/tutorial-03.png",
        },
        {
            text: (<>Vamos a hacer nuestra primera inversión entrando a la opción destacada en la barra superior.</>),
            showImage: false,
            image: "../img/tutorial/tutorial-04.png",
        },
        {
            text: (<>Esta pantalla nos permite elegir entre las distintas opciones que tenemos para invertir.</>),
            showImage: false,
            image: "../img/tutorial/tutorial-05.png",
        },
        {
            text: (<>Seleccionando una, podemos acceder a detalles sobre ella. Seleccionemos “Plazo Fijo”.</>),
            showImage: false,
            image: "../img/tutorial/tutorial-06.png",
        },
        {
            text: (<>En este caso, tenemos una descripción del tipo de activo. En otras lecciones tendremos descripciones más detalladas sobre el activo en sí, pero no nos adelantemos.</>),
            showImage: false,
            image: "../img/tutorial/tutorial-07.png",
        },
        {
            text: (<>Esta tabla, que cambia dependiendo del tipo de activo, muestra la cotización actual, y nos indica si se modificó respecto de la última cotización. Esto va a tener más sentido luego.</>),
            showImage: false,
            image: "../img/tutorial/tutorial-08.png",
        },
        {
            text: (<>Este gráfico muestra la evolución de la cotización del activo a lo largo del tiempo. Es útil para poder tener una idea general de cómo se comporta. Es muy útil para activos <strong>volátiles</strong>.</>),
            showImage: false,
            image: "../img/tutorial/tutorial-09.png",
        },
        {
            text: (<>Siempre que estemos en la vista de Operar, vamos a ver nuestro valor líquido para saber cuánto dinero tenemos disponible para invertir.</>),
            showImage: false,
            image: "../img/tutorial/tutorial-09.png",
        },
        {
            text: (<>Esta tabla nos muestra nuestras <strong>tenencias</strong>, es decir, cuánto tenemos invertido en este <strong>activo</strong>. Nos muestra cuántas unidades tenemos, si aplica, y su <strong>cotización</strong> actual.</>),
            showImage: false,
            image: "../img/tutorial/tutorial-10.png",
        },
        {
            text: (<>En este apartado tenemos características generales del <strong>activo</strong>, que nos pueden ayudar a decidir si nos conviene invertir.</>),
            showImage: false,
            image: "../img/tutorial/tutorial-11.png",
        },
        {
            text: (<>Finalmente, tenemos los botones de compra y venta del activo. Para <strong>plazo fijo</strong> en particular, no aplica la venta y por eso lo vemos oscurecido.</>),
            showImage: false,
            image: "../img/tutorial/tutorial-12.png",
        },
        {
            text: (<>Hagamos clic en <strong>Comprar</strong> para hacer nuestra primera inversión.</>),
            showImage: false,
            image: "../img/tutorial/tutorial-13.png",
        },
    ];

    const activos = [
        {
            'nombre' : 'Plazo fijo',
            'descripcion' : 'El plazo fijo permite invertir un monto específico por un plazo a partir de 30 días a cambio de un interés acordado previamente.',
            'cotizacion' : '20% anual',
            'variacionNominal' : 'N/A',
            'variacionPorcentual' : '+2%',
            'caracteristicas' : {
                'volatilidad' : 1,
                'potencialDeCrecimiento' : 2,
                'susceptibilidadAEventos' : 2
            }
        },
        {
            'nombre' : 'Bono',
            'descripcion' : 'El bono representa una promesa de pago de parte de un Estado. La compra de un bono representa un préstamo al gobierno, y el dinero será devuelto con interés.',
            'cotizacion' : '25% anual',
            'variacionNominal' : 'N/A',
            'variacionPorcentual' : '-3%',
            'caracteristicas' : {
                'volatilidad' : 2,
                'potencialDeCrecimiento' : 1,
                'susceptibilidadAEventos' : 2
            }
        },
        {
            'nombre' : 'Obligaciones Negociables',
            'descripcion' : 'Las obligaciones negociables son documentos que emiten empresas privadas. Comprar una ON equivale a hacer un préstamo a la organización, que devolverá el dinero con intereses una vez que haya pasado el plazo pactado.',
            'cotizacion' : '33% anual',
            'variacionNominal' : 'N/A',
            'variacionPorcentual' : '+6%',
            'caracteristicas' : {
                'volatilidad' : 1,
                'potencialDeCrecimiento' : 1,
                'susceptibilidadAEventos' : 3
            }
        }

    ]

    const estadoDeCuenta = {
        'valorNeto' : 1000,
        'valorLiquido' : 1000,
        'portfolio' : {
            'Plazo fijo' : {
                'tenencias' : 1000,
                'valorNominal' : 5000
            },
            'Bono' : {
                'tenencias' : 2000,
                'valorNominal' : 3000,
            },
            'Obligaciones Negociables' : {
                'tenencias' : 2000,
                'valorNominal' : 300
            }

        }
    }

    const manejarCambioDeActivo = (indice) => {
        if (indice === 0 && currentStep === 16) {
            setCurrentStep( currentStep + 1)
        }
        setActivoMostrado(indice);
    };

    const handleNext = () => {
        if (currentStep < tutorialSteps.length - 1) {
            setCurrentStep(currentStep + 1);


            if (currentStep === 9) {
                setIsContentLowered(true);
            }

            if (currentStep >= 10) {
                setMostrarEstadoDeCuenta(true);
            }

            if (currentStep >= 13) {
                setMostrarOperar(true);
            }

            if (currentStep >= 14) {
                setShowValor(true);
                setShowSideBar(true);
                setMostrarEstadoDeCuenta(false);

            }

            if (currentStep >= 16) {

                setShowText(true);
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

        if (currentStep < 12) {
            setMostrarEstadoDeCuenta(false);
        }

        if (currentStep < 15) {
            setMostrarOperar(false);
        }

        if (currentStep < 16) {
            setShowValor(false);
            setShowSideBar(false);
        }

        if (currentStep < 18) {
            setShowText(false);
        }
    };



    return (
        <div className="wrapper-general">



            {/* Header */}
            <Header
                modoDeJuego={"Aprendizaje"}
                mostrarEstadoDeCuenta={currentStep >= 10}
                mostrarOperar={mostrarOperar}
                destacarOperar={currentStep===14}
                funcionOperar={currentStep === 14 ? handleNext : null}
                />
            

            {/* Play Area */}
            <div className="play-area">

                
                {/* isContentLowered controla si el tutorial es grande (opcupa toda la ventana)
                    o chico (cuadro de diálogo abajo, dejando espacio para el área de juego) */}
                {isContentLowered ? (
                    
                    <> {/* Contenido cuando el diálogo del tutorial está abajo */}
                    
                    
                    <div className="estado-de-cuenta">
                    {mostrarEstadoDeCuenta && 
                        
                        <Valores valorNeto={estadoDeCuenta['valorNeto']} valorLiquido={estadoDeCuenta['valorLiquido']}/>

                    }
                    </div>
                    {showSideBar &&
                    <Operar
                        activoMostado={activos[activoMostrado]}
                        estadoDeCuenta={estadoDeCuenta}

                        mostrarMenuSeleccionActivos={showSideBar}
                        menuActivosCondicionDestacar={currentStep===16}
                        menuActivosOpcionADestacar={0}
                        menuActivosFuncionNavegacion={manejarCambioDeActivo}

                        mostrarDescripcionDelActivo={currentStep > 16}
                        mostrarCotizacion={currentStep > 17}
                        mostrarGraficoTendencias={currentStep > 18}
                        mostrarValorLiquido={currentStep>19}
                        mostrarTenencias={currentStep>20}
                        mostrarCaracteristicas={currentStep>21}
                        mostrarBotonesOperar={currentStep > 22}
                    />
                    }
                     {/* Contenido de Texto tutorial */}

                    <TutorialChico
                        contenido={tutorialSteps[currentStep].text}
                        manejarAnterior={handlePrevious}
                        manejarSiguiente={handleNext}
                        desactivarAnterior={currentStep===0}
                        desactivarSiguiente={(currentStep === tutorialSteps.length - 1 || currentStep === 14 || currentStep === 16)}
                        abajo={currentStep > 9 && currentStep != 19 && currentStep <= 22 }
                        arriba={currentStep === 19 || currentStep > 22 }
                        />
                    </>
                 
                    ) : (

                    <> {/* Contenido cuando el diálogo del tutorial está arriba */}

                        <TutorialGrande
                            contenido={tutorialSteps[currentStep].text}
                            manejarAnterior={handlePrevious}
                            manejarSiguiente={handleNext}
                            desactivarAnterior={currentStep===0}
                            desactivarSiguiente={currentStep === tutorialSteps.length - 1}
                        />

                    </>
                )}
            </div>
        </div>
    );
}

export default Tutorial;