import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => (
  <nav className="navbar fixed-top navbar-expand-lg navbar-light blue-grey lighten-5">
    <Link to="/"><div className="navbar-brand">Messier Solutions</div></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link" to="/blog">Blog</Link>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-mdb" type="submit">Search</button>
      </form>
    </div>
  </nav>
);

export default Navbar;
