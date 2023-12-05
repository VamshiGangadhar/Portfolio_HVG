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
          <img className="hero-image" src="Images/vamshi.png" alt="dp" />
        </div>
        <div className="heroRight">
          <div>
            <h1 className="name"> Hanumanthu Vamshi Gangadhar</h1>
            <p
              style={{ textAlign: "justify", color: "grey" }}
              className="subname"
            >
              Hello there I'm Vamshi a{" "}
              <i className="dev">
                <u>Full Stack Web Developer</u>
              </i>
              , I As a Full-Stack developer and Blockchain developer, I aim to
              leverage my skills and knowledge to create innovative and
              cutting-edge solutions that deliver value to businesses and
              individuals alike. I am passionate about developing efficient and
              scalable applications that meet the needs of end-users while
              ensuring a seamless user experience. My goal is to work in an
              environment that fosters growth, creativity, and collaboration,
              where I can continue to learn, innovate, and apply my skills to
              solve complex problems. My goal is to work in an environment that
              fosters growth, creativity, and collaboration, where I can
              continue to learn, innovate, and apply my skills to solve complex
              problems.
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
