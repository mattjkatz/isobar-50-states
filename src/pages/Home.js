import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>I am the Home page!</h1>
      <div className="card-grid">
        <a href="/states">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">States</h2>
            </div>
          </div>
        </a>
        <a href="/guess">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Guess</h2>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Home;
