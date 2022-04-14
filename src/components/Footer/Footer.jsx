import React from "react";
import { Container, Row } from "react-bootstrap"
import "./Footer.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";


export const Footer = () =>{
    return(
        <>
            <Container id="footer" className="mb-4 f-resp">
                <Row>
                    <div className="col-sm col-6 m-sm-auto">
                        <a href="https://github.com/kevinfigueredo2000" className="mr-2" target="_blank" rel="noreferrer" id="git"><FontAwesomeIcon icon={faGithub} className="fab fa-github"/></a>
                    </div>
                    <div className="col-sm col-6 m-sm-auto">
                        <a href="https://www.linkedin.com/in/kevin-figueredo-1512221a3/" target="_blank" rel="noreferrer" id="lid"><FontAwesomeIcon icon={faLinkedinIn} className="fab fa-linkedin-in"/></a>
                    </div> 
                    <div className="col-sm col-12 m-sm-auto text-center" id="mail-responsive">
                        <a href="mailto:figueredo.kevin2000@gmail.com" id="mail" >figueredo.kevin2000@gmail.com</a>
                    </div>
                </Row>      
                <Row>
                    <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faWhatsapp} className="fa-whatsapp" id="fa-whatsapp"/></a>
                </Row>
            </Container> 
        </>
    )
}