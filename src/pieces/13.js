import React from "react";

const Thirteen = ({ stageArea }) => {
  return (
    <div
      className="piece-container"
      id="piece-13"
      style={{ gridArea: stageArea }}
    >
      <div className="piece__single" />
      <div className="piece__single piece__single__7" />
      <div className="piece__single piece__single__13" />
      <div className="piece__single piece__single__19" />
      <div className="piece__single piece__single__25" />
    </div>
  );
};

export default Thirteen;
