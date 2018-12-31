import React from 'react';
import Hero from '../components/hero';
import AboutMe from '../containers/aboutMe';
import Projects from '../containers/projects';
import Contact from '../containers/contact';

export default function MainContent(props) {
  return (
    <>
      <Hero/>
      <AboutMe/>
      <Projects/>
      <Contact/>
    </>
  )
}
