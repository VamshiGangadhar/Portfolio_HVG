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
          <img className="hero-image" src="Images/HVG Webmaster.jpg" alt="dp" />
        </div>
        <div className="heroRight">
          <div>
            <h1 className="name"> Hanumanthu Vamshi Gangadhar</h1>
            <p className="subname">
              Hello there I'm Vamshi a{" "}
              <i className="dev">
                <u>Frontend developer</u>
              </i>
              , I'm intrested in developing real world projects and working with
              people collabratively
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
