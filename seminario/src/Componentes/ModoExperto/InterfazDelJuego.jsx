import React, { useState } from 'react';
import MenuActivos from "../MenuActivos";
import CaracteristicasActivo from './CaracteristicasActivo';
import { useNavigate } from 'react-router-dom';
import Grafico from '../Grafico';
import '../..//Estilos/EstilosExperto.css'

const InterfazDelJuego = () => {
    const [despliegaMenu, setDespliegaMenu] = useState(false);

    const despliegueMenu = () => {
        setDespliegaMenu(prevState => !prevState);
    };

    return (
        <>
           
            <div className="contenido-principal">
            <div className="menu-hamburguesa">
                    <button className="boton-menu" onClick={despliegueMenu}>Mostrar Menú</button>
                </div>
            
                <h1>Plazo fijo</h1>
                <p>El plazo fijo permite invertir un monto específico por un plazo a partir de 30 días a cambio de un interés acordado previamente.</p>
                
                {/* Sección de tasas y gráfico */}
                <div className="info-tasa-grafico">
                    <div className="tasa">
                        <p><strong>Tasa actual:</strong> 20% anual</p>
                        <p><strong>Variación:</strong> +1%</p>
                    </div>
                    <div className="grafico">
                    <Grafico /> {/* Aquí deberías integrar tu componente de gráfico */}
                        <p>Gráfico de tasas</p>
                    </div>
                </div>

                {/* Características y botones de acción */}
                <div className="acciones">
                    <div className="valor-liquido">
                        <p>Valor líquido: <strong>$1000,00</strong></p>
                    </div>
                    <div className="caracteristicas">
                        <CaracteristicasActivo />
                    </div>
                    <div className="botones-accion">
                        <button>Vender</button>
                        <button>Comprar</button>
                    </div>
                </div>
            </div>

            {despliegaMenu && <MenuActivos />}
        

            </>
    );

   
};



export default InterfazDelJuego;