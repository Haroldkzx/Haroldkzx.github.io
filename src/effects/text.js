import React, { useState, useEffect } from "react";

const ConsoleText = ({ words, id, colors = ["#fff"] }) => {
  const [visible, setVisible] = useState(true);
  const [letterCount, setLetterCount] = useState(1);
  const [x, setX] = useState(1);
  const [waiting, setWaiting] = useState(false);
  const [currentWords, setCurrentWords] = useState(words);
  const [currentColors, setCurrentColors] = useState(colors);

  useEffect(() => {
    const target = document.getElementById(id);

    if (target) {
      target.setAttribute("style", "color:" + currentColors[0]);

      const interval = window.setInterval(() => {
        if (letterCount === 0 && !waiting) {
          setWaiting(true);
          target.innerHTML = currentWords[0].substring(0, letterCount);
          window.setTimeout(() => {
            const usedColor = currentColors.shift();
            setCurrentColors([...currentColors, usedColor]);

            const usedWord = currentWords.shift();
            setCurrentWords([...currentWords, usedWord]);

            setX(1);
            target.setAttribute("style", "color:" + currentColors[0]);
            setLetterCount(letterCount + 1);
            setWaiting(false);
          }, 1000);
        } else if (letterCount === currentWords[0].length + 1 && !waiting) {
          setWaiting(true);
          window.setTimeout(() => {
            setX(-1);
            setLetterCount(letterCount + x);
            setWaiting(false);
          }, 1000);
        } else if (!waiting) {
          target.innerHTML = currentWords[0].substring(0, letterCount);
          setLetterCount(letterCount + x);
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [letterCount, waiting, currentWords, currentColors, x, id]);

  useEffect(() => {
    const underscoreInterval = window.setInterval(() => {
      setVisible((v) => !v);
    }, 400);

    return () => clearInterval(underscoreInterval);
  }, []);

  return (
    <div>
      <span id={id}></span>
      <span
        id="console"
        className={`console-underscore ${visible ? "" : "hidden"}`}
      >
        _
      </span>
    </div>
  );
};

export default ConsoleText;
