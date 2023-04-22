import "./components.css";
import { Typography } from "@mui/material";

const Experience = () => {
  return (
    <div className="experience-section">
      <Typography variant="h4" color="lightgoldenrodyellow">
        Experience
      </Typography>
      <img className="exp-img" src="/Images/ACM.jpg" alt="acmlogo" />
      <p>Web Master</p>
    </div>
  );
};

export default Experience;
