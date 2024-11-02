import './App.css';
import Inicio from './Componentes/Inicio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tutorial from './Componentes/Tutorial';
import Intermedio from './Componentes/Intermedio';
import ModoAprendizaje from './Componentes/ModoAprendizaje';
import InterfazDelJuego from './Componentes/ModoExperto/InterfazDelJuego';
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>

      <Route path='/' element={<Inicio/>}/>
      <Route path='/aprendizaje' element={<ModoAprendizaje/>}/>
      <Route path='/tutorial' element={<Tutorial/>}/>
      <Route path='/intermedio' element={<Intermedio/>}/>
      <Route path='/Experto' element={<InterfazDelJuego/>}/>
      
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
