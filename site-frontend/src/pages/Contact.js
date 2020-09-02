import React from 'react';
import {withFormik} from 'formik';
import * as Yup from 'yup';

function Contact(props) {
  return (
    <section className="page-section" id="contact">
        <div className="container">
          <div className="text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              <h3 className="section-subheading text-light">Feel free to leave a message</h3>
          </div>
          <form onSubmit={props.handleSubmit} id='contactForm' name="sentMessage">
            <div className="row align-items-stretch mb-5">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor='name' className='text-light'> Name </label>
                    <input onBlur={props.handleBlur} className="form-control" name="name" type="text" placeholder="Your Name *" value={props.values.name} onChange={props.handleChange} required="required" />
                    <p className="help-block text-danger">{(props.touched.name && props.errors.name) && props.errors.name}</p>
                  </div>
                  <div className="form-group">
                    <label htmlFor='email' className='text-light'> Email </label>
                    <input onBlur={props.handleBlur} className="form-control" name="email" type="email" placeholder="Your Email *" value={props.values.email} onChange={props.handleChange} required="required" />
                    <p className="help-block text-danger">{(props.touched.email && props.errors.email) && props.errors.email}</p>
                  </div>
                  <div className="form-group mb-md-0">
                    <label htmlFor='phone' className='text-light'> Phone </label>
                    <input onBlur={props.handleBlur} className="form-control" name="phone" type="tel" placeholder="Phone" value={props.values.phone} onChange={props.handleChange} />
                    <p className="help-block text-danger">{(props.touched.phone && props.errors.phone) && "Invalid number"}</p>
                  </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group form-group-textarea mb-md-0">
                        <label htmlFor='message' className='text-light'> Message </label>
                        <textarea style={{height: '91%'}} onBlur={props.handleBlur} className="form-control" name="message" placeholder="Your Message *" value={props.values.message} onChange={props.handleChange} required="required" ></textarea>
                        <p className="help-block text-danger">{(props.touched.message && props.errors.message) && props.errors.message}</p>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <div id="success"></div>
                <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send Message</button>
            </div>
          </form>
        </div>
    </section>
  )
}

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    phone: '',
    message: ''
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().min(3, "Name is too short").required('Name is required'),
    email: Yup.string().email("Valid email required").required('Email is required'),
    phone: Yup.number().integer("Invalid"),
    message: Yup.string().min(100, "Your message is too short").max(500, "Too long").required('Message is required')
  }),
  handleSubmit: (values, {setSubmitting}) => {
    alert("Form submitted");
    console.log(values)
  }
})(Contact);
