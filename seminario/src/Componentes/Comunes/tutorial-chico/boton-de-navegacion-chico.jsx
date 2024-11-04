// Botón para controlar el flujo de los diálogos de tutorial cuando estamos usando
// el cuadro de diálogo chico. Indicamos el sentido con boleanos cuando lo instanciamos

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import './boton-de-navegacion-chico.css'
import '../../../Estilos/Comunes.css'

const BotonDeNavegacionChico = ({funcion, esAnterior, esSiguiente, desactivar}) => (
    <button className='boton-de-navegacion-chico'
        onClick={funcion} 
        disabled={desactivar}
        >
        {/* Cambia la flechita según la dirección que indiquemos */}
        { esAnterior && <FontAwesomeIcon icon={faChevronLeft} /> }
        { esSiguiente && <FontAwesomeIcon icon={faChevronRight} /> }
    </button>
);

export default BotonDeNavegacionChico;