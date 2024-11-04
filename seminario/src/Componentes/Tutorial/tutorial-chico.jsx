import React from 'react';
import CuadroDeDialogoChico from './tutorial-chico/cuadro-de-dialogo-chico';
import BotonDeNavegacionChico from './tutorial-chico/boton-de-navegacion-chico'
import './tutorial-chico.css'

const TutorialChico = ({ contenido, manejarAnterior, manejarSiguiente, desactivarAnterior, desactivarSiguiente }) => (
    <div className='wrapper-tutorial-chico'>
        <BotonDeNavegacionChico funcion={manejarAnterior} esAnterior={true}/>
        <CuadroDeDialogoChico contenido={contenido}/>
        <BotonDeNavegacionChico funcion={manejarSiguiente} esSiguiente={true} />
    </div>
);

export default TutorialChico;