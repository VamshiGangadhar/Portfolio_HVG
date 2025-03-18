import "./styles.css";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero";
import Skillset from "./components/Skillset";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import ProjectsSection from "./components/Projects";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Experience />
      <ProjectsSection />
      <Skillset />
      <Footer />
    </div>
  );
};

export default App;
