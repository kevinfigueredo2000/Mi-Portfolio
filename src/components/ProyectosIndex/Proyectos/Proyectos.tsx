import React from "react";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Proyectos.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import { useState } from "react";
import { ProjectsJsnD } from "./ProyectosD"

interface Props {
    Projects: Array<ProjectsJsnD>
}

export const Proyectos = (prop: Props) => {
    const [itemCarouselNumber, setItemCarouselNumber] = useState<number>(3)
    const prueba = prop?.Projects.length

    function prueba1() {
        if (Number((prueba / 3).toFixed(2).slice(-2, -1)) === 3) {
            return setItemCarouselNumber((prueba + 2))
        } else if ((Number((prueba / 3).toFixed(2).slice(-2, -1)) === 6)) {
            return setItemCarouselNumber((prueba + 1));
        } else {
            return setItemCarouselNumber(prueba)
        }
    }
    itemCarouselNumber <= 0  && prueba1()

    const handleSelect = (prop: boolean) => { //
        if (prop === false) {
            setItemCarouselNumber(itemCarouselNumber + 3);
        }
        if (prop === true) {

            return setItemCarouselNumber(itemCarouselNumber - 3)
        }
    };

    function retProyectsSlided() {
        return (prop.Projects && prop.Projects.slice(itemCarouselNumber - 3, itemCarouselNumber).map(projects => {
            return (
                <div className="col-sm-4">
                    <div className="card shadow mb-5">
                        <div className="mx-3 my-3">
                            <Row className="mb-3 mx-2">
                                <a href={projects.link} target="_blank" rel="noreferrer"><img src={projects.icon} className="imgFluida shadow" alt={projects.name} /></a>
                            </Row>
                            <Row className="sv">
                                <h2 className="my-2 text-center nombres-pr">{projects.name}</h2>
                            </Row>
                            <Row className="mx-1 my-3 desc">
                                <p style={{ height: "5rem", overflow: "auto" }}>{projects.description}</p>
                            </Row>
                            <Container style={{ position: "relative", top: "1rem" }}>
                                <Row>
                                    <div className="col-sm col">
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
        }))
    }

    if (window.screen.width <= 800) {
        return (
            <Row>
                {
                    prop.Projects && prop.Projects.map(projects => {
                        return (
                            <article className="col-sm-4 mt-3" style={{ transition: "1s all ease", height: "auto", minHeight: "unset" }}>
                                <div className="card shadow">
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
                                            <Row className="mb-5">
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
                            </article>)
                    })}
            </Row>
        )
    } else {
        return (
            <Row>
                <div className="col">
                    <AiOutlineLeft onClick={() => { handleSelect(true); }} id="AiOutlineLeft" />
                </div>
                <div className="col-10" >
                    <Row>
                        {retProyectsSlided()}
                    </Row>
                </div>
                <div className="col">
                    <AiOutlineRight onClick={() => { handleSelect(false); itemCarouselNumber >= (prop.Projects?.length) && setItemCarouselNumber(3) }} id="AiOutlineRight" />
                </div>
            </Row>

        )
    }
}