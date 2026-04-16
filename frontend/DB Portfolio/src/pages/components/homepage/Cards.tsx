import AboutMe from "./AboutMe";
import Education from "./Education";
import Experience from "./Experience";

const Cards: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-0">
      <AboutMe />
      <Education />
      <Experience />
    </div>
  );
};

export default Cards;
