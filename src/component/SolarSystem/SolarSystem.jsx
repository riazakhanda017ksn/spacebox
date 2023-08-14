import "./SolarSystem.scss";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import { Link } from "react-router-dom";
import { items } from "../Data/Data";
const SolarSystem = () => {
  return (
    <div className="solar-system">
      <h4>
        History of the planets of <br /> the Solar system
      </h4>
      <div className="parent">
        {items.map((item) => {
          return (
            <div key={item.id} className="item">
              <img src={item.img} alt="" />
              <h3>{item.name}</h3>
              <p>{item.history1.slice(0, 50)}...</p>
              <div className="text-center">
                <Link to={`/solar-system-details/${item.id}`}>
                  Read more <ArrowRightAltOutlinedIcon />{" "}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SolarSystem;
