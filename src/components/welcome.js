import React from "react";
import self from "../images/self.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import mail from "../images/mail-icon.png";
import "../styling/welcome.css";
import ConsoleText from "../effects/text";

const Welcome = () => (
  <div className="welcome-container">
    <div className="profile">
      <img src={self} alt="Portrait" />
    </div>
    <div className="info">
      <div className="text-container">
        <div className="intro-box">
          <div className="intro">Hi I'm Harold</div>
          <div className="dynamic-text">
            <ConsoleText
              words={[
                "Glad to have you here!",
                "Take a look around!",
                "Explore my projects and experiences.",
              ]}
              id="text"
              colors={["white"]}
            />
          </div>
        </div>

        <div className="other-info">
          Keen and enthusiastic developer entering the workforce with a strong
          desire to learn and grow in the tech industry. Passionate about coding
          and eager to contribute to innovative projects while expanding
          technical skills and knowledge.
        </div>
      </div>
      <div className="socials-box">
        <div className="links-container">
          <div className="effect">
            <img src={linkedin} alt="LinkedIn" />
            <a
              className="links"
              href="https://www.linkedin.com/in/harold-koh-0b50531a2/"
            >
              LinkedIn
            </a>
          </div>
          <div className="effect">
            <img src={github} alt="GitHub" />
            <a className="links" href="https://github.com">
              GitHub
            </a>
          </div>
          <div className="effect">
            <img src={mail} alt="Email" />
            <a className="links" href="mailto:harold.kzx@gmail.com">
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Welcome;
