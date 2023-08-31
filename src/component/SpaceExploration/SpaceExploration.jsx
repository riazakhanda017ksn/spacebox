
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './SpaceExploration.scss'
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import videoOneGif22 from "../../image/German-deck-missile-V-2-aircraft-carrier-Atlantic.webp";
import videoOneGif222 from "../../image/download.jpg";
import videoOneGif2222 from "../../image/fffff.jpg";
import videoOneGif22222 from "../../image/man.jpg";
import videoOneGif222222 from "../../image/moonjpg.jpg";
import swal from "sweetalert";
import React, { useState } from 'react';

const SpaceExploration = () => {
    const QuizData = {
        questions: [
          {
            question: "Which country launched the first artificial satellite, Sputnik 1?",
            options: ["USA", "Soviet Union", "China", "France"],
            correctAnswer: "Soviet Union",
          },
          {
            question: "Who was the first human to travel into space?",
            options: ["Yuri Gagarin", "Neil Armstrong", "John Glenn", "Buzz Aldrin"],
            correctAnswer: "Yuri Gagarin",
          },
          {
            question: "Which space agency successfully landed humans on the Moon with the Apollo program?",
            options: ["NASA", "ESA", "Roscosmos", "CNSA"],
            correctAnswer: "NASA",
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
            <div className="history-banners content-of-history">
                <h1>Space Exploration </h1>
                <p>The first rocket that was able to fly high enough to be considered ‘in space’ was the V-2
                    missile.This was a weapon developed by German Scientists in the Second World War.</p>
                <Link to='/' className="flex-center">
                    <button>
                        Explore More
                        <ArrowRightAltOutlinedIcon />
                    </button>
                </Link>
            </div>
            <div className="how-the-universe-work histories-contents">
                <h1>History Of Space Exploration </h1>
                <li>The first rocket that was able to fly high enough to be considered ‘in space’ was the V-2
                    missile </li>
                <img className='image-space' src={videoOneGif22} alt="" />
                <li>This was a weapon developed by German Scientists in the Second World War </li>
                <li>The technology was used for rocket in early space exploration</li>
                <img className='image-space' src={videoOneGif222} alt="" />
                <li>In response, the United States launched its first satellite, EXPLORE-1, on January 31,
                    1958. This started the Space Race </li>
                <h1>First Life In Space</h1>
                <li>Just a few weeks after successful launch of SPUTNIK-1, the Soviet Union launched
                    another satellite. SPUTNIK-2
                </li>
                <img className='image-space' src={videoOneGif2222} alt="" />
                <li>SPUTNIK-2 had a passenger for its journey; a dog named LAIKA .</li>
                <h1>First Human In Space</h1>
                <li>On April 12 1961, Russian astronaut Yuri Gagarin became the first human in space,
                    orbiting the Earth once
                </li>
                <img className='image-space' src={videoOneGif22222} alt="" />
                <li>Gagarin traveled in a spacecraft named VOSTOK-1</li>
                <h1>First man on moon</h1>
                <li>In 1969, Neil Armstrong became the first man to walk on Moon </li>
                <img className='image-space' src={videoOneGif222222} alt="" />
                <li>The Space Shuttle name was Apollo 11</li>

                <h1>Names of space technology</h1>
                <li>On board-I.S.S</li>
                <li>Curiosity (Rover)</li>

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

            </div><Footer />
        </>
    );
};

export default SpaceExploration;
