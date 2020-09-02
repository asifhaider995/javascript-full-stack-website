import React from 'react';
import {Link} from 'react-router-dom';
import Clients from './Clients';
import teamImg1 from "../assets/img/team/4.jpg";

function Team() {
  return (
    <div>
      <section className="page-section bg-light" id="team">
          <div className="container">
              <div className="text-center">
                  <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                  <h3 className="section-subheading text-muted">They work hard so you can feel satisfied.</h3>
              </div>
              <div className="row">
                  <div className="col-lg-12">
                      <div className="team-member">
                          <img className="mx-auto rounded-circle" src={teamImg1} alt="me" />
                          <h4>Asif Haider</h4>
                          <p className="text-muted">Lead Developer</p>
                          <Link className="btn btn-dark btn-social mx-2" to="#"><i className="fab fa-twitter"></i></Link>
                          <Link className="btn btn-dark btn-social mx-2" to="#"><i className="fab fa-facebook-f"></i></Link>
                          <Link className="btn btn-dark btn-social mx-2" to="#"><i className="fab fa-linkedin-in"></i></Link>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-12 mx-auto text-center"><p className="large text-muted">We make sure your product is in the most capable of hands, where quality is a factor that can never be compromised.</p></div>
              </div>
          </div>
      </section>
      <Clients />
    </div>
  )
}

export default Team;
