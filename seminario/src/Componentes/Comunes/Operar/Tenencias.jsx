import React from "react";
import './Tenencias.css'

const Cotizacion = ({
    tenencias,
    valorNominal,
    mostrar
    }) => {
        return(
            <div className="tenencias-tabla" style={{visibility: (mostrar) ? 'visible' : 'hidden'}}>
                <div className="tenencias-columnas">
                    <h4 className="tenencias-etiqueta poppins-bold">Tenencias</h4>
                    <h4 className="tenencias-etiqueta poppins-bold">Valor</h4>
                </div>
                <div className="tenencias-separador">
                </div>
                <div className="tenencias-columnas">
                    <p className="tenencias-valor poppins-light">{tenencias}</p>
                    <p className="tenencias-valor poppins-light">${valorNominal.toLocaleString('es-AR', { minimumFractionDigits: 2 })}</p>
                </div>
            </div>
        )};

        export default Cotizacion;