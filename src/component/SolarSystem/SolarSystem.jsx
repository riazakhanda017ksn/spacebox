import "./SolarSystem.scss";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import { Link } from "react-router-dom";
import { items } from "../Data/Data";

import { useEffect, useState } from "react";
const SolarSystem = () => {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <div className="main">
        <div className="solar-background">
          <div className="content-of-solar-sytem">
            <h1 className={scrollY > 821 && "text-style"}>History of the planets of <br />
              the Solar system</h1>
            <div className="cards">
              {items.map((item) => {
                return (
                  <div key={item.id} className={item?.className + " " + "solar_item" + " " + item?.borderBottom}>

                    <img src={item.img} alt="" />
                    <h3>{item.name}</h3>
                    <p>{item.history1.slice(0, 170)}...</p>
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
          {/*  */}

        </div>
       
      </div>
      <div className="mobiles">
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
      </div>
    </>
  );
};

export default SolarSystem;
