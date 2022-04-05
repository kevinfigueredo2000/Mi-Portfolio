import React from "react";
import { Container, Row } from "react-bootstrap"
import "./Footer.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";


export const Footer = () =>{
    return(
        <>
            <Container id="footer">
                <Row>
                    <div className="col-sm m-auto">
                        <a href="https://github.com/kevinfigueredo2000" className="mr-2" target="_blank"><FontAwesomeIcon icon={faGithub} className="fab fa-github"/></a>
                    </div>
                    <div className="col-sm m-auto">
                        <a href="https://www.linkedin.com/in/kevin-figueredo-1512221a3/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} className="fab fa-linkedin-in"/></a>
                    </div> 
                    <div className="col-sm m-auto">
                        <a href="https://depcsuite.com/" target="_blank" id="depc">DePCSuite</a>
                    </div>
                    <div className="col-sm m-auto">
                        <a href="" id="mail" >figueredo.kevin2000@gmail.com</a>
                    </div>
                </Row>      
            </Container>
            <div id="footer">
                <a href="https://web.whatsapp.com/" target="_blank" ><FontAwesomeIcon icon={faWhatsapp} className="fa-whatsapp"/></a>
            </div>  
        </>
    )
}