import { useState } from "react";
import React from "react";
import '../Estilos/EstilosInicio.css'
import carpinchoLogo from '../img/carpincho-moneda.png';
const inicio=()=>{
    
    return(
  
      <div className="home-container">
      <div className="header">
      <img src={carpinchoLogo} alt="Carpincho de Wall Street" className="logo" />
        <h1>El Carpincho de Wall Street</h1>
      </div>
      <div className="button-container">
        <button className="btn">Modo Aprendizaje</button>
        <button className="btn">Modo Libre Mercado</button>
        <button className="btn">Biblioteca</button>
      </div>
   </div>) 

}

export default inicio;