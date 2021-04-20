import React from 'react'
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler,
    MDBCollapse, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import '../css/cursoEstudiante.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../css/Navbar.css';
import swal from 'sweetalert';

const Matricular = () => {

    const { id } = useParams();

    const [idiomas, setIdiomas] = useState({
        id: '',
        nombre: '',
        descripcion: '',
        precio: '',
        totalEstudiante: '',
        createdAt: '',
        updatedAt: ''
    })

    const { nombre, descripcion, precio, totalEstudiante } = idiomas;

    useEffect(() => {
        getIdioma();
    }, [])

    /**const getIdioma = async () => {
         let { Id } = JSON.parse(localStorage.getItem('user'));
  
         const res = await axios.get('http://localhost:4000/estudiante/idioma/' + id);
         const data = await res.data;
  
         setEstudiante(data);
         console.log(estudiante);
  
     }*/

     const matricular = async () =>{

        let { Id } = JSON.parse(localStorage.getItem('user'));

        let data = {
            EstudianteId: Id,
            IdiomaId: id
        }
        //console.log(data)
        
        const resp = await axios.post('http://localhost:4000/estudianteIdioma', data);
        const body = await resp.data;

        console.log(body)
        swal({
            icon: 'success',
            text: 'Compra exitosa',
            button: "Aceptar"

        })

        
     }


    const getIdioma = async () => {
        //let { Id } = JSON.parse(localStorage.getItem('idioma'));

        const res = await axios.get('http://localhost:4000/idioma/' + id);
        const data = await res.data;

        setIdiomas(data);
        console.log(idiomas);

    }

    return (
        <div>
            <MDBNavbar color="black" dark expand="md">
                <MDBNavbarBrand>
                    <strong className="texto-curso">AICA</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler />
                <MDBCollapse id="navbarCollapse3" navbar>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <MDBDropdown className="texto-curso2">
                                <MDBDropdownToggle nav caret>
                                    <div className="d-none d-md-inline" className="texto-curso2">Menu</div>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu className="dropdown-default">
                                    <MDBDropdownItem href="/login">Login</MDBDropdownItem>
                                    <MDBDropdownItem href="/perfil-estudiante">Volver a Perfil</MDBDropdownItem>
                                    <MDBDropdownItem href="/Eventos">Eventos</MDBDropdownItem>
                                    <MDBDropdownItem href="/">Salir</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>

                        <MDBNavItem>
                            <MDBNavLink className="waves-effect waves-light" to="https://www.facebook.com/academiaidiomasca">
                                <MDBIcon fab icon="facebook" className="icono-curso" />
                            </MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
            <div className="card" >
                <img className="card-img-top" className="imagen6" src="https://www.salminter.com/blog/wp-content/uploads/2019/07/249.jpg" alt="" />
                <div className="card-body">
                    <h2 className="card-title">Idioma {nombre}</h2>
                    <h3 className="card-text" >Nuestros maestros son nativos en su idioma por lo que facilita tu aprendizaje</h3>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Precio: {precio} Lempiras</li>
                    <li className="list-group-item">Cupos disponibles: {totalEstudiante}</li>
                    <li className="list-group-item"></li>
                </ul>
                <div className="card-body">
                    <button onClick={matricular} className="card-link" className="btn btn-info btn-lg">Comprar</button>
                    <Link to="/cursos" class="card-link">Regresar</Link>
                    
                </div>
            </div>
        </div>
    );

}
export default Matricular;