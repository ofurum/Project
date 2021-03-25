import React from 'react';
import Typical from 'react-typical'
import './introductory.styles.scss';
const Introductory = () => (
  <div className="introductoy">
    <div className="greetings">
      <h1 className="greet-text">Hi there</h1>
      <span className="waving-hand" style={{ fontSize: "2rem" }}>
        👋🏿
      </span>
    </div>
    <div className="introductory-text">
      <p className="sub-introductoy">
        {" "}
        I'm Chiagoziem Ofurum, a Front-end Engineer based in Lagos, Nigeria with
        experience in building user friendly products.{" "}
      </p>
    </div>
    <br />
    <div className="learn-more">
      <span>Learn more (about me) or Jump straight to my work(Projects)</span>
    </div>
    <div className="arrow-down">
      <svg
        className="bounce"
        width="14"
        height="68"
        viewBox="0 0 14 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="7"
          y1="54"
          x2="7"
          y2="-4.37114e-08"
          stroke="#FBBF19"
          stroke-width="2"
          stroke-dasharray="2 2"
        ></line>
        <path
          d="M1 61L7 67L13 61"
          stroke="#FBBF19"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </div>
  </div>
);

export default Introductory