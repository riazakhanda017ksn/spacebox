import React, { useEffect, useState } from 'react';
import videoOne from "../../video/solar.mp4";
// import naptune from '../../image/img/neptune.png'
// import naptune2 from '../../image/img/uranus.svg'
// import naptune3 from '../../image/img/saturn.png'
// import naptune4 from '../../image/img/jupiter.png'
// import naptune5 from '../../image/img/mars.png'
// import naptune6 from '../../image/img/earth.png'
// import naptune7 from '../../image/img/venus.png'
// import naptune8 from '../../image/img/mercury.png'
// import naptune9 from '../../image/img/sun.png'

import SolarSystemThree from '../SolarSystemThree/SolarSystemThree';

const SolarAnimatedVideo = () => {
    const [scrollY, setScrollY] = useState(0);


    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



   
    return (
        <div className='none__item solars-view'>
            <div className="video-section extra-flex">
                <video className={scrollY > 2421 && "scrolly-video-bigger"} src={videoOne} muted loop autoPlay></video>
                <div className="video-overly"></div>
                <div className="text-of-animation">
                    <h1>How Solar System Work</h1>
                </div>
            </div>

            <div className="solars-view">
                {/* <div className="wrapper">

                    <div className="neptune-container">
                        <img src={naptune} />
                    </div>
                    <div className="uranus-container">
                        <img src={naptune2} />
                    </div>
                    <div className="saturn-container">
                        <img src={naptune3} />
                    </div>
                    <div className="jupiter-container">
                        <img src={naptune4} />
                    </div>
                    <div className="mars-container">
                        <img src={naptune5} />
                    </div>
                    <div className="earth-container">
                        <img src={naptune6} />
                    </div>
                    <div className="venus-container">
                        <img src={naptune7} />
                    </div>
                    <div className="mercury-container">
                        <img src={naptune8} />
                    </div>
                    <div className="sun-container">
                        <img src={naptune9} />
                    </div>
                </div> */}
                <SolarSystemThree />
            </div>
        </div>
    );
};

export default SolarAnimatedVideo;