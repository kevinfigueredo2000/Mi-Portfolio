import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import "./Inicio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export const Inicio = () =>{
    return(
        <>
            <Container>
                <form action="#" className="index">
                    <Row>
                        <div className="text-center">
                            <Link to="sobre-mi"><img className="avatarindx shadow" src="images/fotoKev.jpg" alt="Kevin Figueredo"/></Link>
                        </div>
                    </Row>
                    <Row>
                        <div className="col-sm-12">
                            <input type="text" id="srch" className="form-control text-center" placeholder="Hola, mi nombre es Kevin, desarrolador web Full Stack"/>
                        </div>
                    </Row>
                    <Row className="text-center mt-4">
                        <div className="col-sm-12">
                            <Link to="proyectos" id="mmt">Mirá mi trabajo</Link>
                        </div>
                    </Row>
                </form>
            </Container>
            
            <div>
                <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faWhatsapp} className="fa-whatsapp" id="fa-whatsapp"/></a>
            </div>  
        </>
    )
} 