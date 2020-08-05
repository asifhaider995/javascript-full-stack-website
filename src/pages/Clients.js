import React from 'react'
import {Link} from 'react-router-dom';
import logo1 from '../assets/img/logos/envato.jpg';
import logo2 from '../assets/img/logos/designmodo.jpg';
import logo3 from '../assets/img/logos/themeforest.jpg';
import logo4 from '../assets/img/logos/creative-market.jpg';

function Clients() {
  return (
    <div className="py-5">
      <div className="container">
        <div className="text-center">
            <h2 className="section-heading text-uppercase">Our Clients</h2>
            <div />
        </div>
        <div className="row">
            <div className="col-md-3 col-sm-6 my-3">
                <Link to="#"><img className="img-fluid d-block mx-auto" src={logo1} alt="" /></Link>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
                <Link to="#"><img className="img-fluid d-block mx-auto" src={logo2} alt="" /></Link>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
                <Link to="#"><img className="img-fluid d-block mx-auto" src={logo3} alt="" /></Link>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
                <Link to="#"><img className="img-fluid d-block mx-auto" src={logo4} alt="" /></Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Clients;
