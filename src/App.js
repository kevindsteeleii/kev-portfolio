import React, { Component } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import AboutMe from "./components/aboutMe";
import TechCard from "./components/techCard";
import "./css/App.css";

class App extends Component {
  render() {
    return (<>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <TechCard name={"React"} icon={"react.svg"}/>
    </>);
  }
}

export default App;
