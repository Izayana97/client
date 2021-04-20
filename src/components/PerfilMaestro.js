import React, { useState, useEffect } from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from 'react-icons'
import { Link } from 'react-router-dom'
import { SidebarData2 } from './SidebarData2'
import '../css/Navbar.css'
import axios from 'axios'
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardBody, MDBCardText, MDBCardTitle } from "mdbreact";
import { MDBDropdown, MDBDropdownItem, MDBDropdownToggle, MDBDropdownMenu } from "mdbreact";

const Navbar = () => {

  const [maestro, setMaestro] = useState(
    {
      id: '',
      descripcion: '',
      password: '',
      codigoSeguridad: '',
      nombreUsuario: '',
      createdAt: '',
      updatedAt: '',
      PersonaId: '',
      Persona: {
        id: '',
        nombreCompleto: '',
        numeroIdentidad: '',
        direccion: '',
        edad: '',
        numeroTelefono: '',
        createdAt: '',
        updatedAt: '',
        Correos: [{
          id: '',
          email: '',
          createdAt: '',
          updatedAt: '',
          PersonaId: ''
        }]
      }
    });

  const { nombreUsuario, Persona } = maestro;
  const { nombreCompleto, Correos } = Persona;
  


  useEffect(() => {
    getMaestro();
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.href = '/login-maestro';
  }
  const logoutt = () => {

    window.location.href = '/perfil-maestro';
  }

  const getMaestro = async () => {
    let { Id } = JSON.parse(localStorage.getItem('maestro'));

    const res = await axios.get('http://localhost:4000/maestro/' + Id);
    const data = await res.data;

    setMaestro(data);
    console.log(data);
    console.log(maestro);
  }
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  if (JSON.parse(localStorage.getItem('maestro'))) {

    return (
      <>
        <IconContext.Provider value={{ color: '#fff' }}>
          <div className="navbar">
            <Link to="#" className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            <Link >
            </Link>
            <div className="margen"></div>
            <MDBDropdown>
              <MDBDropdownToggle caret color="white" className="color">
                {nombreUsuario}
              </MDBDropdownToggle>
              <MDBDropdownMenu basic>
                <MDBDropdownItem>Editar Perfil</MDBDropdownItem>
                <MDBDropdownItem divider />
                <MDBDropdownItem><li onClick={logout}>Cerrar Sesion</li></MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>

          </div>
          <div>
          </div>
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                <img src="../logo.jpg" className="rounded mx-auto d-block" alt="aligment" className="sie" />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol>
                <MDBJumbotron>
                  <MDBCardBody>
                    <h2 className="h2"> Maestro: {nombreCompleto} {Correos.email}</h2>
                    <p className="blue-text my-4 font-weight-bold">
                      Somos los mejores educadores en Lenguas Extranjeras</p>
                    <MDBCardText>
                      Te damos las gracias por ser parte de la Familia AICA,
                      esperamos que tengas la mejor experiencia formando nuevos estudiantes y recuerda
                      "Enseñar es dejar una huella en la vida de una persona".
              </MDBCardText>
                    <hr className="my-4" />
                    <div className="pt-2">
                      <MDBBtn
                        color="primary"
                        className="waves-effect"
                      >
                        PERFIL <MDBIcon far icon="gem" />
                      </MDBBtn>
                      <MDBBtn
                        outline
                        color="primary" href="/curso-maestro"
                      >
                        CURSOS <MDBIcon icon="download" />
                      </MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBJumbotron>
              </MDBCol>
            </MDBRow>

          </MDBContainer>
          <div >

          </div>

          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className='menu-bars'>
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData2.map((item, index) => {
                return (
                  <li Key={index} className={item.cName} >
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </IconContext.Provider>

      </>

    );
  } else {
    window.location.href = '/login-maestro'
  }

}

export default Navbar;
