import React, { useState } from 'react';
import MenuActivos from "../MenuActivos";
import CaracteristicasActivo from './CaracteristicasActivo';
import { useNavigate } from 'react-router-dom';
import Grafico from '../Grafico';
import '../..//Estilos/EstilosExperto.css'
import Header from '../Comunes/Header.jsx'
import GraficoTendencias from '../ModoExperto/GraficoTendencias.jsx'
import { useEffect , useRef} from 'react';


const InterfazDelJuego = () => {
    const [despliegaMenu, setDespliegaMenu] = useState(false);
    const menuRef = useRef(null);
    const despliegueMenu = () => {
        setDespliegaMenu(prevState => !prevState);
    };
    // Detectar clics fuera del menú para cerrarlo
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setDespliegaMenu(false);
            }
        };
        
        if (despliegaMenu) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [despliegaMenu]);

    return (
        <>
            <Header/>
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
                    <GraficoTendencias /> {/* Aquí deberías integrar tu componente de gráfico */}
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

            <MenuActivos isOpen={despliegaMenu} closeMenu={despliegueMenu} menuRef={menuRef} />
        

            </>
    );

   
};



export default InterfazDelJuego;