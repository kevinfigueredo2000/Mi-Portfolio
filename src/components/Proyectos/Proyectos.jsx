import ProjectsJsn from "../Proyectos.json";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Proyectos.css";

export const Proyectos = () =>{
    return(
        <Row>{
            ProjectsJsn && ProjectsJsn.map( projects =>{
                return(<div className="col-sm-4">
                    <div className="card shadow mb-5">
                        <div className="mx-3 my-3">
                            <Row className="mb-3 mx-2">
                                <a href={projects.link} target="_blank" rel="noreferrer"><img src={projects.icon} className="imgFluida shadow" alt={projects.name}/></a>
                            </Row>
                            <Row className="sv">
                                <h2 className="my-2 text-center nombres-pr">{projects.name}</h2>
                            </Row>
                            <Row className="mx-1 my-3 desc">
                                <p>{projects.description}</p>
                            </Row>
                            <Container>
                                <Row className="mb-5" id="Row-VOnline-CFuente">
                                    <div className="col-sm-8 col">
                                        <a href={projects.link} target="_blank" type="button" id="btn_ver" rel="noreferrer">VER ONLINE</a>
                                    </div>
                                    <div className="col-sm-4 col">
                                        <a href={projects.codigo} target="_blank" className="cf" rel="noreferrer">Código fuente</a>
                                    </div>                                                            
                                </Row>
                            </Container>
                        </div>
                    </div>
                </div>)
                })}
        </Row>
    )
}