import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Contacto } from "./components/Contacto/Contacto";
import { Footer } from './components/Footer/Footer';
import { ProyectosIndex } from './components/ProyectosIndex/ProyectosIndex';
import { Index } from './components/Index/Index';
import React from 'react';
import { AlturaPaginaProvider } from "./context/AlturaPagina"


function App() {
  return (
    <AlturaPaginaProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" /* index */ element={<Index />} />
          <Route path="/proyectos" element={<ProyectosIndex />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </Router>
    </AlturaPaginaProvider>
  );
}

export default App;
