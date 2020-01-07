import React from "react";

const Seventeen = ({ stageArea }) => {
  return (
    <div
      className="piece-container"
      id="piece-17"
      style={{ gridArea: stageArea }}
    >
      <div className="piece__single piece__single__21" />
      <div className="piece__single piece__single__17" />
      <div className="piece__single piece__single__13" />
      <div className="piece__single piece__single__9" />
      <div className="piece__single piece__single__5" />
    </div>
  );
};

export default Seventeen;
