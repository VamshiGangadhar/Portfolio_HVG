import { Box, CssBaseline, Typography } from "@mui/material";
import "./Skillset.css";
import skillsData from "./dataStore/skillsData";

const Skillset = () => {
  return (
    <CssBaseline>
      <div className="skillbox">
        <Typography sx={{ m: 3 }} variant="h4" color="lightgoldenrodyellow">
          Skillset
        </Typography>
        <div className="skillContainer">
          {skillsData.map((skill, index) => (
            <Box
              key={index}
              className="skillFrame"
              sx={{
                p: 2,
                borderRadius: 4,
                bgcolor: "background.paper",
                boxShadow: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <img className="skillIcon" src={skill.image} alt={skill.name} />
              <Typography variant="subtitle1">{skill.name}</Typography>
            </Box>
          ))}
        </div>
      </div>
    </CssBaseline>
  );
};

export default Skillset;
