import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar.tsx";
import { Contacto } from "./components/Contacto/Contacto.tsx";
import { Footer } from './components/Footer/Footer.tsx';
import { ProyectosIndex } from './components/ProyectosIndex/ProyectosIndex.jsx';
import { Index } from './components/Index/Index.jsx';


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
          <Route path="/" index element={<Index/>}/>
          <Route path="/proyectos" element={<ProyectosIndex/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
