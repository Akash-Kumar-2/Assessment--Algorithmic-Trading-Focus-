import React, { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const HeroSection = ({ scroller }) => {
  const [text] = useTypewriter({
    words: ["Trading Algorithm Dashboard", "Trading Algorithm Strategies"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 80,
  });

  return (
    <div className="intro hero_tag">
      <div>
        {text}
        <span>
          <Cursor cursorBlinking="true" cursorColor="white" cursorStyle="|" />
        </span>
      </div>
      <button onClick={scroller}>View Graph</button>
    </div>
  );
};

export default HeroSection;
