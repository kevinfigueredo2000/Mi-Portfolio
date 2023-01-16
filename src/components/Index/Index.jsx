import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FaGraduationCap, FaSuitcase, FaUser } from "react-icons/fa"
import { CgStack } from "react-icons/cg"
import { EstudiosExperiencia } from "../EstudiosExperiencia/EstudiosExperiencia";
import { ProyectosIndex } from "../ProyectosIndex/ProyectosIndex";
import { Contacto } from "../Contacto/Contacto";
import SMEstudios from "../SMEstudios.json";
import ExperienciaLab from "../ExperienciaLab.json";
import { InfoPersonal } from "../InfoPersonal/InfoPersonal";
import IDYH from "../IdiomasYHobbies.json";
import { StackTecComponent } from "../StackTec/StackTec";


export const Index = () => {
    return (
        <Container className="sobre-mi" id="Sobre-mi">
            <Row >
                <div className="col-sm-6">
                    <p className="mb-3" id="Hola">Hola, mi nombre es</p>
                    <h1 id="hsob">Kevin Figueredo</h1>
                    <p className="my-3">Soy Desarrollador Web Front end, un chico de 22 que busca poder costearse sus estudios, para así seguir formandome, seguir aprendiendo y lograr mejorar mis habilidades como desarrollador.</p>
                    <Row className="git-li-cv">
                        <a className="col-sm-1 col-2" href="https://github.com/kevinfigueredo2000" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="fab fa-github" /></a>
                        <a className="col-sm-4 col-3" href="https://www.linkedin.com/in/kevin-figueredo-1512221a3/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} className="fab fa-linkedin-in" /></a>
                        <a className="col-sm-4 col-6 nav-link cv2 text-center " href="kfcv.pdf" download="Kfcv.pdf" target="_blank" rel="noreferrer" >Descargar CV</a>
                    </Row>
                </div>
                <div className="col-12 mt-5 mb-4 mt-sm-0 col-sm-6 text-center">
                    <img className="img-fluid avatar shadow" src="images/fotoKev.jpg" alt="Kevin Figueredo" />
                </div>
            </Row>

            <hr />
            <ProyectosIndex/>
            <hr />
            <Container id="Experiencia laboral">
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
                        <CgStack className="fa-graduation-cap" />
                    </div>
                    <div className="col-sm col-4 mb-2 my-auto">
                        <h2>Stack tecnologico</h2>
                    </div>
                </Row>
                <StackTecComponent/>
            </Container>
            <hr />
            <Container>
                <Row className="ml-4 m-auto">
                    <div className="col-sm-1 col-4 mb-2">
                        <FaUser className="fa-graduation-cap"/>
                    </div>
                    <div className="col-sm col-4 mb-2 my-auto">
                        <h2>Información personal</h2>
                    </div>
                </Row>
                <InfoPersonal IDYH={IDYH}/>
            </Container>
            <hr />
            <Contacto />
        </Container>
    )
}