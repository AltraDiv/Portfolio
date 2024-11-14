import AboutMe from "./AboutMe";
import Education from "./Education";
import Experience from "./Experience";

const Cards: React.FC = () => {
    return (
      <div className="container mx-auto px-4 py-8">
        <AboutMe />
        <Education />
        <Experience />    
      </div>
    );
}

export default Cards;