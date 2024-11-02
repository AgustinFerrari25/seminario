import React from 'react';
import '../Estilos/EstilosModoAprendizaje.css';  
import { useNavigate } from 'react-router-dom';
import carpinchoLogo from '../img/carpincho-moneda.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faHeart, faScaleBalanced, faRobot } from '@fortawesome/free-solid-svg-icons';
import '../Estilos/EstilosInicio.css'

const ModoAprendizaje = () => {
  const navigate = useNavigate();

  return (
    <div className="learning-container">
      <div className="header">
        <img src={carpinchoLogo} alt="Carpincho de Wall Street" className="logo" />
        <h1 className='title-text'>El Carpincho de Wall Street</h1>
      </div>
      <div className="box-container">
        <FontAwesomeIcon icon={faGraduationCap} />
        <h1 className='TituloModo'>Modo Aprendizaje</h1>
        <p className='TextoModo'>
          En este modo de juego, podrás aprender a invertir en un entorno controlado para poder 
          convertirte en el verdadero Carpincho de Wall Street.
        </p>
      </div>

      <div className="difficulty-selection">
        <h2>Seleccioná tu dificultad</h2>
        <div className="buttons-container">

          <button onClick={() => navigate("/tutorial")} className="difficulty-btn btn_principiante">
            <FontAwesomeIcon icon={faHeart} /> Principiante
          </button>

          <button onClick={() => navigate("/intermedio")} className="difficulty-btn btn_intermedio">
            <FontAwesomeIcon icon={faScaleBalanced} /> Intermedio
          </button>

          <button  onClick={()=> navigate("/Experto")}className="difficulty-btn btn_experto">
            <FontAwesomeIcon icon={faRobot} /> Experto
          </button>

        </div>
      </div>

      <button className="back-btn" onClick={() => navigate('/')}>Volver</button>
    </div>
  );
}

export default ModoAprendizaje;