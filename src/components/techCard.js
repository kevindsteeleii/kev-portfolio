import React from "react";
import "../css/SkillShelf.css";

export default function TechCard({ children, name}) {
  return (
    <div className="tech-card">
      {children}
      <p className="skill-name">{name}</p>
    </div>
  );
}
