import Navbar from '../Navbar/Navbar';
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import './SpaceHistory.scss'
import { Link } from 'react-router-dom';
import videoOne from "../../video/pexels_videos_4147 (720p).mp4";
import videoOneGifs from "../../image/jupis.jpg";
import swal from "sweetalert";
import React, { useState } from 'react';
import Footer from '../Footer/Footer';

function SpaceHistory() {
  const QuizData = {
    questions: [
      {
        question: "Which astronomer first realized that the Milky Way is just one of many galaxies?",
        options: ["Ptolemy", "Aristotle", "Edwin Hubble", "Nicolaus Copernicus"],
        correctAnswer: "Edwin Hubble",
      },
      {
        question: "What is the age of the Milky Way galaxy, roughly?",
        options: ["2 billion years", "4.6 billion years", "13.8 billion years", "50 billion years"],
        correctAnswer: "13.8 billion years",
      },
      {
        question: "What is the name of the galaxy that will eventually collide with the Milky Way?",
        options: ["Andromeda Galaxy", "Triangulum Galaxy", "Sculptor Galaxy", "Whirlpool Galaxy"],
        correctAnswer: "Andromeda Galaxy",
      },
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
      <div className="history-banner">
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
      <div className="how-the-universe-work">



        <h1>What is the Milky <br /> way
          Galaxy</h1>
        <h3>What is Milky way Galaxy?</h3>
        <p>Imagine the Universe! Our Sun (a star) and all the planets around it are part of a galaxy
          known as the Milky Way Galaxy. A galaxy is a large group of stars, gas, and dust bound
          together by gravity. They come in a variety of shapes and sizes. The Milky Way is a
          <span style={{ fontWeight: "600" }}> large barred spiral galaxy</span>.
        </p>

        <div className="video">
          <video src={videoOne} muted loop autoPlay></video>
        </div>
        <br />
        <h1>Comparisons Between Planets
        </h1>
        <h3>Jupiter Planet</h3>
        <p>Jupiter has a long history of surprising scientists – all the way back to 1610 when
          Galileo Galilei found the first moons beyond Earth. That discovery changed the way we
          see the universe.
          Fifth in line from the Sun, Jupiter is, by far, the largest planet in the solar system – more
          than twice as massive as all the other planets combined.
          Jupiter's familiar stripes and swirls are actually cold, windy clouds of ammonia and
          water, floating in an atmosphere of hydrogen and helium. Jupiter’s iconic Great Red
          Spot is a giant storm bigger than Earth that has raged for hundreds of years.
        </p>
        <h3>Jupiter Exploration </h3>
        <p>While Jupiter has been known since ancient times, the first detailed
          observations of this planet were made by Galileo Galilei in 1610 with a
          small telescope. More recently, this planet has been visited by passing
          spacecraft, orbiters and probes.
          Pioneer 10 and 11 and Voyagers 1 and 2 were the first to fly by Jupiter in
          the 1970s, and since then we’ve sent Galileo to orbit the gas giant and drop
          a probe into its atmosphere. Cassini took detailed photos of Jupiter on its
          way to neighboring Saturn, as did New Horizons on its quest for Pluto and
          the Kuiper Belt. NASA’s Juno spacecraft, which arrived in the Jovian
          system in July 2016, is currently studying the giant planet from orbit</p>
        <img className='images-space' src={videoOneGifs} alt="" />

        <h3>Significant Events</h3>
        <li style={{ paddingTop: '14px' }}>
          <span style={{ fontWeight: "600" }}>1610:</span> Galileo Galilei makes the first detailed observations of Jupiter.
        </li>

        <li >
          <span style={{ fontWeight: "600" }}>1973:</span> Pioneer 10 becomes the first spacecraft to cross the asteroid
          belt and fly past Jupiter.

        </li>

        <li >
          <span style={{ fontWeight: "600" }}>1979:</span> Voyagers 1 and 2 discover Jupiter's faint rings, several new
          moons and volcanic activity on Io's surface.

        </li>

        <li >
          <span style={{ fontWeight: "600" }}>1992: </span> Ulysses swung by Jupiter on Feb. 8, 1992. The giant planet's
          gravity bent the spacecraft's flight path southward and away from the
          ecliptic plane, putting the probe into a final orbit that would take it
          over the sun's south and north poles.
        </li>


        <li >
          <span style={{ fontWeight: "600" }}>1994: </span> Astronomers observe as pieces of comet Shoemaker-Levy 9
          collide with Jupiter's southern hemisphere.
        </li>

        <li >
          <span style={{ fontWeight: "600" }}>1995-2003: </span> The Galileo spacecraft drops a probe into Jupiter's
          atmosphere and conducts extended observations of Jupiter and its
          moons and rings.
        </li>


        <li >
          <span style={{ fontWeight: "600" }}>2000: </span> Cassini makes its closest approach to Jupiter at a distance of
          approximately 6.2 million miles (10 million kilometers), taking a highly
          detailed true color mosaic photo of the gas giant.
        </li>

        <li >
          <span style={{ fontWeight: "600" }}>2007: </span> Images taken by NASA's New Horizons spacecraft, on the way
          to Pluto, show new perspectives on Jupiter's atmospheric storms, the
          rings, volcanic Io, and icy Europa.
        </li>

        <li >
          <span style={{ fontWeight: "600" }}>2009: </span> On 20 July, almost exactly 15 years after fragments of comet
          Shoemaker-Levy slammed into Jupiter, a comet or asteroid crashes
          into the giant planet's southern hemisphere.
        </li>

        <li >
          <span style={{ fontWeight: "600" }}>2011 </span> Juno launches to examine Jupiter's chemistry, atmosphere,
          interior structure and magnetosphere.
        </li>
        <li >
          <span style={{ fontWeight: "600" }}>2016: </span> NASA's Juno spacecraft arrives at Jupiter, conducting an indepth investigation of the planet's atmosphere, deep structure and
          magnetosphere for clues to its origin and evolution.

        </li>

        <br />

        <br />
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
    <Footer/>
    </>
  );
}

export default SpaceHistory;
