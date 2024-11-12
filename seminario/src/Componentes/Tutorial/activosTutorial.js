const activosTutorial = [
    {
        'nombre' : 'Plazo fijo',
        'descripcion' : 
            `El plazo fijo permite invertir un monto específico por un plazo a partir 
            de 30 días a cambio de un interés acordado previamente.`,
        'cotizacion' : '20% anual',
        'variacionNominal' : 'N/A',
        'variacionPorcentual' : '+2%',
        'caracteristicas' : {
            'volatilidad' : 1,
            'potencialDeCrecimiento' : 2,
            'susceptibilidadAEventos' : 2
        }
    },
    {
        'nombre' : 'Bono',
        'descripcion' : 
            `El bono representa una promesa de pago de parte de un Estado. 
            La compra de un bono representa un préstamo al gobierno, 
            y el dinero será devuelto con interés.`,
        'cotizacion' : '25% anual',
        'variacionNominal' : 'N/A',
        'variacionPorcentual' : '-3%',
        'caracteristicas' : {
            'volatilidad' : 2,
            'potencialDeCrecimiento' : 1,
            'susceptibilidadAEventos' : 2
        }
    },
    {
        'nombre' : 'Obligaciones Negociables',
        'descripcion' : 
            `Las obligaciones negociables son documentos que emiten empresas privadas. 
            Comprar una ON equivale a hacer un préstamo a la organización, que devolverá el dinero con intereses.`,
        'cotizacion' : '33% anual',
        'variacionNominal' : 'N/A',
        'variacionPorcentual' : '+6%',
        'caracteristicas' : {
            'volatilidad' : 1,
            'potencialDeCrecimiento' : 1,
            'susceptibilidadAEventos' : 3
        }
    }

]

export default activosTutorial;