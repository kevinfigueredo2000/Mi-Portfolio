import { Navbar } from "react-bootstrap"
import { Container, Row } from "react-bootstrap"
import "./NavBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faDownload } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";


export const NavBar = () =>{
    const prueba=()=>{
        const Lista = document.getElementById('nav-ul');
        Lista.classList.toggle('show');
    }
    return(
        <div className="bg-black py-3">
            <Container>
                    <Navbar>
                        <button className="hamburger" id="hamburger" onClick={prueba}>
                            <FontAwesomeIcon className="fas fa-bars" icon={faBars}></FontAwesomeIcon>
                        </button>
                        <ul className="nav-bar nav nav-ul " id="nav-ul">
                            <Row>
                                <li className="nav-item col-sm">
                                    <Link to="/" className="active nav-link  item">Inicio</Link>
                                </li>
                                <li className="nav-item col-sm">
                                    <Link to="sobre-mi" className="active nav-link item">Sobremi</Link>
                                </li>
                                <li className="nav-item col-sm">
                                    <Link to="proyectos" className="active nav-link  item">Proyectos</Link>
                                </li>
                                <li className="nav-item col-sm">
                                    <Link to="contacto" className="active nav-link  item">Contacto</Link>
                                </li>
                            </Row>
                        </ul>
                        <div>
                            <a href="kfcv.pdf" id="cv" download="kfcv.pdf">Descargá mi cv <FontAwesomeIcon icon={faDownload}/></a>
                        </div>
                    </Navbar>
            </Container>
        </div>
    )
}