import React, { Component } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import AboutMe from "./components/aboutMe";
// import TechCard from "./components/techCard";
import { reactIcon as ReactIcon } from "./components/icons/icons.js"
import "./css/App.css";

class App extends Component {
  render() {
    return (<>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <ReactIcon style={{display: 'inline-block'}} width="10vw"/>
    </>);
  }
}

export default App;
