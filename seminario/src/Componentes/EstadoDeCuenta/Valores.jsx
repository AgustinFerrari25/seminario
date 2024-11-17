import React from "react";
import ValorInfo from "./ValorInfo";
import './Valores.css'

const Valores = ({
        valorNeto,
        valorLiquido,
        valorObjetivo,
        mostrarValorNeto,
        mostrarValorLiquido,
        mostrarValorObjetivo,
        duracionDeAnimacion
    }) => {
    return (
        <div
            className="valores-container"
            
            >
            <ValorInfo
                titulo="Valor neto"
                valor={valorNeto}
                mostrar={mostrarValorNeto}
                duracionDeAnimacion={duracionDeAnimacion}
                explicacion="El Valor Neto representa el total del valor de nuestra cuenta, es equivalente al dinero que tenemos disponible, y la cotización de todos nuestros activos."
            />
            <ValorInfo
                titulo="Valor líquido"
                valor={valorLiquido}
                mostrar={mostrarValorLiquido}
                duracionDeAnimacion={duracionDeAnimacion}
                explicacion="El Valor Líquido representa el total de dinero que tenemos disponible para comprar activos. Es el dinero que no tenemos invertido."
            />
            <ValorInfo
                titulo="Valor objetivo"
                valor={valorObjetivo}
                mostrar={mostrarValorObjetivo}
                duracionDeAnimacion={duracionDeAnimacion}
                explicacion="El Valor Objetivo representa el valor neto que necesitas alcanzar para aprobar la lección."
            />
        </div>
    );
};

export default Valores;
