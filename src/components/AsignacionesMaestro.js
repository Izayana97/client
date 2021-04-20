import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../css/cursoEstudiante.css'

const AsignacionesMaestro = () => {

    const { id } = useParams();

    const [archivos, setArchivos] = useState([]);
    const [descripcion, setDescripcion] = useState('');

    const handleChangeDescripcion = (e) => {
        setDescripcion(e.target.value);
        console.log(descripcion)
    }

    useEffect(() => {
        getArchivos();
    }, [])

    const getArchivos = async () => {
        let resp = await axios.get('http://localhost:4000/idioma/archivo/' + id);
        let data = await resp.data;

        console.log(data);

        setArchivos(data);
    }

    const handleSubmitImage = async (e) => {

        const formData = new FormData();

        formData.append('tarea', e.target.files[0]);
        formData.append('descripcion', descripcion);


        try {
            const resp = await fetch(`http://localhost:4000/idioma/archivo/` + id, {
                method: 'POST',
                body: formData,
            });
            const body = await resp.json();

            console.log(body)
            getArchivos();

        } catch (error) {
            console.log(error);
        }
    }
    return (

        <div className="container mt-5">
            <h1>Mis Asignaciones</h1>

            <div className="m-5 p-5" >
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                    </div>
                    <div className="custom-file">
                        <input onChange={handleSubmitImage} type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                        <label className="custom-file-label"  htmlFor="inputGroupFile01">Seleccionar archivo</label>
                    </div>
                </div>
                <br></br>
                <textarea  name="descripcion" onChange={handleChangeDescripcion} className="form-control" cols="5" rows="3" className='text-area'></textarea>
            </div>

            <div></div>
            
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre Archivo</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">URL</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        archivos.map(item => {

                            const { Archivo } = item;

                            return (
                                <tr key={Archivo.id} >
                                    <th scope="row">{Archivo.id} </th>
                                    <th scope="row">{Archivo.nombre} </th>
                                    <td colSpan="2">{Archivo.descripcion}</td>
                                    <td scope="row">{Archivo.url}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
            <div><a href="/login-maestro">Volver a Perfil</a></div>
        </div>
    )
}
export default AsignacionesMaestro;
