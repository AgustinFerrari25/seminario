import React from 'react';
import Plot from 'react-plotly.js';
import './GraficoDeTenencias.css'

const GraficoDeTenencias = ({ datos, mostrar }) => {
  const totalInvertido = Object.values(datos).reduce((acumulador, inversion) => {
    return acumulador + inversion.valorNominal;
    }, 0);

  const configuracionDelGrafico = {
    type: 'treemap',
    labels: Object.keys(datos),
    parents: Object.values(datos).map(() => ''),
    values: Object.values(datos).map(activo => activo.valorNominal),
    textinfo: 'label+value+percent entry',
    marker: {
      colors:['#573523','#F9A003','#437C90', '#000000','#F3E491']
    },
  };

  const layout={
    title: 'Tenencias',
    font: {
      family: 'Poppins, sans-serif',
      weight: 900,
      style: 'normal',
      size: '1rem'
    },
    margin: {
      l: 0,
      r: 0,
      t: 0,
      b: 0,
    },
    paper_bgcolor: 'rgba(0, 0, 0, 0)',
    plot_bgcolor: 'rgba(0, 0, 0, 0)',
  }

  return (
    <div
      className='grafico-de-tenencias-wrapper'
      style={{visibility: (mostrar) ? 'visible' : 'hidden'}}
      >
      <h2>Distribución de tenencias</h2>
      <Plot
        data={[configuracionDelGrafico]}
        layout={layout}
        useResizeHandler={true}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default GraficoDeTenencias;