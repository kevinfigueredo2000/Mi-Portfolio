import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Proyectos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const Proyectos = () =>{
    return(
        <>
            <Container className="proyectos">
                <Row>
                    <div className="col mb-3 mt-4">
                        <h1>Mis proyectos</h1>
                    </div>
                </Row>
                <Row>
                    <div className="col-sm-6 mb-4">
                        <p id="p1">Estos son los proyectos que aprendí y estoy capacitado a realizar. </p>
                    </div>
                </Row>          
                <Row>
                    <div className="col-sm-4">
                        <div className="card shadow mb-3">
                            <div className="mx-3 my-3">
                                <Row className="mb-3 mx-2">
                                    <img src="images/abmclientes.png" className="img-fluid shadow" alt=""/>
                                </Row>
                                <Row className="sv">
                                    <h2 className="my-2 text-center">ABM CLIENTES</h2>
                                </Row>
                                <Row className="mx-1 my-3">
                                    <p>Alta, Baja, modificación de un registro de clientes empleando:. Realizado en HTML, CSS, PHP, Bootstrap y Json.</p>
                                </Row>
                                <Row className="mb-5">
                                    <div className="col">
                                        <input type="button" id="btn_ver" value="VER ONLINE"/>
                                    </div>
                                    <div className="col text-right mr-2">
                                        <a href="https://github.com/kevinfigueredo2000/ABM-Clientes" target="_blank" id="cf" rel="noreferrer">Código fuente</a>
                                    </div>                                                            
                                </Row>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mb-3">
                        <div className="card shadow ">
                            <div className="mx-3 my-3">
                                <Row className="mb-0 mx-2">
                                    <img src="images/abmventas.png" className="img-fluid shadow mb-3" alt=""/>
                                </Row>
                                <Row className="sv">
                                    <h2 className="my-2 text-center">SISTEMA DE GESTIÓN DE VENTAS</h2>
                                </Row>
                                <Row className="mx-1 my-3">
                                    <p>Sistema de gestión de clientes, productos y ventas. Realizado en HTML, CSS, PHP, MVC, Bootstrap, Js, Ajax, jQuery y MySQL de base de datos.</p>
                                </Row>
                                <Row id="rrr">
                                    <div className="col">
                                        <input type="button" id="btn_ver" value="VER PROYECTO"/>
                                    </div>
                                    <div className="col text-right mr-2">
                                        <a href="#" id="cf">Código fuente</a>
                                    </div>                                                            
                                </Row>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mb-3">
                        <div className="card shadow">
                            <div className="mx-3 my-3">
                                <Row className="mb-3 mx-2">
                                    <img src="images/sistema-admin.png" className="img-fluid shadow mb-3" alt=""/>   
                                </Row>
                                <Row className="sv">
                                    <h2 className="my-2 text-center">PROYECTO INTEGRADOR</h2>
                                </Row>
                                <Row className="mx-1 mt-3">
                                    <p>Proyecto Full Stack desarrollado en PHP, Laravel, Javascript, jQuery, AJAX, HTML, CSS, con panel administrador, gestor de usuarios, módulo de permisos y funcionalidades a fines.</p>
                                </Row>
                                <Row className="mt-sm-0 mt-4">
                                    <div className="col">
                                        <input type="button" id="btn_ver" value="VER PROYECTO"/>
                                    </div>
                                    <div className="col text-right mr-2">
                                        <a href="#" id="cf">Código fuente</a>
                                    </div>                                                            
                                </Row>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
            <div>
                <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faWhatsapp} className="fa-whatsapp"/></a>
            </div>  
        </>
    )
}