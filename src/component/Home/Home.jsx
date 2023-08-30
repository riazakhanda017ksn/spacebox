import Navbar from "../Navbar/Navbar";
import Slider from "../Banner/Banner";
import Title from "../Title/Title";
import SolarSystem from "../SolarSystem/SolarSystem";
import SolarAnimatedVideo from "../SolarAnimatedVideo/SolarAnimatedVideo";
import OurObjective from "../OurObjective/OurObjective";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Title />
      <SolarSystem />
      <SolarAnimatedVideo />
      <OurObjective />
      <Footer />
    </>
  );
};

export default Home;
