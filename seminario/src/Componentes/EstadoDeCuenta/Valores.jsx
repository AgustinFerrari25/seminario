import React from "react";
import ValorInfo from "./ValorInfo";
import './Valores.css'

const Valores = ({valorNeto, valorLiquido}) => {
    return (
        <div className="valores-container">
            <ValorInfo
                titulo="Valor neto"
                valor={valorNeto}
                explicacion="El Valor Neto representa el total del valor de nuestra cuenta, es equivalente al dinero que tenemos disponible, y la cotización de todos nuestros activos."
            />
            <ValorInfo
                titulo="Valor líquido"
                valor={valorLiquido}
                explicacion="El Valor Líquido representa el total de dinero que tenemos disponible para comprar activos. Es el dinero que no tenemos invertido."
            />
        </div>
    );
};

export default Valores;
