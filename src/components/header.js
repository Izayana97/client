import React, { Component } from "react";
import logo from "../img/logo.jpg";



 class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro" >
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <div>
                   <img className="m"src={logo} ></img>
                  </div>
                  <h1>
                    {this.props.data ? this.props.data.title : "Loading"}
                    <span></span>
                  </h1>
                  <p>
                    {this.props.data ? this.props.data.paragraph : "Loading"}
                  </p>
                 <a href ="/sign-up"
                    className="btn btn-custom btn-lg page-scroll">
                    Registrar
                  </a>
                  {" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

/*<a
                    href="./sign-up"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Registrar
                  </a> */