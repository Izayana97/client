import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/style.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
//import '../nodejs/node_modules/mysql';

/*import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";*/
import SignUp from "./components/pruebaRegistro";
import LandingPage from "./components/landingpage.component";

import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import About from './components/about';
import Services from './components/services';
import Gallery from './components/gallery';
import Testimonials from './components/testimonials';
import Team from './components/team';
import Contact from './components/contact';
import Maestro from './components/LoginMaestro';
import PerfilMaestro from './components/PerfilMaestro';
import Empleado from './components/empleado';
import Eventos from './components/eventos';
import Cursos from './components/cursos';
import LoginPrueba from './components/LoginEstudiante';
import PerfilEstudiante from './components/PerfilEstudiante';
import { Dashboard } from './components/Dashboard';
import  Prueba  from './components/prueba';
import CursosMaestro from './components/CursosMaestro'
import {ListaEstudiante} from './components/ListaEstudiante';
import CursosEstudiantes from './components/CursosEstudiantes';
import AsignacionesMaestro from './components/AsignacionesMaestro';
import Matricular from './components/matricular';


function App() {
  return (<Router>
    <div className="App" >
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/prueba' component={Prueba} />

            <Route exact path="/login" component={LoginPrueba} />
            <Route exact path="/sign-up" component={Prueba} />
            <Route path ="/Navigation" component ={Navigation} />
            <Route path="/Team" component ={Team} />
            <Route path="/about" component ={About} />
            <Route path="/header" component ={Header} />
            <Route path="/Features" component ={Features} />
            <Route path="/Services" component ={Services} />
            <Route path="/Gallery" component ={Gallery} />
            <Route path="/Testimonials" component ={Testimonials} />
            <Route path="/Contact" component ={Contact} />
            <Route exact path="/login-maestro" component ={Maestro}/>
            <Route exact path="/perfil-maestro" component ={PerfilMaestro} />
            <Route path="/Empleado" component ={Empleado}/>
            <Route path="/Eventos" component={Eventos}/>
            <Route exact path="/cursos" component={Cursos}/>
            <Route exact path="/perfil-estudiante" component={PerfilEstudiante}/>
            <Route path='/admin' component={Dashboard} />
            <Route path='/curso-maestro' component={CursosMaestro} />
            <Route exact path='/listado/:id' component={ListaEstudiante}/>
            <Route exact path='/curso-estudiante' component={CursosEstudiantes}/>
            <Route exact path='/asignaciones/:id' component={AsignacionesMaestro}/>
            <Route exact path='/matricular/:id' component={Matricular}/>
            
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;

/*<nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>positronX.io</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
</nav>*/

/*
function App() {
  return (<Router>
    <div className="App" >
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}
export default App;
*/