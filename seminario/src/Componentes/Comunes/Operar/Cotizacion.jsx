import React from "react";
import './Cotizacion.css'

const Cotizacion = ({
    cotizacion,
    variacionPorcentual,
    variacionNominal,
    mostrar
    }) => {
        return(
            <div className="cotizacion-tabla" style={{visibility: (mostrar) ? 'visible' : 'hidden'}}>
                <div className="cotizacion-columnas">
                    <h4 className="cotizacion-etiqueta poppins-bold">Cotización actual</h4>
                    <h4 className="cotizacion-etiqueta poppins-bold">Variación nominal</h4>
                    <h4 className="cotizacion-etiqueta poppins-bold">Variación porcentual</h4>
                    
                </div>
                <div className="cotizacion-separador">
                </div>
                <div className="cotizacion-columnas">
                    <p className="cotizacion-valor poppins-light">{cotizacion}</p>
                    <p className="cotizacion-valor poppins-light">{variacionNominal}</p>
                    <p className="cotizacion-valor poppins-light">{variacionPorcentual}</p>
                </div>
            </div>
        )};

        export default Cotizacion;