// Cuadro de diálogo con foto del carpincho para tutoriales donde
// el cuadro de diálogo es chico y ocupa la parte de abajo del espacio de la pantalla,
// dejando espacio para mostrar el área de juego con datos de inversiones

import React from 'react';
import './cuadro-de-dialogo-chico.css';
import '../../../Estilos/Comunes.css'
import carpinchoCharacterSmall from '../../../img/carpincho-traje-pequenio.jpg'

const CuadroDeDialogoChico = ({contenido}) => (
    <div className="wrapper-cuadro-de-dialogo-imagen-carpincho">
        <div className="cuadro-de-dialogo-chico">
            <h3 className="poppins-black">El carpincho de Wall Street</h3>
            <p className="poppins-light ">{contenido}</p>
        </div>
        <img 
            src={carpinchoCharacterSmall} 
            alt="Carpincho character" 
            className="character-image-small" 
        />       
    </div>
);

export default CuadroDeDialogoChico;