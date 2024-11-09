import React from 'react';
import CirculoDePuntaje from './CirculoDePuntaje';
import './CirculosDePuntajeContenedor.css'

const CirculosDePuntajeContenedor = ({ puntaje }) => {
  return (
    <div className='circulos-de-puntaje-contenedor'>
      {Array.from({ length: 5 }, (_, index) => (
        <CirculoDePuntaje key={index} relleno={index < puntaje} />
        ))}
    </div>
  );
};

export default CirculosDePuntajeContenedor;