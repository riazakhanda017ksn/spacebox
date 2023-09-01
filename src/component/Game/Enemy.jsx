// // Enemy.js
import React from "react";

function Enemy({ x, y }) {
  return <div className="enemy" style={{ left: x, top: y }}></div>;
}

export default Enemy;