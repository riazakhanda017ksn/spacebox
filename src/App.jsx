import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./component/Home/Home";
import SolarSystemDetails from "./component/SolarSystemDetails/SolarSystemDetails";
import ScrollTop from "./component/ScrollToTop/ScrollToTop";
import SolarSystemGame from "./component/Games/Solar";
import SpaceHistory from "./component/SpaceHistory/SpaceHistory";
import UniverseHistory from "./component/UniverseHistory/UniverseHistory";
import SolarSystemHistory from "./component/SolarSystemHistory/SolarSystemHistory";
import PlanetEarth from "./component/PlanetEarth/PlanetEarth";
import StarHistory from "./component/StarHistory/StarHistory";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/star-history" element={<StarHistory/>} />
          <Route path="/planet-history" element={<PlanetEarth/>} />
          <Route path="/solar-system-history" element={<SolarSystemHistory />} />
          <Route path="/universal-history" element={<UniverseHistory />} />
          <Route path="/wanna-play-game" element={< SolarSystemGame />} />
          <Route path="/milky-way-history" element={< SpaceHistory />} />
          <Route
            path="/solar-system-details/:id"
            element={<SolarSystemDetails />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
