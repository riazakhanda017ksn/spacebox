
import './NavaFuture.scss'
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import videoOneGif22 from "../../image/pexels-pixabay-39896.jpg";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
const NasaFuture = () => {
    return (
        <>
            <Navbar />
            <div className="nasa-history content-of-history">
                <h1>The Future Of NASA
                </h1>
                <p>NASA’s future will continue to be a story of human exploration, technology, and science. We will go
                    back to the Moon to learn more about what it will take to support human exploration to Mars and
                    beyond. We will continue to nurture the development of a vibrant low-Earth orbit economy that
                    builds on the work done to date by the International Space Station.</p>
                <Link to='/' className="flex-center">
                    <button>
                        Explore More
                        <ArrowRightAltOutlinedIcon />
                    </button>
                </Link>
            </div>

            <div className="how-the-universe-work histories-contents">
                <h1>The Future
                </h1>
                <p>NASA’s future will continue to be a story of human exploration, technology, and science. We will go
                    back to the Moon to learn more about what it will take to support human exploration to Mars and
                    beyond. We will continue to nurture the development of a vibrant low-Earth orbit economy that
                    builds on the work done to date by the International Space Station. NASA engineers will develop new
                    technologies to improve air transport at home and meet the challenges of advanced space
                    exploration. Our scientists will work to increase an understanding of our planet and our place in the
                    universe. We will continue to try to answer the question, “Are we alone?”
                </p>
                <div className="justify-center gif__img">
                    <img className='img-space' src={videoOneGif22} alt="" /></div>
                <p>Unlike the way the space program started, NASA will not be racing a competitor. Rather, we will build
                    upon the community of industrial, international, and academic partnerships forged for the space
                    station. Commercial companies will play an increasing role in the space industry: launching rockets
                    and satellites, transporting cargo and crew, building infrastructure in low-Earth orbit. NASA will
                    continue to be a global leader in scientific discovery, fostering opportunities to turn new knowledge
                    into things that improve life here on Earth.</p>
            </div>
            <Footer />
        </>
    );
};

export default NasaFuture;
