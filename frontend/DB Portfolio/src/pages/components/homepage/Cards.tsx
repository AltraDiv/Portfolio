import React from 'react';
import AboutMe from "./AboutMe";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Achievements from "./Achievements";
import Volunteering from "./Volunteering";

const Cards: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-0">
      <AboutMe />
      <Projects />
      <Experience />
      <Achievements />
      <Education />
      <Volunteering />
    </div>
  );
};

export default Cards;
