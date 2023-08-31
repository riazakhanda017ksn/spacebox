
import './StarHistory.scss'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import swal from "sweetalert";
import React, { useState } from 'react';
import videoOneGif22 from "../../image/starts.jpg";
import videoOneGif23 from "../../image/giphysss.gif";

const StarHistory = () => {
    const QuizData = {
        questions: [
            {
                question: "What is the process by which stars convert hydrogen into helium, releasing energy?",
                options: ["Fusion", "Fission", "Evaporation", "Condensation"],
                correctAnswer: "Fusion",
            },
            {
                question: "Which famous astronomer proposed the Hertzsprung-Russell diagram to classify stars?",
                options: ["Carl Sagan", "Edwin Hubble", "Andreas Cellarius", "Ejnar Hertzsprung and Henry Norris Russell"],
                correctAnswer: "Ejnar Hertzsprung and Henry Norris Russell",
            },
            {
                question: "What type of star is the most common in the universe?",
                options: ["White Dwarf", "Red Giant", "Main Sequence", "Neutron Star"],
                correctAnswer: "Main Sequence",
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
            <div className="StarHistory content-of-history">
                <h1>Stars History</h1>
                <p>A star is a luminous ball of gas, mostly hydrogen and
                    helium, held together by its own gravity. Nuclear fusion reactions in its core support the
                    star against gravity and produce photons and heat, as well as small amounts of heavier
                    elements. The Sun is the closest star to Earth.</p>
                <Link to='/' className="flex-center">
                    <button>
                        Explore More
                        <ArrowRightAltOutlinedIcon />
                    </button>
                </Link>
            </div>

            <div className="how-the-universe-work histories-contents">
                <h1>What Are Stars
                </h1>
                <h3>What is a star?</h3>
                <p>But just what is a star, exactly? A star is a luminous ball of gas, mostly hydrogen and
                    helium, held together by its own gravity. Nuclear fusion reactions in its core support the
                    star against gravity and produce photons and heat, as well as small amounts of heavier
                    elements. The Sun is the closest star to Earth.</p>
                <div className="justify-center gif__img">
                    <img className='images-space' src={videoOneGif22} alt="" />
                </div>

                <h3>Where do stars come from?</h3>
                <p>According to current star formation theory, stars are born as clumps within gigantic gas clouds
                    that collapse in on themselves. The cloud’s material heats up as it falls inward under the force
                    of its own gravity.
                    When the gas reaches about 10 million K (18 million °F), hydrogen nuclei begin to fuse into
                    helium nuclei, and the star is born. Energy from nuclear fusion radiates outward from the
                    center of the burgeoning star, and gradually halts the gas cloud’s collapse.
                    • Types Of Stars
                    A star’s color relies on its temperature: hotter stars emit bluer light and cooler stars emit
                    redder light. Temperature is also correlated to mass. Red dwarf stars have as little as 0.075
                    solar masses and a visible surface temperature less than 4,000 K. The most massive star known
                    is R136a1, a Wolf-Rayed star 265 times the Sun’s mass — its visible surface temperature hovers
                    at a searing 50,000 K.
                    The most massive (and hottest) stars exhaust their energy supply within a few million years,
                    while tiny and cool red dwarf stars can keep on burning for many billions of years.

                </p>

                <h3>Main sequence star</h3>
                <p>A star the size of our Sun requires about 50 million years to mature from the
                    beginning of the collapse to adulthood. Our Sun will stay in this mature phase (on
                    the main sequence as shown in the Hertzsprung-Russell Diagram) for approximately
                    10 billion years.
                    Stars are fueled by the nuclear fusion of hydrogen to form helium deep in their
                    interiors. The outflow of energy from the central regions of the star provides the
                    pressure necessary to keep the star from collapsing under its own weight, and the
                    energy by which it shines.
                    As shown in the Hertzsprung-Russell Diagram, Main Sequence stars span a wide
                    range of luminosities and colors and can be classified according to those
                    characteristics. The smallest stars, known as red dwarfs, may contain as little as 10%
                    the mass of the Sun and emit only 0.01% as much energy, glowing feebly at
                    temperatures between 3000-4000K. Despite their diminutive nature, red dwarfs are
                    by far the most numerous stars in the Universe and have lifespans of tens of billions
                    of years.</p>

                <p>On the other hand, the most massive stars, known as hypergiants, may be 100 or
                    more times more massive than the Sun, and have surface temperatures of more
                    than 30,000 K. Hypergiants emit hundreds of thousands of times more energy than
                    the Sun, but have lifetimes of only a few million years. Although extreme stars such
                    as these are believed to have been common in the early Universe, today they are
                    extremely rare - the entire Milky Way galaxy contains only a handful of hypergiants.</p>
                <div className="justify-center gif__img">
                    <img className='images-space' src={videoOneGif23} alt="" />

                </div>
                <br />

                <h3>Stars and their fates </h3>
                <p>In general, the larger a star, the shorter its life, although all but the most massive
                    stars live for billions of years. When a star has fused all the hydrogen in its core,
                    nuclear reactions cease. Deprived of the energy production needed to support it,
                    the core begins to collapse into itself and becomes much hotter. Hydrogen is still
                    available outside the core, so hydrogen fusion continues in a shell surrounding the
                    core. The increasingly hot core also pushes the outer layers of the star outward,
                    causing them to expand and cool, transforming the star into a red giant.
                    If the star is sufficiently massive, the collapsing core may become hot enough to
                    support more exotic nuclear reactions that consume helium and produce a variety
                    of heavier elements up to iron. However, such reactions offer only a temporary
                    reprieve. Gradually, the star's internal nuclear fires become increasingly unstable -
                    sometimes burning furiously, other times dying down. These variations cause the
                    star to pulsate and throw off its outer layers, enshrouding itself in a cocoon of gas
                    and dust. What happens next depends on the size of the core.
                </p>

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



            <Footer />

        </>
    );
};

export default StarHistory;
