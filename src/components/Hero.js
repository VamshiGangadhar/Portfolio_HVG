import { Box, CssBaseline } from "@mui/material";
import "./components.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const Hero = () => {
  return (
    <CssBaseline>
      <Box class="hero">
        <div className="">
          <img className="hero-image" src="Images/formal1.jpeg" alt="dp" />
        </div>
        <div className="heroRight">
          <div>
            <h1 className="name"> Hanumanthu Vamshi Gangadhar</h1>
            <p
              style={{ textAlign: "justify", color: "grey" }}
              className="subname"
            >
              Hello there I'm Vamshi Gangadhar a{" "}
              <i className="dev">
                <u>Junior Software Engineer</u>
              </i>
              , at Drishya AI Labs, with a strong foundation in full-stack. I hold
              a Bachelor's degree in Information Technology from Jawaharlal
              Nehru Technological University-Gurajada Vizianagaram.My extensive
              experience with AWS Lambda, GitHub, CI/CD pipelines, Python coding
              standards, and AWS S3 has equipped me with a comprehensive skill
              set for tackling complex software engineering challenges.
            </p>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/h-vamshi-gangadhar-84a94b201">
              <LinkedInIcon className="socialicons" />
            </a>
            <a href="https://github.com/VamshiGangadhar">
              <GitHubIcon className="socialicons" />
            </a>
            <a href="https://www.instagram.com/vamshigangadhar3/">
              <InstagramIcon className="socialicons" />
            </a>
          </div>
        </div>
      </Box>
    </CssBaseline>
  );
};

export default Hero;
