import React, { Component } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import "./css/App.css";

class App extends Component {
  render() {
    return (<>
      <Navbar/>
        <Hero/>
        <div style={{
          width: "100%",
          height: "70vh",
          backgroundColor: "blue"
        }}></div>
    </>);
  }
}

export default App;
