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
    botonesOperarFuncionVender,
    
    menuCompraVentaFuncionConfirmar,
    menuCompraVentaFuncionCancelar,
    
    activoMostrado,
    estadoDeCuenta,

    }) => {
        const [mostrarMenuCompraVenta, setMostrarMenuCompraVenta] = useState(false);
        const [operacion, setOperacion] = useState('');

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
                    funcionConfirmar={menuCompraVentaFuncionConfirmar}
                    cotizacion={activoMostrado['cotizacion']}
                    valorLiquido={estadoDeCuenta['valorLiquido']}
                />
                }
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
                    valorMaximo={35}
                    valorMinimo={15}
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
                        funcionOperar={botonesOperarFuncionVender}
                        etiqueta={'Vender'}
                        invertido={true}
                        desactivado={true}
                        />
                    <OperarBoton
                        icono={faCartShopping}
                        funcionOperar={funcionComprar}
                        etiqueta={'Comprar'}
                        desactivado={false}
                        />
                </div>
            </div>
        </div>
    )};

export default Operar;