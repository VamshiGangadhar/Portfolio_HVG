import "./styles.css";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero";
import Aboutme from "./components/Aboutme";
import Skillset from "./components/Skillset";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import ProjectsSection from "./components/Projects";
// import Working from "./Working";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Aboutme />
      <Experience />
      <ProjectsSection />
      <Skillset />
      <Footer />
    </div>
  );
};

export default App;
