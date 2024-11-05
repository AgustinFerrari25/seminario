
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBook} from "@fortawesome/free-solid-svg-icons"
import '../Estilos/EstilosInicio.css'
import carpinchoLogo from '../img/carpincho-moneda.png';
import { useNavigate} from "react-router-dom";
import frameIcon from '../img/Frame.svg';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Inicio=()=>{
    const navigate = useNavigate();
    return(
      <div className="home-container">
        <div className="header-inicio">
          <img src={carpinchoLogo} alt="Carpincho de Wall Street" className="logo" />
          <h1 className="title-text">El Carpincho de Wall Street</h1>
        </div>
        <div className="button-container">
          <button onClick={() => navigate('/aprendizaje')} className="btn">
            <span className="btn-icon">
              <FontAwesomeIcon icon={faGraduationCap}/>
            </span>
            <span className="btn-text oxanium-Modo">Modo Aprendizaje</span>
          </button>
          <button className="btn-disabled">
            <span className="btn-icon">
              <img src={frameIcon} alt="Mi icono" className="frame-icon"/>
            </span>
            <span className="btn-text oxanium-Modo">Modo Libre Mercado</span>
          </button>
          <button className="btn-disabled">
            <span className="btn-icon">
              <FontAwesomeIcon icon={faBook} />
            </span>
            <span className="btn-text oxanium-Modo">Biblioteca</span>
          </button>
        </div>
      </div>
    ) 
}

export default Inicio;