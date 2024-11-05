import React from "react";
import '../Estilos/EstilosExperto.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
const MenuActivos = ({ isOpen, closeMenu, menuRef }) => {
    return (
        <div ref={menuRef} className={`menu-activos ${isOpen ? 'open' : ''}`}>
            <button className="boton-cerrar" onClick={closeMenu}>
                <FontAwesomeIcon icon={faTimes} />
            </button>
            <ul>
                <li>Acciones</li>
                <li>Criptos</li>
                <li>Cedears</li>
                <li>Bonos</li>
                <li>Plazo Fijo</li>
                <li>Oblig.Negociables</li>
            </ul>
        </div>
    );

    //Mi idea es que al hacer click en cada uno de esto haga un get
    // de las tenencias de cada usuario(lo manejariamos con back)
    // y en el compenente interfazDeljuego tendriamos que crear como manjariamos el grafico si es tasa variable o fija

}
export default MenuActivos;