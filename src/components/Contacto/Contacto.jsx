import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contacto.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const Contacto = () =>{
    return(
        <>
            <Container className="mt-sm-4 contacto">
                <Row>
                    <div className="col mb-2">
                        <h1>Contacto</h1>
                    </div>
                </Row>     
                <Row>
                    <div className="col-sm col-12">
                        <p>Cualquier consulta o duda deje su mensaje en el formulario de contacto o bien un Whatsapp mediante el botón de la esquina inferior derecha.</p>
                    </div>
                    <div className="col-12 col-sm-6">
                        <form action="#" className="contact_form">
                            <input type="text" name="txtNombre" id="nombre" placeholder="Nombre" className="shadow form-control name"/><br/>
                            <input type="email" name="txtCorreo" id="email" placeholder="Email" className="shadow form-control email mt-1 mb-3"/>
                            <textarea name="txtMensaje" id="comentarios" cols="78" rows="10" placeholder="Comentarios..." className="shadow form-control msg"/>
                            <div className="mt-3">
                                <input type="submit" value="Enviar" id="enviar"/>
                            </div>
                        </form>
                    </div>
                </Row>               
            </Container>    
            <div>
                <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faWhatsapp} className="fa-whatsapp" id="fa-whatsapp"/></a>
            </div>  
            <script src="https://smtpjs.com/v3/smtp.js"></script>
        </>
    )
}
