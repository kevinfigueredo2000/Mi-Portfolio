import SMEstudios from "../SMEstudios.json";
import { Container, Row } from "react-bootstrap";
import "./SobreMiEstudios.css";

export const SobreMiEstudios = () =>{        
        return(
            <Container>
                <Row className="mb-5"> 
                    {SMEstudios.map( estudios =>{
                        return(
                            <div className="col-sm-6 col-12">
                                <div className="card shadow p-4 mb-5 ">
                                    <Row>
                                        <div className="col-sm-3 col-3">
                                            <img src={estudios.icon} alt={estudios.Empresa} className="imgFluida" id="imgFluida"/>
                                        </div>
                                        <div className="col">
                                            <h3>{estudios.name}</h3>
                                            <h3>{estudios.Empresa}</h3>
                                            <h4>{estudios.fecha}</h4>
                                            <div>
                                                <ul>
                                                    <li><span className="trabajos">{estudios.trabajos}</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Row>
                                    <div className="col-sm-12 col-12">
                                        <a className="verEmpresa" target="_blank" id="verEmpresa" href={estudios.link} rel="noreferrer">VER EMPRESA</a>
                                    </div>
                                </div>
                            </div>
                        )})}
                </Row>
            </Container>)}
            
            
