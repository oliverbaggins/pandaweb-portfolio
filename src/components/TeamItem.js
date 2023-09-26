import React from "react";

function TeamItem({ image, name, id, skills }) {
  return (
    <div
      className="projectItem"
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
      <h2> {skills} </h2>
    </div>
  );
}

export default TeamItem;
