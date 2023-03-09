import { Container, Row } from "react-bootstrap";
import React from "react";
import "./SobreMiEstudios.css";
import { EstOTrab1 } from "./EstudiosExperienciaD";

interface Props{
    EstOTrab:Array<EstOTrab1>
}

export const EstudiosExperiencia = (prop:Props) => {
    return (
        <Container id="EstudiosExperiencia">
            <Row className="mb-5">
                {prop?.EstOTrab.map(estudios => {
                    return (
                        <div className="col-sm-6 col-12">
                            <div className="card shadow p-4 mb-5">
                                <Row>
                                    <div className="col-sm-3 col-3">
                                        <img src={estudios.icon} alt={estudios.empresa} className="imgFluida" id="imgFluida" />
                                    </div>
                                    <div className="col">
                                        <h3>{estudios.nombre}</h3>
                                        <h3>{estudios.empresa}</h3>
                                        <h4>{estudios.fecha}</h4>
                                        <div>
                                            <ul>
                                                {estudios.trabajos && estudios.trabajos.map(trabajo => {
                                                    return (
                                                        <li><span className="trabajos">{trabajo}</span></li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </Row>
                                <div className="col-sm-12 col-12">
                                    <a className="verEmpresa" target="_blank" id="verEmpresa" href={estudios.link} rel="noreferrer">VER EMPRESA</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Row>
        </Container>)
}


