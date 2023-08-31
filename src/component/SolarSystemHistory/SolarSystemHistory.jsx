
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import swal from "sweetalert";
import React, { useState } from 'react';

import './SolarSystemHistory.scss';
import videoOneGif2 from "../../image/giphy.gif";
const SolarSystemHistory = () => {

  const QuizData = {
    questions: [
      {
        question: "What is the widely accepted theory about how the solar system formed?",
        options: [
          "Big Bang Theory",
          "Steady State Theory",
          "Ptolemaic Theory",
          "Nebular Hypothesis"
        ],
        correctAnswer: "Nebular Hypothesis",
      },
      {
        question: "Who proposed the heliocentric model of the solar system?",
        options: ["Isaac Newton", "Aristotle", "Nicolaus Copernicus", "Galileo Galilei"],
        correctAnswer: "Nicolaus Copernicus",
      },
      {
        question: "Which space probe provided detailed images and data about the outer planets and their moons?",
        options: ["Voyager 1", "Hubble Space Telescope", "Curiosity Rover", "Apollo 11"],
        correctAnswer: "Voyager 1",
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
      <div className="SolarSystemHistory content-of-history">
        <h1>Solar System History</h1>
        <p>Our solar system is a wondrous place. Countless worlds lies spread across billions of kilometers of space, each dragged around the galaxy by our Sun like an elaborate clockwork. The smaller, inner planets are rocky</p>
        <Link to='/' className="flex-center">
          <button>
            Explore More
            <ArrowRightAltOutlinedIcon />
          </button>
        </Link>
      </div>

      <div className="how-the-universe-work histories-contents">
        <h1>Solar System
        </h1>
        <p>Our solar system is a wondrous place. Countless worlds lies spread across
          billions of kilometers of space, each dragged around the galaxy by our Sun
          like an elaborate clockwork.
          The smaller, inner planets are rocky, and at least one has life on them. The
          giant outer planets are shrouded in gas and ice; miniature solar systems in
          their own right that boast intricate rings and moons. Scattered throughout the
          solar system are small worlds like lumpy asteroids and comets and complex
          dwarf planets like Pluto and Ceres.
          How did our solar system come to be? Why are these objects where they are
          now? Here is the series of events that made and shaped our solar system, to
          the best of our knowledge, pieced together from space missions, Earth-based
          observations, and complex simulations by scientists trying to figure out our
          place in space</p>

        <div className="justify-center gif__img">
          <img src={videoOneGif2} alt="" />
        </div>
        <p>Our planetary system is located in an outer spiral arm of the Milky Way
          galaxy. Our solar system consists of our star, the Sun, and everything
          bound to it by gravity – the planets Mercury, Venus, Earth, Mars, Jupiter,
          Saturn, Uranus, and Neptune; dwarf planets such as Pluto; dozens of
          moons; and millions of asteroids, comets, and meteoroids. Beyond our own
          solar system, we have discovered thousands of planetary systems orbiting
          other stars in the Milky Way.
        </p>


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
        </div></div>
      <Footer />
    </>
  );
};

export default SolarSystemHistory;
