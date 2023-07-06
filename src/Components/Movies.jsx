import React from "react";

function Movies(props) {
  return (
    <div className="movie">
      <img src={props.poster} alt="" />
      <p className="title">{props.title}</p>
      <p>YEAR: {props.year}</p>
    </div>
  );
}

export default Movies;
