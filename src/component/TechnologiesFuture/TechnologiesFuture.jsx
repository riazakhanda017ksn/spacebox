import React from 'react';
import './TechnologiesFuture.scss'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import videoOneGif222 from "../../image/down.jpg"
import videoOneGif22 from "../../image/medium_1_0.png"
import videoOneGif2 from "../../image/2014-06-02_DTN-650px.jpg"
import videoOneGif1 from "../../image/lcrd.jpg"
import videoOneGif from "../../image/last.jpg"


const TechnologiesFuture = () => {
    return (
        <>
            <Navbar />
            <div className="TechnologiesFuture content-of-history">
                <h1>Technology
                </h1>
                <p>When NASA was created 60 years ago, it had to invent the technology to get where we needed to go,
                    and we will continue to push the boundaries of technology into the future. New emerging
                    technologies that open opportunities for research and exploration with minimal investments include
                    NASA’s small satellites. </p>
                <Link to='/' className="flex-center">
                    <button>
                        Explore More
                        <ArrowRightAltOutlinedIcon />
                    </button>
                </Link>
            </div>
            <div className="how-the-universe-work">
                <h1>Technology Future</h1>
                <p>When NASA was created 60 years ago, it had to invent the technology to get where we needed to go,
                    and we will continue to push the boundaries of technology into the future. New emerging
                    technologies that open opportunities for research and exploration with minimal investments include
                    NASA’s small satellites. Exploring deep space and three-year missions to Mars pose new challenges:
                    Can you take enough? Can you grow it or make it in space? Can you do your own repairs and
                    maintenance? As before, NASA will adapt solutions to these and other challenges into technologies
                    that will improve life at home.</p>
                <div className="justify-center gif__img  more-images">
                    <img src={videoOneGif222} alt="" className='image-space' />
                </div>

                <h3>3D Printer
                </h3>
                <p>International Space Station’s 3D printer manufactures objects out of plastic. NASA is developing more
                    advanced printers that can add metals and other materials like regolith into the mix. Being able to
                    make parts in space will come in handy during emergencies.</p>

                <h3>RASSOR</h3>
                <div className="justify-center gif__img">
                    <img src={videoOneGif22} alt="" className='image-spacd' />
                </div>

                <p>NASA’s Regolith Advanced Surface Systems Operations Robot (RASSOR) excavating simulated
                    extraterrestrial soils. NASA is developing technologies to drill into regolith (space word for “soil”) on
                    the Moon, Mars, and asteroids and to convert it into oxygen, drinkable water, other products to
                    support human and plant life, consumables, and fuel sources</p>
                <h3>DTN</h3>
                <p>Communicating from Earth to any spacecraft is a complex challenge, largely due to the extreme
                    distances involved. When data are transmitted and received across thousands, millions, and even
                    billions of miles, the delay and potential for disruption or data loss is significant. Advanced
                    communication technologies are essential to enhance deep space exploration for both robotic and
                    human missions. Delay/Disruption Tolerant Networking (DTN) is NASA’s solution to reliable </p>
                <div className="justify-center gif__img">
                    <img src={videoOneGif2} alt="" className='imafe-space' />

                </div>
                <p>internetworking for space missions. DTN will enable a Solar System Internet with automated data
                    delivery between users no matter how distant and intermittent their connections may be</p>

                <h3>LRCD
                </h3>
                <p>Technicians test a flight modem in a thermal vacuum chamber for NASA’s Laser Communications
                    Relay Demonstration (LRCD) mission. The modems encode data into laser light to be transmitted to
                    the ground from a satellite orbiting at the same speed Earth is turning. Optical communications
                    technologies can dramatically improve communications between spacecraft and Earth—10 to 100
                    times better than radio communications’ data rates.
                </p>
                <div className="justify-center gif__img">
                    <img src={videoOneGif1} alt="" className='image-space' />
                </div>


                <h3>DSOC</h3>
                <p>The Deep Space Optical Communications (DSOC) package aboard NASA’s Psyche will use a light or
                    laser communications to transmit more data to Earth in a given amount of time. </p>
                <div className="justify-center gif__img">
                    <img src={videoOneGif} alt="" className="image-space" />

                </div>
                <p>The DSOC seeks to
                    increase spacecraft communications performance and efficiency without increasing the mission
                    burden in mass, volume, power and/or spectrum.</p>
            </div>

            <Footer />

        </>
    );
};

export default TechnologiesFuture;