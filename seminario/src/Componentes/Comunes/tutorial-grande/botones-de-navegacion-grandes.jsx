// Botones para controlar el flujo de los diálogos de tutorial cuando estamos usando
// el cuadro de diálogo grande

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import './botones-de-navegacion-grandes.css'
import '../../../Estilos/Comunes.css'

const BotonesDeNavegacionGrandes = ({ manejarAnterior, manejarSiguiente, desactivarAnterior, desactivarSiguiente }) => (
    <div className="botones-de-navegacion poppins-black">
        <button
            onClick={manejarAnterior}
            disabled={desactivarAnterior}
        >
            <FontAwesomeIcon icon={faChevronLeft} /> Anterior
        </button>
        <button
            onClick={manejarSiguiente}
            disabled={desactivarSiguiente}
        >
            Siguiente <FontAwesomeIcon icon={faChevronRight} />
        </button>
    </div>
);

export default BotonesDeNavegacionGrandes;
