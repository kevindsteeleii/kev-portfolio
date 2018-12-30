import React, { Component } from 'react';
// import ReactCard from '../components/cards/reactCard';
import '../css/SkillShelf.css';

export default class SkillShelf extends Component {

  state = {
    expand: false
  };

  handleToggle = evt => {
    evt.preventDefault();

    const toggleShelf = evt.currentTarget;
    const skillShelf = evt.currentTarget.parentElement.querySelector("#skillshelf");
    const toggleIndicator = evt.currentTarget.parentElement.querySelectorAll(".fas")[0];

    skillShelf.classList.contains("skillshelf-seen") 
      ? skillShelf.classList.remove("skillshelf-seen")
      : skillShelf.classList.add("skillshelf-seen");

    if (toggleIndicator.classList.contains("fa-angle-down")) {
      toggleIndicator.classList.remove("fa-angle-down");
      toggleIndicator.classList.add("fa-angle-up");
    } else {
      toggleIndicator.classList.remove("fa-angle-up");
      toggleIndicator.classList.add("fa-angle-down");
    }

    toggleShelf.style.borderBottom =
      skillShelf.classList.contains("skillshelf-seen")
      ? "2px solid var(--lt-grey)"
      : "";

    this.setState( { expand: !this.state.expand });
  }

  render() {
    const { expand } = this.state;
    return (
      <>
        <div className="toggle-shelf" onClick={this.handleToggle}>
        
        <h3><span><i className="fas fa-angle-down"/></span>SKILLS / TECHNOLOGIES</h3>
        </div>
        <div id="skillshelf">
          {/* { expand && <ReactCard/> } */}
        </div>
      </>
    );
  }
}
