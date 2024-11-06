import React, { useState } from 'react';
import './MenuSeleccionActivos.css'
import MenuSeleccionActivosOpcion from './MenuSeleccionActivosOpcion';

const MenuSeleccionActivos = ({mostrar}) => {
  const [hoverText, setHoverText] = useState('');

  const options = [
    { label: 'Plazo fijo', description: 'Estas son las distintas opciones en las que podemos invertir, y cambian dependiendo de la lección.' },
    { label: 'Bono', description: 'Estas son las distintas opciones en las que podemos invertir, y cambian dependiendo de la lección.' },
    { label: 'Oblig. Negociables', description: 'Estas son las distintas opciones en las que podemos invertir, y cambian dependiendo de la lección.' },
  ];

  return (
    <div className="menu-seleccion-activos" style={{visibility: (mostrar) ? 'visible' : 'hidden'}}>
        {options.map((option, index) => (
            <MenuSeleccionActivosOpcion 
            key={index}
            etiqueta={option.label}
            explicacion={option.description}
            ultimaOpcion={index===options.length -1}
          />
        ))}
    </div>
  );
};

export default MenuSeleccionActivos;
