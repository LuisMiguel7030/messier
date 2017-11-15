import React from 'react';


const Footer = () => (

  <footer className="page-footer center-on-small-only stylish-color-dark">

      <div className="container-fluid">
          <div className="row">

              <div className="col-md-6">
                  <h5 className="title font-bold">Contact us</h5>
                  <ul>
                    <hr/>
                    <li><h6 className="font-bold">Celular</h6></li>
                    <li><h6>3134970500</h6></li>
                    <li><h6>311879566</h6></li>
                    <hr/>
                    <li><h6 className="font-bold">Email</h6></li>
                    <li><h6>messiersolutions@gmail.com</h6></li>
                  </ul>
              </div>

              <div className="col-md-6">
                  <h5 className="title font-bold">co-founders</h5>
                  <ul>
                      <li><h6>Klaus Thelen</h6></li>
                      <li><h6>Luis Miguel Barragan</h6></li>
                      <li><h6>Victor Cortes</h6></li>

                  </ul>
              </div>

          </div>
      </div>

      <hr />

      <div className="social-section text-center">
          <ul>
              <li><button className="btn btn-blue-grey btn-sm ">Facebook</button></li>
              <li><button className="btn btn-blue-grey btn-sm">Twitter</button></li>
              <li><button className="btn btn-blue-grey btn-sm">Google Plus</button></li>
              <li><button className="btn btn-blue-grey btn-sm">Linkedin</button></li>
          </ul>
      </div>

      <div className="footer-copyright">
          <div className="container-fluid">
              © 2017 Copyright: <a href="#"> messiersolutions.com </a>

          </div>
      </div>

  </footer>
);

export default Footer;
