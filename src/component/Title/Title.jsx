import { useState } from "react";
import "./Title.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Title = () => {
  AOS.init();
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const textLines = [
    "Exploration is in our nature. We began as wanderers, and we are wanderers still. We have lingered long enough on the shores of the cosmic ocean. We are ready at last to set sail for the stars.,",
    "The lifetime of a human being is measured by decades, the lifetime of the Sun is a hundred million times longer. Compared to a star, we are like mayflies, fleeting ephemeral creatures who live out their lives in the course of a single day.",
    "This is an example of showing text one after the other.",
    "We are stardust brought to life, then empowered by the universe to figure itself out and we have only just begun.",
    "We make our world significant by the courage of our questions and the depth of our answers.",
    "When we look up at night and view the stars, everything we see is shinning because of distant nuclear fusion.",
    "The visions we offer our children shape the future.",
    "The universe is a pretty big place. If it's just us, seems like an awful waste of space.",
    "There are as many atoms in a single molecule of your DNA as there are stars in the typical galaxy. We are, each of us, a little universe.",
    "Across the sea of space, the stars are other suns",
    "By looking far out into space we are also looking far back into time, back toward the horizon of the universe, back toward the epoch of the Big Bang.",
    "Cosmos is a Greek word for the order of the universe. It is, in a way, the opposite of Chaos. It implies the deep interconnectedness of all things. It conveys awe for the intricate and subtle way in which the universe is put together.",
    "Not explaining science seems to me perverse. When you're in love, you want to tell the world.",
    "The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself.",
    "Exploration is in our nature. We began as wanderers, and we are wanderers still. We have lingered long enough on the shores of the cosmic ocean. We are ready at last to set sail for the stars",
    "The lifetime of a human being is measured by decades, the lifetime of the Sun is a hundred million times longer. Compared to a star, we are like mayflies, fleeting ephemeral creatures who live out their lives in the course of a single day.",
  ];

  const handleClick = () => {
    if (currentIndex < textLines.length) {
      setDisplayText(textLines[currentIndex] + "\n");
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="Title-screen">
      {displayText ? (
        <h1
          className="animate__animated animate__fadeInUp"
          style={{ whiteSpace: "pre-wrap" }}
        >
          {displayText}
        </h1>
      ) : (
        <h1>
          The cosmos is within us. We are made of star-stuff. We are a way for
          the universe to know itself.
        </h1>
      )}
      <h6> - Carl Sagan</h6>
      <button onClick={handleClick}>NEXT QUOTE</button>{" "}
    </div>
  );
};

export default Title;
