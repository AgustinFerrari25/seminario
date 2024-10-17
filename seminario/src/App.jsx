import logo from './logo.svg';
import './App.css';
import Inicio from './Componentes/Inicio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>

      <Route path='/' element={<Inicio/>}/>

      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
