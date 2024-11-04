import React, { useState } from 'react';


const SidebarMenu = () => {
  const [hoverText, setHoverText] = useState('');

  const options = [
    { label: 'Plazo fijo', description: 'Estas son las distintas opciones en las que podemos invertir, y cambian dependiendo de la lección.' },
    { label: 'Bono', description: 'Estas son las distintas opciones en las que podemos invertir, y cambian dependiendo de la lección.' },
    { label: 'Oblig. Negociables', description: 'Estas son las distintas opciones en las que podemos invertir, y cambian dependiendo de la lección.' },
  ];

  return (
    <div className="sidebar-menu">
      <div className="menu-options">
        {options.map((option, index) => (
          <div
            key={index}
            className="menu-option"
            onMouseEnter={() => setHoverText(option.description)}
            onMouseLeave={() => setHoverText('')}
          >
            {option.label}
          </div>
        ))}
      </div>
      {hoverText && (
        <div className="hover-box">
          <p>{hoverText}</p>
        </div>
      )}
    </div>
  );
};

export default SidebarMenu;
