import React from "react";
import "../styling/skills.css";
import javascriptIcon from "../images/javascript-icon.png";
import pythonIcon from "../images/python-icon.png";
import reactIcon from "../images/react-icon.png";
import djangoIcon from "../images/django-icon.png";
import nodejsIcon from "../images/nodejs-icon.png";
import htmlIcon from "../images/html-icon.png";
import cssIcon from "../images/css-icon.png";
import mongodbIcon from "../images/mongodb-icon.png";
import fastapiIcon from "../images/fastapi-1.svg";
import bootstrapIcon from "../images/bootstrap-icon.png";
import javaIcon from "../images/java-icon.png";
import sqlIcon from "../images/sql-icon.png";

const skills = [
  { name: "Java", img: javaIcon },
  { name: "JavaScript", img: javascriptIcon },
  { name: "Python", img: pythonIcon },
  { name: "Node.js", img: nodejsIcon },
  { name: "CSS", img: cssIcon },
  { name: "HTML", img: htmlIcon },
  { name: "MongoDB", img: mongodbIcon },
  { name: "SQL", img: sqlIcon },
  // Tools below
];

const frameworks = [
  // Front-end frameworks
  { name: "Django", img: djangoIcon },
  { name: "React", img: reactIcon },
  { name: "BootStrap", img: bootstrapIcon },
  // Back-end frameworks
  { name: "FastAPI", img: fastapiIcon },
];

function Skills() {
  return (
    <div className="skills-container">
      <div className="title">Skills & Tools</div>
      <div className="skills-box-wrapper">
        <div className="skills-box">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.img} alt={skill.name} className="skill-icon" />
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="skills-box-wrapper">
        <div className="framework-box">
          {frameworks.map((framework, index) => (
            <div className="skill-card" key={index}>
              <img
                src={framework.img}
                alt={framework.name}
                className="skill-icon"
              />
              <div className="skill-name">{framework.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
