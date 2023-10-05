import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
import './Contact.scss'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import Mailto from 'reactv16-mailto';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_rz51u7h', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <>
        <Navbar/>
        <div className='contact-us'>
           <h1>CONTACT</h1>
           <h2>GET IN TOUCH</h2>
           <p>If you would like to hear from us, please email us. Please feel free to contact us if you have a question or just want to say hi. Please expect a reply from me as soon as possible!</p>
            
            <div className="contact-form">
                <form action="">
                    <div className="contact-flex">
                        <p>
                        <input type="text" placeholder='Name*' required/>
                        </p>
                        <p>
                        <input type="email" placeholder='Email*' required/>
                        </p>
                    </div>

                    <div className="form">
                        <p>
                        <input type="text" placeholder='Subject*' required/>
                        </p>
                    </div>

                    <div className="another-div">
                        <p>
                            <textarea placeholder='Message' cols="15" rows="4"></textarea>
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