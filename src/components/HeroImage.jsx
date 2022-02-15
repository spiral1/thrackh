import React from "react";

import logo  from '../assets/logo.jpg'

import "../style/heroImage.css"

export const HeroImage = () => (
  <div
    src="https://assets.imgix.net/tutorials/forest4.webp"
    className="hero-image"
  >
    <img className="DHack-logo"src={logo} alt="logo" />
    
  </div>
);
