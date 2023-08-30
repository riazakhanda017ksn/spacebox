import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

import "./Banner.scss";
import videoOne from "../../video/pexels-zch-12722063 (1080p).mp4";
const Slider = () => {
  return (
    <div>
      <div className="video-section">
        <video src={videoOne} muted loop autoPlay></video>
        <div className="video-overly">
          <h4 className="mobiles">SpaceBox</h4>
        </div>
        <>
          <div className="content">
            <h1>
              Want to learn about <br /> <span >Solar System</span>
            </h1>
            <p>
              This is a one minute demo of Solar desktop app: We’ve made this
              demo so you can find out if you like the graphics and if the
               applications <br /> works for you. After purchasing the full version, you
              can unlock this demo to the full desktop version.
            </p>
            <a className="flex-center">
              <button>
                Explore More
                <ArrowRightAltOutlinedIcon />
              </button>
            </a>
          </div>
        </>
      </div>
    </div>
  );
};

export default Slider;
