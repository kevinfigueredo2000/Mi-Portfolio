import { Navbar } from "react-bootstrap"
import { Container, Row } from "react-bootstrap"
import "./NavBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link } from "react-router-dom";


export const NavBar = () =>{
    return(
        <div className="bg-black py-3">
            <Container>
                <Row>
                    <Navbar className="navbar-expand-md px-0">
                        <div className="collapse navbar-collapse">
                            <ul className="nav-bar nav">
                                <Row>
                                    <li className="nav-item col-sm">
                                        <Link to="/" className="active nav-link  item">Inicio</Link>
                                    </li>
                                    <li className="nav-item col-sm ">
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
                        </div>
                        <div>
                            <a href="kfcv.pdf" id="cv" download="kfcv.pdf">Descargá mi cv <FontAwesomeIcon icon={faDownload}/></a>
                        </div>
                    </Navbar>
                </Row>
            </Container>
        </div>
    )
}