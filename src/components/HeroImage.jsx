import React from "react";
import { Background } from "react-imgix";
import logo  from '../assets/Dhack-logo-transparent.png'
import "../style/heroImage.css"

export const HeroImage = () => (
  <Background
    src="https://assets.imgix.net/tutorials/forest4.webp"
    className="hero-image"
  >
    <img className="DHack-logo"src={logo} alt="logo" />
    <h2>Dhack Media</h2>
  </Background>
);
