import { Container, Row } from "react-bootstrap";
import React from "react";
import ProjectsJsn from "../Proyectos.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaConnectdevelop } from "react-icons/fa"
import "./ProyectosPage.css";
import { Proyectos } from "./Proyectos/Proyectos";


export const ProyectosIndex = () => (
    <Container className="proyectos" id="Proyectos">
        <Row className="ml-4 m-auto">
                <div className="col-sm-1 col-4 mb-2">
                    <FaConnectdevelop className="fa-graduation-cap" />
                </div>
                <div className="col-sm col-4 mb-2 my-auto">
                    <h2>Proyectos</h2>
                </div>
            </Row>
        <Row>
            <div className="col-sm-6 mb-4">
                <p id="p1">Estos son mis trabajos hasta el día de hoy.</p>
            </div>
        </Row>
        <section className="inner">
            <Proyectos Projects={ProjectsJsn} />
        </section>
    </Container>
)
