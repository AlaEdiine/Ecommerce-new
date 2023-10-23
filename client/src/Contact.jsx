import { SnackbarProvider } from 'notistack'
import React, { useRef, useState } from 'react'
import Footer from './component/Footer'
import Menu from './component/Menu'
import Error from './component/Snackbar/Error'
import emailjs from "@emailjs/browser";
import Succes from './component/Snackbar/Succes'
import { Navigate } from 'react-router'



const Contact = () => {
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [subject, setSubject] = useState(null)
  const [msg, setMsg] = useState(null)


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if ((name === null) || (email === null) || (subject === null) || (msg === null)) {
     return Error("Remplir toutes les champs !", "error");
    }

    emailjs
      .sendForm(
        "service_b8oydps",
        "template_psgs9p1",
        form.current,
        "i_ZOSRbqoJEKIm7uL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    Succes("Email Send with Succes", "success");
    return <Navigate to='http://localhost:3000/shop'></Navigate>
  };
  return (
    
    <div>
<Menu></Menu>
<SnackbarProvider autoHideDuration={2500} />
  {/* Navbar End */}
  {/* Breadcrumb Start */}
  <div className="container-fluid">
    <div className="row px-xl-5">
      <div className="col-12">
        <nav className="breadcrumb bg-light mb-30">
          <a className="breadcrumb-item text-dark" >Home</a>
          <span className="breadcrumb-item active">Contact</span>
        </nav>
      </div>
    </div>
  </div>
  {/* Breadcrumb End */}
  {/* Contact Start */}
  <div className="container-fluid">
    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Contact Us</span></h2>
    <div className="row px-xl-5">
      <div className="col-lg-7 mb-5">
        <div className="contact-form bg-light p-30">
          <div id="success" />
          <form ref={form} onSubmit={sendEmail}>
            <div className="control-group">
              <input onChange={(e)=> setName(e.target.value)} type="text" className="form-control" name="fname" placeholder="Your Name" />
              <p className="help-block text-danger" />
            </div>
            <div className="control-group">
              <input onChange={(e)=> setEmail(e.target.value)} type="email" className="form-control" name="mail" placeholder="Your Email"  />
              <p className="help-block text-danger" />
            </div>
            <div className="control-group">
              <input onChange={(e)=> setSubject(e.target.value)}  type="text" className="form-control" name="subject" placeholder="Subject"  />
              <p className="help-block text-danger" />
            </div>
            <div className="control-group">
              <textarea  onChange={(e)=> setMsg(e.target.value)}  className="form-control" rows={8} name="msg" placeholder="Message"  />
              <p className="help-block text-danger" />
            </div>
            <div>
              <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Send
                Message</button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-lg-5 mb-5">
        <div className="bg-light p-30 mb-30">
          <iframe style={{width: '100%', height: 250}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
        </div>
        <div className="bg-light p-30 mb-3">
          <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3" />123 Street, New York, USA</p>
          <p className="mb-2"><i className="fa fa-envelope text-primary mr-3" />info@example.com</p>
          <p className="mb-2"><i className="fa fa-phone-alt text-primary mr-3" />+012 345 67890</p>
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
  {/* Footer Start */}
<Footer></Footer>
  {/* Footer End */}
</div>

  )
}

export default Contact