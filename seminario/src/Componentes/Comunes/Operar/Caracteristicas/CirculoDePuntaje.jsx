import React from 'react';
import './CirculoDePuntaje.css'

const CirculoDePuntaje = ({ relleno }) => {
  return <div className={`circulo-de-puntaje ${relleno ? 'relleno' : ''}`}></div>;
};

export default CirculoDePuntaje;
