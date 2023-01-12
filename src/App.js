import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProyectosPage } from "../src/components/ProyectosPage/ProyectosPage";
import { NavBar } from "./components/NavBar/NavBar";
import { Contacto } from "../src/components/Contacto/Contacto";
import { Footer } from './components/Footer/Footer';
import { Index } from './components/Index/Index';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
          <Route path="/" index element={<Index/>}/>
          <Route path="/proyectos" element={<ProyectosPage/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
