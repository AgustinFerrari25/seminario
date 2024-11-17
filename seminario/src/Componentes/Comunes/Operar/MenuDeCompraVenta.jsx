import React, { useEffect, useState } from "react";
import './MenuDeCompraVenta.css'

const MenuDeCompraVenta = ({
    operacion,
    cotizacion,
    valorLiquido,
    funcionCancelar,
    funcionConfirmar,
    forzarDesactivarConfirmar,
    forzarDesactivarCancelar,
    destacarIndicadorDeCantidad,
}) => {

    const [cantidad, setCantidad] = useState(1);
    const [saldoLuegoDeLaCompra, setSaldoLuegoDeLaCompra] = useState('');
    const [subtotal, setSubtotal] = useState(0);
    const [desactivarComprar, setDesactivarComprar] = useState(forzarDesactivarConfirmar);
    const [operacionConfirmada, setOperacionConfirmada] = useState(false);

    useEffect(() => {
        if(!forzarDesactivarConfirmar){
            setDesactivarComprar(saldoLuegoDeLaCompra < 0);
        }
    }, [forzarDesactivarConfirmar]);

    const calcularSubtotalYSaldo = () => {
        const cotizacionNumerica = parseFloat(cotizacion);
        const cantidadNumerica = parseFloat(cantidad);
        
        if (isNaN(cotizacionNumerica) || cotizacionNumerica <= 0) {
            alert("Hubo un error con la cotización del activo.");
            return;
        }
        
        if (isNaN(cantidadNumerica) || cantidadNumerica <= 0) {
            alert("Por favor, ingrese una cantidad válida.");
            return;
        }

        const nuevoSubtotal = cantidadNumerica * cotizacionNumerica;
        const nuevoSaldoDespuesDeLaCompra = valorLiquido - nuevoSubtotal;

        setSubtotal(nuevoSubtotal);
        setSaldoLuegoDeLaCompra(nuevoSaldoDespuesDeLaCompra);
        if(!forzarDesactivarConfirmar){
            setDesactivarComprar(nuevoSaldoDespuesDeLaCompra < 0);
        }
        
    };

    const confirmarVenta = () => {
        if (typeof funcionConfirmar === 'function') {
            funcionConfirmar(cantidad);
            setOperacionConfirmada(true);
        }


    };

    return (
        <>
            <div className="menu-de-compra-venta-overlay"></div>
            <div className="menu-de-compra-venta">
            {operacionConfirmada ? (
                <div className="menu-de-compra-venta-confirmacion-de-operacion">
                    <p >¡Operación "{operacion.toLowerCase()}" confirmada!</p>                
                    <button className="poppins-bold" onClick={funcionCancelar}>Aceptar</button>
                </div>
                ) : (<>
                <div className="menu-de-compra-venta-titulo poppins-black">{operacion}</div>
                <div className="menu-de-compra-venta-fila">
                    <p className="menu-de-compra-venta-etiqueta">Cotización actual:</p>
                    <p>${cotizacion.toLocaleString('es-AR', { minimumFractionDigits: 2 })}</p>
                </div>
                <div className="menu-de-compra-venta-separador"></div>
                <div className="menu-de-compra-venta-cantidad-a-comprar">
                    <p className="menu-de-compra-venta-etiqueta">Cantidad a {operacion.toLowerCase()}:</p>
                    <div className={`${destacarIndicadorDeCantidad ? 'destacado' : ''}`}>
                        <input
                            className='menu-de-compra-venta-indicador-de-cantidad poppins-bold'
                            type="number"
                            placeholder="1"
                            value={cantidad}
                            onChange={(e) => {
                                const nuevoValor = e.target.value;
                                setCantidad(nuevoValor);
                                calcularSubtotalYSaldo();
                            }}
                            onBlur={calcularSubtotalYSaldo}
                            />
                    </div>
                </div>
                <div className="menu-de-compra-venta-fila menu-de-compra-venta-subtotal">
                    <p className="menu-de-compra-venta-etiqueta">Subtotal: </p>
                    <p>${subtotal.toLocaleString('es-AR', { minimumFractionDigits: 2 })}</p>
                </div>
                
                <div className="menu-de-compra-venta-separador"></div>
                <div className="menu-de-compra-venta-fila">
                    <p>Valor líquido:</p>
                    <p>${valorLiquido.toLocaleString('es-AR', { minimumFractionDigits: 2 })}</p>
                </div>
                <div className="menu-de-compra-venta-separador"></div>
                <div className="menu-de-compra-venta-fila">
                    <p>Saldo luego de la compra:</p>
                    <p>${saldoLuegoDeLaCompra.toLocaleString('es-AR', { minimumFractionDigits: 2 })}</p>
                </div>
                <div className="menu-de-compra-venta-wrapper-botones">
                    <button disabled={forzarDesactivarCancelar} className="poppins-bold" onClick={funcionCancelar}>Cancelar</button>
                    <button disabled={desactivarComprar} className="poppins-bold" onClick={confirmarVenta}>Confirmar</button>
                </div>
            </>)}
            </div>
        </>
    )
};

export default MenuDeCompraVenta;