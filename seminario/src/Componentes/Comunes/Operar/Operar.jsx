import React from "react";
import './Operar.css'
import MenuSeleccionActivos from "./MenuSeleccionActivos/MenuSeleccionActivos";
import GraficoTendencias from '../../ModoExperto/GraficoTendencias';

const Operar = ({
    mostrarMenuSeleccionActivos,
    mostrarDescripcionDelActivo,
    mostrarGraficoTendencias,
    mostrarCaracteristicas,

    }) => {
        return(
        <div className="wrapper-operar">
            <div className="operar-columnas-lados">
                <MenuSeleccionActivos mostrar={mostrarMenuSeleccionActivos}/>
            </div>
            <div className="operar-columna-central">
                <div style={{visibility: (mostrarDescripcionDelActivo) ? 'visible' : 'hidden'}}>
                    <div><h2 className="operar-nombre-del-activo poppins-black">Plazo Fijo</h2></div>
                    <p className="poppins-medium operar-descripcion-del-activo">El plazo fijo permite invertir un monto específico por un plazo a partir de 30 días a cambio de un interés acordado previamente.</p>
                </div>
                <GraficoTendencias
                    mostrar={mostrarGraficoTendencias}
                    valorMaximo={35}
                    valorMinimo={15}
                />
            </div>
            <div className="operar-columnas-lados">
                <p style={{visibility: (mostrarCaracteristicas) ? 'visible' : 'hidden'}}>Características del activo y botones de compra.</p>
            </div>
        </div>
    )};

export default Operar;