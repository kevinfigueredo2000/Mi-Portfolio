import { Navbar } from "react-bootstrap"
import { Container } from "react-bootstrap"
import "./NavBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faDownload } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

export const NavBar = () =>{
    let ubicacionPrincipal = window.pageYOffset;
    window.onscroll = function(){
        let Desplazamiento_Actual = window.pageYOffset;
        if(ubicacionPrincipal >= Desplazamiento_Actual){
            document.getElementById('nav').classList = 'py-3 myStyle';
            document.getElementById('nav').style.top = '0';
        }else{
            document.getElementById('nav').classList = 'py-3 myStyle';
            document.getElementById('nav').style.top = '-100px';
        }
        ubicacionPrincipal = Desplazamiento_Actual;
    }
    function clickearCerrar(){
        document.getElementById("nav-ul").classList.toggle("show")
        document.getElementById("nav-ul").classList.remove("d-none");
    }
    return(
        <div className="bg-black py-3" id="nav">
            <Container>
                    <Navbar>
                        <button className="hamburger" id="hamburger" onClick={()=>{
                                document.getElementById("nav-ul").classList.toggle("show")
                                document.getElementById("nav-ul").classList.remove("d-none");
                            }}>
                            <FontAwesomeIcon className="fas fa-bars" icon={faBars}/>
                        </button>
                        <ul className="nav nav-ul" id="nav-ul">
                            <li className="nav-item ">
                                <a href="#Sobre-mi" className="nav-link item" onClick={clickearCerrar}>Inicio</a>
                            </li>
                            <li className="nav-item ">
                                <a href="#Proyectos" className="nav-link item" onClick={clickearCerrar}>Proyectos</a>
                            </li>
                            <li className="nav-item ">
                                <a href="#Estudios" className="nav-link item" onClick={clickearCerrar}>Estudios</a>
                            </li>
                            <li className="nav-item ">
                                <a href="#Contacto" className="nav-link item" onClick={clickearCerrar}>Contacto</a>
                            </li>
                        </ul>
                        <div id="cvv">
                            <a href="kfcv.pdf" id="cv" download="kfcv.pdf">Descarg?? mi cv <FontAwesomeIcon icon={faDownload}/></a>
                        </div>
                    </Navbar>
            </Container>
        </div>
    )
}