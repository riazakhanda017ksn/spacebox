import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import videoOneGif222 from "../../image/20160801110400-shutterstock-241509286.jpeg";
import videoOneGif22 from "../../image/earth_moon.png";
import videoOneGif2 from "../../image/Low-Boom_Flight_Demonstrator.jpg";
import videoOneGif from "../../image/NASA_X-57_Maxwell.png";

import './MoonFuture.scss'

const MoonFuture = () => {
    return (
        <>
            <Navbar />
            <div className="moon-future content-of-history">
                <h1>The Moon
                </h1>
                <p>In the half-century since people visited the Moon, NASA has continued to push the boundaries of
                    knowledge to deliver on the promise of American ingenuity and leadership in space.</p>
                <Link to='/' className="flex-center">
                    <button>
                        Explore More
                        <ArrowRightAltOutlinedIcon />
                    </button>
                </Link>
            </div>
            <div className="how-the-universe-work">
                <h1>The Moon's Future</h1>
                <p>In the half-century since people visited the Moon, NASA has continued to push the boundaries of
                    knowledge to deliver on the promise of American ingenuity and leadership in space. And NASA will
                    continue that work by moving forward to the Moon with astronauts landing on the lunar South Pole by
                    2024.</p>
                <div className="justify-center gif__img">
                    <img src={videoOneGif22} alt="" className="image-space" />
                </div>
                <p>NASA is implementing the President’s Space Policy Directive-1 to “lead an innovative and sustainable
                    program of exploration with commercial and international partners to enable human expansion across
                    the solar system.” NASA stands on the verge of commercializing low-Earth orbit. These experiences
                    and partnerships will enable NASA to go back to the Moon in 2024 – this time to stay. NASA’s backbone
                    for deep space exploration is the biggest rocket ever built, the Space Launch System (SLS), the Orion
                    spacecraft and the Gateway lunar command module. With its partners, NASA will use the Gateway
                    lunar command module orbiting the Moon as a staging point for missions that allow astronauts to
                    explore more parts of the lunar surface than ever before</p>

                <h1>Aeronautics
                </h1>
                <p>NASA’s work in aeronautics has made decades of contributions to aviation, national security and our
                    economy. Ongoing research and testing of new aeronautics technologies are critical in these areas and
                    will help the U.S. lead the world in a global aviation economy, with increasing benefits worldwide.
                    Developing quiet supersonic transport over land, and quieter, cleaner aircraft technologies are two
                    ways NASA is transforming aviation.</p>
                <div className="justify-center gif__img">
                    <img src={videoOneGif222} alt="" className="image-space" />
                </div>

                <h1>Quiet Supersonic Technology
                </h1>
                <p>Testing the Quiet Supersonic Technology (QueSST) Preliminary Design Model inside NASA Langley
                    Research Center’s 14-by-22-foot Subsonic Tunnel. The QueSST Preliminary Design is the initial design
                    stage of NASA’s planned Low-Boom Flight Demonstration experimental airplane, or X-plane, which
                    aims to reduce fuel use, emissions, and noise, and to make supersonic flight over land possible.</p>
                <div className="justify-center gif__img">
                    <img src={videoOneGif2} alt="" className="image-space" />
                </div>

                <h1>X-57</h1>
                <p>Artist’s concept of NASA’s X-57 ‘Maxwell’ aircraft. The X-57 will be the first all-electric X-plane and will
                    be flown to demonstrate the benefits that electric propulsion may yield for the future of aviation. The
                    goal of the X-57 is to achieve a 500-percent increase in high-speed cruise efficiency, zero in-flight
                    carbon emissions, and flight that is much quieter for the community on the ground.</p>
                <div className="justify-center gif__img">
                    <img src={videoOneGif} alt="" className="image-space" />
                </div>

            </div>
            <Footer />
        </>
    );
};

export default MoonFuture;
