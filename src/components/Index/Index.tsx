import { Container, Row } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Index.css";
import { FaGraduationCap, FaSuitcase, FaUser, FaGithub, FaLinkedinIn } from "react-icons/fa"
import { BsStack } from "react-icons/bs"
import { ProyectosIndex } from "../ProyectosIndex/ProyectosIndex";
import { Contacto } from "../Contacto/Contacto";
import SMEstudios from "../SMEstudios.json";
import ExperienciaLab from "../ExperienciaLab.json";
import { InfoPersonal } from "../InfoPersonal/InfoPersonal";
import IDYH from "../IdiomasYHobbies.json";
import { StackTecComponent } from "../StackTec/StackTec";
import { EstudiosExperiencia } from "../EstudiosExperiencia/EstudiosExperiencia";


export const Index = () => (
    <Container className="sobre-mi" id="Sobre-mi">
        <Row className="mt-xxl-5">
            <div className="col-sm-7 mt-sm-5">
                <p className="mb-3" id="Hola">Hola, mi nombre es</p>
                <h1 id="hsob">Kevin Figueredo</h1>
                <p className="my-3">Un chico de 23 años, desarrollador Web Front end. Me apasionan los desafios, ya que me permiten desarrollar mis habilidades y competencias.</p>
                <Row>
                    <a className="col-sm-1 col-2" href="https://github.com/kevinfigueredo2000" target="_blank" rel="noreferrer"><FaGithub className="fa-github" /></a>
                    <a className="col-sm-1 col-3" href="https://www.linkedin.com/in/kevin-figueredo-1512221a3/" target="_blank" rel="noreferrer"><FaLinkedinIn className="fa-linkedin-in" /></a>
                </Row>
            </div>
            <div className="col-12 mt-5 mt-sm-0 mb-4 col-sm-5 text-center">
                <img className="img-fluid avatar shadow" src="images/fotoKev.jpg" alt="Kevin Figueredo" />
            </div>
        </Row>
        <hr />
        <ProyectosIndex/>
        <hr className="mt-5"/>
        <Container id="Experiencia-laboral">
            <Row className="ml-4 m-auto my-4">
                <div className="col-sm-1 col-4 mb-2">
                    <FaGraduationCap className="fa-graduation-cap" />
                </div>
                <div className="col-sm col-4 mb-2 my-auto">
                    <h2>Experiencia laboral</h2>
                </div>
            </Row>
            <EstudiosExperiencia EstOTrab={ExperienciaLab} />
        </Container>
        <hr />
        <Container id="Estudios">
            <Row className="ml-4 m-auto my-4">
                <div className="col-sm-1 col-4 mb-2">
                    <FaSuitcase className="fa-graduation-cap" />
                </div>
                <div className="col-sm col-4 mb-2 my-auto">
                    <h2>Estudios</h2>
                </div>
            </Row>
            <EstudiosExperiencia EstOTrab={SMEstudios} />
        </Container>
        <hr />

        <Container id="tecs" className="my-5">
            <Row className="my-5">
                <div className="col-sm-1 col-4 mb-2">
                    <BsStack className="fa-graduation-cap" />
                </div>
                <div className="col-sm col-4 mb-2 my-auto">
                    <h2>Stack tecnologico</h2>
                </div>
            </Row>
            <StackTecComponent />
        </Container>
        <hr />
        <Container>
            <Row className="ml-4 m-auto">
                <div className="col-sm-1 col-4 mb-2">
                    <FaUser className="fa-graduation-cap" />
                </div>
                <div className="col-sm col-4 mb-2 my-auto">
                    <h2>Información personal</h2>
                </div>
            </Row>
            <InfoPersonal IDYH={IDYH} />
        </Container>
        <hr />
        <Contacto />
    </Container>
)
