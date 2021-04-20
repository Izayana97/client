import React, { Component } from "react";
import logo from '../img/logo.jpg';
import '../fonts/font-awesome/css/font-awesome.css';
import { MDBIcon } from "mdbreact";






export class Contact extends Component {
  render() {
    return (
      <div>
        <div id="contact">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>Contactanos</h2>
                  <p>
                    Encuentranos y se parte de la Familia AICA
                  </p>
                  <div>
                  <img className="hola"src={logo} ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Informacion </h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Address
                  </span>
                  {this.props.data ? this.props.data.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Phone
                  </span>{" "}
                  {this.props.data ? this.props.data.phone : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  {this.props.data ? this.props.data.email : "loading"}
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="container text-center">
                <div className="social">
                  <ul>
                    <li>
                      <a
                        href={this.props.data ? this.props.data.facebook : "https://www.facebook.com/academiaidiomasca"}
                      >
                        <MDBIcon fab icon="facebook" className="fa fa-facebook"/>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.WhatsApp : "https://api.whatsapp.com/send?phone=50431646734&fbclid=IwAR1WWRS95FWinC0ceA0mhx6HfyN6Bg3VwKlgWHn2kkd8fkIGF9F5aQnabcw"}>
                        <MDBIcon fab icon="whatsapp" className="fa fa-WhatsApp "/>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.Instagram : "https://www.instagram.com/academiaidiomasca"}>
                      <MDBIcon fab icon="instagram" className="fa fa-Instagram"/>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="container text-center">
            <p>
              &copy; 2021 Academia de Idiomas Centroamericana.{" "}
              <a href="https://www.facebook.com/academiaidiomasca" rel="nofollow">
                Academia De Idiomas CA
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;