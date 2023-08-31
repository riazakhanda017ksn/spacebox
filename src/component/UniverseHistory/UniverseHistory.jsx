import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './UniverseHistory.scss'
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import videoOneGif from "../../image/sv8.gif";
import videoOne from "../../video/pexels_videos_4147 (720p).mp4";
import swal from "sweetalert";
import React, { useState } from 'react';


const UniverseHistory = () => {
  const QuizData = {
    questions: [
      {
        question: "What is the name of our galaxy?",
        options: ["Andromeda", "Whirlpool", "Milky Way", "Orion"],
        correctAnswer: "Milky Way",
      },
      {
        question: "What is the phenomenon where light is bent due to gravity of massive objects?",
        options: ["Refraction", "Reflection", "Diffraction", "Gravitational Lensing"],
        correctAnswer: "Gravitational Lensing",
      },
      {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        correctAnswer: "Mars",
      }
    ],
  };


  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const currentQuestion = QuizData.questions[currentQuestionIndex];

  const handleOptionClick = (option) => {
    setSelectedAnswer(option);
  };

  const handleAnswerSubmit = () => {
    setShowAlert(true);

    if (selectedAnswer === currentQuestion.correctAnswer) {
      swal(
        "Correct!",
        "Keep learning dear",
        "success"
      );
    } else {

      swal("Incorrect!", "Please try again dear", "danger");
    }

    // Move to the next question
    setSelectedAnswer('');
    setShowAlert(false);
    if (currentQuestionIndex < QuizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      swal(
        "Quiz Finished!",
        "You are brilliant!",
        "success"
      );
    }
  }
  return (
    <>
      <Navbar />
      <div className="history-banner content-of-history">
        <div className="history-banner content-of-history">
          <h1>History Of Our Space</h1>
          <h4>How was the space Created?</h4>
          <p>During the Big Bang, all of the space, time, matter, and energy in the Universe was
            created. This giant explosion hurled matter in all directions and caused space itself to
            expand. As the Universe cooled, the material in it combined to form galaxies, stars, and
            planets.</p>
          <Link to='/' className="flex-center">
            <button>
              Explore More
              <ArrowRightAltOutlinedIcon />
            </button>
          </Link>
        </div>
      </div>
      <div className="how-the-universe-work histories-contents">
        <h1>How does the <br /> Universe work?
        </h1>
        <p>How does the universe work? Understanding the universe's birth and its ultimate
          fate are essential first steps to unveil the mechanisms of how it works. This, in turn,
          requires knowledge of its history, which started with the Big Bang.</p>
        <p>Previous NASA investigations with the Cosmic Microwave Background Explorer
          (COBE) and the Wilkinson Microwave Anisotropy Probe (WMAP) have measured the
          radiation from the universe when it was only 300,000 years old, confirming
          theoretical models of its early evolution. With its improved sensitivity and resolution,
          ESA's Planck observatory probed the long wavelength sky to new depths during its
          2-year survey, providing stringent new constraints on the physics of the first few
          moments of the universe. Moreover, the possible detection and investigation of the
          so-called B-mode polarization pattern on the Cosmic Microwave Background (CMB)
          impressed by gravitational waves during those initial instants will provide clues for
          how the large-scale structures we observe today came to be.s</p>
        <div className="video">
          <video src={videoOne} muted loop autoPlay></video>
        </div>
        <p>Observations with the Hubble Space Telescope and other observatories showed
          that the universe is expanding at an ever-increasing rate, implying that some day - in
          the very distant future - anyone looking at the night sky would see only our Galaxy
          and its stars. The billions of other galaxies will have receded beyond detection by
          these future observers. The origin of the force that is pushing the universe apart is a
          mystery, and astronomers refer to it simply as "dark energy". This new, unknown
          component, which comprises ~68% of the matter-energy content of the universe,
          will determine the ultimate fate of all. Determining the nature of dark energy,
          it's possible history over cosmic time, is perhaps the most important quest of
          astronomy for the next decade and lies at the intersection of cosmology,
          astrophysics, and fundamental physics.
          Knowing how the laws of physics behave at the extremes of space and time, near a
          black hole or a neutron star, is also an important piece of the puzzle we must obtain
          if we are to understand how the universe works. Current observatories operating at
          X-ray and gamma-ray energies, such as the Chandra X-ray Observatory, NeuStar,
          Fermi Gamma-ray Space Telescope, and ESA's XMM-Newton, are producing a
          wealth of information on the conditions of matter near compact sources, in extreme
          gravity fields unattainable on Earth.</p>

        <br />

        <h1>How did we get here?
        </h1>
        <p>How did we get here? In order to understand how the universe has changed from its
          initial simple state following the Big Bang (only cooling elementary particles like
          protons and electrons) into the magnificent universe we see as we look at the night
          sky, we must understand how stars, galaxies and planets are formed.
          There are many questions associated with the creation and evolution of the major
          constituents of the cosmos. A basic question astronomers must address is, how did
          the universe create its first stars and galaxies? Once these entities were created,
          how did they influence subsequent galaxy, star and planet formation? This is an
          important question, because these later objects are made of elements that can only
          have been created by the first generation of stars.</p>
        <p>It is still unknown whether the universe created black holes with the first generation
          of stars or whether these exotic objects were created by the first generation of stars.
          Because black holes represent the most extreme physical conditions of spacetime
          and generate some of the most energetic phenomena following the Big Bang, they
          are the ultimate physical laboratories for testing theories of the universe.
        </p>
        <div className="justify-center">

          <img src={videoOneGif} alt="" /></div>
        <p>We now know that our universe has a "foamy" structure. The galaxies and clusters of
          galaxies that make up the visible universe are concentrated in a complex scaffold
          that surrounds a network of enormous cosmic voids. However, in addition to the
          "normal" matter that makes up the visible parts of the universe, scientists have
          discovered that there are vast amounts of unseen matter. This so-called, "dark
          matter" makes up roughly 27% of the matter-energy content of the universe, while
          the visible pieces account for only about 5% of the total. Clearly, if we hope to
          understand the structure of the universe and the processes by which it formed and
          evolves, we must first understand the distribution of this important but unseen dark
          matter and the ways in which it interacts with and influences normal matter.

          Though astronomers have been studying stars for thousands of years, it is only in
          the past 35 or so years that they have been able to employ instruments that detect
          light across the entire electromagnetic spectrum–from radio waves to gamma rays–
          to peer into the dusty clouds where stars are born in our own Galaxy. If we are to
          comprehend how the universe makes stars–and planets that orbit them today–we
          must continue these studies with ever more powerful telescopes</p>


        <br />

        {/*  */}
        <div className="quiz-container">
          <h1>Quiz Time!</h1>
          {currentQuestion && (
            <div className="question">
              <p>{currentQuestion.question}</p>
              <div className="options">
                {currentQuestion.options.map((option, index) => (
                  <button
                    id="edit"
                    key={index}
                    className={selectedAnswer === option ? 'selected' : ''}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <button onClick={handleAnswerSubmit}>Submit Answer</button>
              {showAlert && selectedAnswer === '' && (
                <p className="error-message">Please select an answer.</p>
              )}
            </div>
          )}
        </div>

      </div>

      <Footer />

    </>
  );
};

export default UniverseHistory;
