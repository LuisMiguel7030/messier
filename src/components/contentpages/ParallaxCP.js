import React from 'react';
import parallax from '../global/css/parallax.css'

var divStyle = {
  backgroundImage: 'url(' + require('../images/pres2.jpeg') + ')',

};

var secondStyle = {
  height: 850
};

const ParallaxCP = () => (


  <div className="parallax" style={divStyle}>
    <div className="full-bg-img">
      <div className="container">
        <div className="d-flex align-items-center d-flex justify-content-center" style={secondStyle}>
          <div className="row mt-5">
            <div className="col-md-12 wow fadeIn mb-3">
              <div className="intro-info-content text-center">
                <h1 className="display-1 mb-2 wow fadeInDown font-bold white-text auto-letra" data-wow-delay="0.3s">Messier Solutions</h1>
                <h5 className="font-up mb-3 mt-1 font-bold wow fadeIn white-text" data-wow-delay="0.4s">Web developer & Movil developer</h5>
                <a className="btn btn-light-blue btn-lg wow fadeIn" data-wow-delay="0.4s">portfolio</a>
                <a className="btn btn-indigo btn-lg wow fadeIn" data-wow-delay="0.4s">About me</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

);

export default ParallaxCP;
