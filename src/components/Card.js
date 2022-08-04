import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
        <img src={props.url} alt="flag" className="card-image" />
        <h2 className="card-title">{props.name}</h2>
      </div>
      <button className="card-button">State Info</button>
    </div>
  );
}

export default Card;
