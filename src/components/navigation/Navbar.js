import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabClassName: "home"
    };
    this.changeStateHome = this.changeStateHome.bind(this);
    this.changeStateBlog = this.changeStateBlog.bind(this);
  }

  changeStateHome(){
    this.setState({
      activeTabClassName: "home"
    });
  }

  changeStateBlog(){
    this.setState({
      activeTabClassName: "blog"
    });
  }

  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light blue-grey lighten-5">
        <Link to="/"><div className="navbar-brand" onClick={this.changeStateHome}>Messier Solutions</div></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className={(this.state.activeTabClassName === "home") ? "nav-item active animated pulse white-text":"nav-item"}>
              <Link className="nav-link" to="/" onClick={this.changeStateHome}>Home</Link>
            </li>
            <li className={(this.state.activeTabClassName === "blog") ? "nav-item active animated pulse":"nav-item"}>
              <Link className="nav-link" onClick={this.changeStateBlog} to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
