import React from "react";
import { AboutMe as _about } from "../copy/mainCopy";
import "../css/AboutMe.css";

export default function AboutMe() {
  return (
    <section id="About">
      <h2>{_about.intro}</h2>
      <p>{_about.story}</p>
    </section>
  )
}
