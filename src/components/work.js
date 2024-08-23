import React, { useState, useRef } from "react";
import "../styling/work.css"; // Assume you have your CSS here
import ncs from "../images/ncs-logo.png"; // Importing the image
import saf from "../images/saf-logo.png"; // Importing the image
import uow from "../images/uow-logo.png"; // Importing the image
import rp from "../images/rp-logo.png"; // Importing the image
import down from "../images/chevron-down.png"; // Importing the image
import up from "../images/chevron-up.png"; // Importing the image

function Work() {
  const [currentWorkIndex, setCurrentWorkIndex] = useState(0);
  const [currentEducationIndex, setCurrentEducationIndex] = useState(0);

  // Update workItems to handle both images and text
  const workItems = [
    {
      img: ncs,
      companyName: "National Computer System",
      title: "Quality Assurance Intern",
      info1:
        "Conducted comprehensive testing for software development projects. Executed test cases to identify and report bugs, ensuring high software quality and functionality.",
      info2:
        "Worked closely with developers to troubleshoot and resolve issues. Provided detailed reports on bugs and participated in debugging sessions to ensure prompt fixes.",
    },
    {
      img: saf,
      companyName: "Singapore Armed Forces",
      title: "Scout Platoon Sergeant",
      info1:
        "Made critical decisions under pressure, demonstrating strong problem-solving abilities. Adapting to rapidly changing situations and devising effective solutions to overcome challenges",
      info2:
        "Responsible for directing and supervising the platoon, ensuring high levels of morale, discipline and cohesion among the soldiers.",
    },
  ];

  const educationItems = [
    {
      img: uow,
      institutionName: "University of Wollongong",
      title: "Bachelor of Business Information Systems",
      date: "Jul 2022 - Jun 2024",
      something: "something",
    },
    {
      img: rp,
      institutionName: "Republic Polytechnic",
      title: "Diploma in Business Information Systems",
      date: "May 2017 - Mar 2020",
      something: "something",
    },
  ]; // Replace with actual data

  const workContentRef = useRef(null);
  const educationContentRef = useRef(null);

  const handleWorkUp = () => {
    setCurrentWorkIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? workItems.length - 1 : prevIndex - 1;
      scrollToItem(newIndex, false); // false for work items
      return newIndex;
    });
  };

  const handleWorkDown = () => {
    setCurrentWorkIndex((prevIndex) => {
      const newIndex = prevIndex === workItems.length - 1 ? 0 : prevIndex + 1;
      scrollToItem(newIndex, false); // false for work items
      return newIndex;
    });
  };

  const handleEducationUp = () => {
    setCurrentEducationIndex((prevIndex) => {
      const newIndex =
        prevIndex === 0 ? educationItems.length - 1 : prevIndex - 1;
      scrollToItem(newIndex, true); // true for education items
      return newIndex;
    });
  };

  const handleEducationDown = () => {
    setCurrentEducationIndex((prevIndex) => {
      const newIndex =
        prevIndex === educationItems.length - 1 ? 0 : prevIndex + 1;
      scrollToItem(newIndex, true); // true for education items
      return newIndex;
    });
  };

  const scrollToItem = (index, isEducation) => {
    const ref = isEducation
      ? educationContentRef.current
      : workContentRef.current;
    const itemHeight =
      ref.scrollHeight /
      (isEducation ? educationItems.length : workItems.length);
    ref.scrollTo({
      top: itemHeight * index,
      behavior: "smooth",
    });
  };

  return (
    <div className="work-education-container">
      <div className="title">Work & Education</div>
      <div className="work-education-box">
        <div className="column">
          <button onClick={handleWorkUp} className="arrow up">
            <img src={up} alt="up arrow" />
          </button>
          <div className="content" ref={workContentRef}>
            {/* Render the image and company name */}
            <div className="content-item">
              <div className="content-header">
                <img
                  className="image"
                  src={workItems[currentWorkIndex].img}
                  alt={workItems[currentWorkIndex].companyName}
                />
                <div className="company-name">
                  {workItems[currentWorkIndex].companyName}
                </div>
                <div className="company-title">
                  {workItems[currentWorkIndex].title}
                </div>
              </div>
              <div className="info">{workItems[currentWorkIndex].info1}</div>
              <div className="info">{workItems[currentWorkIndex].info2}</div>
            </div>
          </div>
          <button onClick={handleWorkDown} className="arrow down">
            <img src={down} alt="down arrow" />
          </button>
        </div>
        <div className="column">
          <button onClick={handleEducationUp} className="arrow up">
            <img src={up} alt="up arrow" />
          </button>
          <div className="content" ref={educationContentRef}>
            {/* Render the image and company name */}
            <div className="content-item">
              <div className="content-header">
                <img
                  className="image"
                  src={educationItems[currentEducationIndex].img}
                  alt={educationItems[currentEducationIndex].companyName}
                />
                <div className="education-name">
                  {educationItems[currentEducationIndex].institutionName}
                </div>
                <div className="education-title">
                  {educationItems[currentEducationIndex].title}
                </div>
                <div className="education-date">
                  {educationItems[currentEducationIndex].date}
                </div>
              </div>
              <div className="info">
                {educationItems[currentEducationIndex].info1}
              </div>
              <div className="info">
                {educationItems[currentEducationIndex].info2}
              </div>
            </div>
          </div>
          <button onClick={handleEducationDown} className="arrow down">
            <img src={down} alt="down arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Work;
