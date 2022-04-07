import { Navbar } from "react-bootstrap"
import { Container, Row } from "react-bootstrap"
import "./NavBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";


export const NavBar = () =>{
    return(
        <div className="bg-black py-3">
            <Container>
                <Row>
                    <Navbar className="navbar-expand-md px-0">
                        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                            <ul className="nav-bar nav">
                                <Row>
                                    <li className="nav-item col-sm">
                                        <NavLink to="/" ClassName="active" className=" nav-link  item">Inicio</NavLink>
                                    </li>
                                    <li className="nav-item col-sm ">
                                        <NavLink to="sobre-mi" ClassName="active" className="nav-link item">Sobremi</NavLink>
                                    </li>
                                    <li className="nav-item col-sm">
                                        <NavLink to="proyectos" ClassName="active" className=" nav-link  item">Proyectos</NavLink>
                                    </li>
                                    <li className="nav-item col-sm">
                                        <NavLink to="contacto" ClassName="active" className=" nav-link  item">Contacto</NavLink>
                                    </li>
                                </Row>
                            </ul>
                        </div>
                        <div className="text-right nav my-lg-0">
                            <li><div className="text-right"><a href="kfcv.pdf" id="cv" download="kfcv.pdf">Descargá mi cv <FontAwesomeIcon icon={faDownload}/></a></div></li>
                        </div>
                    </Navbar>
                </Row>
            </Container>
        </div>
    )
}