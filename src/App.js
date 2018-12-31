import React, { Component } from "react";
import Navbar from "./components/navbar";
import MainContent from "./containers/mainContent";
import "./css/App.css";

class App extends Component {
  render() {
    return (<>
      <Navbar/>
      <MainContent/>
    </>);
  }
}

export default App;
