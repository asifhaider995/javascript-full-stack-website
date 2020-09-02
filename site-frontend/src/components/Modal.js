import React from 'react'


function Modal(props) {
  const modalObject = props.modalObject
  return (
    <div className="portfolio-modal modal fade" id={modalObject.id} tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <i className="fa fa-times fa-3x" aria-hidden="true"/>
          </div>
          <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="modal-body">
                      { /*<!-- Project Details Go Here-->*/}
                      <h2 className="text-uppercase">{modalObject.projectName}</h2>
                      <p className="item-intro text-muted">{modalObject.subtitle}</p>
                      <img className="img-fluid d-block mx-auto" src={modalObject.img} alt="" />
                      <p>{modalObject.description}</p>
                      <ul className="list-inline">
                          <li>Date: {modalObject.listItems.date}</li>
                          <li>Client: {modalObject.listItems.client}</li>
                          <li>Category: {modalObject.listItems.category}</li>
                      </ul>
                      <button className="btn btn-primary" data-dismiss="modal" type="button">
                          <i className="fas fa-times mr-1"></i>
                          Close Project
                      </button>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;
