import React, { useState, useEffect } from "react";
import Earth from "./Earth";
import Cannon from "./Canon";
import Enemy from "./Enemy";
import Timer from "./Time";
import Scoreboard from "./ScoreBoard";
import './Game.scss'

function Game() {
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [enemies, setEnemies] = useState([]);
  const [bullets, setBullets] = useState([]);
  const [cannonPosition, setCannonPosition] = useState({ x: 375, y: 525 });

  // Function to spawn enemies at random positions
  const spawnEnemy = () => {
    const x = Math.random() * 700; // Adjust as needed for your game dimensions
    const y = Math.random() * 500; // Adjust as needed for your game dimensions
    return { x, y };
  };

  // Function to handle firing bullets
  const fireBullet = () => {
    const bulletX = cannonPosition.x + 20; // Adjust for the bullet's position
    const bulletY = cannonPosition.y; // Adjust for the bullet's position

    // Add the new bullet to the bullets array
    setBullets((prevBullets) => [...prevBullets, { x: bulletX, y: bulletY }]);
  };

  // Function to check for collisions between bullets and enemies
  const checkCollisions = () => {
    const updatedEnemies = [...enemies];
    const updatedBullets = [...bullets];

    updatedBullets.forEach((bullet, bulletIndex) => {
      updatedEnemies.forEach((enemy, enemyIndex) => {
        const dx = bullet.x - enemy.x;
        const dy = bullet.y - enemy.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 25) {
          // Collision detected
          setScore((prevScore) => prevScore + 1);

          // Remove the enemy and bullet from their respective arrays
          updatedEnemies.splice(enemyIndex, 1);
          updatedBullets.splice(bulletIndex, 1);
        }
      });
    });

    // Update state with the new arrays
    setEnemies(updatedEnemies);
    setBullets(updatedBullets);
  };

  // Function to handle game over
  const handleGameOver = () => {
    alert("Game Over! Your Score: " + score);
    // Reset the game or perform other game over actions
  };

  // Function to handle mouse movement and update cannon position
  const handleMouseMove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    setCannonPosition({ x: mouseX - 20, y: mouseY - 20 });
  };

  // Function to handle mouse click and fire bullets
  const handleMouseClick = () => {
    fireBullet();
  };

  // Use useEffect to handle game logic
  useEffect(() => {
    // Spawn enemies at regular intervals
    const enemyInterval = setInterval(() => {
      const newEnemy = spawnEnemy();
      setEnemies((prevEnemies) => [...prevEnemies, newEnemy]);
    }, 1000); // Adjust spawn interval as needed

    // Check for collisions and update score
    const collisionInterval = setInterval(() => {
      checkCollisions();
    }, 100); // Adjust collision check interval as needed

    // Countdown timer
    const timerInterval = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
      if (timeRemaining <= 0) {
        clearInterval(enemyInterval);
        clearInterval(collisionInterval);
        clearInterval(timerInterval);
        handleGameOver();
      }
    }, 1000);

    // Handle mouse click events
    window.addEventListener("click", handleMouseClick);

    return () => {
      clearInterval(enemyInterval);
      clearInterval(collisionInterval);
      clearInterval(timerInterval);
      // Remove mouse click event listener on cleanup
      window.removeEventListener("click", handleMouseClick);
    };
  }, [timeRemaining]);

  return (
    <div className="game-container" onMouseMove={handleMouseMove}>
      <Earth />
      <Cannon position={cannonPosition} />
      {enemies.map((enemy, index) => (
        <Enemy key={index} x={enemy.x} y={enemy.y} />
      ))}
      {bullets.map((bullet, index) => (
        <div key={index} className="bullet" style={{ left: bullet.x, top: bullet.y }} />
      ))}
      <Timer timeRemaining={timeRemaining} />
      <Scoreboard score={score} />
    </div>
  );
}

export default Game;


