import React from 'react';
import '../css/Projects.css';

export default function Projects() {
  return (
    <section id="Projects" className="master-padding">
      <h2>Projects</h2>
        <div className="project-contents">
          <div className="gearbox">
            <i className="fas fa-cog gear1"/>
            <i className="fas fa-cog gear2"/>
            <i className="fas fa-cog gear3"/>
          </div>
        <div className="textbox">
          <h3>Please excuse the appearance</h3>
          <p> I'm currently retooling the styling and some functionality of my projects however you can find links to the repos <a target="_blank"  rel="noopener noreferrer"  className="portfolio-link" href="http://github.com/kevindsteeleii">here</a>.</p> 
          
        </div>
      </div>
    </section>
  );
}
