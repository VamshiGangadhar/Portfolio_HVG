import { CssBaseline, Typography } from "@mui/material";

const Skillset = () => {
  return (
    <CssBaseline>
      <div className="skillbox">
        <Typography sx={{ m: 3 }} variant="h4" color="lightgoldenrodyellow">
          Skillset
        </Typography>
        <img className="skillIcon" src="/Images/react.svg" alt="React" />
        <img className="skillIcon" src="/Images/next-js.svg" alt="css" />
        <img className="skillIcon" src="/Images/python.svg" alt="Bootrap" />
        <img className="skillIcon" src="/Images/c++.svg" alt="C++" />
        <img className="skillIcon" src="/Images/html.svg" alt="css" />
        <img className="skillIcon" src="/Images/css.svg" alt="css" />
        <img
          className="skillIcon"
          src="/Images/wordpress.svg"
          alt="wordpress"
        />
        <img className="skillIcon" src="/Images/nodejs.svg" alt="node" />
        <img
          className="skillIcon"
          src="/Images/javascript.svg"
          alt="javascript"
        />
        <img className="skillIcon" src="/Images/github.svg" alt="github" />

        <img className="skillIcon" src="/Images/java.svg" alt="java" />

        <img
          className="skillIcon"
          src="/Images/material-ui.svg"
          alt="Material-Ui"
        />
        <img className="skillIcon" src="/Images/bootstrap.svg" alt="Bootrap" />
      </div>
    </CssBaseline>
  );
};

export default Skillset;
