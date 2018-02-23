import React from 'react';
import { Link } from 'react-router-dom';
import '../global/css/SocialButtons.css'



const Footer = () => (

  <footer className="page-footer center-on-small-only" style={{backgroundColor: '#165367'}}>

      <div className="container-fluid">
          <div className="row">

              <div className="col-md-6 px-5">
                  <h5 className="title font-bold">Contact us</h5>
                  <ul>
                    <li><h6 className="font-bold">Celular</h6></li>
                    <li><h6>3134970500</h6></li>
                    <li><h6>311879566</h6></li>
                    <li><h6 className="font-bold">Email</h6></li>
                    <li><h6>messiersolutions@gmail.com</h6></li>
                  </ul>
              </div>

              <div className="col-md-6 px-5">
                  <h5 className="title font-bold">co-founders</h5>
                  <ul>
                      <li><h6>Klaus Thelen</h6></li>
                      <li><h6>Luis Miguel Barragan</h6></li>
                  </ul>
              </div>

          </div>
      </div>

      <hr />

      <div className="social-section text-center">
          <ul>
              <li><button className="btn button-fb btn-sm ">Facebook</button></li>
              <li><button className="btn button-tw lighten-2 btn-sm">Twitter</button></li>
              <li><button className="btn button-gplus btn-sm">Google Plus</button></li>
              <li><button className="btn button-li btn-sm">Linkedin</button></li>
          </ul>
      </div>

      <div className="footer-copyright">
          <div className="container-fluid">
              © 2017 Copyright: <Link to="/"> messiersolutions.com </Link>

          </div>
      </div>

  </footer>
);

export default Footer;
