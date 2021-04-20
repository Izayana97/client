import React,{  useState } from "react";
import '../css/navigation.css'
import { MDBBtn, MDBIcon } from 'mdbreact'



function Navigation() {
const [showLinks, setShowLinks] = useState(false);   
  
    return (
      <nav className="navbar2">
        <div className="leftside">
          <h3 className="logo">AICA</h3>
        </div>
        <div className="rightside">
          <div className="links2" id={showLinks ? "hidden" : ""}>
          <a href="/empleado">Empleado</a>
          <a href="/login-maestro">Maestro</a>
          <a href="/login">Estudiante</a>
          <a href="/cursos">Cursos</a>
          <a href="/eventos">Eventos</a>
          <a href="/sign-up">Registrarse</a>
          <a href="#contact">Contactanos</a>
          </div>
          <MDBBtn onClick={() => setShowLinks(!showLinks)} className="button2"><MDBIcon icon="bars" className="icono"></MDBIcon></MDBBtn>
        </div>
      </nav>
    )
    
  }
export default Navigation;
