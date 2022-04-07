import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contacto.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const Contacto = () =>{
    var Email = {}
    const form = document.querySelector('.contact_form');
    function sendMsg(e){
        const name = document.querySelector('.name');
        const email = document.querySelector('.email');
        const msg = document.querySelector('.msg');

        e.preventDefault();
        const emlsnd = ()=>{
        Email.send({
            SecureToken : "412de410-0aa3-4836-98ef-7019bba9ff7b",
            To : 'figueredo.kevin2000@gmail.com',
            From : email.value,
            Subject : "Formulario de contacto",
            Body : msg.value
        }).then(
          message => alert(message)
        );
    }
    form.addEventListener('submit', sendMsg);
    }
    return(
        <>
            <Container className="mt-sm-4 contacto">
                <Row>
                    <div className="col mb-4">
                        <h1>Contacto</h1>
                    </div>
                </Row>     
                <Row>
                    <div className="col-sm col-12">
                        <p>Cualquier consulta o duda enviar un mensaje o bien un Whatsapp mediante el botón de la esquina inferior derecha.</p>
                    </div>
                    <div className="col-12 col-sm-6">
                        <form action="#" className="contact_form">
                            <input type="text" name="txtNombre" id="nombre" placeholder="Nombre" className="shadow form-control name"/><br/>
                            <input type="email" name="txtCorreo" id="email" placeholder="Email" className="shadow form-control email"/>
                            <textarea name="txtMensaje" id="comentarios" cols="78" rows="10" placeholder="Comentarios..." className="shadow form-control msg"/>
                            <div class="mr-0 text-right">
                                <input type="submit" value="Enviar" id="enviar"/>
                            </div>
                        </form>
                    </div>
                </Row>               
            </Container>    
            <div>
                <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faWhatsapp} className="fa-whatsapp"/></a>
            </div>  
            <script src="https://smtpjs.com/v3/smtp.js"></script>
        </>
    )
}
