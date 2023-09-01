import React from "react";

function Cannon({ position, onClickFire }) {
  return (
    <div className="cannon" style={{ left: position.x, top: position.y }}>
      <div className="muzzle" onClick={onClickFire} />
    </div>
  );
}

export default Cannon;
