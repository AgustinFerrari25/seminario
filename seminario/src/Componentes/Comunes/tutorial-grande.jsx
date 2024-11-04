import React from 'react';
import CuadroDeDialogoGrande from './tutorial-grande/cuadro-de-dialogo-grande';
import BotonesDeNavegacionGrandes from './tutorial-grande/botones-de-navegacion-grandes';
import './tutorial-grande.css'

const TutorialGrande = ({ contenido, manejarAnterior, manejarSiguiente, desactivarAnterior, desactivarSiguiente }) => (
    <div className='wrapper-tutorial-grande'>
        <CuadroDeDialogoGrande contenido={contenido}/>
        <BotonesDeNavegacionGrandes
            manejarAnterior={manejarAnterior}
            manejarSiguiente={manejarSiguiente}
            desactivarAnterior={desactivarAnterior}
            desactivarSiguiente={desactivarSiguiente}
        />
    </div>
);

export default TutorialGrande;