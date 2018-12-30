import React from "react";
import "../css/Navbar.css";

export default function NavBar() {
  return (
    <div className="outerNav">

      <div className="menu-button">
        <i className={["fa", "fa-plus", "top-icon"].join(" ")} aria-hidden="true" onClick={handleSwitch}></i>
      </div>

      <div className="innerNav"><a onClick={handleLinkClick} href="#Home">HOME</a></div>
      <div className="innerNav"><a onClick={handleLinkClick} href="#About">ABOUT</a></div>
      <div className="innerNav"><a onClick={handleLinkClick} href="#Projects">PROJECTS</a></div>
      <div className="innerNav"><a onClick={handleLinkClick} href="#Contact">CONTACT</a></div>
      
    </div>
  );
}

const handleLinkClick = evt => {
  const icon = document.querySelectorAll(".fa")[0];
  const innerNavs = Array.from(evt.currentTarget.parentElement.parentElement.getElementsByClassName('innerNav'));
 
  if (icon.classList.contains("fa-minus")) {
    innerNavs.forEach(nav => {nav.style.display = "none"});
    icon.classList.replace("fa-minus", "fa-plus");
  }
}

const handleSwitch = evt => {
  evt.preventDefault();
  let innerNavs = Array.from(document.getElementsByClassName("innerNav"));
  let classList = Array.from(evt.target.classList);

  classList.includes("fa-plus") 
    ? evt.target.classList.replace("fa-plus", "fa-minus")
    : evt.target.classList.replace("fa-minus", "fa-plus");

  if (Array.from(evt.target.classList).includes("fa-minus")) {
    innerNavs.forEach(nav => {nav.style.display = "block"});
  } else {
    innerNavs.forEach(nav => {nav.style.display = "none"});
  }
}
