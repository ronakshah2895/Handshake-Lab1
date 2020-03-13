import React from 'react';
import './Landing.css';

function Landing() {
  return (
    <div className="LANDING container">
      <div className="row image-row">
        <div className="col image-col">
          <img className="landing-img" src={`${process.env.REACT_APP_SERVER_ROOT}images/landing.jpg`} alt="" />
        </div>
        <div className="col">
          <h1 className="landing-img-text">The #1 way college students find jobs</h1>
        </div>
      </div>
    </div>
  );
}

export default Landing;
