import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logomessier.png';

class Navbar extends React.Component {

  render() {
    
    return (
      <nav className="navbar fixed-top rgba-white-strong navbar-dark navbar-expand-lg" >
        <a herf='#home'>
          <img src={logo} height="55" width="200" alt=""/>
        </a>
        <button 
         className="navbar-toggler" 
         type="button" 
         data-toggle="collapse" 
         data-target="#navbarSupportedContent" 
         aria-controls="navbarSupportedContent" 
         aria-expanded="false" 
         aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href='#home'
               className="nav-link" 
               style={{color: '#2282AD'}}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <Link 
               className="nav-link" 
               onClick={this.changeStateBlog} 
               to="/aboutme"
               style={{color: '#2282AD'}}>
                contact us 
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}


export default Navbar;
