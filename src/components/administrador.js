import React, { useState } from "react";
import "../LoginPrueba.css";

function Admin(){

    const [loginStatus, setLoginStatus] = useState("");

  return(
    <div className="flex1">
    <div className="imgSignUp2"></div>
    <form className="formSignUp">
        <div className="form-group titulo2">
            <h3 className="letraH">Administracion</h3>
            <div className="espacio9"></div>
        </div>

        <div className="posicionLogin">
            <label>Correo Electronico</label>
            <input type="email" className="form-control" 
            name="correo" placeholder="Ingrese su correo" />
        </div>
        <div className="espacio8"></div>
        <div className="posicionLogin">
            <label >Contraseña</label>
            <input type="password" name="contrasenia" 
            className="form-control" id="exampleInputPassword1" 
            placeholder="Contraseña" />
        </div>
        <div className="espacio8"></div>
        <button type="submit" className="btn-login2">Iniciar Sesion</button>
        <h6 className="text-danger">{loginStatus}</h6>
        <div className="posicionLogin">
            <div className="final">
                <p>Solo personal autorizado  <a href="/">Regresar</a></p>
            </div>
            <p className="forget">Olvidaste tu contraseña?</p>
        </div>
        <div className="espacio7"></div>
    </form>
    </div>
  )

}

export default Admin;