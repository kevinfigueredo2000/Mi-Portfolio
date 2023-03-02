import { Container, Row } from "react-bootstrap";
import React from "react";
import ProjectsJsn from "../Proyectos.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProyectosPage.css";
import { Proyectos } from "./Proyectos/Proyectos.tsx";


export const ProyectosIndex = () => (
    <Container className="proyectos" id="Proyectos">
        <Row>
            <div className="col mb-3 mt-4">
                <h2>Mis proyectos</h2>
            </div>
        </Row>
        <Row>
            <div className="col-sm-6 mb-4">
                <p id="p1">Estos son los proyectos que aprendí y estoy capacitado a realizar.</p>
            </div>
        </Row>
        <div className="inner">
            <Proyectos Projects={ProjectsJsn} />
        </div>
    </Container>
)
