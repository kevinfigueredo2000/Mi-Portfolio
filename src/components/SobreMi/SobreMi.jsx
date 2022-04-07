import { Container,  Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SobreMi.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faCommentAlt, faStar } from "@fortawesome/free-solid-svg-icons";
import Records from "../Records.json";

export const SobreMi = () =>{
    return(
        <Container className="sobre-mi">
            <Row className="my-4">
                <div className="col-sm-6">
                    <h1 id="hsob">Sobre Mí</h1>
                    <p>Mi nombre es Kevin Figueredo y soy Desarrollador Web Front end. Soy un chico de 22 que busca poder costearse sus estudios, para así seguir formandome, seguir aprendiendo y lograr mejorar mis habilidades como desarrollador.</p>
                    <p>Abajo está mi stack tecnológico, como también mis estudios, idiomas que manejo y mis hobbies. </p>
                    <Row className="my-5">
                        <a className="col-sm-1 col-2" href="https://github.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="fab fa-github"/></a>
                        <a className="col-sm-4 col-3" href="https://www.linkedin.com/in/kevin-figueredo-1512221a3/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} className="fab fa-linkedin-in"/></a>
                        <a className="col-sm-4 col-6 nav-link cv2 text-center " href="Kevincv.pdf" target="_blank" rel="noreferrer">Descargar CV</a>
                    </Row>
                </div>
                <div className="col-12 mt-5 mb-4 mt-sm-0 col-sm-6 text-center">
                    <img className="img-fluid avatar shadow" src="images/fotoKev.jpg" alt="Kevin Figueredo"/>
                </div>
            </Row>
            <hr/>
            <Container id="tecs" className="my-5">
                <Row className="my-5">
                    <div className="col">
                        <h2 id="htec">Stack Tecnológico</h2>
                    </div>
                </Row>
                <Row className="mb-3 inner">
                    {
                        Records && Records.map( record =>{
                            return(
                                <div className="col-4 col-sm-2 mb-3">
                                    <div className="card shadow">
                                        <img src={record.icon} className="imgflud cards" alt={record.caption}/> <br/>
                                        <h3 className="text-center tec">{record.caption}</h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                   
                </Row>        
            </Container>
            <hr/>
            <Container className="idyh">
                <div className="row my-5">
                    <div className="col-sm-6 col-12 mb-3 mt-3">
                        <div className="card shadow">
                            <div className="row py-4 px-3"> 
                                <div id="cardd" className="col-sm-3 col-5">
                                    <FontAwesomeIcon icon={faCommentAlt} className="fa-comment-alt text-center my-4"/> 
                                </div>
                                <div className="col">
                                    <h3>IDIOMAS</h3>
                                    <h4>INGLES-Intermedio b2</h4>
                                    <h4>ESPAÑOL-Nativo</h4>
                                </div>
                            </div>  
                        </div>
                    </div>  
                    <div className="col-sm-6 col-12 mb-3 mt-3">
                        <div className="card shadow">
                            <div className="row py-4 px-3"> 
                                <div id="cardd" className="col-sm-3 col-5">
                                    <FontAwesomeIcon icon={faStar} className="fas fa-star text-center my-4"/>
                                </div>
                                <div className="col">
                                    <h3>HOBBIES</h3>
                                    <h4>Musculación</h4>
                                    <h4>Videojuegos</h4>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </Container>
            <hr/>
            <Container>
                <section id="est">
                    <Row className="mb-4 ml-4">
                        <div className="col-sm-1 col-4 mt-4">
                            <i className="fas fa-graduation-cap"></i>
                        </div>
                        <div>
                            <h2 className="mt-5">Estudios</h2>
                        </div>
                    </Row>
                    <Row className="mb-5"> 
                        <div className="col-sm-6 col-12">
                            <div className="card shadow p-4 mb-5">
                                <Row>
                                    <div className="col-sm-3 col-3">
                                        <img src="images/depc.png" alt=""/>
                                    </div>
                                    <div className="col">
                                        <h3>Desarrollador Web Fullstack</h3>
                                        <h3>DePC Suite</h3>
                                        <h4>Agosto 2020-Enero 2021</h4>
                                        <div>
                                            <ul>
                                                <li><span className="spann">ABM CLIENTES.</span></li>
                                                <li><span className="spann">SISTEMA DE GESTIÓN DE VENTAS.</span></li>
                                                <li><span className="spann">PROYECTO INTEGRADOR.</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Row>
                                <Row>
                                    <div>
                                        <a className="vremprojo" target="_blank" href="https://depcsuite.com/?v=d72a48a8ebd2" rel="noreferrer">VER EMPRESA</a>
                                    </div>
                                </Row>
                            </div>
                        </div>
                        <div className="col-sm-6 col-12">
                            <div className="card shadow p-4" id="coderCard">
                                <Row>
                                    <div className="col-sm-3 col-3">
                                        <img src="images/coder.png" alt="" className="img-fluid" id="coder"/>
                                    </div>
                                    <div className="col mb-5">
                                        <h3>Curso React Js</h3>
                                        <h3>Coder House</h3>
                                        <h4>Diciembre 2021-Febrero 2022</h4>
                                        <div>
                                            <ul>
                                                <li><span className="spann">PROYECTO INTEGRADOR.</span></li>
                                            </ul>
                                        </div>
                                        
                                    </div>
                                </Row>
                                <Row>
                                    <div>
                                        <a className="vremprojo" target="_blank" href="https://www.coderhouse.com/" rel="noreferrer">VER EMPRESA</a>
                                    </div>
                                </Row>
                            </div>
                        </div>
                    </Row>
                </section>
            </Container>
            <div>
                <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faWhatsapp} className="fa-whatsapp"/></a>
            </div>  
        </Container>
    )
}