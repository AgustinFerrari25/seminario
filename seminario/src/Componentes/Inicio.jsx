import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

/* CSS */
import '../Estilos/EstilosInicio.css'
import '../Estilos/Comunes.css'

/* Imagenes */
import splashPrincipal from '../img/inicio-splash-principal.png';
import splashLibreMercado from '../img/inicio-splash-libre-mercado.jpeg';
import splashAprendizaje from '../img/inicio-splash-aprendizaje.jpeg';
import splashBiblioteca from '../img/inicio-splash-biblioteca.jpeg';
import isologo from '../img/isologo-vertical.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBook, faGraduationCap, faMoneyBillTrendUp} from "@fortawesome/free-solid-svg-icons"

const Inicio=()=>{

    const [imagenSplash, setImagenSplash] = useState(splashPrincipal);

    const actualizarImagenSplash = (imagen) => {
      setImagenSplash(imagen);
    };

    const navigate = useNavigate();

    return(

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

          <div className="inicio-wrapper-botones">
            
            <button
              onClick={() => navigate('/aprendizaje')}
              onMouseEnter={() => actualizarImagenSplash(splashAprendizaje)} 
              onMouseLeave={() => actualizarImagenSplash(splashPrincipal)}
              >
                <FontAwesomeIcon className="inicio-botones-iconos" icon={faGraduationCap}/>
                <span className="poppins-black">Modo Aprendizaje</span>
            </button>

            <button
              onMouseEnter={() => actualizarImagenSplash(splashLibreMercado)} 
              onMouseLeave={() => actualizarImagenSplash(splashPrincipal)}
              className="inicio-botones-desactivados"
              >
                <FontAwesomeIcon className="inicio-botones-iconos" icon={faMoneyBillTrendUp}/>
              <span className="poppins-black">Modo Libre Mercado</span>
            </button>

            <button
              onMouseEnter={() => actualizarImagenSplash(splashBiblioteca)} 
              onMouseLeave={() => actualizarImagenSplash(splashPrincipal)}
              className="inicio-botones-desactivados"
              >
                <FontAwesomeIcon className="inicio-botones-iconos" icon={faBook} />
                <span className="poppins-black">Biblioteca</span>
            </button>

          </div>
        
        </div>

      </div>
    ) 
}

export default Inicio;