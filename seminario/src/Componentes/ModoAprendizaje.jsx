import { React, useState } from "react";
import { useNavigate } from 'react-router-dom';

/* CSS */
import '../Estilos/EstilosInicio.css';
import '../Estilos/Comunes.css';

/* Imagenes */
import splashPrincipal from '../img/inicio-splash-aprendizaje.jpeg';
import splashPrincipiante from '../img/inicio-splash-principiante.jpeg';
import splashIntermedio from '../img/inicio-splash-intermedio.jpeg';
import splashExperto from '../img/inicio-splash-experto.jpeg';
import isologo from '../img/isologo-vertical.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faHeart, faScaleBalanced, faRobot, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ModoAprendizaje = () => {
  
  const [imagenSplash, setImagenSplash] = useState(splashPrincipal);

  const actualizarImagenSplash = (imagen) => {
    setImagenSplash(imagen);
  };
  
  const navigate = useNavigate();

  return (
    <div className="wrapper-inicio">
        
        <div className="inicio-splash">
          <img
              src={imagenSplash}
              alt="El Carpincho de Wall Street"
          />
        </div>
      
        <div className="inicio-menu">
          <div className="inicio-wrapper-logo">
            <img src={isologo} alt="Carpincho de Wall Street"/>
          </div>
        
          <div className="inicio-detalle-de-modo">
            <div className="inicio-detalle-de-modo-titulo">
              <FontAwesomeIcon icon={faGraduationCap} />
              <h1>Modo Aprendizaje</h1>
            </div>
            <p className='inicio-detalle-de-modo-texto'>
              En este modo de juego, podrás aprender a invertir en un entorno controlado para poder 
              convertirte en el verdadero Carpincho de Wall Street.
            </p>
          </div>

          <div className="inicio-wrapper-botones">
            
            <button
              onClick={() => navigate("/tutorial")}
              onMouseEnter={() => {
                actualizarImagenSplash(splashPrincipiante);
              }} 
              onMouseLeave={() => {
                actualizarImagenSplash(splashPrincipal);
              }}
              >
              <FontAwesomeIcon className="inicio-botones-iconos" icon={faHeart} />
              <span className="poppins-black">Principiante</span>
            </button>
        
            <button
              onClick={() => navigate("/intermedio")}
              onMouseEnter={() => {
                actualizarImagenSplash(splashIntermedio);
              }} 
              onMouseLeave={() => {
                actualizarImagenSplash(splashPrincipal);
              }}
              >
              <FontAwesomeIcon icon={faScaleBalanced} />
              <span className="poppins-black">Intermedio</span>
            </button>

            <button
              onClick={()=> navigate("/Experto")}
              onMouseEnter={() => {
                actualizarImagenSplash(splashExperto);
              }} 
              onMouseLeave={() => {
                actualizarImagenSplash(splashPrincipal);
              }}
              >
              <FontAwesomeIcon icon={faRobot} />
              <span className="poppins-black">Experto</span>
            </button>

            <button
              onClick={() => navigate('/')}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
                <span className="poppins-black">Volver</span>
            </button>

          </div>

        </div>

      
      </div>
  );
}

export default ModoAprendizaje;