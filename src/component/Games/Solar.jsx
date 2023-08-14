import React, { useState, useEffect } from 'react';
import './Solar.scss'; 
import Navbar from '../Navbar/Navbar';
import img from '../../image/Happy-Emoji-PNG-removebg-preview.png'

function SolarSystemGame() {
  const [score, setScore] = useState(0);
  const [planet, setPlanet] = useState('');
  const [timeLeft, setTimeLeft] = useState(60); 
  const [gameOver, setGameOver] = useState(false);
  const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

  const generateRandomPlanet = () => {
    const randomIndex = Math.floor(Math.random() * planets.length);
    return planets[randomIndex];
  };

  const handlePlanetSelection = (selectedPlanet) => {
    if (!gameOver && selectedPlanet === planet) {
      setScore(score + 1);
    }
    setPlanet(generateRandomPlanet());
  };

  useEffect(() => {
    if (timeLeft > 0) {
      const countdown = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearTimeout(countdown);
    } else {
      setGameOver(true);
    }
  }, [timeLeft]);

  return (
    <>
    <Navbar/>
    <div className="solar-system-game">
      <h1>Solar System Game</h1>
      {!gameOver ? (
        <>
          <h4>Time Left: {timeLeft} seconds</h4>
          <h5>Click on the correct planet:</h5>
          <div className="planets">
            {planets.map((p) => (
              <button
                key={p}
                className={planet === p ? 'active' : ''}
                onClick={() => handlePlanetSelection(p)}
              >
                {p}
              </button>
            ))}
          </div>
          <p>Your Score: {score}</p>
        </>
      ) : (
        <div className='game-over'>
            <img src={img} alt="" />
            <p>Game Over! Your Final Score: {score}</p>
        <a href="">Wanna Play Again</a></div>
      )}
    </div>
    </>
  );
}

export default SolarSystemGame;
