/*
    Función que muestra un texto que explica el componente sobre el que se posa el mouse
    Uso:
    1. Creamos un componente que tenga 'explicacion' como entrada.
    2. Importamos la función: "import explicacionEnHover from '../../hooks/explicacionEnHover';""
    3. Declaramos la función: "const { textoExplicacion, mostrarExplicacion, ocultarExplicacion } = useExplicacionEnHover();"
    4. Agregamos los métodos "onMouseEnter={() => mostrarExplicacion(explicacion)}" y "onMouseLeave={ocultarExplicacion}"
    5. Le asignamos la clase explicado-en-hover a al componente que queremos que se explique
    6. Agregamos un div con la clase "explicacion-en-hover" de la hoja de CSS Comunes con un codicional en textoExplicacion
    
    Ejemplo:
        <div
            className="explicado-en-hover"
            onMouseEnter={() => mostrarExplicacion(explicacion)}
            onMouseLeave={ocultarExplicacion}
            >
            ## CONTENIDO DEL DIV, COMO UN BOTÓN ##
            {textoExplicacion &&
                (<div className="explicacion-en-hover">
                    <p>{textoExplicacion}</p>
                </div>)}
*/
import { useState } from 'react';

const useExplicacionEnHover = () => {
    const [textoExplicacion, alternarExplicacion] = useState('');

    const mostrarExplicacion = (texto) => {
        alternarExplicacion(texto);
    };

    const ocultarExplicacion = () => {
        alternarExplicacion('');
    };

    return { textoExplicacion, mostrarExplicacion, ocultarExplicacion };
};

export default useExplicacionEnHover;
