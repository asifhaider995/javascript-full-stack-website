import React from 'react';
import {Link} from 'react-router-dom';

function Header(props) {
  return (
    <header className="masthead" style={{backgroundImage: `url(${props.image})`, height: '150%'}}>
      <div className="container">
        <div className="masthead-subheading text-body" style={{fontSize: '25px', marginBottom: '-4px'}}>{props.subtitle}</div>
        <div className="masthead-heading text-uppercase text-body">{props.title}</div>
        <Link className="btn btn-primary btn-xl text-uppercase text-body js-scroll-trigger" to="/services">{props.btnText}</Link>
      </div>
    </header>
  )
}

export default Header;
