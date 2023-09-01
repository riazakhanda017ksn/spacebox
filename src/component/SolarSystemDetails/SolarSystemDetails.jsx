import { Link, useParams } from "react-router-dom";
import React, { useState } from 'react';
import { items } from "../Data/Data";
import Navbar from "../Navbar/Navbar";
import "./SolarSystemDetails.scss";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import swal from "sweetalert";
import Footer from "../Footer/Footer";

const SolarSystemDetails = () => {
  const { id } = useParams();
  const solar = items.find((solar) => solar.id === id);
  const { name, history1, history2, history3, history4, img, banner,QuizData } = solar;
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
    }}
  return (
    <>
      <Navbar />
      <div
        className="solar-text content-of-history"
        style={{
          background: `linear-gradient(360deg, rgba(0, 0, 0, 0.9294117647), rgba(0, 0, 0, 0.349)),url(${banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          padding: "180px 20px",
          backgroundPosition: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1>{name}</h1>
        <p>{history1.slice(0, 120)}...</p>
        <Link to="/" className="flex-center">
          <button>
            Explore More
            <ArrowRightAltOutlinedIcon />
          </button>
        </Link>
      </div>
      <div className="solar-systems ">
        <h3>History of {name}</h3>
        <p>{history1}</p>
        <p>{history2}</p>
        <div className="img-center">
          <img src={img} alt="" />
        </div>
        <p>{history3}</p>
        <p>{history4}</p>
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
      <Footer/>
    </>
  );
};

export default SolarSystemDetails;
