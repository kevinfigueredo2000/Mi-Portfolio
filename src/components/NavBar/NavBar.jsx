import { Navbar } from "react-bootstrap"
import { Container } from "react-bootstrap"
import "./NavBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faDownload } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";


export const NavBar = () =>{
    const estadoBarra = ()=>{
        document.getElementsByName("nav-ul").removeClass("show")
        document.getElementsByName("nav-ul").classList.toggle("hide");
    }
    return(
        <div className="bg-black py-3">
            <Container>
                    <Navbar>
                        <button className="hamburger" id="hamburger"  onClick={()=>{
                                document.getElementById("nav-ul").classList.toggle("show");
                            }}>
                            <FontAwesomeIcon className="fas fa-bars" icon={faBars}></FontAwesomeIcon>
                        </button>
                        <ul className="nav-bar nav nav-ul" id="nav-ul">
                            <li className="nav-item nav">
                                <NavLink to="/" className="nav-link item" activeClassName="active" onClick={()=>{estadoBarra()}}>Inicio</NavLink>
                            </li>
                            <li className="nav-item nav">
                                <NavLink to="sobre-mi" className="nav-link item" activeClassName="active" onClick={()=>{estadoBarra()}}>Sobre mi</NavLink>
                            </li>
                            <li className="nav-item nav">
                                <NavLink to="proyectos" className="nav-link item" activeClassName="active" onClick={()=>{estadoBarra()}}>Proyectos</NavLink>
                            </li>
                            <li className="nav-item nav">
                                <NavLink to="contacto" className="nav-link item" activeClassName="active" onClick={()=>{estadoBarra()}}>Contacto</NavLink>
                            </li>
                        </ul>
                        <div>
                            <a href="kfcv.pdf" id="cv" download="kfcv.pdf">Descargá mi cv <FontAwesomeIcon icon={faDownload}/></a>
                        </div>
                    </Navbar>
            </Container>
        </div>
    )
}