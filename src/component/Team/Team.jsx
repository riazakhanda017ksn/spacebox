import React from 'react';
import './Team.scss'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import img1 from '../../image/adi.jpg'
import img2 from '../../image/sazzad.jpg'
import img3 from '../../image/shoaib.jpg'
import img5 from '../../image/habiba.jpg'
import img6 from '../../image/riaz.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import Mailto from 'reactv16-mailto';


const About = () => {
    const team =[
        {
            name:"Aditho Das Antor",
            fbLink:'https://www.facebook.com/profile.php?id=100086219093246',
            img:img1,
            gmail:"aditodas76@gmail.com",
            type:"Team Leader"
        },
        {
            name:"Sazzad Sayem",
            fbLink:'https://www.facebook.com/sazzadsayem9090/',
            img:img2,
            gmail:"sazzadsayem407@@gmail.com",
            type:'Project Manager'
        },
        {
            name:"Riaz Akhanda",
            fbLink:'https://www.facebook.com/riazahmed.akhondo/',
            img:img6,
            gmail:"riazakhanda@gmail.com",
            type:"Project's Web Developer"
        }
    ]
    const team2 =[
        {
            name:"Shoaib Sheikh",
            fbLink:'https://www.facebook.com/profile.php?id=100036167084169',
            img:img3,
            gmail:"ssheikh5665@gmail.com",
            type:"Project Co-leader"
        },
        {
            name:"Habibur Nahar",
            fbLink:'https://www.facebook.com/habibarehman.714',
            img:img5,
            gmail:"naharh790@gmail.com",
            type:'Information Analysist'
        }
   
    ]
    return (
        <>
        <Navbar/>
        <div className='About-us'>
             <h1>ABOUT</h1>
             <h2>About us</h2>
             <p>Our main plan is to make this generation learn about space with entertainment and fun. This generation loves to play games and watching animated videos , thats why we have created this webapp to make them learn about space with the help of this game and animated videos</p>
             <div className="the-team">
                <h2>The Team</h2>
                <span></span>
                <div className="team-grids">
                    {
                        team.map(item=>{
                            return (
                                <div key={item.name} className='our-teams' >
                                    <img src={item.img} alt="" />
                                    <h4>{item.name}</h4>
                                    <h5>{item.type}</h5>
                                    <div className='social'>
                                    <div className="social-icon">
                            <Mailto email={item.email} obfuscate={true}>
                                <EmailIcon />
                            </Mailto>
                            <a href={item.fbLink} target="_blank" rel="noopener noreferrer">
                                <FacebookIcon />
                            </a>
                           
                            </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                    
                </div>
                <div className="flexing-center">
                <div className="team-grids">
                    {
                        team2.map(item=>{
                            return (
                                <div key={item.name} className='our-teams margin-space' >
                                    <img src={item.img} alt="" />
                                    <h4>{item.name}</h4>
                                    <h5>{item.type}</h5>
                                    <div className='social'>
                                    <div className="social-icon">
                            <Mailto email={item.email} obfuscate={true}>
                                <EmailIcon />
                            </Mailto>
                            <a href={item.fbLink} target="_blank" rel="noopener noreferrer">
                                <FacebookIcon />
                            </a>
                           
                            </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                    
                </div>
                </div>
             </div>
        </div>
        <Footer/>
        </>
    );
};

export default About;