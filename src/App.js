import './App.css';
import { Contactos } from './componentes/Contactos';
import { Home } from './componentes/Home';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="contactos" element={<Contactos />}></Route>
      </Routes>

      
      
    </div>
  );
}

export default App;
