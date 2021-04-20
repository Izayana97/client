import React, { useState, useEffect } from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from 'react-icons'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import '../css/Navbar.css';
import {
  MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardBody, MDBCardTitle, MDBCardText,
  MDBDropdown, MDBDropdownItem, MDBDropdownToggle, MDBDropdownMenu
} from "mdbreact";
import axios from 'axios'
import academia from '../img/academia.png';

const PerfilPrueba = () => {

  const [user, setUser] = useState(
    {
      id: '',
      fechaRegistro: '',
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
        Correos: []
      }
    });
 
  const { nombreUsuario, Persona } = user;
  //const { nombreCompleto } = Persona;

  useEffect(() => {
    getUser();
  }, []);


  const logout = () => {
    localStorage.clear();
    window.location.href = '/login';
  }
  const logoutt = () => {

    window.location.href = '/perfil-estudiante';
  }


  const getUser = async () => {
    let { Id } = JSON.parse(localStorage.getItem('user'));

    const res = await axios.get('http://localhost:4000/estudiante/' + Id);
    const data = await res.data;

    setUser(data);
    console.log(data);
    console.log(user);
  }

  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  if (JSON.parse(localStorage.getItem('user'))) {

    return (
      <>
        <IconContext.Provider value={{ color: '#fff' }}>
          <div className="navbar">
            <Link to="#" className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            <div className="margen"></div>
            <MDBDropdown>
              <MDBDropdownToggle caret color="white" className="color">
                {nombreUsuario}
              </MDBDropdownToggle>
              <MDBDropdownMenu basic>
                <MDBDropdownItem><li onClick={logoutt}>Editar Perfil</li></MDBDropdownItem>
                <MDBDropdownItem divider />
                <MDBDropdownItem><li onClick={logout}>Cerrar Sesion</li></MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </div>
          <MDBContainer className="mt-5 text-center" className="container3">
            <MDBRow>
              <MDBCol>
                <MDBJumbotron className="p-0">
                  <h2>Bienvenido {Persona.nombreCompleto}</h2>
                  <div >
                    <img src={academia} className="img-fluid" className="imagen3"></img>
                  </div>
                  <MDBCardBody>
                    <MDBCardTitle className="h3"> INICIO ESTUDIANTE </MDBCardTitle>
                    <MDBCardText className="h3">
                      Querido Estudiante es un placer que seas parte de Nuestra Familia, aqui encontraras todo lo necesario para recibir tus clases. 
                    </MDBCardText>
                    <MDBBtn href= "/cursos" className="cin" className="btn3"> 
                     Matricula </MDBBtn>
                  </MDBCardBody>
                </MDBJumbotron>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div >
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className='menu-bars'>
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName} >
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          </div>
        </IconContext.Provider>
      </>
    )
  }else{
   window.location.href = '/';
  }
}

export default PerfilPrueba;