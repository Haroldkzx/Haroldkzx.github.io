import React from "react";
import "../styling/footer.css";
import linkedin from "../images/linkedin-logo-small.png";
import github from "../images/github-icon-small.png";
import mail from "../images/mail-icon.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="copyright">Copyright © 2024 Harold Koh</div>
      <div className="icons-box">
        <a
          href="https://www.linkedin.com/in/harold-koh-0b50531a2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="LinkedIn logo" />
        </a>
        <a
          href="https://github.com/Haroldkzx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="LinkedIn logo" />
        </a>
        <a
          href="mailto:harold.kzx@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={mail} alt="LinkedIn logo" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
