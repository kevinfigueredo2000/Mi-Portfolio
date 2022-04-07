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
            <form action="#" method="" className="index">
                <Container>
                    <Row>
                        <div className="col-12 mt-5 mb-4 mt-sm-0 col-sm-6 text-center">
                            <img className="img-fluid avatar shadow" src="images/fotoKev.jpg" alt="Kevin Figueredo"/>
                        </div>
                    </Row>
                    <Row>
                        <div className="col-sm-12">
                            <input type="text" name="" id="srch" className="form-control text-center" placeHolder="Hola, mi nombre es Kevin, desarrolador web Full Stack"/>
                        </div>
                    </Row>
                    <Row className="text-center mt-4">
                        <div className="col-sm-12">
                            <Link to="proyectos" id="mmt">Mirá mi trabajo</Link>
                        </div>
                    </Row>
                </Container>
            </form>
            <div>
                <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faWhatsapp} className="fa-whatsapp"/></a>
            </div>  
        </>
    )
} 