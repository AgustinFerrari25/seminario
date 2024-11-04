import React, { useState } from 'react';
import "../Estilos/EstilosTutorial.css";

const ValorInfo = ({ titulo, valor, descripcion }) => {

    const [hoverText, setHoverText] = useState('');


    return (
        <div className="valor-info">
            <h3 className="valor-info-titulo">{titulo}</h3>
            <div className="valor-info-contenido"
                            onMouseEnter={() => setHoverText(descripcion)}
                            onMouseLeave={() => setHoverText('')}   >
                <img src={require('../img/simbolo-pesos.png')} alt="Símbolo de pesos" className="simbolo-pesos" />
                <span className="valor-info-valor">${valor.toLocaleString('es-AR', { minimumFractionDigits: 2 })}</span>
        
            </div>

            {hoverText &&
            (<div className="valor-info-descripcion">
                <p>{descripcion}</p>
            </div>)}
        </div>
    );
};

export default ValorInfo;
