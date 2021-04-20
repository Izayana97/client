import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavItem, MDBDropdown, MDBDropdownToggle,
    MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import '../css/cursoMaestro.css'

export const ListaEstudiante = () => {

    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        getEstudiantes();
    }, [])

    const getEstudiantes = async () => {

        const res = await axios.get('http://localhost:4000/estudianteidioma/' + id);
        const data = await res.data;

        setData(data);
        console.log(data);
    }

    return (
        <>
            <MDBNavbar color="blue-dark" dark expand="md">
                <MDBNavbarBrand>
                    <strong className="red-text" className="text-card2">Listado de Estudiantes</strong>
                </MDBNavbarBrand>
                <MDBNavItem className="card-idioma3">
                    <MDBDropdown>
                        <MDBDropdownToggle nav caret >
                            <div className="d-none d-md-inline"><MDBIcon icon="home" className="menu3" /></div>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu className="dropdown-default">
                            <MDBDropdownItem href="/login">Login </MDBDropdownItem>
                            <MDBDropdownItem href="/perfil-maestro">Volver a Perfil</MDBDropdownItem>
                            <MDBDropdownItem href="/curso-maestro">Volver a Cursos</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavItem>
            </MDBNavbar>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nombre Completo</th>
                            <th scope="col">Contacto</th>
                            <th scope="col">Correo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(dato => {
                                return (
                                    <tr key={dato.id}>
                                        <th scope="row">{dato.Estudiante.id}</th>
                                        <th scope="row">{dato.Estudiante.Persona.nombreCompleto}</th>
                                        <td colspan="2">{dato.Estudiante.Persona.numeroTelefono}</td>
                                        <td>{dato.Estudiante.Persona.Correos[0].email}</td>
                                    </tr>

                                )
                            })
                        }


                    </tbody>
                </table>
                
            </div>
        </>
    )
}

