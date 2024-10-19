import React from 'react';
import '../Estilos/EstilosModoAprendizaje.css';  
import { useNavigate } from 'react-router-dom';
import carpinchoLogo from '../img/carpincho-moneda.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import {faHeart} from  '@fortawesome/free-solid-svg-icons';
import {faScaleBalanced,faRobot} from '@fortawesome/free-solid-svg-icons';
import '../Estilos/EstilosInicio.css'
const ModoAprendizaje = () => {
  const navigate = useNavigate();

  return (
    <>
    

    <div className="learning-container">
    <div className="header">
    <img src={carpinchoLogo} alt="Carpincho de Wall Street" className="logo" />
      <h1>El Carpincho de Wall Street</h1>
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
          <button onClick={()=> navigate("/tutorial")}
          className="btn_principiante"> <FontAwesomeIcon icon={faHeart} /> Principiante
          </button>
          <button 
          className="btn"> <FontAwesomeIcon icon={faScaleBalanced} /> Intermedio
          </button>
          <button
           className="btn"> <FontAwesomeIcon icon={faRobot} /> Experto
           </button>
        </div>
      </div>

      <button className="back-btn" onClick={() => navigate('/')}>Volver</button>
    </div>
    </>
  );
}

export default ModoAprendizaje;