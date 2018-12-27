import React, { Component } from "react";
import _copy from "../copy/mainCopy";
import "../css/Hero.css";

export default class Hero extends Component {
  render() {
    return (
      <section  id="Home">
        <div className="hero-children">
          <h1  className="hero-text">{_copy.homeBanner}</h1>
        </div>
        <div className="parallax"></div>
      </section>
    );
  }
}
