import React from "react";
import './Operar.css'
import MenuSeleccionActivos from "./MenuSeleccionActivos/MenuSeleccionActivos";
import GraficoTendencias from '../../ModoExperto/GraficoTendencias';
import ValorInfo from "../../EstadoDeCuenta/ValorInfo";
import Cotizacion from './Cotizacion';
import Tenencias from './Tenencias';

const Operar = ({
    mostrarMenuSeleccionActivos,
    mostrarDescripcionDelActivo,
    mostrarGraficoTendencias,
    mostrarCaracteristicas,
    menuActivosCondicionDestacar,
    menuActivosOpcionADestacar,
    menuActivosFuncionNavegacion,
    mostrarCotizacion,
    mostrarTenencias,
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
            <div className="operar-columnas-lados" style={{visibility: (mostrarCaracteristicas) ? 'visible' : 'hidden'}}>
                <ValorInfo titulo={'Valor líquido'} valor={estadoDeCuenta['valorLiquido']} pequenio={true}/>
                <Tenencias
                    tenencias={estadoDeCuenta['portfolio'][activoMostado['nombre']]['tenencias']}
                    valorNominal={estadoDeCuenta['portfolio'][activoMostado['nombre']]['valorNominal']}
                    mostrar={mostrarTenencias}
                    />
            </div>
        </div>
    )};

export default Operar;