// import React, { useState, useEffect } from 'react';
// import './Solar.scss'; 
// import Navbar from '../Navbar/Navbar';
// import img from '../../image/Happy-Emoji-PNG-removebg-preview.png'

// function SolarSystemGame() {
//   const [score, setScore] = useState(0);
//   const [planet, setPlanet] = useState('');
//   const [timeLeft, setTimeLeft] = useState(60); 
//   const [gameOver, setGameOver] = useState(false);
//   const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

//   const generateRandomPlanet = () => {
//     const randomIndex = Math.floor(Math.random() * planets.length);
//     return planets[randomIndex];
//   };

//   const handlePlanetSelection = (selectedPlanet) => {
//     if (!gameOver && selectedPlanet === planet) {
//       setScore(score + 1);
//     }
//     setPlanet(generateRandomPlanet());
//   };

//   useEffect(() => {
//     if (timeLeft > 0) {
//       const countdown = setTimeout(() => {
//         setTimeLeft(timeLeft - 1);
//       }, 1000);

//       return () => clearTimeout(countdown);
//     } else {
//       setGameOver(true);
//     }
//   }, [timeLeft]);

//   return (
//     <>
//     <Navbar/>
//     <div className="solar-system-game">
//       <h1>Solar System Game</h1>
//       {!gameOver ? (
//         <>
//           <h4>Time Left: {timeLeft} seconds</h4>
//           <h5>Click on the correct planet:</h5>
//           <div className="planets">
//             {planets.map((p) => (
//               <button
//                 key={p}
//                 className={planet === p ? 'active' : ''}
//                 onClick={() => handlePlanetSelection(p)}
//               >
//                 {p}
//               </button>
//             ))}
//           </div>
//           <p>Your Score: {score}</p>
//         </>
//       ) : (
//         <div className='game-over'>
//             <img src={img} alt="" />
//             <p>Game Over! Your Final Score: {score}</p>
//         <a onClick={handleReloadClick}>Wanna Play Again</a></div>
//       )}
//     </div>
//     </>
//   );
// }

// export default SolarSystemGame;


import React, { useState, useEffect } from 'react';
import './Solar.scss';
import img from '../../image/game.gif'
import img2 from '../../image/Happy-Emoji-PNG-removebg-preview.png'
import img3 from '../../image/r.png'
import Navbar from '../Navbar/Navbar';
 const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
 
 const gameDuration = 60; 
function Solar() {
  const [score, setScore] = useState(0);
  const [targetPlanet, setTargetPlanet] = useState('');
  const [timeLeft, setTimeLeft] = useState(gameDuration);
  const [gameStarted, setGameStarted] = useState(false);
  const [gamePaused, setGamePaused] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const numberArray = [55,60,65,70,75,80];

  const [randomIndex, setRandomIndex] = useState(null);
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    if (gameStarted && !gameOver && !gamePaused && timeLeft > 0) {
      const interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else if (timeLeft === 0) {
      setGameOver(true);
    }

  }, [timeLeft, gameStarted, gamePaused, gameOver]);

  useEffect(() => {
    if (gameStarted && !gameOver) {
      const randomPlanet = planets[Math.floor(Math.random() * planets.length)];
      setTargetPlanet(randomPlanet);
    }
  }, [score, gameStarted, gameOver]);

  const handleStartClick = () => {
    const newIndex = Math.floor(Math.random() * numberArray.length);
    const newRandomNumber = numberArray[newIndex];
    setRandomIndex(newIndex);
    setRandomNumber(newRandomNumber);
    setGameStarted(true);
  };

  const handlePauseClick = () => {
    setGamePaused(!gamePaused);
  };

  const handlePlanetClick = (clickedPlanet) => {
    if (clickedPlanet === targetPlanet) {
      setScore(score + 1);
    }
  };

  const handleReloadClick = () => {
    window.location.reload();
  };

  return (
    <>
    <Navbar/>
    <div className="solar-system-game">
      <h1>Solar System Clicker Game</h1>
      {
        !gameStarted && <img src={img} alt="" />
      }
      {!gameStarted ? (
        <button onClick={handleStartClick}>Start Game</button>
      ) : (
        <>
          {gameOver ? (
            <div className='game-over'><p>Game Over! Your Score: {score}</p>
            <img src={score === randomNumber || score > randomNumber ? img2 : img3} alt="" />
            <p>{score === randomNumber || score > randomNumber ? "You are Winner!" :"You failed! Try again."}</p></div>
            
          ) : (
            <div>
              <h4>Time Left: {timeLeft} seconds</h4>
              <h5>Click on the {targetPlanet}!</h5>
              <div className="planets">
                {planets.map((planet) => (
                  <button
                    key={planet}
                    className={`${planet === targetPlanet ? 'active' : ''}`}
                    onClick={() => handlePlanetClick(planet)}
                  >
                    {planet}
                  </button>
                ))}
              </div>
              <p>Score Target: {randomNumber }</p>
              <p>Your Game Score: {score }</p>
              <div className="flexs-button">
              <button onClick={handlePauseClick}>{gamePaused ? 'Resume Game' : 'Pause Game'}</button>
              <button onClick={handleReloadClick}>Reset Game</button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
    </>
  );
}

export default Solar;
