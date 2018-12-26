import React, { Component } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import "./css/App.css";

class App extends Component {
  render() {
    let message = `{Hi. My name is Kevin.}`
    return (<>
      <Navbar/>
        <Hero>
          <h1 className="hero-text">{message}</h1>
        </Hero>
        <div style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "blue"
        }}></div>
    </>);
  }
}

export default App;
