import React, { useState } from 'react';
import './MenuSeleccionActivos.css'
import MenuSeleccionActivosOpcion from './MenuSeleccionActivosOpcion';

const MenuSeleccionActivos = ({
  mostrar,
  activos,
  funcionNavegacion,
  condicionDestacar,
  opcionADestacar
  }) => {


  const opciones = activos ? activos : [
    { nombre: 'Plazo fijo', descripcion: 'Estas son las distintas opciones en las que podemos invertir, y cambian dependiendo de la lección.' },
    { nombre: 'Bono', descripcion: 'Estas son las distintas opciones en las que podemos invertir, y cambian dependiendo de la lección.' },
    { nombre: 'Oblig. Negociables', descripcion: 'Estas son las distintas opciones en las que podemos invertir, y cambian dependiendo de la lección.' },
  ];

  return (
    <div className="menu-seleccion-activos" style={{visibility: (mostrar) ? 'visible' : 'hidden'}}>
        {opciones.map((opcion, indice) => (
            <MenuSeleccionActivosOpcion 
            key={indice}
            etiqueta={opcion.nombre}
            explicacion={opcion.descripcion}
            ultimaOpcion={indice===opciones.length -1}
            funcionNavegacion={() => funcionNavegacion(indice)}
            destacar = {condicionDestacar && indice === opcionADestacar}
          />
        ))}
    </div>
  );
};

export default MenuSeleccionActivos;
