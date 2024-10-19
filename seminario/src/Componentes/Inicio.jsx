import { useState } from "react";
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
      <div className="header">
      <img src={carpinchoLogo} alt="Carpincho de Wall Street" className="logo" />
        <h1>El Carpincho de Wall Street</h1>
      </div>
      <div className="button-container">
        <button  onClick={() => navigate('/aprendizaje')} className="btn"> <FontAwesomeIcon icon={faGraduationCap}/>  Modo Aprendizaje </button>
        <button className="btn"> <img src={frameIcon} alt="Mi icono" /> Modo Libre Mercado</button>
        <button className="btn"> <FontAwesomeIcon icon={faBook} /> Biblioteca</button>
      </div>
   </div>) 

}

export default Inicio;