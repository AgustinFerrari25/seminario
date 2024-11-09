import React from 'react';
import CuadroDeDialogoChico from './tutorial-chico/cuadro-de-dialogo-chico';
import BotonDeNavegacionChico from './tutorial-chico/boton-de-navegacion-chico'
import './tutorial-chico.css'

const TutorialChico = ({ contenido, manejarAnterior, manejarSiguiente, desactivarAnterior, desactivarSiguiente, arriba, abajo }) => (
    <div className={
        `wrapper-tutorial-chico
        ${abajo ? 'wrapper-tutorial-chico-abajo' : ''}
        ${arriba ? 'wrapper-tutorial-chico-arriba' : ''}
        `}>
        <BotonDeNavegacionChico funcion={manejarAnterior} esAnterior={true} desactivar={desactivarAnterior}/>
        <CuadroDeDialogoChico contenido={contenido}/>
        <BotonDeNavegacionChico funcion={manejarSiguiente} esSiguiente={true} desactivar={desactivarSiguiente}/>
    </div>
);

export default TutorialChico;