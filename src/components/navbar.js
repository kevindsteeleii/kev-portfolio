import React from 'react';
import '../css/Navbar.css';

export default function NavBar() {
  return (
    <div className="outerNav">
      <div className="menu-button"><i className={["fa", "fa-plus", "top-icon"].join(' ')} aria-hidden="true" onClick={handleSwitch}></i></div>
      <div className="innerNav"><a href="#Home">HOME</a></div>
      <div className="innerNav"><a href="#About">ABOUT</a></div>
      <div className="innerNav"><a href="#Projects">PROJECTS</a></div>
      <div className="innerNav"><a href="#Contact">CONTACT</a></div>
    </div>
  );
}

const handleSwitch = evt => {
  evt.preventDefault();
  let innerNavs = Array.from(document.getElementsByClassName('innerNav'))
  let classList = Array.from(evt.target.classList);

  classList.includes('fa-plus') 
    ? evt.target.classList.replace('fa-plus', 'fa-minus')
    : evt.target.classList.replace('fa-minus', 'fa-plus');

  if (Array.from(evt.target.classList).includes('fa-minus')) {
    innerNavs.forEach(nav => {nav.style.display = 'block'})
  } else {
    innerNavs.forEach(nav => {nav.style.display = 'none'})
  }
}
