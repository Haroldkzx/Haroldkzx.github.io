import React from "react";
import "../styling/certifications.css";
import reactCert from "../images/react18-udemy.jpg";
import pythonDjangoCert from "../images/python-django-udemy.jpg";

function Certifications() {
  return (
    <div className="certification-container">
      <div className="title">Certifications</div>
      <div className="certifications-box">
        <div className="certification-card">
          <img src={reactCert} alt="React 18 Certification" />
          <a
            href="https://www.udemy.com/certificate/UC-7237c25f-624a-4f01-a21f-76d15442accf/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Certification Link
          </a>
        </div>
        <div className="certification-card">
          <img src={pythonDjangoCert} alt="Python Django Certification" />
          <a
            href="https://www.udemy.com/certificate/UC-ec2367d9-d87e-4f86-8598-eb2055065267/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Certification Link
          </a>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
