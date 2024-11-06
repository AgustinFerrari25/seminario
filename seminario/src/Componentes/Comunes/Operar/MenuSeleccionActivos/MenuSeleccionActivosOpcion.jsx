import React from "react";
import './MenuSeleccionActivosOpcion.css'
import useExplicacionEnHover from "../../../../hooks/explicacionEnHover";

const MenuSeleccionActivosOpcion = ({
    etiqueta,
    explicacion,
    ultimaOpcion,
    destacar,
    seleccionada,
    funcionNavegacion
    }) => {
    
    const { textoExplicacion, mostrarExplicacion, ocultarExplicacion } = useExplicacionEnHover();

    return (
        <div>
            <div
                className={
                    `
                    ${ultimaOpcion ? 'utilma-opcion' : ''}
                    menu-seleccion-activos-opcion
                    explicado-en-hover
                    ${destacar ? 'destacado' : ''}
                    ${seleccionada ? 'opcion-seleccionada' : ''}
                    `}
                onClick={funcionNavegacion}
                onMouseEnter={() => mostrarExplicacion(explicacion)}
                onMouseLeave={ocultarExplicacion}
                >
                <p className="poppins-bold">{etiqueta}</p>
                {textoExplicacion &&
                    (<div className="explicacion-en-hover">
                        <p>{textoExplicacion}</p>
                    </div>)}
            </div>
        </div>
    );
};
export default MenuSeleccionActivosOpcion;