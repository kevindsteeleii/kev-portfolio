import React from "react";
import { AboutMe as _about } from "../copy/mainCopy";
import "../css/AboutMe.css";

export default function AboutMe(props) {
  return (
      <section id="About" className="master-padding">
        <h2>{_about.intro}</h2>
        <p>{_about.story}</p>
          {props.children}
      </section>
  )
}
