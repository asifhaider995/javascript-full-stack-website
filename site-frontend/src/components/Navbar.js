import React from 'react';
import {NavLink} from 'react-router-dom';
import navLogo from "../assets/img/navbar-logo.svg"

function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" style={{ background: 'black', height: '4rem'}}>
        <div className="container">
          <NavLink className="navbar-brand js-scroll-trigger" to="/"><img src={navLogo} alt="" /></NavLink>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars ml-1"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive" style={{ background: 'black', padding: '.5rem'}}>
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item"><NavLink className="nav-link js-scroll-trigger" to="/services">Services</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link js-scroll-trigger" to="/portfolio">Portfolio</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link js-scroll-trigger" to="/about">About</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link js-scroll-trigger" to="/team">Team</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link js-scroll-trigger" to="/contact">Contact</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link js-scroll-trigger" to="/login">Login</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
      {props.children}
    </div>
  )
}

export default Navbar;
