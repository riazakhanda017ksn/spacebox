import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
import './Contact.scss'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import Mailto from 'reactv16-mailto';
import swal from "sweetalert";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_41bsvru', 'template_lqtdvei', form.current, '_wSdSEsI9zp3k5bin')
      .then(
        (result) => {
          if (result) {
            swal(
                "Thanks for your mesaage!"
            );
          }
        },
        (error) => {
            swal("Failed !", "Please try again !");
        }
      );
    e.target.reset();
    };
    return (
        <>
        <Navbar/>
        <div className='contact-us'>
           <h1>CONTACT</h1>
           <h2>GET IN TOUCH</h2>
           <p>If you would like to hear from us, please email us. Please feel free to contact us if you have a question or just want to say hi. Please expect a reply from me as soon as possible!</p>
            
            <div className="contact-form">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="contact-flex">
                        <p>
                        <input type="text" placeholder='Name*' name='name' required/>
                        </p>
                        <p>
                        <input type="email" placeholder='Email*' name='email' required/>
                        </p>
                    </div>

                    <div className="form">
                        <p>
                        <input type="text" placeholder='Subject*' name='subject' required/>
                        </p>
                    </div>

                    <div className="another-div">
                        <p>
                            <textarea placeholder='Message' cols="15" rows="4" name='message'></textarea>
                        </p>
                    </div>

                    <button type='submit'>Send Message</button>
                </form>
            </div>
            <div className="follow-us">
                    <div className="flexes new-flexes">
                        <p>Follow us </p> <span></span>
                        <div className="social-icon">
                            <Mailto email="teamdreamersspace@gmail.com" obfuscate={true}>
                                <EmailIcon />
                            </Mailto>
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <FacebookIcon />
                            </a>
                           
                            
                            </div>
                    </div>
                </div>
        </div>
        <Footer/>
        </>
    );
};

export default Contact;