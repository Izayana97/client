import React, { Component } from "react";
import '../css/bootstrap.css';
import  Alemania  from '../img/portfolio/alemania.png';
import china_xian from '../img/portfolio/China_xian.jpg';
import francia from '../img/portfolio/francia1.png';
import italia from '../img/portfolio/italia2.jpg';
import japon from '../img/portfolio/japon2.jpg';
import usa from '../img/portfolio/USA.png';


export class Gallery extends Component {
  render() {
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Galeria</h2>
            <p>
              Aprender otro dioma es como convertirse en otra persona
            </p>
          </div>
          <div className="row">
            <div className="portfolio-items">
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href={Alemania}
                      title="Alemania"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>HOLA = HALLO </h4>
                      </div>
                      <img
                        src={Alemania}
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href={italia}
                      title="Italia"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4> BUENOS DIAS = BUONGIORNO </h4>
                      </div>
                      <img
                        src={italia}
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href={francia}
                      title="Francia"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>BUENOS DIAS = BONJOUR</h4>
                      </div>
                      <img
                        src={francia}
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href={usa}
                      title="Estados Unidos"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>¿ COMO ESTAS ? =HOW ARE YOU</h4>
                      </div>
                      <img
                        src={usa}
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href={japon}
                      title="Japon"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>¿ COMO ESTAS ? = お元気ですか</h4>
                      </div>
                      <img
                        src={japon}
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href={china_xian}
                      title="China"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>TE AMO = 爱你</h4>
                      </div>
                      <img
                        src={china_xian}
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;