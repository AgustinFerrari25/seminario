import React from 'react';
import CuadroDeDialogoGrande from './tutorial-grande/cuadro-de-dialogo-grande';
import BotonesDeNavegacionGrandes from './tutorial-grande/botones-de-navegacion-grandes';
import './tutorial-grande.css'

const TutorialGrande = ({
    contenido,
    manejarAnterior,
    desactivarAnterior,
    manejarSiguiente,
    desactivarSiguiente,
    manejarFinalizarLeccion,
    habilitarFinalizarLeccion
     }) => (
    <div className='wrapper-tutorial-grande'>
        <CuadroDeDialogoGrande contenido={contenido}/>
        <BotonesDeNavegacionGrandes
            manejarAnterior={manejarAnterior}
            manejarSiguiente={manejarSiguiente}
            manejarFinalizarLeccion={manejarFinalizarLeccion}
            habilitarFinalizarLeccion={habilitarFinalizarLeccion}
            desactivarAnterior={desactivarAnterior}
            desactivarSiguiente={desactivarSiguiente}
        />
    </div>
);

export default TutorialGrande;