import React, { useState } from "react";

export default function SlidingInput({ title, minLabel, maxLabel, min, max }) {
  const SliderThumb = ({ translateStart, left, right }) => {
    const [min, setMin] = useState(0);
    // get the real max from a selector that gives you the max salary from the jobs offered
    const [max, setMax] = useState(100);
    const [translation, setTranslation] = useState(translateStart);

    const style = {
      position: "absolute",
      zIndex: 0,
      cursor: "grab",
      touchAction: " none",
      userSelect: "none",
      height: "24px",
      width: "24px",
      borderRadius: "50%",
      backgroundColor: "rgb(255, 255, 255)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "none !important",
      outline: "none !important",
      transform: `translate(${left ? -12 : 278}px, -9.5px)`,
    };

    return <div className="slider" tabIndex={0} style={style}></div>;
  };

  const roleDivStyles = {
    transform: "scale(1)",
    cursor: "inherit",
    height: "15px",
    display: "flex",
    width: "290px",
  };

  const divStyles = {
    height: "5px",
    width: "100%",
    borderRadius: "4px",
    background:
      "linear-gradient(to right, rgb(204, 204, 204) 0%, rgb(204, 204, 204) 0%, rgb(0, 176, 116) 0%, rgb(0, 176, 116) 100%, rgb(204, 204, 204) 100%, rgb(204, 204, 204) 100%)",
    alignSelf: "center",
  };

  return (
    <div className="range-slider" style={{ marginBottom: "2.5rem" }}>
      <div role="button" tabIndex="0" style={{ roleDivStyles }}>
        <div style={divStyles}>
          <SliderThumb left={true} />
          <SliderThumb right={true} />
        </div>
      </div>
    </div>
  );
}
