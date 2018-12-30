import React from 'react';
import '../css/skillStats.css';

export default function Stats({ name, percent}) {
  return (
    <div className="stats-container" onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <div className="stats-label"><p>{name}</p></div>
      <div className="stats-bar-container">
        <div style={{ width: `${percent}%`}} className="stats-bar-graph"/>
      </div>
      <div className="percentage-div"><p className="percentage">{percent}%</p></div>
      
    </div>
  );
}

const handleHover = evt => {
  const percentage = evt.currentTarget.getElementsByClassName('percentage')[0];
  const percentageClasses = Array.from(percentage.classList);
  percentageClasses.includes('percentage-hover') 
    ? percentage.classList.remove('percentage-hover')
    : percentage.classList.add('percentage-hover');
}
