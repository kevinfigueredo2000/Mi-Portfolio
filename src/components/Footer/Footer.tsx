import React, { useRef, useState } from "react";
import { Container, Row } from "react-bootstrap"
import "./Footer.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
// import { useAltPag } from "../../context/AlturaPagina"

export const Footer = () => {
    // // const [ubicacionPrincipal, setUbicacionPrincipal] = useState<number>(window.pageYOffset);
    // const { ubicacionPrincipal, desplazamiento_Actual } = useAltPag<any[]>([])




    // const wsp = useRef<HTMLAnchorElement>(null)

    // window.onscroll = function () {
    //     // let Desplazamiento_Actual = window.pageYOffset;
    //     if (ubicacionPrincipal >= desplazamiento_Actual) {
    //         wsp.current?.classList.remove("hide-wsp");
    //         wsp.current?.classList.add("show-wsp")
    //     } else {
    //         wsp.current?.classList.remove("show-wsp");
    //         wsp.current?.classList.add("hide-wsp");
    //     }
    //     // setUbicacionPrincipal(Desplazamiento_Actual);
    // }
    return (
        <Container id="footer" className="mb-4 f-resp">
            <Row>
                <div className="col-sm col-6 m-sm-auto">
                    <a href="https://github.com/kevinfigueredo2000" className="mr-2" target="_blank" rel="noreferrer" id="git"><FaGithub className="fab fa-github" /></a>
                </div>
                <div className="col-sm col-6 m-sm-auto">
                    <a href="https://www.linkedin.com/in/kevin-figueredo-1512221a3/" target="_blank" rel="noreferrer" id="lid"><FaLinkedinIn className="fab fa-linkedin-in" /></a>
                </div>
                <div className="col-sm col-12 m-sm-auto text-center" id="mail-responsive">
                    <a href="mailto:figueredo.kevin2000@gmail.com" id="mail" >figueredo.kevin2000@gmail.com</a>
                </div>
            </Row>
            <Row>
                <a href="https://wa.link/i2wfg9" target="_blank" rel="noreferrer" /* ref={wsp} */><FaWhatsapp className="fa-whatsapp" id="fa-whatsapp" /></a>
            </Row>
        </Container>
    )
}
