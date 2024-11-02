import React from "react";
import '../Estilos/EstilosExperto.css'
const MenuActivos =()=>{
    return(
        <>
         <div className="menu-activos">
            <ul>
                <li>Acciones</li>
                <li>Criptos</li>
                <li>Cedears</li>
                <li>Bonos</li>
                <li>Plazo Fijo</li>
                <li>Oblig.Negociables</li>
            </ul>
        </div>
        </>
    )
    //Mi idea es que al hacer click en cada uno de esto haga un get
    // de las tenencias de cada usuario(lo manejariamos con back)
    // y en el compenente interfazDeljuego tendriamos que crear como manjariamos el grafico si es tasa variable o fija

}
export default MenuActivos;