import React from "react";

const Arrow = ({ direction, arrow }) => {
  return (
    <div className="arrow-wrapper">
      <div className="round" onClick={() => arrow(direction)}>
        <div id="cta">
          <span className={`arrow ${direction}`} />
        </div>
      </div>
    </div>
  );
};
export default Arrow;
