import React, { Component } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import AboutMe from "./components/aboutMe";
import Skills from "./containers/skills";
// import { reactIcon as ReactIcon } from "./components/icons/icons.js"
// import SkillShelf from "./containers/skillShelf";
import "./css/App.css";

class App extends Component {
  render() {
    return (<>
      <Navbar/>
      <Hero/>
      <AboutMe>
        <Skills/>
      </AboutMe>
    </>);
  }
}

export default App;
