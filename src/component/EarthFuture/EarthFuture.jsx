import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './EarthFuture.scss'
import { Link } from 'react-router-dom';
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import videoOneGif222 from "../../image/landsat9.webp";
import videoOneGif22 from "../../image/riazzz.jpg";
import videoOneGif2 from "../../image/CYGNSS_Auto2E.jpeg";


const EarthFuture = () => {
    return (
        <div>
            <Navbar />
            <div className="EarthFuture content-of-history">
                <h1>The Earth
                </h1>
                <p>Space exploration likely comes to mind when you think of NASA, but NASA’s work has many benefits
                    that are closer to home for Earth and its citizens. Earth science research will continue, with new
                    technologies that will help us understand Earth as a system and its responses to natural or humaninduced changes</p>
                <Link to='/' className="flex-center">
                    <button>
                        Explore More
                        <ArrowRightAltOutlinedIcon />
                    </button>
                </Link>
            </div>

            <div className="how-the-universe-work">
                <h1>Earth Future</h1>
                <p>Space exploration likely comes to mind when you think of NASA, but NASA’s work has many benefits
                    that are closer to home for Earth and its citizens. Earth science research will continue, with new
                    technologies that will help us understand Earth as a system and its responses to natural or humaninduced changes. Scientists utilize satellites, airborne missions, and ground-based observations to
                    gather data about the ongoing natural and man-made changes to Earth’s land, water, and air to help
                    improve the quality of life around the world.
                </p>
                <div className="justify-center gif__img">
                    <img src={videoOneGif222} alt="" className="image-space" /></div>
                <h3>Landsat 9</h3>
                <p>NASA’s best known Earth Science program will continue with the launch of Landsat 9 in 2020.
                    Landsat 9 will extend our ability to measure changes on the global land surface at a scale where we
                    can separate human and natural causes of change. When land use and resource availability issues
                    arise, Landsat 9 will help decision makers make informed management decisions. Landsat 9 will thus
                    contribute a critical component to the international strategy for monitoring the health and state of
                    the Earth.</p>
                <div className="justify-center gif__img">
                    <img src={videoOneGif22} alt="" className='image-space' /></div>
                <h3>SWOT
                </h3>
                <p>Artist’s concept for the Surface Water and Ocean Topography (SWOT) mission, targeted for launch
                    202, will make the first global survey of Earth’s surface water. SWOT will monitor how water bodies
                    change over time and support societal needs such as dams and shipping.</p>
                <div className="justify-center gif__img">
                    <img src={videoOneGif2} alt="" className='image-space' />
                </div>

                <h3>CYGNSS</h3>
                <p>Artist’s concept of one of the eight Cyclone Global Navigation Satellite System (CYGNSS) satellites
                    deployed in space above a hurricane. CYGNSS uses GPS technology to help measure ocean winds,
                    which will give scientists an earlier and more detailed view of a storm’s strength and direction.</p>
            </div>


            <Footer />
        </div>
    );
};

export default EarthFuture;