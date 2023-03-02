import React from "react";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Proyectos.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import { useState } from "react";
import { ProjectsJsnD } from "./ProyectosD"

interface Props{
    Projects:Array<ProjectsJsnD>
}

export const Proyectos = (prop: Props) => {
    const [itemCarouselNumber, setItemCarouselNumber] = useState<number>(3)
    // const ProjectsJsn = prop.Projects

    itemCarouselNumber === 0 && setItemCarouselNumber(Number(prop.Projects.length + 2));

    const handleSelect = (prop:boolean) => { //
        if (prop === false) {
            setItemCarouselNumber(itemCarouselNumber + 3);
        }
        if (prop === true) {
            setItemCarouselNumber(itemCarouselNumber - 3);
        }
    };
    return (
        <Row>
            <div className="col">
                <AiOutlineLeft onClick={() => handleSelect(true)} id="AiOutlineLeft" />
            </div>
            <div className="col-10" >
                <Row>
                    {
                        prop.Projects && prop.Projects.slice(itemCarouselNumber - 3, itemCarouselNumber).map(projects => {
                            return (
                                <div className="col-sm-4" style={{ transition: "1s all ease" }}>
                                    <div className="card shadow mb-5">
                                        <div className="mx-3 my-3">
                                            <Row className="mb-3 mx-2">
                                                <a href={projects.link} target="_blank" rel="noreferrer"><img src={projects.icon} className="imgFluida shadow" alt={projects.name} /></a>
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

                                                    {
                                                        projects.codigo &&
                                                        <div className="col-sm-4 col">
                                                            <a href={projects.codigo} target="_blank" className="cf" rel="noreferrer">Código fuente</a>
                                                        </div>
                                                    }
                                                </Row>
                                            </Container>
                                        </div>
                                    </div>
                                </div>)
                        })}
                </Row>
            </div>
            <div className="col">
                <AiOutlineRight onClick={() => { handleSelect(false); itemCarouselNumber >= (prop.Projects?.length + 2) && setItemCarouselNumber(3) }} id="AiOutlineRight" />
            </div>
        </Row>

    )
}