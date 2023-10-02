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
import SpaceExploration from "./component/SpaceExploration/SpaceExploration";
import NasaFuture from "./component/NavaFuture/NavaFuture";
import MoonFuture from "./component/MoonFuture/MoonFuture";
import EarthFuture from "./component/EarthFuture/EarthFuture";
import TechnologiesFuture from "./component/TechnologiesFuture/TechnologiesFuture";
import Game from "./component/Game/Game";
import Search from "./component/Searrch/Search";
import { useState } from "react";
import Data from "./component/Searrch/Data";
// import { AnimatePresence } from "framer-motion";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const searchNASA = async (query) => {
    try {
      const apiKey = 'fWsXnP5K3dfYGBTJgIYjAIau0ihJq7Np0CgfjhE2';
      const apiUrl = `https://images-api.nasa.gov/search?q=${query}&media_type=image`;;

      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.collection.items) {
        const results = data.collection.items.map((item) => ({
          title: item.data[0].title,
          description: item.data[0].description,
          image: item.links[0].href,
        }));

        setSearchResults(results);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
   
    <>
      <BrowserRouter>
        <ScrollTop />
        {/* <AnimatePresence mode="wait"> */}
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/game" element={<Game />} /> */}
            <Route path="/techhnolies-future" element={<TechnologiesFuture />} />
            <Route path="/earth-future" element={<EarthFuture />} />
            <Route path="/moon-future" element={<MoonFuture />} />
            <Route path="/nasa-future" element={<NasaFuture />} />
            <Route path="/space-exploration" element={<SpaceExploration />} />
            <Route path="/star-history" element={<StarHistory />} />
            <Route path="/planet-history" element={<PlanetEarth />} />
            <Route path="/solar-system-history" element={<SolarSystemHistory />} />
            <Route path="/universal-history" element={<UniverseHistory />} />
            <Route path="/wanna-play-game" element={< SolarSystemGame />} />
            <Route path="/milky-way-history" element={< SpaceHistory />} />
            <Route path="/search" element={< Search onSearch={searchNASA} />} />
            <Route path="/search-result" element={< Data data={searchResults}  />} />
            <Route
              path="/solar-system-details/:id"
              element={<SolarSystemDetails />}
            />
          </Routes>
          {/* </AnimatePresence> */}
      </BrowserRouter>
      
    </>
  );
}

export default App;
