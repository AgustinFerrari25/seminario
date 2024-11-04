// Cuadro de diálogo con foto del carpincho para tutoriales donde
// el cuadro de diálogo es grande y ocupa la mayoría del espacio de la pantalla

import React from 'react';
import './cuadro-de-dialogo-grande.css';
import '../../../Estilos/Comunes.css'
import carpinchoCharacter from '../../../img/carpincho-traje.jpeg';

const CuadroDeDialogoGrande = ({contenido}) => (
    <div className="wrapper-cuadro-de-dialogo-imagen-carpincho">
        <div className="cuadro-de-dialogo-grande">
            <h2 className="poppins-black">El carpincho de Wall Street</h2>
            <p className="poppins-light">{contenido}</p>
        </div>
        <img 
            src={carpinchoCharacter} 
            alt="Carpincho character" 
            className="character-image-big" 
        />                   
    </div>
);

export default CuadroDeDialogoGrande;