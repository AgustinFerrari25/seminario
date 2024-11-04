/* 
    Header principal del modo juego. 
    Es necesario pasarle el modoDeJuego ('Aprendizaje', 'Libre Mercado', etc.)
    para que muestre el icono y título correcto. 
    Se le puede pasar 'mostrarTodosLosBotones = true' para activar todos los
    botones de navegación, o pasarle un booleano para cada uno (por ejemplo,
    'mostrarEstadoDeCuenta=true' para mostrar el botón de estado de cuenta).
*/

import React from 'react';
import { useNavigate } from 'react-router-dom';
import carpinchoLogo from '../../img/carpincho-moneda.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowLeft,
    faDisplay,
    faGear,
    faGraduationCap,
    faMoneyBill,
    faScaleBalanced,
    faNewspaper,
    faSackDollar,
    faBriefcase,
    faBridge
} from "@fortawesome/free-solid-svg-icons"
import BotonNavegacionHeader from './Header/BotonNavegacionHeader';
import './Header.css'
import '../../Estilos/Comunes.css'

const Header = ({
    modoDeJuego,
    mostrarTodosLosBotones,
    mostrarEstadoDeCuenta,
    mostrarOperar,
    mostrarPortfolio,
    mostrarNoticias
    }) => {
    
    const navigate = useNavigate();

    return (
        <div className="header-modo-juego">
            
            <div className='iconos-a-la-izquierda'>
            
                {/* Logo del carpincho, hacer clic vuelve al menú principal */}
                <img
                    onClick={() => navigate("/")} 
                    src={carpinchoLogo}
                    alt="El Carpincho de Wall Street"
                    className="header-logo" />
                
                <div className='modo-de-juego'>
                    
                    {/* Indicar el modo de juego al que corresponde el header al instanciarlo */}

                    {modoDeJuego === 'Aprendizaje' && (
                        <p className='oxanium'><FontAwesomeIcon className='fa-lg' icon={faGraduationCap} /> Modo Aprendizaje</p>
                    )}

                    {modoDeJuego === 'Intermedio' && (
                        <p className='oxanium'><FontAwesomeIcon icon={faScaleBalanced} /> Nivel Intermedio</p>
                    )}

                </div>

                
            
            </div>

            <div className='navegacion'>

                    {/*
                        Pasar booleanos (o mostrarTodosLosBotones) para activar los distintos botones
                        para acceder a las opciones de navegación
                    */}

                    {/* Estado de cuenta */}
                    <BotonNavegacionHeader
                        funcionNavegacion={null}
                        mostrarBoton={(mostrarEstadoDeCuenta || mostrarTodosLosBotones)}
                        icono={faSackDollar}
                        explicacion={'Navegar a la vista de estado de cuenta.'}
                        />
                    
                    {/* Comprar activos / Operar */}

                    <BotonNavegacionHeader
                        funcionNavegacion={null}
                        mostrarBoton={(mostrarOperar || mostrarTodosLosBotones)}
                        icono={faMoneyBill}
                        explicacion={'Operar en el mercado.'}
                        />
                    
                    {/* Portfolio */}

                    <BotonNavegacionHeader
                        funcionNavegacion={null}
                        mostrarBoton={(mostrarPortfolio || mostrarTodosLosBotones)}
                        icono={faBriefcase}
                        explicacion={'Navegar a la vista de portfolio.'}
                        />

                    {/* Noticias */}
                    <p
                        onClick={() => null}
                        style={{visibility: (mostrarNoticias || mostrarTodosLosBotones) ? 'visible' : 'hidden'}}
                        >
                        <FontAwesomeIcon className='navegacion-icono' icon={faNewspaper} />
                    </p>
                    <BotonNavegacionHeader
                        funcionNavegacion={null}
                        mostrarBoton={(mostrarNoticias || mostrarTodosLosBotones)}
                        icono={faNewspaper}
                        explicacion={'Ver las últimas noticias.'}
                        />
                </div>
            
            <div className='iconos-a-la-derecha'>

                <BotonNavegacionHeader
                        funcionNavegacion={() => navigate(-1)}
                        mostrarBoton={true}
                        icono={faArrowLeft}
                        explicacion={'Volver al menú principal.'}
                        />
                <BotonNavegacionHeader
                        funcionNavegacion={null}
                        mostrarBoton={true}
                        icono={faGear}
                        explicacion={'Configuración.'}
                        />
                
            </div>

            
        </div>
    );
};

export default Header;