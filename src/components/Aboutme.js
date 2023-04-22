import { CssBaseline } from "@mui/material";
import "./components.css";

const Aboutme = () => {
  return (
    <CssBaseline>
      <div className="Whole_aboutme">
        <fieldset className="aboutme">
          <legend className="legend"> About me </legend>I am a{" "}
          <i className="dev">
            <u> Web developer</u>{" "}
          </i>
          very enthusiastic in designing websites which gives me atmost
          happiness and holds joy in me all the way of development. I am pretty
          much intrested in working in teams.At present I am pursuing my BTech.
        </fieldset>
      </div>
    </CssBaseline>
  );
};

export default Aboutme;
