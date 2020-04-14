import React from "react";

// create random color of boxes
const red = Math.round(Math.random() * 255 + 1);

const green = Math.round(Math.random() * 255 + 1);

const blue = Math.round(Math.random() * 255 + 1);

// create a color box
const Colors = () => {
  return (
    <div
      className="color-box"
      style={{
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        width: "100px",
        height: "100px",
      }}
    ></div>
  );
};

export default Colors;
