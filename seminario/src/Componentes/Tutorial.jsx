import React from "react";
import { useNavigate } from 'react-router-dom';
import '../Estilos/EstilosTutorial.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft,faGear,faGraduationCap} from "@fortawesome/free-solid-svg-icons"
import carpinchoLogo from '../img/carpincho-moneda.png';
const Tutorial =()=>{
    const navigate = useNavigate();
    return(
       <>
<header className="headerTuto">
<img  onClick={()=> navigate("/")} src={carpinchoLogo} alt="Carpincho de Wall Street" className="logoMenu" />
    <p> <FontAwesomeIcon icon={faGraduationCap}/> Modo aprendizaje</p>
    <FontAwesomeIcon icon={faArrowLeft} />
    <FontAwesomeIcon icon={faGear} />

    {//falta acomodarlo en el css  y meter el carpincho con el globito para que vaya hablanod
    // para la logica de eso usen el componente dialogo, se me ocurre crear un array que tenga todos los textos

    // y poner button onclik en la flechita y que el texto aumente 1 del index asi pasa al siguiente.

    // igual es mi idea si se les ocurre algo mejor, BIENVENIDO SEA!
    }
    </header>
    <h1>El Carpincho de wall street</h1>

    </> 
    )
}

export default Tutorial;