/*import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import '../css/registro.css';

function Registro() {

    const [estudiante, setEstudiante] = useState({
        nombreCompleto: '',
        numeroIdentidad: '',
        direccion: '',
        edad: '',
        numeroTelefono: '',
        email: '',
        fechaRegistro: '',
        password: '',
        nombreUsuario: '',

    });

    const { nombreCompleto, numeroIdentidad, direccion, edad, numeroTelefono, email, fechaRegistro,
        password, nombreUsuario } = estudiante;

    const handleInputChange = (e) => {
        //console.log(e.target.name + ' : ' + e.target.value);

        setEstudiante({
            ...estudiante,
            [e.target.name]: e.target.value
        });
    }
    //const [loginStatus, setLoginStatus] = useState("");

    axios.defaults.withCredentials = true;

    const registrar = async () => {

        console.log(estudiante);

        const resp = await axios.post('http://localhost:4000/estudiante', estudiante);
        const data = await resp.data;

        console.log(resp);

        .then((response)=>{
             if(response.data.status){
                 alert('Bienvenido')
                 window.location.href="/Inicio";
             }if(response.data.message){
                 setLoginStatus(response.data.message)
             }else{
                 setLoginStatus(response.data[0])
             }
         });
    }

    let schema = yup.object().shape({
        nombreCompleto: yup.string().required("campo obligatorio"),
        numeroIdentidad: yup.number().positive().integer().required(),
        fechaRegistro: yup.date().required(),
        numeroTelefono: yup.number().positive().integer().required(),
        direccion: yup.string().required("campo obligatorio"),
        edad: yup.number().positive('Solo numeros positivos').integer().required(),
        nombreUsuario: yup.string().required("campo obligatorio"),
        email: yup.string().email("correo invalido").required("campo obligatorio"),
        password: yup.string().required("campo obligatorio").min(6, "minimo 6 caracteres").max(15, "Menos de 15 caracteres")
    })

    const { register, handleSubmit, errors } = useForm({
        mode: "onTouched",
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="divisionRegistro">
            <div className="imgRegistro"></div>
            <div className="formularioRegistro" >
                <h2 className="letraRegistro">Registro </h2>
                <h5 className="llenarRegistro">Llene todos los campos</h5>

                <div className="posicionRegistro">
                    <label>Nombre Completo</label>
                    <input value={nombreCompleto} className="bordeInput1"
                        type="text" placeholder="Escriba su nombre"
                        name="nombreCompleto" ref={register}
                        onChange={handleInputChange}
                    ></input>
                    <p className="text-danger"> {errors.nombreCompleto?.message} </p>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <label>Numero de Identidad</label>
                        <input value={numeroIdentidad} className="bordeInput"
                            type="text" placeholder="Escriba su numero de identidad"
                            name="numeroIdentidad" ref={register}
                            onChange={handleInputChange}
                        ></input>
                        <p className="text-danger"> {errors.numeroIdentidad?.message} </p>
                    </div>

                    <div className="col-md-4 offset-md-3">
                        <label>Fecha de Registro</label>
                        <input value={fechaRegistro} className="bordeInput"
                            type="date" placeholder="Escriba fecha de Registro"
                            name="fechaRegistro" ref={register}
                            onChange={handleInputChange}
                        ></input>
                        <p className="text-danger"> {errors.fechaRegistro?.message} </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <label>Telefono</label>
                        <input value={numeroTelefono} className="bordeInput"
                            type="text" placeholder="Escriba telefono"
                            name="numeroTelefono" ref={register}
                            onChange={handleInputChange}
                        ></input>
                        <p className="text-danger"> {errors.telefono1?.message} </p>
                    </div>

                    <div className="col-md-4 offset-md-3">
                        <label>Direccion</label>
                        <input value={direccion} className="bordeInput"
                            type="text" placeholder="Escriba su direccion"
                            name="direccion" ref={register}
                            onChange={handleInputChange}
                        ></input>
                        <p className="text-danger"> {errors.direccion?.message} </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <label>Edad</label>
                        <input value={edad} className="bordeInput"
                            type="number" placeholder="Escriba su edad"
                            name="edad" ref={register}
                            onChange={handleInputChange}
                        ></input>
                        <p className="text-danger"> {errors.edad?.message} </p>
                    </div>

                    <div className="col-md-4 offset-md-3">
                        <label>Nombre de Usuario</label>
                        <input value={nombreUsuario} className="bordeInput"
                            type="text" placeholder="Escriba Usuario"
                            name="nombreUsuario" ref={register}
                            onChange={handleInputChange}
                        ></input>
                        <p className="text-danger"> {errors.setNombreUsuario?.message} </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <label>Correo Electronico</label>
                        <input value={email} className="bordeInput"
                            type="email" placeholder="Escriba su email"
                            name="email" ref={register}
                            onChange={handleInputChange}
                        ></input>
                        <p className="text-danger"> {errors.correo?.message} </p>
                    </div>

                    <div className="col-md-4 offset-md-3">
                        <label>Contraseña</label>
                        <input value={password} className="bordeInput"
                            type="password" placeholder="Escriba su contraseña"
                            name="password" ref={register}
                            onChange={handleInputChange}
                        ></input>
                        <p className="text-danger"> {errors.contraseña?.message} </p>
                    </div>
                </div>

                <button className="botonRegistro" type="button" onClick={registrar}>Registrar</button>

                <p className="forgot-password text-center par">
                    ¿Ya estás registrado <a href="./login">iniciar sesión?</a>
                </p>
                <h7 className="text-danger">{ }</h7>
                <div className="espacio"></div>
            </div>
        </div>
    );
}

export default Registro;*/