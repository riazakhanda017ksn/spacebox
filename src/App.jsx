import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./component/Home/Home";
import SolarSystemDetails from "./component/SolarSystemDetails/SolarSystemDetails";
import ScrollTop from "./component/ScrollToTop/ScrollToTop";
import SolarSystemGame from "./component/Games/Solar";
import SpaceHistory from "./component/SpaceHistory/SpaceHistory";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wanna-play-game" element={< SolarSystemGame />} />
          <Route path="/history" element={< SpaceHistory />} />
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
