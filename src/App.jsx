import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./component/Home/Home";
import SolarSystemDetails from "./component/SolarSystemDetails/SolarSystemDetails";
import ScrollTop from "./component/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
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
