import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contacto.css"
import React, { useRef } from 'react';
import emailjs from "emailjs-com"

export const Contacto = () =>{
    const form = useRef();

    function sendEmail(e){
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_2nq5sgn', e.target, 'mv7GgMROqQAEVm9eV')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
    return(
        <>
            <Container className="mt-4 contacto">
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
                        <form onSubmit={sendEmail} ref={form} method="POST" action="">
                            <input type="text" name="name" id="nombre" placeholder="Nombre" className="shadow form-control"/><br/>
                            <input type="email" name="email" id="email" placeholder="Email" className="shadow form-control  mt-1 mb-3"/>
                            <textarea name="message" id="comentarios" cols="78" rows="10" placeholder="Comentarios..." className=" shadow form-control"/>
                            <div className="mt-3">
                                <input type="submit" value="Enviar" id="enviar"/>
                            </div>
                        </form>
                    </div>
                </Row>               
            </Container>     
        </>
    )
}
