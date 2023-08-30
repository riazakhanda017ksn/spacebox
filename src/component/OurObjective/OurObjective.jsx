import React, { useEffect, useState } from 'react';
import './OurObjective.scss'
import img from '../../image/pngwing.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Mailto from 'reactv16-mailto';
const OurObjective = () => {
    const [scrollY, setScrollY] = useState(0);
    console.log(scrollY);
    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className='our-objective'>

            <div className="flex-texts">
                <div className="space-man">
                    <img className={scrollY > 3400 && "image-styling"} src={img} alt="" />
                </div>
                <h1>Our Main Objective</h1>
                <p>Our main plan is to make this generation learn about space with entertainment and fun. <br />
                    This generation loves to play games and watching animated videos , thats why we have
                    created this webapp to make<br /> them learn about  space with the help of this game
                    and animated videos</p>
                <div className="follow-us">
                    <div className="flexes">
                        <p>Follow us </p> <span></span>
                        <div className="social-icon">
                            <Mailto email="teamdreamersspace@gmail.com" obfuscate={true}>
                                <EmailIcon />
                            </Mailto>
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <FacebookIcon />
                            </a>
                            <a href="https://www.youtube.com/@TeamDreamers-my5np" target="_blank" rel="noopener noreferrer">
                                <YouTubeIcon />
                            </a></div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default OurObjective;