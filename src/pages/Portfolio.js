import React from 'react'
import Modal from '../components/Modal'

import modalImg1 from "../assets/img/portfolio/01-full.jpg"
import modalImg2 from "../assets/img/portfolio/02-full.jpg"
import modalImg3 from "../assets/img/portfolio/03-full.jpg"
import modalImg4 from "../assets/img/portfolio/04-full.jpg"
import modalImg5 from "../assets/img/portfolio/05-full.jpg"
import modalImg6 from "../assets/img/portfolio/06-full.jpg"

import thumbnail1 from "../assets/img/portfolio/01-thumbnail.jpg"
import thumbnail2 from "../assets/img/portfolio/02-thumbnail.jpg"
import thumbnail3 from "../assets/img/portfolio/03-thumbnail.jpg"
import thumbnail4 from "../assets/img/portfolio/04-thumbnail.jpg"
import thumbnail5 from "../assets/img/portfolio/05-thumbnail.jpg"
import thumbnail6 from "../assets/img/portfolio/06-thumbnail.jpg"

const modalObjects = [
  {
    id: "portfolioModal1",
    projectName: "Project Name",
    subtitle: "Wait, these are not done yet",
    description: "Wait, these are not done yet!",
    img: modalImg1,
    listItems: {
      date: "January 2020",
      client: "Threads",
      category: "Illustration"
    }
  },
  {
    id: "portfolioModal2",
    projectName: "Project Name",
    subtitle: "Wait, these are not done yet",
    description: "Wait, these are not done yet!",
    img: modalImg2,
    listItems: {
      date: "January 2020",
      client: "Explore",
      category: "Graphics Design"
    }
  },
  {
    id: "portfolioModal3",
    projectName: "Project Name",
    subtitle: "Wait, these are not done yet!",
    description: "Wait, these are not done yet!",
    img: modalImg3,
    listItems: {
      date: "January 2020",
      client: "Finish",
      category: "Identity"
    }
  },
  {
    id: "portfolioModal4",
    projectName: "Project Name",
    subtitle: "Wait, these are not done yet",
    description: "Wait, these are not done yet!",
    img: modalImg4,
    listItems: {
      date: "January 2020",
      client: "Lines",
      category: "Branding"
    }
  },
  {
    id: "portfolioModal5",
    projectName: "Project Name",
    subtitle: "Wait, these are not done yet",
    description: "Wait, these are not done yet!",
    img: modalImg5,
    listItems: {
      date: "January 2020",
      client: "Southwest",
      category: "Web Design"
    }
  },
  {
    id: "portfolioModal6",
    projectName: "Project Name",
    subtitle: "Wait, these are not done yet",
    description: "Wait, these are not done yet!",
    img: modalImg6,
    listItems: {
      date: "January 2020",
      client: "Window",
      category: "Photography"
    }
  },
]

function Portfolio() {
  const portfolioItem = (text1, text2, modalId,img) => {
    return (
      <div className="portfolio-item">
          <a className="portfolio-link" data-toggle="modal" href={modalId}>
              <div className="portfolio-hover">
                  <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
              </div>
              <img className="img-fluid" src={img} alt="" />
          </a>
          <div className="portfolio-caption">
              <div className="portfolio-caption-heading">{text1}</div>
              <div className="portfolio-caption-subheading text-muted">{text2}</div>
          </div>
      </div>
    )
  }

  const renderModals = (
    <div>
      {modalObjects.map((item,index) => {
        return <Modal key={index} modalObject={item} />
      })}
    </div>
  )

  return (
    <div>
    <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
              <h2 className="section-heading text-uppercase">Portfolio</h2>
              <h3 className="section-subheading text-muted">Here is our work</h3>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 mb-4">
              {portfolioItem("Threads","Illustration","#portfolioModal1", thumbnail1 )}
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              {portfolioItem("Explore","Graphic Design", "#portfolioModal2", thumbnail2)}
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              {portfolioItem("Finish","Identity", "#portfolioModal3", thumbnail3)}
            </div>
            <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
              {portfolioItem("Lines","Branding", "#portfolioModal4", thumbnail4)}
            </div>
            <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
              {portfolioItem("Southwest","Web Design", "#portfolioModal5", thumbnail5)}
            </div>
            <div className="col-lg-4 col-sm-6">
              {portfolioItem("Threads","Illustration", "#portfolioModal6", thumbnail6)}
            </div>
          </div>
        </div>
        {renderModals}
    </section>
    </div>
  )
}

export default Portfolio;
