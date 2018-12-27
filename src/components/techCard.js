import React from "react";
export default function TechCard({ children, name}) {
  return (
    <div>
      {children}
      <hr/>
      <p className="skill-name">{name}</p>
    </div>
  );
}
