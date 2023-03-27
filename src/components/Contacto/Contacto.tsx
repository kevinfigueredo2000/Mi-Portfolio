import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contacto.css"
import React, { useState } from 'react';
import emailjs from "emailjs-com"
import { MdContactPhone } from "react-icons/md"

export const Contacto: React.FC = () => {
    const [alertaMensajeEnviado, setAlertaMensajeEnviado] = useState<boolean>(true);
    const [alertaMensajeError, setAlertaMensajeError] = useState<boolean>(true);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_2nq5sgn', e.currentTarget, 'mv7GgMROqQAEVm9eV')
            .then((result) => {
                console.log(result.text);
                setAlertaMensajeEnviado(false);
                setTimeout(() => {
                    setAlertaMensajeEnviado(true);
                }, 3500)

            }, (error) => {
                console.log(error.text);
                setAlertaMensajeError(false);
                setTimeout(() => {
                    setAlertaMensajeError(true);
                }, 3500)
            });
        e.currentTarget.reset();
    };
    return (
        <Container className="mt-4 contacto" id="Contacto">
            <Row className="ml-4 m-auto mb-3">
                <div className="col-sm-1 col-4 mb-2">
                    <MdContactPhone className="fa-graduation-cap" />
                </div>
                <div className="col-sm col-4 mb-2 my-auto">
                    <h2>Contacto</h2>
                </div>
            </Row>
            <Row>
                <div className="col-sm col-12">
                    <p>Cualquier consulta o duda deje su mensaje en el formulario de contacto o bien un Whatsapp mediante el botón de la esquina inferior derecha.</p>
                </div>
                <div className="col-12 col-sm-6">
                    <form onSubmit={sendEmail} /* ref={form} *//*  method="POST" action="" */>
                        <input type="text" name="user_name" id="name" placeholder="Nombre" className="shadow form-control" required /><br />
                        <input type="email" name="user_email" id="email" placeholder="Email" className="shadow form-control  mt-1 mb-3" required />
                        <textarea name="message" id="message" cols={78} rows={10} placeholder="Comentarios..." className=" shadow form-control" required />
                        <div id="alertaMensaje">
                            <div className="alert alert-success" hidden={alertaMensajeEnviado} role="alert">
                                ¡Se ha enviado el mensaje correctamente!
                            </div>
                            <div className="alert alert-danger" hidden={alertaMensajeError} role="alert">
                                ¡No se ha podido enviar el mail!
                            </div>
                        </div>
                        <div className="mt-3 col-12 col-sm-12">
                            <input type="submit" value="Enviar" id="enviar" />
                        </div>
                    </form>
                </div>
            </Row>
        </Container>
    )
}
