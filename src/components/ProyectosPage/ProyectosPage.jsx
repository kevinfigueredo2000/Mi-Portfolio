import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProyectosPage.css";
import { Proyectos } from "../Proyectos/Proyectos";

export const ProyectosPage = () =>{
    return(
        <>
            <Container className="proyectos">
                <Row>
                    <div className="col mb-3 mt-4">
                        <h1>Mis proyectos</h1>
                    </div>
                </Row>
                <Row>
                    <div className="col-sm-6 mb-4">
                        <p id="p1">Estos son los proyectos que aprendí y estoy capacitado a realizar.</p>
                    </div>
                </Row>      
                <div className="inner">
                    <Proyectos/>
                </div>    
            </Container>
        </>
    )
}