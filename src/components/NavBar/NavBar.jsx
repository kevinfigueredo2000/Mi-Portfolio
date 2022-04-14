import { Navbar } from "react-bootstrap"
import { Container } from "react-bootstrap"
import "./NavBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faDownload } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";


export const NavBar = () =>{
    const estadoBarra = ()=>{
        document.getElementById("nav-ul").removeClass("show")
        document.getElementById("nav-ul").classList.toggle("hide");
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
                        <ul className="nav-bar nav nav-ul " id="nav-ul">
                            <li className="nav-item nav">
                                <Link to="/" className=" nav-link item" activeClassName="active" onClick={()=>{estadoBarra()}}>Inicio</Link>
                            </li>
                            <li className="nav-item nav">
                                <Link to="sobre-mi" className=" nav-link item" activeClassName="active" onClick={()=>{estadoBarra()}}>Sobre mi</Link>
                            </li>
                            <li className="nav-item nav">
                                <Link to="proyectos" className=" nav-link item" activeClassName="active" onClick={()=>{estadoBarra()}}>Proyectos</Link>
                            </li>
                            <li className="nav-item nav">
                                <Link to="contacto" className=" nav-link item" activeClassName="active" onClick={()=>{estadoBarra()}}>Contacto</Link>
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