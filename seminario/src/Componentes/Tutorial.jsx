import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../Estilos/EstilosTutorial.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faGear, faGraduationCap, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import carpinchoLogo from '../img/carpincho-moneda.png';
import carpinchoCharacter from '../img/carpincho-traje.jpeg'; 

const Tutorial = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);
    const [isContentLowered, setIsContentLowered] = useState(false);

    const tutorialSteps = [
        {
            text: "¡Bienvenido a mi academia! Es mi objetivo que puedas aprender a invertir como un verdadero experto, ¡y hagas rendir esos ahorros!. Comencemos conociendo algunos conceptos básicos de las inversiones. ",
        },
        {
            text: "El objetivo de invertir es lograr que nuestro dinero incremente su valor. Existe un montón de motivos para querer invertir: incrementar nuestros ingresos, crear un fondo para retirarnos en un futuro; cualquier motivo es válido. Lo importante es tener en cuenta un principio básico: el dinero, si no se invierte, pierde valor..",
        },
        {
            text: "Para evitar que nuestro dinero se desvalorice, entonces, debemos invertirlo. Hay muchísimas maneras de hacerlo, pero la amplia mayoría sigue un principio básico: usamos nuestro dinero para obtener un activo que incremente su valor en el tiempo, para luego venderlo y generar una ganancia.",
        },
        {
            text: "En otras palabras, compramos un activo a un 'precio' determinado y lo vendemos a otro 'precio' más alto del que lo compramos, y esa diferencia de precio es nuestra ganancia, a la que también se llama renta. Al precio de un activo también se lo llama cotización.",
        },
        {
            text: "Imagino que te estarás preguntando por qué los activos incrementan su valor en el tiempo. Esto depende del tipo de activo, y vas a aprender cómo funciona cada uno a lo largo de las distintas lecciones.",
        },
        {
            text: "Comencemos por el tipo de activo más básico: los activos de renta fija. El término 'renta fija' hace referencia a que vamos a saber de antemano cuánta ganancia (renta) vamos a obtener de la inversión. ",
        },
        {
            text: "Este tipo de activo puede pensarse básicamente como un préstamo. Nosotros le prestamos nuestro dinero a una entidad por un tiempo determinado a cambio de que cuando nos lo devuelvan, lo hagan con un interés (es decir, que nos devuelvan más dinero del que les prestamos). Ese interés se pacta antes de que se realice la inversión, y no va a cambiar en el tiempo, por eso se dice que la renta es fija.",
        },
        {
            text: "Ejemplos de este tipo de activo son los plazos fijos (le 'prestamos' al banco), cauciones (le 'prestamos' a una persona en el mercado), las obligaciones negociables (le 'prestamos' a una empresa) y los bonos (le 'prestamos al gobierno).",
        },
        {
            text: "Los activos de renta fija son inversiones muy seguras, ya que siempre sabemos cuánto dinero vamos a ganar, y cuándo vamos a recibirlo. No hay volatilidad, es decir, no va a haber ningún cambio en nuestra renta ni en las condiciones del acuerdo. Es por este motivo por el cual son inversiones que generalmente dan ganancias pequeñas, y sirven más para cuidar el valor de nuestro dinero que para incrementar nuestro patrimonio.",
        },
        {
            text: "Como regla general, mientras más potencial de ganancia ofrezca una inversión, más alto es el riesgo que esta implica. Una buena regla general para las inversiones es tener en cuenta que si algo parece demasiado bueno para ser cierto, probablemente lo sea.",
        },
        {
            text: "Comencemos haciendo tu primera inversión para terminar de entender estos conceptos.",
            showImage: true,
            image: "/path/to/your/first/tutorial/image.jpg",
        },
        {
            text: "Esta es la pantalla principal de nuestro broker. Tiene información clave sobre el estado de tu cuenta.",
            showImage: true,
            image: "/path/to/your/first/tutorial/image.jpg",
        },
        {
            text: "De momento se ve un poco vacía, pero va a ir completándose a medida que aprendamos más.",
            showImage: true,
            image: "/path/to/your/first/tutorial/image.jpg",
        },
        {
            text: "Esto significa cada uno de los números que ves en pantalla.",
            showImage: true,
            image: "/path/to/your/first/tutorial/image.jpg",
        },
        {
            text: "Vamos a hacer nuestra primera inversión entrando a la opción destacada en la barra superior.",
            showImage: true,
            image: "/path/to/your/first/tutorial/image.jpg",
        },
        {
            text: "Esta pantalla nos permite elegir entre las distintas opciones que tenemos para invertir.",
            showImage: true,
            image: "/path/to/your/first/tutorial/image.jpg",
        },
        {
            text: "Seleccionando una, podemos acceder a detalles sobre ella. Seleccionemos “Plazo Fijo”.",
            showImage: true,
            image: "/path/to/your/first/tutorial/image.jpg",
        },
        {
            text: "En este caso, tenemos una descripción del tipo de activo. En otras lecciones tendremos descripciones más detalladas sobre el activo en sí, pero no nos adelantemos.",
            showImage: true,
            image: "/path/to/your/first/tutorial/image.jpg",
        },
        {
            text: "Esta tabla, que cambia dependiendo del tipo de activo, muestra la cotización actual, y nos indica si se modificó respecto de la última cotización. Esto va a tener más sentido luego.",
            showImage: true,
            image: "/path/to/your/first/tutorial/image.jpg",
        },
        {
            text: "Este gráfico muestra la evolución de la cotización del activo a lo largo del tiempo. Es útil para poder tener una idea general de cómo se comporta. Es muy útil para activos volátiles.",
            showImage: true,
            image: "/path/to/your/first/tutorial/image.jpg",
        },
        {
            text: "Esta tabla nos muestra nuestras tenencias, es decir, cuánto tenemos invertido en este activo. Nos muestra cuántas unidades tenemos, si aplica, y su cotización actual.",
            showImage: true,
            image: "/path/to/your/first/tutorial/image.jpg",
        },
        {
            text: "En este apartado tenemos características generales del activo, que nos pueden ayudar a decidir si nos conviene invertir.",
            showImage: true,
            image: "/path/to/your/first/tutorial/image.jpg",
        },
        {
            text: "Finalmente, tenemos los botones de compra y venta del activo. Para plazo fijo en particular, no aplica la venta y por eso lo vemos oscurecido.",
            showImage: true,
            image: "/path/to/your/first/tutorial/image.jpg",
        },
        {
            text: "Hagamos clic en Comprar para hacer nuestra primera inversión.",
            showImage: true,
            image: "/path/to/your/first/tutorial/image.jpg",
        },
    ];

    const handleNext = () => {
        if (currentStep < tutorialSteps.length - 1) {
            setCurrentStep(currentStep + 1);
            // Cambia el estado para bajar el contenido después del paso 9
            if (currentStep === 9) {
                setIsContentLowered(true);
            }
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
            // Vuelve a subir el contenido si retrocedemos antes del paso 10
            if (currentStep === 10) {
                setIsContentLowered(false);
            }
        }
    };

    return (
        <>
            <header className="headerTuto">
                <img onClick={() => navigate("/")} src={carpinchoLogo} alt="Carpincho de Wall Street" className="logoMenu" />
                <p><FontAwesomeIcon icon={faGraduationCap} /> Modo aprendizaje</p>
                <FontAwesomeIcon icon={faArrowLeft} onClick={() => navigate(-1)} className="back-icon" />
                <FontAwesomeIcon icon={faGear} className="settings-icon" />
            </header>
            
            {isContentLowered && <div className="future-content-space"></div>}
            
            <div className={`tutorial-content ${isContentLowered ? 'lowered' : ''}`}>
                <div className="tutorial-box">
                    <h2>El carpincho de Wall Street</h2>
                    <p>{tutorialSteps[currentStep].text}</p>
                </div>
                <img src={carpinchoCharacter} alt="Carpincho character" className="character-image" />
            </div>
            
            <div className="navigation-buttons">
                <button onClick={handlePrevious} disabled={currentStep === 0}>
                    <FontAwesomeIcon icon={faChevronLeft} /> Anterior
                </button>
                <button onClick={handleNext} disabled={currentStep === tutorialSteps.length - 1}>
                    Siguiente <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </>
    )
}

export default Tutorial;