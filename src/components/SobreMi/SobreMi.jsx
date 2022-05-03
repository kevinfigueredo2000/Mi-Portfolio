import { Container,  Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import IDYH from "../IdiomasYHobbies.json";
import "./SobreMi.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGraduationCap, faUser } from "@fortawesome/free-solid-svg-icons";
import StackTec from "../StackTec.json";
import { SobreMiEstudios } from "../SobreMiEstudios/SobreMiEstudios";
import { ProyectosPage } from "../ProyectosPage/ProyectosPage";
import { Contacto } from "../Contacto/Contacto";

export const SobreMi = () =>{
    return(
        <Container className="sobre-mi" id="Sobre-mi">
            <Row >
                <div className="col-sm-6">
                    <p className="my-3" id="Hola">Hola, mi nombre es</p>
                    <h1 id="hsob">Kevin Figueredo</h1>
                    <p className="my-3">Soy Desarrollador Web Front end, un chico de 22 que busca poder costearse sus estudios, para así seguir formandome, seguir aprendiendo y lograr mejorar mis habilidades como desarrollador.</p>
                    <Row className="git-li-cv">
                        <a className="col-sm-1 col-2" href="https://github.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="fab fa-github"/></a>
                        <a className="col-sm-4 col-3" href="https://www.linkedin.com/in/kevin-figueredo-1512221a3/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} className="fab fa-linkedin-in"/></a>
                        <a className="col-sm-4 col-6 nav-link cv2 text-center " href="kfcv.pdf" download="Kfcv.pdf" target="_blank" rel="noreferrer" >Descargar CV</a>
                    </Row>
                </div>
                <div className="col-12 mt-5 mb-4 mt-sm-0 col-sm-6 text-center">
                    <img className="img-fluid avatar shadow" src="images/fotoKev.jpg" alt="Kevin Figueredo"/>
                </div>
            </Row>

            <hr/>
            <ProyectosPage/>
            <hr/>

            <Container id="tecs" className="my-5">
                <Row className="my-5">
                    <div className="col">
                        <h2 id="htec">Stack Tecnológico</h2>
                    </div>
                </Row>
                <Row className="mb-3 inner">
                    {
                        StackTec && StackTec.map( stack =>{
                            return(
                                <div className="col-6 col-sm-2 mb-3">
                                    <div className="card shadow">
                                        <img src={stack.icon} className="imgscards" key={stack.caption} alt={stack.caption}/> <br/>
                                        <h3 className="text-center tec">{stack.caption}</h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Row>        
            </Container>
            <hr/>
            <Container>
                <Row className="my-5">
                    {IDYH && IDYH.map( item=>{
                        return(
                        <div className="col-sm-6 col-12 my-3">
                            <div className="card shadow">
                                <div className="row py-4 px-3"> 
                                    <div id="cardd" className="col-sm-3 col-5">
                                        <FontAwesomeIcon icon={faUser} className="fa-comment-alt text-center my-4"/> 
                                    </div>
                                    <div className="col">
                                        <h3>{item.nombre}</h3>
                                        <h4>{item.i1}</h4>
                                        <h4>{item.i2}</h4>
                                    </div>
                                </div>  
                            </div>
                        </div>  
                    )})}
                    {/*<FontAwesomeIcon icon={faStar} className="fas fa-star text-center my-4"/>*/}
                </Row>
            </Container>
            <hr/>
            <Container id="Estudios">
                <Row className="ml-4 m-auto my-4">
                    <div className="col-sm-1 col-4 mb-2">
                        <FontAwesomeIcon icon={faGraduationCap} className="fa-graduation-cap"/>
                    </div>
                    <div>
                        <h2>Estudios</h2>
                    </div>
                </Row>
                <SobreMiEstudios/>
            </Container>
            <hr/>
            <Contacto/>
        </Container>
    )
}