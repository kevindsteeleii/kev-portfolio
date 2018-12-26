import React, { Component } from "react";
import "../css/Hero.css";

export default class Hero extends Component {
  render() {
    return (
      <section>
        {this.props.children}
        <div className="parallax"></div>
      </section>
    );
  }
}
