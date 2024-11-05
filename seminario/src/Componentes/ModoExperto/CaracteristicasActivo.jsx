import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
const CaracteristicasActivo =()=>{
    return (
        <>
        <p>Caracteristicas</p>
        <ul className="caracteristicas-list">
            
          <li>
            <FontAwesomeIcon icon={faCircle} /> Volatilidad
          </li>
          <li>
            <FontAwesomeIcon icon={faCircle} /> Potencial de crecimiento
          </li>
          <li>
            <FontAwesomeIcon icon={faCircle} /> Susceptibilidad a eventos
          </li>
        </ul>
        </>
      );//para los cirucilito se me ocurrio hace una logica del back, es decir que el back te diga cuantos tiene que tener rellenados y cuantos vacios.
}

export default CaracteristicasActivo