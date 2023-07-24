import "./styles.css";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero";
import Aboutme from "./components/Aboutme";
import Projects from "./components/Projects";
import Skillset from "./components/Skillset";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
// import Working from "./Working";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Aboutme />
      <Experience />
      <Projects />
      <Skillset />
      <Footer />
    </div>
  );
};

export default App;
