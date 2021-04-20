import React, { useState} from "react";
import 'mdbreact/dist/css/mdb.css';
import Axios from 'axios';
import { MDBInputGroup, MDBInput, MDBBtn} from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Empleado() {
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [username, setUsername] = useState("");

    const registrarempleado = () =>{
        Axios.post("http://localhost:3001/empleado", {
            correo: correo,
            contrasena: contrasena,
            username: username

        }).then(()=>{
            alert("Maestro Registrado");
        });
    }
    return(
        <div className="flex">
            <div className="img"></div>
            <form className="forma">
                <h7 className="sign">Registrar maestro</h7>
                
                        <MDBInput label="Correo" icon="envelope" type="email" name="correo"
                        onChange = {(e) => {
                            setCorreo(e.target.value);
                        }}
                        />
                        <div className="ho"></div>
                        <MDBInput label="Contrasena" icon="lock" type="password" name="contrasena"
                        onChange = {(e) => {
                            setContrasena(e.target.value);
                        }}
                        />
                         <div className="ho"></div>
                        <MDBInput label="Username" icon="user-alt" type="text" name="username"
                        onChange = {(e) => {
                            setUsername(e.target.value);
                        }}
                        />
                        
                        <a href="./maestro"> <MDBBtn gradient="purple" onClick={registrarempleado} >Registrar</MDBBtn></a>
            </form>
            </div>
    );


}
export default Empleado;