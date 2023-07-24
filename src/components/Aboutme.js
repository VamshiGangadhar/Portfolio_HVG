import { CssBaseline } from "@mui/material";
import "./components.css";

const Aboutme = () => {
  return (
    <CssBaseline>
      <div className="Whole_aboutme">
        <fieldset className="aboutme">
          <legend className="legend"> About me </legend>I am currently pursuing
          my B.Tech in{" "}
          <i className="dev">
            <u>Information Technology</u>{" "}
          </i>
          in JNTU Gurajada Vizianagaram University. I am very enthusiastic in
          designing websites and automating things which gives me atmost
          happiness and holds joy in me all the way of development. I am pretty
          much intrested in working in teams.
        </fieldset>
      </div>
    </CssBaseline>
  );
};

export default Aboutme;
