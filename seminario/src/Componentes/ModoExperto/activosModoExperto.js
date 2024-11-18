const activosModoExperto = [
    
    /* ##### SEMANA 01 ##### */

    [{
        'ticker': 'AAPL',
        'nombre': 'Apple Inc.',
        'descripcion': 'Una de las empresas de tecnología más grandes del mundo, conocida por sus productos electrónicos como el iPhone y el Mac. Tiene ciclos de lanzamiento anuales, que suelen estar acompañados de un incremento en las acciones de la compañía.',
        'cotizacion': 175.00,
        'caracteristicas': {
            'volatilidad': 3,
            'potencialDeCrecimiento': 4,
            'susceptibilidadAEventos': 3,
        },
        'historial de cotizaciones' : [152, 162, 171, 164, 192, 159, 164, 200, 183, 176, 195, 175],
        'variacionNominal' : '-$20,00',
        'variacionPorcentual' : '-10,26%'
    },
    {
        'ticker' : 'MSFT',
        'nombre': 'Microsoft Corporation',
        'descripcion': 'Multinacional de tecnología que desarrolla software, hardware y servicios en la nube.',
        'cotizacion': 300.00,
        'caracteristicas': {
            'volatilidad': 2,
            'potencialDeCrecimiento': 4,
            'susceptibilidadAEventos': 2,
        },
        'historial de cotizaciones' : [259,292,260,296,294,254,285,264,269,294,261,300],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    },
    {
        'ticker' : 'AMZN',
        'nombre': 'Amazon.com Inc.',
        'descripcion': 'Gigante del comercio electrónico y servicios en la nube, conocido por su amplia gama de productos y servicios.',
        'cotizacion': 140.00,
        'caracteristicas': {
            'volatilidad': 4,
            'potencialDeCrecimiento': 5,
            'susceptibilidadAEventos': 4,
        },
        'historial de cotizaciones' : [121,159,143,195,192,188,124,136,149,119,140],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    },
    {
        'ticker' : 'GOOGL',
        'nombre': 'Alphabet Inc. (Google)',
        'descripcion': 'La empresa matriz de Google, especializada en servicios de búsqueda, publicidad y tecnología.',
        'cotizacion': 120.00,
        'caracteristicas': {
            'volatilidad': 3,
            'potencialDeCrecimiento': 4,
            'susceptibilidadAEventos': 3,
        },
        'historial de cotizaciones' : [109,174,146,113,96,158,87,128,121,151,154,120],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    },
    {
        'ticker' : 'TSLA',
        'nombre': 'Tesla Inc.',
        'descripcion': 'Fabricante de vehículos eléctricos y soluciones de energía sostenible. Su CEO, Elon Musk, es un personaje excéntrico altamente famoso en internet, conocido por su fuerte presencia en redes sociales. La valuación de la empresa está directamente relacionada con su reputación.',
        'cotizacion': 250.00,
        'caracteristicas': {
            'volatilidad': 5,
            'potencialDeCrecimiento': 5,
            'susceptibilidadAEventos': 5,
        },
        'historial de cotizaciones' : [275,281,214,233,246,234,241,232,210,284,201,250],
        'variacionNominal' : '+$49.00',
        'variacionPorcentual' : '+24,38%'
    },
    {
        'ticker' : 'BRK.A',
        'nombre': 'Berkshire Hathaway Inc.',
        'descripcion': 'Conglomerado multinacional dirigido por Warren Buffett, con inversiones en diversas industrias.',
        'cotizacion': 450000.00,
        'caracteristicas': {
            'volatilidad': 2,
            'potencialDeCrecimiento': 3,
            'susceptibilidadAEventos': 2,
        },
        'historial de cotizaciones' : [46250,45302,43368,44048,47917,40569,48858,44021,47210,43457,45592,45000],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    },
    {
        'ticker' : 'META',
        'nombre': 'Meta Platforms Inc. (Facebook)',
        'descripcion': 'Empresa de redes sociales y tecnología, conocida por Facebook, Instagram y WhatsApp. En el pasado reciente, ha virado fuertemente hacia la creación de hardware y software para realidad virtual, acuñando el término Metaverso para entornos virtuales que impactan directamente en la realidad.',
        'cotizacion': 300.00,
        'caracteristicas': {
            'volatilidad': 4,
            'potencialDeCrecimiento': 4,
            'susceptibilidadAEventos': 4,
        },
        'historial de cotizaciones' : [214,393,308,352,399,364,287,322,275,324,353,300],
        'variacionNominal' : '-$53.00',
        'variacionPorcentual' : '-15,01%'
    },
    {
        'ticker' : 'NVDA',
        'nombre': 'NVIDIA Corporation',
        'descripcion': 'Líder en tecnología de gráficos y procesamiento, especialmente en el sector de inteligencia artificial. Desde la introducción de CUDA, que permite la utilización de GPUs para el procesamiento de datos más allá de gráficos, ha experimentado un crecimiento exponencial gracias al boom de la IA.',
        'cotizacion': 500.00,
        'caracteristicas': {
            'volatilidad': 4,
            'potencialDeCrecimiento': 5,
            'susceptibilidadAEventos': 4,
        },
        'historial de cotizaciones' : [449,455,457,445,460,470,482,490,493,482,490,500],
        'variacionNominal' : '+$10.00',
        'variacionPorcentual' : '+2,04%'
    },
    {
        'ticker' : 'JNJ',
        'nombre': 'Johnson & Johnson',
        'descripcion': 'Multinacional de productos farmacéuticos y de consumo, conocida por su enfoque en la salud.',
        'cotizacion': 160.00,
        'caracteristicas': {
            'volatilidad': 2,
            'potencialDeCrecimiento': 3,
            'susceptibilidadAEventos': 2,
        },
        'historial de cotizaciones' : [107,89,113,102,113,84,88,105,113,95,93,160],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    },
    {
        'ticker' : 'V',
        'nombre': 'Visa Inc.',
        'descripcion': 'Compañía de tecnología de pagos que facilita transacciones electrónicas en todo el mundo.',
        'cotizacion': 230.00,
        'caracteristicas': {
            'volatilidad': 2,
            'potencialDeCrecimiento': 4,
            'susceptibilidadAEventos': 2,
        },
        'historial de cotizaciones' : [239,294,300,309,289,278,278,207,308,242,256,230],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    },
    {
        'ticker' : 'PO',
        'nombre': 'Procter & Gamble Co.',
        'descripcion': 'Multinacional de bienes de consumo, conocida por sus productos de higiene y limpieza.',
        'cotizacion': 150.00,
        'caracteristicas': {
            'volatilidad': 2,
            'potencialDeCrecimiento': 3,
            'susceptibilidadAEventos': 2,
        },
        'historial de cotizaciones' : [193,150,115,173,123,120,199,169,123,197,178,150],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    },
    {
        'ticker' : 'KO',
        'nombre': 'Coca-Cola Company',
        'descripcion': 'Compañía de bebidas no alcohólicas, famosa por su refresco homónimo y una amplia gama de productos de bebidas.',
        'cotizacion': 60.00,
        'caracteristicas': {
            'volatilidad': 2,
            'potencialDeCrecimiento': 3,
            'susceptibilidadAEventos': 2,
        },
        'historial de cotizaciones' : [65,72,83,96,88,76,78,69,82,88,95,90],
        'variacionNominal' : '-$5.00',
        'variacionPorcentual' : '-5,26%'
    },
    {
        'ticker' : 'WMT',
        'nombre': 'Walmart Inc.',
        'descripcion': 'Cadena de supermercados y minorista, conocida por sus precios bajos y amplia variedad de productos.',
        'cotizacion': 140.00,
        'caracteristicas': {
            'volatilidad': 2,
            'potencialDeCrecimiento': 3,
            'susceptibilidadAEventos': 2,
        },
        'historial de cotizaciones' : [124,119,148,109,125,149,101,114,125,139,117,140],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    },
    {
        'ticker' : 'PFE',
        'nombre': 'Pfizer Inc.',
        'descripcion': 'Compañía farmacéutica global, conocida por sus medicamentos y vacunas, incluyendo la vacuna contra el COVID-19.',
        'cotizacion': 45.00,
        'caracteristicas': {
            'volatilidad': 3,
            'potencialDeCrecimiento': 3,
            'susceptibilidadAEventos': 3,
        },
        'historial de cotizaciones' : [52,79,64,62,64,38,86,76,74,75,85,45],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    },
    {
        'ticker' : 'INTC',
        'nombre': 'Intel Corporation',
        'descripcion': 'Fabricante de semiconductores y tecnología de computación, conocido por sus microprocesadores.',
        'cotizacion': 30.00,
        'caracteristicas': {
            'volatilidad': 3,
            'potencialDeCrecimiento': 3,
            'susceptibilidadAEventos': 3,
        },
        'historial de cotizaciones' : [109,174,146,113,96,158,87,128,121,151,154,120],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    },
    {
        'ticker' : 'NFLX',
        'nombre': 'Netflix Inc.',
        'descripcion': 'Plataforma de streaming de video, conocida por su amplia biblioteca de películas y series originales.',
        'cotizacion': 400.00,
        'caracteristicas': {
            'volatilidad': 4,
            'potencialDeCrecimiento': 4,
            'susceptibilidadAEventos': 4,
        },
        'historial de cotizaciones' : [109,174,146,113,96,158,87,128,121,151,154,120],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    },
    {
        'ticker' : 'ADBE',
        'nombre': 'Adobe Inc.',
        'descripcion': 'Desarrollador de software conocido por productos como Photoshop, Illustrator y Adobe Acrobat.',
        'cotizacion': 500.00,
        'caracteristicas': {
            'volatilidad': 3,
            'potencialDeCrecimiento': 4,
            'susceptibilidadAEventos': 3,
        },
        'historial de cotizaciones' : [109,174,146,113,96,158,87,128,121,151,154,120],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    },
    {
        'ticker' : 'CRM',
        'nombre': 'Salesforce.com Inc.',
        'descripcion': 'Proveedor de soluciones de gestión de relaciones con clientes (CRM) en la nube.',
        'cotizacion': 220.00,
        'caracteristicas': {
            'volatilidad': 3,
            'potencialDeCrecimiento': 4,
            'susceptibilidadAEventos': 3,
        },
        'historial de cotizaciones' : [109,174,146,113,96,158,87,128,121,151,154,120],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    },
    {
        'ticker' : 'XOM',
        'nombre': 'Exxon Mobil Corporation',
        'descripcion': 'Una de las mayores compañías de petróleo y gas del mundo, involucrada en la exploración y producción de energía.',
        'cotizacion': 100.00,
        'caracteristicas': {
            'volatilidad': 3,
            'potencialDeCrecimiento': 3,
            'susceptibilidadAEventos': 4,
        },
        'historial de cotizaciones' : [109,174,146,113,96,158,87,128,121,151,154,120],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    }],



    /* ##### SEMANA 02 ##### */



    [{
        'ticker': 'AAPL',
        'nombre': 'Apple Inc.',
        'descripcion': 'Una de las empresas de tecnología más grandes del mundo, conocida por sus productos electrónicos como el iPhone y el Mac. Tiene ciclos de lanzamiento anuales, que suelen estar acompañados de un incremento en las acciones de la compañía.',
        'cotizacion': 180.25,
        'caracteristicas': {
            'volatilidad': 3,
            'potencialDeCrecimiento': 4,
            'susceptibilidadAEventos': 3,
        },
        'historial de cotizaciones' : [162, 171, 164, 192, 159, 164, 200, 183, 176, 195, 175, 180.25],
        'variacionNominal' : '+$5,25',
        'variacionPorcentual' : '+1,03%'
    },
    {
        'ticker' : 'MSFT',
        'nombre': 'Microsoft Corporation',
        'descripcion': 'Multinacional de tecnología que desarrolla software, hardware y servicios en la nube.',
        'cotizacion': 300.00,
        'caracteristicas': {
            'volatilidad': 2,
            'potencialDeCrecimiento': 4,
            'susceptibilidadAEventos': 2,
        },
        'historial de cotizaciones' : [259,292,260,296,294,254,285,264,269,294,261,300],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    },
    {
        'ticker' : 'AMZN',
        'nombre': 'Amazon.com Inc.',
        'descripcion': 'Gigante del comercio electrónico y servicios en la nube, conocido por su amplia gama de productos y servicios.',
        'cotizacion': 140.00,
        'caracteristicas': {
            'volatilidad': 4,
            'potencialDeCrecimiento': 5,
            'susceptibilidadAEventos': 4,
        },
        'historial de cotizaciones' : [121,159,143,195,192,188,124,136,149,119,140],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    },
    {
        'ticker' : 'GOOGL',
        'nombre': 'Alphabet Inc. (Google)',
        'descripcion': 'La empresa matriz de Google, especializada en servicios de búsqueda, publicidad y tecnología.',
        'cotizacion': 120.00,
        'caracteristicas': {
            'volatilidad': 3,
            'potencialDeCrecimiento': 4,
            'susceptibilidadAEventos': 3,
        },
        'historial de cotizaciones' : [109,174,146,113,96,158,87,128,121,151,154,120],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    },
    {
        'ticker' : 'TSLA',
        'nombre': 'Tesla Inc.',
        'descripcion': 'Fabricante de vehículos eléctricos y soluciones de energía sostenible. Su CEO, Elon Musk, es un personaje excéntrico altamente famoso en internet, conocido por su fuerte presencia en redes sociales. La valuación de la empresa está directamente relacionada con su reputación.',
        'cotizacion': 212.50,
        'caracteristicas': {
            'volatilidad': 5,
            'potencialDeCrecimiento': 5,
            'susceptibilidadAEventos': 5,
        },
        'historial de cotizaciones' : [281,214,233,246,234,241,232,210,284,201,250,212.50],
        'variacionNominal' : '-$37.50',
        'variacionPorcentual' : '-15,00%'
    },
    {
        'ticker' : 'BRK.A',
        'nombre': 'Berkshire Hathaway Inc.',
        'descripcion': 'Conglomerado multinacional dirigido por Warren Buffett, con inversiones en diversas industrias.',
        'cotizacion': 450000.00,
        'caracteristicas': {
            'volatilidad': 2,
            'potencialDeCrecimiento': 3,
            'susceptibilidadAEventos': 2,
        },
        'historial de cotizaciones' : [46250,45302,43368,44048,47917,40569,48858,44021,47210,43457,45592,45000],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    },
    {
        'ticker' : 'META',
        'nombre': 'Meta Platforms Inc. (Facebook)',
        'descripcion': 'Empresa de redes sociales y tecnología, conocida por Facebook, Instagram y WhatsApp. En el pasado reciente, ha virado fuertemente hacia la creación de hardware y software para realidad virtual, acuñando el término Metaverso para entornos virtuales que impactan directamente en la realidad.',
        'cotizacion': 360.00,
        'caracteristicas': {
            'volatilidad': 4,
            'potencialDeCrecimiento': 4,
            'susceptibilidadAEventos': 4,
        },
        'historial de cotizaciones' : [393,308,352,399,364,287,322,275,324,353,300,360],
        'variacionNominal' : '+$60.00',
        'variacionPorcentual' : '+20,00%'
    },
    {
        'ticker' : 'NVDA',
        'nombre': 'NVIDIA Corporation',
        'descripcion': 'Líder en tecnología de gráficos y procesamiento, especialmente en el sector de inteligencia artificial. Desde la introducción de CUDA, que permite la utilización de GPUs para el procesamiento de datos más allá de gráficos, ha experimentado un crecimiento exponencial gracias al boom de la IA.',
        'cotizacion': 525.00,
        'caracteristicas': {
            'volatilidad': 4,
            'potencialDeCrecimiento': 5,
            'susceptibilidadAEventos': 4,
        },
        'historial de cotizaciones' : [455,457,445,460,470,482,490,493,482,490,500,525],
        'variacionNominal' : '+$25.00',
        'variacionPorcentual' : '+05,00%'
    },
    {
        'ticker' : 'JNJ',
        'nombre': 'Johnson & Johnson',
        'descripcion': 'Multinacional de productos farmacéuticos y de consumo, conocida por su enfoque en la salud.',
        'cotizacion': 160.00,
        'caracteristicas': {
            'volatilidad': 2,
            'potencialDeCrecimiento': 3,
            'susceptibilidadAEventos': 2,
        },
        'historial de cotizaciones' : [107,89,113,102,113,84,88,105,113,95,93,160],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    },
    {
        'ticker' : 'V',
        'nombre': 'Visa Inc.',
        'descripcion': 'Compañía de tecnología de pagos que facilita transacciones electrónicas en todo el mundo.',
        'cotizacion': 230.00,
        'caracteristicas': {
            'volatilidad': 2,
            'potencialDeCrecimiento': 4,
            'susceptibilidadAEventos': 2,
        },
        'historial de cotizaciones' : [239,294,300,309,289,278,278,207,308,242,256,230],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    },
    {
        'ticker' : 'PO',
        'nombre': 'Procter & Gamble Co.',
        'descripcion': 'Multinacional de bienes de consumo, conocida por sus productos de higiene y limpieza.',
        'cotizacion': 150.00,
        'caracteristicas': {
            'volatilidad': 2,
            'potencialDeCrecimiento': 3,
            'susceptibilidadAEventos': 2,
        },
        'historial de cotizaciones' : [193,150,115,173,123,120,199,169,123,197,178,150],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    },
    {
        'ticker' : 'KO',
        'nombre': 'Coca-Cola Company',
        'descripcion': 'Compañía de bebidas no alcohólicas, famosa por su refresco homónimo y una amplia gama de productos de bebidas.',
        'cotizacion': 52.00,
        'caracteristicas': {
            'volatilidad': 2,
            'potencialDeCrecimiento': 3,
            'susceptibilidadAEventos': 2,
        },
        'historial de cotizaciones' : [72,83,96,88,76,78,69,82,88,95,90,52],
        'variacionNominal' : '-$38.00',
        'variacionPorcentual' : '-30,00%'
    },
    {
        'ticker' : 'WMT',
        'nombre': 'Walmart Inc.',
        'descripcion': 'Cadena de supermercados y minorista, conocida por sus precios bajos y amplia variedad de productos.',
        'cotizacion': 140.00,
        'caracteristicas': {
            'volatilidad': 2,
            'potencialDeCrecimiento': 3,
            'susceptibilidadAEventos': 2,
        },
        'historial de cotizaciones' : [124,119,148,109,125,149,101,114,125,139,117,140],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    },
    {
        'ticker' : 'PFE',
        'nombre': 'Pfizer Inc.',
        'descripcion': 'Compañía farmacéutica global, conocida por sus medicamentos y vacunas, incluyendo la vacuna contra el COVID-19.',
        'cotizacion': 45.00,
        'caracteristicas': {
            'volatilidad': 3,
            'potencialDeCrecimiento': 3,
            'susceptibilidadAEventos': 3,
        },
        'historial de cotizaciones' : [52,79,64,62,64,38,86,76,74,75,85,45],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    },
    {
        'ticker' : 'INTC',
        'nombre': 'Intel Corporation',
        'descripcion': 'Fabricante de semiconductores y tecnología de computación, conocido por sus microprocesadores.',
        'cotizacion': 30.00,
        'caracteristicas': {
            'volatilidad': 3,
            'potencialDeCrecimiento': 3,
            'susceptibilidadAEventos': 3,
        },
        'historial de cotizaciones' : [109,174,146,113,96,158,87,128,121,151,154,120],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    },
    {
        'ticker' : 'NFLX',
        'nombre': 'Netflix Inc.',
        'descripcion': 'Plataforma de streaming de video, conocida por su amplia biblioteca de películas y series originales.',
        'cotizacion': 400.00,
        'caracteristicas': {
            'volatilidad': 4,
            'potencialDeCrecimiento': 4,
            'susceptibilidadAEventos': 4,
        },
        'historial de cotizaciones' : [109,174,146,113,96,158,87,128,121,151,154,120],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    },
    {
        'ticker' : 'ADBE',
        'nombre': 'Adobe Inc.',
        'descripcion': 'Desarrollador de software conocido por productos como Photoshop, Illustrator y Adobe Acrobat.',
        'cotizacion': 500.00,
        'caracteristicas': {
            'volatilidad': 3,
            'potencialDeCrecimiento': 4,
            'susceptibilidadAEventos': 3,
        },
        'historial de cotizaciones' : [109,174,146,113,96,158,87,128,121,151,154,120],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    },
    {
        'ticker' : 'CRM',
        'nombre': 'Salesforce.com Inc.',
        'descripcion': 'Proveedor de soluciones de gestión de relaciones con clientes (CRM) en la nube.',
        'cotizacion': 220.00,
        'caracteristicas': {
            'volatilidad': 3,
            'potencialDeCrecimiento': 4,
            'susceptibilidadAEventos': 3,
        },
        'historial de cotizaciones' : [109,174,146,113,96,158,87,128,121,151,154,120],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    },
    {
        'ticker' : 'XOM',
        'nombre': 'Exxon Mobil Corporation',
        'descripcion': 'Una de las mayores compañías de petróleo y gas del mundo, involucrada en la exploración y producción de energía.',
        'cotizacion': 100.00,
        'caracteristicas': {
            'volatilidad': 3,
            'potencialDeCrecimiento': 3,
            'susceptibilidadAEventos': 4,
        },
        'historial de cotizaciones' : [109,174,146,113,96,158,87,128,121,151,154,120],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    }],

    
    /* #### SEMANA 03 #### */


    [{
        'ticker': 'AAPL',
        'nombre': 'Apple Inc.',
        'descripcion': 'Una de las empresas de tecnología más grandes del mundo, conocida por sus productos electrónicos como el iPhone y el Mac. Tiene ciclos de lanzamiento anuales, que suelen estar acompañados de un incremento en las acciones de la compañía.',
        'cotizacion': 150.78,
        'caracteristicas': {
            'volatilidad': 3,
            'potencialDeCrecimiento': 4,
            'susceptibilidadAEventos': 3,
        },
        'historial de cotizaciones' : [171, 164, 192, 159, 164, 200, 183, 176, 195, 175, 180.25, 150.78],
        'variacionNominal' : '+$29,47',
        'variacionPorcentual' : '-16,35%%'
    },
    {
        'ticker' : 'MSFT',
        'nombre': 'Microsoft Corporation',
        'descripcion': 'Multinacional de tecnología que desarrolla software, hardware y servicios en la nube.',
        'cotizacion': 300.00,
        'caracteristicas': {
            'volatilidad': 2,
            'potencialDeCrecimiento': 4,
            'susceptibilidadAEventos': 2,
        },
        'historial de cotizaciones' : [259,292,260,296,294,254,285,264,269,294,261,300],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    },
    {
        'ticker' : 'AMZN',
        'nombre': 'Amazon.com Inc.',
        'descripcion': 'Gigante del comercio electrónico y servicios en la nube, conocido por su amplia gama de productos y servicios.',
        'cotizacion': 140.00,
        'caracteristicas': {
            'volatilidad': 4,
            'potencialDeCrecimiento': 5,
            'susceptibilidadAEventos': 4,
        },
        'historial de cotizaciones' : [121,159,143,195,192,188,124,136,149,119,140],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    },
    {
        'ticker' : 'GOOGL',
        'nombre': 'Alphabet Inc. (Google)',
        'descripcion': 'La empresa matriz de Google, especializada en servicios de búsqueda, publicidad y tecnología.',
        'cotizacion': 120.00,
        'caracteristicas': {
            'volatilidad': 3,
            'potencialDeCrecimiento': 4,
            'susceptibilidadAEventos': 3,
        },
        'historial de cotizaciones' : [109,174,146,113,96,158,87,128,121,151,154,120],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    },
    {
        'ticker' : 'TSLA',
        'nombre': 'Tesla Inc.',
        'descripcion': 'Fabricante de vehículos eléctricos y soluciones de energía sostenible. Su CEO, Elon Musk, es un personaje excéntrico altamente famoso en internet, conocido por su fuerte presencia en redes sociales. La valuación de la empresa está directamente relacionada con su reputación.',
        'cotizacion': 232.37,
        'caracteristicas': {
            'volatilidad': 5,
            'potencialDeCrecimiento': 5,
            'susceptibilidadAEventos': 5,
        },
        'historial de cotizaciones' : [214,233,246,234,241,232,210,284,201,250,212.50,232.37],
        'variacionNominal' : '+$19,87',
        'variacionPorcentual' : '+9,35%'
    },
    {
        'ticker' : 'BRK.A',
        'nombre': 'Berkshire Hathaway Inc.',
        'descripcion': 'Conglomerado multinacional dirigido por Warren Buffett, con inversiones en diversas industrias.',
        'cotizacion': 450000.00,
        'caracteristicas': {
            'volatilidad': 2,
            'potencialDeCrecimiento': 3,
            'susceptibilidadAEventos': 2,
        },
        'historial de cotizaciones' : [46250,45302,43368,44048,47917,40569,48858,44021,47210,43457,45592,45000],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    },
    {
        'ticker' : 'META',
        'nombre': 'Meta Platforms Inc. (Facebook)',
        'descripcion': 'Empresa de redes sociales y tecnología, conocida por Facebook, Instagram y WhatsApp. En el pasado reciente, ha virado fuertemente hacia la creación de hardware y software para realidad virtual, acuñando el término Metaverso para entornos virtuales que impactan directamente en la realidad.',
        'cotizacion': 360.00,
        'caracteristicas': {
            'volatilidad': 4,
            'potencialDeCrecimiento': 4,
            'susceptibilidadAEventos': 4,
        },
        'historial de cotizaciones' : [393,308,352,399,364,287,322,275,324,353,300,360],
        'variacionNominal' : '+$60.00',
        'variacionPorcentual' : '+20,00%'
    },
    {
        'ticker' : 'NVDA',
        'nombre': 'NVIDIA Corporation',
        'descripcion': 'Líder en tecnología de gráficos y procesamiento, especialmente en el sector de inteligencia artificial. Desde la introducción de CUDA, que permite la utilización de GPUs para el procesamiento de datos más allá de gráficos, ha experimentado un crecimiento exponencial gracias al boom de la IA.',
        'cotizacion': 547.21,
        'caracteristicas': {
            'volatilidad': 4,
            'potencialDeCrecimiento': 5,
            'susceptibilidadAEventos': 4,
        },
        'historial de cotizaciones' : [457,445,460,470,482,490,493,482,490,500,525,547.21],
        'variacionNominal' : '+$22.21',
        'variacionPorcentual' : '+04,23%'
    },
    {
        'ticker' : 'JNJ',
        'nombre': 'Johnson & Johnson',
        'descripcion': 'Multinacional de productos farmacéuticos y de consumo, conocida por su enfoque en la salud.',
        'cotizacion': 160.00,
        'caracteristicas': {
            'volatilidad': 2,
            'potencialDeCrecimiento': 3,
            'susceptibilidadAEventos': 2,
        },
        'historial de cotizaciones' : [107,89,113,102,113,84,88,105,113,95,93,160],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    },
    {
        'ticker' : 'V',
        'nombre': 'Visa Inc.',
        'descripcion': 'Compañía de tecnología de pagos que facilita transacciones electrónicas en todo el mundo.',
        'cotizacion': 230.00,
        'caracteristicas': {
            'volatilidad': 2,
            'potencialDeCrecimiento': 4,
            'susceptibilidadAEventos': 2,
        },
        'historial de cotizaciones' : [239,294,300,309,289,278,278,207,308,242,256,230],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    },
    {
        'ticker' : 'PO',
        'nombre': 'Procter & Gamble Co.',
        'descripcion': 'Multinacional de bienes de consumo, conocida por sus productos de higiene y limpieza.',
        'cotizacion': 150.00,
        'caracteristicas': {
            'volatilidad': 2,
            'potencialDeCrecimiento': 3,
            'susceptibilidadAEventos': 2,
        },
        'historial de cotizaciones' : [193,150,115,173,123,120,199,169,123,197,178,150],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    },
    {
        'ticker' : 'KO',
        'nombre': 'Coca-Cola Company',
        'descripcion': 'Compañía de bebidas no alcohólicas, famosa por su refresco homónimo y una amplia gama de productos de bebidas.',
        'cotizacion': 53.10,
        'caracteristicas': {
            'volatilidad': 2,
            'potencialDeCrecimiento': 3,
            'susceptibilidadAEventos': 2,
        },
        'historial de cotizaciones' : [83,96,88,76,78,69,82,88,95,90,52,53.10],
        'variacionNominal' : '+$1,10',
        'variacionPorcentual' : '-2,12%'
    },
    {
        'ticker' : 'WMT',
        'nombre': 'Walmart Inc.',
        'descripcion': 'Cadena de supermercados y minorista, conocida por sus precios bajos y amplia variedad de productos.',
        'cotizacion': 140.00,
        'caracteristicas': {
            'volatilidad': 2,
            'potencialDeCrecimiento': 3,
            'susceptibilidadAEventos': 2,
        },
        'historial de cotizaciones' : [124,119,148,109,125,149,101,114,125,139,117,140],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    },
    {
        'ticker' : 'PFE',
        'nombre': 'Pfizer Inc.',
        'descripcion': 'Compañía farmacéutica global, conocida por sus medicamentos y vacunas, incluyendo la vacuna contra el COVID-19.',
        'cotizacion': 45.00,
        'caracteristicas': {
            'volatilidad': 3,
            'potencialDeCrecimiento': 3,
            'susceptibilidadAEventos': 3,
        },
        'historial de cotizaciones' : [52,79,64,62,64,38,86,76,74,75,85,45],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    },
    {
        'ticker' : 'INTC',
        'nombre': 'Intel Corporation',
        'descripcion': 'Fabricante de semiconductores y tecnología de computación, conocido por sus microprocesadores.',
        'cotizacion': 30.00,
        'caracteristicas': {
            'volatilidad': 3,
            'potencialDeCrecimiento': 3,
            'susceptibilidadAEventos': 3,
        },
        'historial de cotizaciones' : [109,174,146,113,96,158,87,128,121,151,154,120],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    },
    {
        'ticker' : 'NFLX',
        'nombre': 'Netflix Inc.',
        'descripcion': 'Plataforma de streaming de video, conocida por su amplia biblioteca de películas y series originales.',
        'cotizacion': 400.00,
        'caracteristicas': {
            'volatilidad': 4,
            'potencialDeCrecimiento': 4,
            'susceptibilidadAEventos': 4,
        },
        'historial de cotizaciones' : [109,174,146,113,96,158,87,128,121,151,154,120],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    },
    {
        'ticker' : 'ADBE',
        'nombre': 'Adobe Inc.',
        'descripcion': 'Desarrollador de software conocido por productos como Photoshop, Illustrator y Adobe Acrobat.',
        'cotizacion': 500.00,
        'caracteristicas': {
            'volatilidad': 3,
            'potencialDeCrecimiento': 4,
            'susceptibilidadAEventos': 3,
        },
        'historial de cotizaciones' : [109,174,146,113,96,158,87,128,121,151,154,120],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    },
    {
        'ticker' : 'CRM',
        'nombre': 'Salesforce.com Inc.',
        'descripcion': 'Proveedor de soluciones de gestión de relaciones con clientes (CRM) en la nube.',
        'cotizacion': 220.00,
        'caracteristicas': {
            'volatilidad': 3,
            'potencialDeCrecimiento': 4,
            'susceptibilidadAEventos': 3,
        },
        'historial de cotizaciones' : [109,174,146,113,96,158,87,128,121,151,154,120],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    },
    {
        'ticker' : 'XOM',
        'nombre': 'Exxon Mobil Corporation',
        'descripcion': 'Una de las mayores compañías de petróleo y gas del mundo, involucrada en la exploración y producción de energía.',
        'cotizacion': 100.00,
        'caracteristicas': {
            'volatilidad': 3,
            'potencialDeCrecimiento': 3,
            'susceptibilidadAEventos': 4,
        },
        'historial de cotizaciones' : [109,174,146,113,96,158,87,128,121,151,154,120],
        'variacionNominal' : '+$39.00',
        'variacionPorcentual' : '+14,9%'
    }]

]



export default activosModoExperto;