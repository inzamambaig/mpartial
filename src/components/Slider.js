import React from "react";

const Slider = ({ setValue }) => {
  return (
    <input
      type="range"
      min="0"
      max="1000000"
      className="slider"
      id="myRange"
      step="50000"
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default Slider;
