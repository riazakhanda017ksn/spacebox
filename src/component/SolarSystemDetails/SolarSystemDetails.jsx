import { Link, useParams } from "react-router-dom";
import { items } from "../Data/Data";
import Navbar from "../Navbar/Navbar";
import "./SolarSystemDetails.scss";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

const SolarSystemDetails = () => {
  const { id } = useParams();
  const solar = items.find((solar) => solar.id === id);
  const { name, history1, history2, history3, history4, img, banner } = solar;
  return (
    <>
      <Navbar />
      <div
        className="solar-text"
        style={{
          background: `linear-gradient(360deg, rgba(0, 0, 0, 0.9294117647), rgba(0, 0, 0, 0.349)),url(${banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          padding: "180px 20px",
          backgroundPosition: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1>{name}</h1>
        <p>{history1.slice(0, 120)}...</p>
        <Link to="/" className="flex-center">
          <button>
            Explore More
            <ArrowRightAltOutlinedIcon />
          </button>
        </Link>
      </div>
      <div className="solar-system">
        <h3>History of {name}</h3>
        <p>{history1}</p>
        <p>{history2}</p>
        <div className="img-center">
          <img src={img} alt="" />
        </div>
        <p>{history3}</p>
        <p>{history4}</p>
      </div>
    </>
  );
};

export default SolarSystemDetails;
