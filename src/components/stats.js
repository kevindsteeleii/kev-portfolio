import React from 'react';
import '../css/skillStats.css';

export default function Stats({ name, percent}) {
  return (
    <div className="stats-container" >
      <div className="stats-label"><p>{name}</p></div>
      <div className="stats-bar-container">
        <div style={{ width: `${percent}%`}} className="stats-bar-graph"/>
      </div>
      <div className="percentage-div"><p className="percentage">{percent}%</p></div>
      
    </div>
  );
}

