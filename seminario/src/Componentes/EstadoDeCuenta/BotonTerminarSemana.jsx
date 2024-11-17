import React from "react";
import './BotonTerminarSemana.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForwardStep } from "@fortawesome/free-solid-svg-icons";

const BotonTerminarSemana = ({funcionTerminarSemana, desactivado, destacado, mostrar}) => {
    return (
        <button
            className={`
                poppins-black
                boton-terminar-semana
                ${destacado ? 'destacado' : ''}
                `}
            onClick={funcionTerminarSemana}
            disabled={desactivado}
            style={{visibility: (mostrar) ? 'visible' : 'hidden'}}
            >
            <FontAwesomeIcon className='boton-terminar-semana-icono' icon={faForwardStep} />
            Terminar semana
        </button>
    );
};

export default BotonTerminarSemana;