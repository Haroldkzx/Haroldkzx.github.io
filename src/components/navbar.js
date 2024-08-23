import React, { useState } from "react";
import "../styling/nav.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="nav-left">
        <a href="#home">Harold Koh</a>
      </div>
      <div className={`nav-right ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#work-education">Work & Education</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#certifications">Certifications</a>
          </li>
        </ul>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
    </nav>
  );
}

export default Navbar;
