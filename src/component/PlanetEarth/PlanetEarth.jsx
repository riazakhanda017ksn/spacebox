
import './PlanetEarth.scss'
import video2 from "../../video/ee.mp4";
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import swal from "sweetalert";
import React, { useState } from 'react';
const PlanetEarth = () => {

    const QuizData = {
        questions: [
            {
                question: "What era is known as the 'Age of Reptiles'?",
                options: ["Jurassic Era", "Cretaceous Era", "Triassic Era", "Permian Era"],
                correctAnswer: "Mesozoic Era",
            },
            {
                question: "Which supercontinent existed during the late Paleozoic and early Mesozoic eras?",
                options: ["Gondwana", "Laurasia", "Pangaea", "Eurasia"],
                correctAnswer: "Pangaea",
            },
            {
                question: "What geological event is responsible for the mass extinction that wiped out the dinosaurs?",
                options: ["Supervolcanoes", "Impact from an asteroid", "Rapid climate change", "Earthquake"],
                correctAnswer: "Impact from an asteroid",
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
            <div className="PlanetEarth content-of-history ">
                <h1>The History of
                    Planet Earth
                </h1>
                <p>The history of Earth concerns the development of planet Earth from its formation to the present
                    day. Nearly all branches of natural science have contributed to understanding of the main.</p>

                <Link to='/' className="flex-center">
                    <button>
                        Explore More
                        <ArrowRightAltOutlinedIcon />
                    </button>
                </Link>
            </div>

            <div className="how-the-universe-work histories-contents">
                <h1>The History of
                    Planet Earth
                </h1>

                <li>The history of Earth concerns the development of planet Earth from its formation to the present
                    day.[1][2] Nearly all branches of natural science have contributed to understanding of the main events
                    of Earth's past, characterized by constant geological change and biological evolution.
                </li>

                <li>The geological time scale (GTS), as defined by international convention,[3] depicts the large spans of
                    time from the beginning of the Earth to the present, and its divisions chronicle some definitive
                    events of Earth history. (In the graphic, Ma means "million years ago".) Earth formed around 4.54
                    billion years ago, approximately one-third the age of the universe, by accretion from the solar
                    nebula.
                    [4][5][6] Volcanic outgassing probably created the primordial atmosphere and then the ocean,
                    but the early atmosphere contained almost no oxygen. Much of the Earth was molten because of
                    frequent collisions with other bodies which led to extreme volcanism. While the Earth was in its
                    earliest stage (Early Earth), a giant impact collision with a planet-sized body named Theia is thought
                    to have formed the Moon. Over time, the Earth cooled, causing the formation of a solid crust, and
                    allowing liquid water on the surface. In June 2023, scientists reported evidence that the planet Earth
                    may have formed in just three million years, much faster than the 10−100 million years thought
                    earlier.[7][8]
                </li>

                <li>The Hadean eon represents the time before a reliable (fossil) record of life; it began with the
                    formation of the planet and ended 4.0 billion years ago. The following Archean and Proterozoic eons
                    produced the beginnings of life on Earth and its earliest evolution. The succeeding eon is the
                    Phanerozoic, divided into three eras: the Palaeozoic, an era of arthropods, fishes, and the first life on
                    land; the Mesozoic, which spanned the rise, reign, and climactic extinction of the non-avian
                    dinosaurs; and the Cenozoic, which saw the rise of mammals. Recognizable humans emerged at
                    most 2 million years ago, a vanishingly small period on the geological scale.</li>

                <div className="video need-mt">
                    <video src={video2} muted loop autoPlay></video>
                </div>
                <li>The earliest undisputed evidence of life on Earth dates at least from 3.5 billion years ago,[9][10][11] during
                    the Eoarchean Era, after a geological crust started to solidify following the earlier molten Hadean
                    Eon. There are microbial mat fossils such as stromatolites found in 3.48-billion-year-old sandstone
                    discovered in Western Australia.
                    [12][13][14] Other early physical evidence of a biogenic substance is
                    graphite in 3.7-billion-year-old metasedimentary rocks discovered in southwestern Greenland[15] as
                    well as "remains of biotic life" found in 4.1-billion-year-old rocks in Western Australia.[16][17] According
                    to one of the researchers, "If life arose relatively quickly on Earth … then it could be common in the
                    universe."[16]

                </li>

                <li>Photosynthetic organisms appeared between 3.2 and 2.4 billion years ago and began enriching the
                    atmosphere with oxygen. Life remained mostly small and microscopic until about 580 million years
                    ago, when complex multicellular life arose, developed over time, and culminated in the Cambrian
                    Explosion about 538.8 million years ago. This sudden diversification of life forms produced most of
                    the major phyla known today and divided the Proterozoic Eon from the Cambrian Period of the
                    Paleozoic Era. It is estimated that 99 percent of all species that have ever lived on Earth, over five
                    billion,[18] have gone extinct.
                    [19][20] Estimates on the number of Earth's current species range from 10
                    million to 14 million,[21] of which about 1.2 million are documented, but over 86 percent have not
                    been described.[22] However, it was recently claimed that 1 trillion species currently live on Earth,
                    with only one-thousandth of one percent described.[23]
                    • The Earth's crust has constantly changed since its formation, as has life since its first appearance.
                    Species continue to evolve, taking on new forms, splitting into daughter species, or going extinct in
                    the face of ever-changing physical environments. The process of plate tectonics continues to shape
                    the Earth's continents and oceans and the life they harbor.</li>

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

export default PlanetEarth;
