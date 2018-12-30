import React from 'react';
import Stats from '../components/stats';
import '../css/skillStats.css';

export default function Skills() {
  return (
    <div className="skillDiv">
      <h3>SKILLS / TECHNOLOGIES</h3>
      <div className="skillShelf">
        <Stats name="HTML" percent={90} />
        <Stats name="CSS" percent={80} />
        <Stats name="JavaScript" percent={80} />
        <Stats name="React" percent={70}/>
        <Stats name="Redux" percent={70}/>
        <Stats name="SQL" percent={60}/>
        <Stats name="Node.js" percent={70}/>
        <Stats name="Rails" percent={70}/>
        <Stats name="UI Design" percent={50}/>
        <Stats name="Photoshop" percent={60}/>
        <Stats name="Illustrator" percent={70}/>
        {/* <Stats name="" percent={}/> */}
      </div>
    </div>
  );
}
