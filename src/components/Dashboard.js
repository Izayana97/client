import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import '../css/StyleDash.css'
import { Usuarios } from './Usuarios';
import { Clientes } from './Clientes';
import Navbar from './Navbar';
import Sidenav from './Sidenav';


export const Dashboard = () => {
    return (
        <div className="sb-nav-fixed" >
            <Navbar/>
            <div id="layoutSidenav">
                <Sidenav />
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid">
                            <h1 className="mt-4">Dashboard</h1>
                            <ol className="breadcrumb mb-4">
                                <li className="breadcrumb-item active">Dashboard</li>
                            </ol>
                            <Switch>
                                <Route exact path='/admin/usuarios' component={Usuarios} />
                                <Route exact path='/admin/clientes' component={Clientes} />
                                <Redirect to="/admin/usuarios"/>
                            </Switch>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
