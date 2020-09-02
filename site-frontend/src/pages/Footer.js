import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer py-5"  style={{ height: '9rem'}}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-4 text-lg-left">All Rights Reserved © Advertures 2020</div>
                <div className="col-lg-4 my-3 my-lg-0">
                    <Link className="btn btn-dark btn-social mx-2" style={{ padding: '1.5rem'}} to="#!"><i className="fab fa-twitter fa-2x"></i></Link>
                    <Link className="btn btn-dark btn-social mx-2" style={{ padding: '1.5rem'}} to="#!"><i className="fab fa-facebook-f fa-2x"></i></Link>
                    <Link className="btn btn-dark btn-social mx-2" style={{ padding: '1.5rem'}} to="#!"><i className="fab fa-linkedin-in fa-2x"></i></Link>
                </div>
                <div className="col-lg-4 text-lg-right">
                    <Link className="mr-3" to="#!">Privacy Policy</Link>
                    <Link to="#!">Terms of Use</Link>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
