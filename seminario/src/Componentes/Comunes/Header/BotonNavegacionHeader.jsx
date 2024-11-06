import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./BotonNavegacionHeader.css";
import "../../../Estilos/Comunes.css";
import useExplicacionEnHover from '../../../hooks/explicacionEnHover';

const BotonNavegacionHeader = ({ funcionNavegacion, mostrarBoton, icono, explicacion, destacar}) => {

    const { textoExplicacion, mostrarExplicacion, ocultarExplicacion } = useExplicacionEnHover();

    return (
        <div>
            <div
                className={`explicado-en-hover ${destacar ? 'destacado' : ''}`}
                onClick={funcionNavegacion}
                onMouseEnter={() => mostrarExplicacion(explicacion)}
                onMouseLeave={ocultarExplicacion}
                style={{visibility: (mostrarBoton) ? 'visible' : 'hidden'}}
                >
                <FontAwesomeIcon className='boton-navegacion-header' icon={icono} />
                {textoExplicacion &&
                    (<div className="explicacion-en-hover">
                        <p>{textoExplicacion}</p>
                    </div>)}
            </div>
        </div>

            
    );
};

export default BotonNavegacionHeader;
