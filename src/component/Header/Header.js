import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="headmain">
        <div> Ajeet Saroj</div>
        <div>
          <ul className="headItems">
            <li>Home</li>
            <li>Skills</li>
            <li>Experience</li>
            <li>Resume</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
