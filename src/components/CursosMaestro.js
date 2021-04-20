import '../css/cursoMaestro.css'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {MDBNavbar, MDBNavbarBrand, MDBNavItem, MDBDropdown, MDBDropdownToggle, 
        MDBDropdownMenu, MDBDropdownItem, MDBIcon} from "mdbreact";


const CursosMaestro = () => {
    //const idMaestro = JSON.parse(localStorage.getItem('maestro'))


    const [idiomas, setIdiomas] = useState([]);

    useEffect(() => {
        getIdiomas();
    }, [])

    const getIdiomas = async () => {
        let { Id } = JSON.parse(localStorage.getItem('maestro'));

        const res = await axios.get('http://localhost:4000/maestro/idioma/' + Id);
        const data = await res.data;

        setIdiomas(data);
        console.log(data);
        console.log(idiomas);
    }

    return (
        <>

            <MDBNavbar color="blue-dark" dark expand="md">
                <MDBNavbarBrand>
                    <strong className="red-text" className="text-card">Mis Cursos</strong>
                </MDBNavbarBrand>
                <MDBNavItem className="card-idioma2">
                    <MDBDropdown>
                        <MDBDropdownToggle nav caret >
                            <div className="d-none d-md-inline"><MDBIcon icon="home"  className="menu2"/></div>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu className="dropdown-default">
                            <MDBDropdownItem href="/login">Login </MDBDropdownItem>
                            <MDBDropdownItem href="/perfil-maestro">Volver a Perfil</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavItem>
            </MDBNavbar>
            <div className="row">
                {
                    idiomas.map(idioma => {
                        return (
                            <div key={idioma.id} className="col-md-4">
                                <div className="card" className="card-idioma">
                                    <img src="https://www.contramuro.com/wp-content/uploads/2016/09/idiomas.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body" >
                                        <h5 className="card-title">{idioma.Idioma.nombre}</h5>
                                        <p className="card-text">Nivel: {idioma.Idioma.descripcion}</p>
                                        <p className="card-text">Duracion: {idioma.descripcion}</p>
                                        <Link to={'/listado/' + idioma.Idioma.id} className="btn btn-primary">Listado de Estudiantes</Link>
                                        <Link to={'/asignaciones/' + idioma.Idioma.id} className="btn btn-primary">Archivos</Link>
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
export default CursosMaestro;
