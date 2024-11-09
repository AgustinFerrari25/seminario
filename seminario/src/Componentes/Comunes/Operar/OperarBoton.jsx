import React from "react";
import './OperarBoton.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OperarBoton = ({icono, etiqueta, funcionOperar, invertido, desactivado, destacado}) => {
    return (
        <button
            className={`
                poppins-black
                operar-boton
                ${invertido ? 'operar-boton-invertido' : 'operar-boton-regular'}
                ${destacado ? 'destacado' : ''}
                `}
            onClick={funcionOperar}
            disabled={desactivado}
            >
            <FontAwesomeIcon className='operar-boton-icono' icon={icono} />
            {etiqueta}
        </button>
    )
};

export default OperarBoton;