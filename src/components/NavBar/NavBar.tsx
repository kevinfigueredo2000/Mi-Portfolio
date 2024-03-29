import "./NavBar.css"
import { FaBars, FaDownload } from "react-icons/fa";
import { FiX } from "react-icons/fi"
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useRef, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { useAltPag } from "../../context/AlturaPagina"

export const NavBar = () => {
    const { ubicacionPrincipal, desplazamiento_Actual} = useAltPag();

    const [AbrirCerrar, setAbrirCerrar] = useState<"NavShow" | "NavHide">("NavHide")
    const Nav = useRef<HTMLDivElement | null>(null)

    function handleClick() {
        AbrirCerrar === "NavHide" ? setAbrirCerrar("NavShow") : setAbrirCerrar("NavHide");
    };

    if (ubicacionPrincipal >= desplazamiento_Actual) {
        Nav.current?.classList.remove("abrir-Nav");
        Nav.current?.classList.add("cerrar-Nav");
    } else if (desplazamiento_Actual >= ubicacionPrincipal) {
        Nav.current?.classList.remove("cerrar-Nav");
        Nav.current?.classList.add("abrir-Nav")
    }

    return (
        <div className="bg-black py-3" id="nav" ref={Nav}>
            <Container>
                <Navbar style={AbrirCerrar === "NavShow" ? { alignItems: "baseline" } : {}}>
                    <button className="hamburger" id="hamburger" onClick={handleClick}>
                        {AbrirCerrar === "NavHide" ? <FaBars className="fas fa-bars" /> : <FiX className="fas fa-bars" />}
                    </button>
                    <ul className={AbrirCerrar + " nav nav-ul"} style={{ position: "relative", left:"-17px" }}>
                        <li className="nav-item ">
                            <a href="#Sobre-mi" className="nav-link item" onClick={handleClick}>Inicio</a>
                        </li>
                        <li className="nav-item ">
                            <a href="#Proyectos" className="nav-link item" onClick={handleClick}>Proyectos</a>
                        </li>
                        <li className="nav-item ">
                            <a href="#Experiencia-laboral" className="nav-link item" onClick={handleClick}>Experiencia</a>
                        </li>
                        <li className="nav-item ">
                            <a href="#Estudios" className="nav-link item" onClick={handleClick}>Estudios</a>
                        </li>
                        <li className="nav-item ">
                            <a href="#Contacto" className="nav-link item" onClick={handleClick}>Contacto</a>
                        </li>
                    </ul>
                    <div id="cvv">
                        <a href="Kevin_Figueredo-CV.pdf" id="cv" download="Kevin_Figueredo-CV.pdf"> Descargar CV <FaDownload /></a>
                    </div>
                </Navbar>
            </Container>
        </div>
    )
}