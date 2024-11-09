import React from "react";
import './Operar.css'
import MenuSeleccionActivos from "./MenuSeleccionActivos/MenuSeleccionActivos";
import GraficoTendencias from '../../ModoExperto/GraficoTendencias';
import ValorInfo from "../../EstadoDeCuenta/ValorInfo";
import Cotizacion from './Cotizacion';
import Tenencias from './Tenencias';
import Caracteristicas from "./Caracteristicas";
import OperarBoton from "./OperarBoton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags, faCartShopping } from "@fortawesome/free-solid-svg-icons"

const Operar = ({
    mostrarMenuSeleccionActivos,
    mostrarDescripcionDelActivo,
    mostrarGraficoTendencias,
    menuActivosCondicionDestacar,
    menuActivosOpcionADestacar,
    menuActivosFuncionNavegacion,
    mostrarCotizacion,
    mostrarValorLiquido,
    mostrarTenencias,
    mostrarCaracteristicas,
    mostrarBotonesOperar,
    activoMostado,
    estadoDeCuenta
    }) => {
        return(
        <div className="wrapper-operar">
            <div className="operar-columnas-lados">
                <MenuSeleccionActivos
                    mostrar={mostrarMenuSeleccionActivos}
                    condicionDestacar={menuActivosCondicionDestacar}
                    opcionADestacar={menuActivosOpcionADestacar}
                    funcionNavegacion={menuActivosFuncionNavegacion}
                    />
            </div>
            <div className="operar-columna-central">
                <div style={{visibility: (mostrarDescripcionDelActivo) ? 'visible' : 'hidden'}}>
                    <div><h2 className="operar-nombre-del-activo poppins-black">{activoMostado['nombre']}</h2></div>
                    <p className="poppins-medium operar-descripcion-del-activo">{activoMostado['descripcion']}</p>
                </div>
                <Cotizacion
                    mostrar={mostrarCotizacion}
                    cotizacion={activoMostado['cotizacion']}
                    variacionPorcentual={activoMostado['variacionPorcentual']}
                    variacionNominal={activoMostado['variacionNominal']}
                    />
                <GraficoTendencias
                    mostrar={mostrarGraficoTendencias}
                    valorMaximo={35}
                    valorMinimo={15}
                />
            </div>
            <div className="operar-columnas-lados" style={{visibility: (mostrarValorLiquido) ? 'visible' : 'hidden'}}>
                <ValorInfo titulo={'Valor líquido'} valor={estadoDeCuenta['valorLiquido']} pequenio={true}/>
                <Tenencias
                    tenencias={estadoDeCuenta['portfolio'][activoMostado['nombre']]['tenencias']}
                    valorNominal={estadoDeCuenta['portfolio'][activoMostado['nombre']]['valorNominal']}
                    mostrar={mostrarTenencias}
                    />
                <Caracteristicas
                    mostrar={mostrarCaracteristicas}
                    puntajes={activoMostado['caracteristicas']}
                    />
                <div className="operar-botones-wrapper" style={{visibility: (mostrarBotonesOperar) ? 'visible' : 'hidden'}}>
                    <OperarBoton
                        icono={faTags}
                        funcionOperar={null}
                        etiqueta={'Vender'}
                        invertido={true}
                        desactivado={true}
                        />
                    <OperarBoton
                        icono={faCartShopping}
                        funcionOperar={null}
                        etiqueta={'Comprar'}
                        desactivado={false}
                        />
                </div>
            </div>
        </div>
    )};

export default Operar;