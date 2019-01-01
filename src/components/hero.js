import React, { Component } from "react";
import _copy from "../copy/mainCopy";
import "../css/Hero.css";

export default class Hero extends Component {
  render() {
    return (
      <section  id="Home" >
        <div className="hero-children">
          <h1  className="hero-text master-padding">{_copy.homeBanner}</h1>
          
        </div>
        <div className="contact-icons">
          <a target="_blank"  rel="noopener noreferrer"  className="icon-anchor" href="https://github.com/kevindsteeleii"><i className="fab fa-github-square"/></a>
          <a target="_blank"  rel="noopener noreferrer" className="icon-anchor" href="https://www.linkedin.com/in/kevindsteeleii/"><i className="fab fa-linkedin"/></a>
          <a target="_blank"  rel="noopener noreferrer" className="icon-anchor" href="https://medium.com/@kevindsteeleii"><i className="fab fa-medium"/></a>
          <a target="_blank"  rel="noopener noreferrer" className="icon-anchor" href="https://dev.to/kevindsteeleii"><i className="fab fa-dev"/></a>
        </div>
        <div className="parallax"/>
      </section>
    );
  }
}
