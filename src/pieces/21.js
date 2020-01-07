import React from "react";

const TwentyOne = ({ stageArea }) => {
  return (
    <div
      className="piece-container"
      id="piece-21"
      style={{ gridArea: stageArea }}
    >
      <div className="piece__single piece__single__1" />
      <div className="piece__single piece__single__6" />
      <div className="piece__single piece__single__11" />
      <div className="piece__single piece__single__12" />
    </div>
  );
};

export default TwentyOne;
