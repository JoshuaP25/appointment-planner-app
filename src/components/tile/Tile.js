import React from "react";

export const Tile = ({ tile }) => {

  return (
    <div className="tile-container">
        {Object.values(tile).map((value, i) => (
            <p key={i} className={`${i === 0 ? "tile-title" : ""} tile`}>{value}</p>
        ))}
        <hr></hr>
    </div>
  );
};
