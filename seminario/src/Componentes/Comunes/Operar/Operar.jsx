import React, { useState } from "react";
import './Operar.css'
import MenuSeleccionActivos from "./MenuSeleccionActivos/MenuSeleccionActivos";
import GraficoTendencias from '../../ModoExperto/GraficoTendencias';
import ValorInfo from "../../EstadoDeCuenta/ValorInfo";
import Cotizacion from './Cotizacion';
import Tenencias from './Tenencias';
import Caracteristicas from "./Caracteristicas";
import OperarBoton from "./OperarBoton";
import MenuDeCompraVenta from "./MenuDeCompraVenta";
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
    botonesOperarFuncionComprar,
    destacarBotonesOperarComprar,
    desactivarBotonesOperarComprar,
    desactivarBotonesOperarVender,
    botonesOperarFuncionVender,
    
    menuCompraVentaFuncionComprar,
    menuCompraVentaFuncionVender,
    menuCompraVentaDesactivarConfirmar,
    menuCompraVentaFuncionCancelar,
    menuCompraVentaDesactivarCancelar,
    menuCompraVentaDestacarIndicadorDeCantidad,
    
    activos,
    activoMostrado,
    estadoDeCuenta,

    }) => {
        const [mostrarMenuCompraVenta, setMostrarMenuCompraVenta] = useState(false);
        const [operacion, setOperacion] = useState('');

        const listaDeActivos = activos.map(({ nombre, ticker }) => ({
            nombre: ticker,
            descripcion: nombre
        }));

        const funcionComprar = () => {
            setOperacion('Comprar');
            setMostrarMenuCompraVenta(true);
            if (typeof botonesOperarFuncionComprar === 'function') {
                botonesOperarFuncionComprar();
            }
        }

        const funcionVender = () => {
            setOperacion('Vender');
            setMostrarMenuCompraVenta(true);
            if (typeof botonesOperarFuncionVender === 'function') {
                botonesOperarFuncionVender();
            }
        }

        const funcionCancelarCompraVenta = () => {
            setOperacion('');
            setMostrarMenuCompraVenta(false);
            if (typeof menuCompraVentaFuncionCancelar === 'function') {
                menuCompraVentaFuncionCancelar();
            }
        }

        return(
        <div className="wrapper-operar">
            {mostrarMenuCompraVenta &&
                <MenuDeCompraVenta
                    operacion={operacion}
                    funcionCancelar={funcionCancelarCompraVenta}
                    forzarDesactivarCancelar={menuCompraVentaDesactivarCancelar}
                    funcionConfirmar={operacion === 'Comprar' ? menuCompraVentaFuncionComprar : menuCompraVentaFuncionVender}
                    forzarDesactivarConfirmar={menuCompraVentaDesactivarConfirmar}
                    cotizacion={activoMostrado['cotizacion']}
                    valorLiquido={estadoDeCuenta['valorLiquido']}
                    destacarIndicadorDeCantidad={menuCompraVentaDestacarIndicadorDeCantidad}
                />
                }
            <div className="operar-columnas-lados">
                <MenuSeleccionActivos
                    mostrar={mostrarMenuSeleccionActivos}
                    condicionDestacar={menuActivosCondicionDestacar}
                    opcionADestacar={menuActivosOpcionADestacar}
                    funcionNavegacion={menuActivosFuncionNavegacion}
                    activos={listaDeActivos}
                    />
            </div>
            <div className="operar-columna-central">
                <div style={{visibility: (mostrarDescripcionDelActivo) ? 'visible' : 'hidden'}}>
                    <div><h2 className="operar-nombre-del-activo poppins-black">{activoMostrado['nombre']}</h2></div>
                    <p className="poppins-medium operar-descripcion-del-activo">{activoMostrado['descripcion']}</p>
                </div>
                <Cotizacion
                    mostrar={mostrarCotizacion}
                    cotizacion={activoMostrado['cotizacion']}
                    variacionPorcentual={activoMostrado['variacionPorcentual']}
                    variacionNominal={activoMostrado['variacionNominal']}
                    />
                <GraficoTendencias
                    mostrar={mostrarGraficoTendencias}
                    historialDeCotizaciones={activoMostrado['historial de cotizaciones'] ? activoMostrado['historial de cotizaciones'] : null}
                />
            </div>
            <div className="operar-columnas-lados" style={{visibility: (mostrarValorLiquido) ? 'visible' : 'hidden'}}>
                <ValorInfo titulo={'Valor líquido'} valor={estadoDeCuenta['valorLiquido']} mostrar={true} pequenio={true}/>
                <Tenencias
                    tenencias={estadoDeCuenta['portfolio'][activoMostrado['nombre']]['tenencias']}
                    valorNominal={estadoDeCuenta['portfolio'][activoMostrado['nombre']]['valorNominal']}
                    mostrar={mostrarTenencias}
                    />
                <Caracteristicas
                    mostrar={mostrarCaracteristicas}
                    puntajes={activoMostrado['caracteristicas']}
                    />
                <div className="operar-botones-wrapper" style={{visibility: (mostrarBotonesOperar) ? 'visible' : 'hidden'}}>
                    <OperarBoton
                        icono={faTags}
                        funcionOperar={funcionVender}
                        etiqueta={'Vender'}
                        invertido={true}
                        desactivado={desactivarBotonesOperarVender}
                        />
                    <OperarBoton
                        icono={faCartShopping}
                        funcionOperar={funcionComprar}
                        etiqueta={'Comprar'}
                        destacado={destacarBotonesOperarComprar}
                        desactivado={desactivarBotonesOperarComprar}
                        />
                </div>
            </div>
        </div>
    )};

export default Operar;