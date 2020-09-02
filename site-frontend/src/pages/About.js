import React from 'react'

import aboutImg1 from '../assets/img/about/1.jpg';
import aboutImg2 from '../assets/img/about/2.jpg';
import aboutImg3 from '../assets/img/about/3.jpg';
import aboutImg4 from '../assets/img/about/4.jpg';

function About() {
  const listItems = (inverted,head,subHead,body,img) => {
    return (
      <li className={inverted ? "timeline-inverted" : null}>
          <div className="timeline-image"><img className="rounded-circle img-fluid" src={img} alt="" /></div>
          <div className="timeline-panel">
              <div className="timeline-heading">
                  <h4>{head}</h4>
                  <h4 className="subheading">{subHead}</h4>
              </div>
              <div className="timeline-body"><p className="text-muted">{body}</p></div>
          </div>
      </li>
    )
  }
  return (
    <section className="page-section" id="about">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">About</h2>
                <h3 className="section-subheading text-muted"> Our journey was worth every steps </h3>
            </div>
            <ul className="timeline">
              {listItems(false, "2009-2011", "Our Humble Beginnings",
                "To be honest, things were not very pretty at the begining of our Saga. Like every great stories start out, ours was pretty wretched. Small office workspace, hot headed clients, times were tough. But the learning curve was steep.",
                aboutImg1
              )}
              {listItems(true, "March 2011", "The Agency is born",
                "Adventure, or as we decided to call it. The name had all the thrills and spills needed to put a burning torch in everybody's hearts. It was a slow start, but each day was getting better.",
                aboutImg2
              )}
              {listItems(false, "December 2012", "Transition to full service",
                "During this time, we were full fledged into the market. We covered the usual Web development and design. Things were looking great. We were planning on an expansion",
                aboutImg3
              )}
              {listItems(true, "July 2014", "Phase 2 Expansion",
                "The agency where most dreams come true... yes we made it to phase 2 expansion. We now offer Web security as well as Ecommerce development services. Things are about to get beautiful",
                aboutImg4
              )}
              <li className="timeline-inverted">
                  <div className="timeline-image">
                      <h4>
                          Be Part
                          <br />
                          Of Our
                          <br />
                          Story!
                      </h4>
                  </div>
              </li>
            </ul>
        </div>
    </section>
  )
}

export default About;
