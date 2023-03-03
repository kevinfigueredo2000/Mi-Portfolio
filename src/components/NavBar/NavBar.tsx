import "./NavBar.css"
import { FaBars, FaDownload } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useRef, useState } from "react";
import { Container, Navbar } from "react-bootstrap";

export const NavBar = () => {
    const [ubicacionPrincipal, setUbicacionPrincipal] = useState<number>(window.pageYOffset);
    const [AbrirCerrar, setAbrirCerrar] = useState<"show" | "">("")
    const Nav = useRef<HTMLDivElement>(null)

    window.onscroll = function () {
        let Desplazamiento_Actual = window.pageYOffset;
        if (ubicacionPrincipal >= Desplazamiento_Actual) {
            Nav.current?.classList.remove("abrir-Nav");
            Nav.current?.classList.add("cerrar-Nav");
        } else {
            Nav.current?.classList.remove("cerrar-Nav");
            Nav.current?.classList.add("abrir-Nav")
        }
        setUbicacionPrincipal(Desplazamiento_Actual);
    }

    function handleClick() {
        return AbrirCerrar === "" ? setAbrirCerrar("show") : setAbrirCerrar("")
    }
    
    return (
        <div className="bg-black py-3" id="nav" ref={Nav}>
            <Container>
                <Navbar>
                    <button className="hamburger" id="hamburger" onClick={handleClick}>
                        <FaBars className="fas fa-bars" />
                    </button>
                    <ul className="nav nav-ul" id="nav-ul" style={{left:"-16px",position: "relative"}}>
                        <li className="nav-item ">
                            <a href="#Sobre-mi" className="nav-link item" onClick={handleClick}>Inicio</a>
                        </li>
                        <li className="nav-item ">
                            <a href="#Proyectos" className="nav-link item" onClick={handleClick}>Proyectos</a>
                        </li>
                        <li className="nav-item ">
                            <a href="#Estudios" className="nav-link item" onClick={handleClick}>Estudios</a>
                        </li>
                        <li className="nav-item ">
                            <a href="#Contacto" className="nav-link item" onClick={handleClick}>Contacto</a>
                        </li>
                    </ul>
                    <div id="cvv">
                        <a href="kfcv.pdf" id="cv" download="kfcv.pdf"> Descargar CV <FaDownload/></a>
                    </div>
                </Navbar>
            </Container>
        </div>
    )
}