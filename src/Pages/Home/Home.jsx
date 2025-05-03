import Banner from "../../Components/Banner/Banner";
import About from "../About/About";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div>
      <Banner />
      <Education />
      <Projects />
      <Skills />
      <Experience />
      <About />
    </div>
  );
};

export default Home;
