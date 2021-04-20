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

const CursosEstudiantes = () => {

    const [estudiante, setEstudiante] = useState([]);

    useEffect(() => {
        getIdioma();
    }, [])

    const getIdioma = async () => {
        let { Id } = JSON.parse(localStorage.getItem('user'));

        const res = await axios.get('http://localhost:4000/estudiante/idioma/' + Id);
        const data = await res.data;

        setEstudiante(data);
        console.log(estudiante);

    }
    return (
        <>
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
            <div>
                <from>
                    <section className="text-center my-5">
                        <h2 className="h1-responsive font-weight-bold my-5" color="">
                            Mis Cursos </h2>
                        <p className="black-text w-responsive mx-auto mb-5" color="blue">
                            Nuestra academia es lider en la enseñanza de idiomas </p>
                    </section>
                </from>
            </div>
            <div className="row">
                {
                    estudiante.map(dato => {
                        return (
                            <div key={dato.id} className="col-md-4">
                                <div className="card" >
                                    <img src="https://ep01.epimg.net/verne/imagenes/2019/10/02/articulo/1570030425_121054_1570187001_noticia_normal.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body" >
                                        <h2 className="card-title">{dato.Idioma.nombre}</h2>
                                        <p className="card-text">Nivel: {dato.Idioma.descripcion} </p>
                                        <p className="card-text">Duración: {dato.descripcion} </p>
                                        <Link to='#' className="btn btn-primary">Ver</Link>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default CursosEstudiantes;


