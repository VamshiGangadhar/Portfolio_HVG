import { Box, CssBaseline, Typography } from "@mui/material";
import React from "react";
import "./components.css";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "./firebase";
// import { db } from "../firebase";
import { useState } from "react";
import experienceData from "./dataStore/experienceData";

const Experience = () => {
  const [expes] = useState(experienceData);
  // const fetchPost = async () => {
  //   await getDocs(collection(db, "experience ")).then((querySnapshot) => {
  //     const newData = querySnapshot.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //     setExpes(newData);
  //     console.log(expes, newData);
  //   });
  // };
  // useEffect(() => {
  //   fetchPost();
  // }, []);
  return (
    <CssBaseline>
      <Box>
        <Typography sx={{ m: 2 }} variant="h4" color="lightgoldenrodyellow">
          Professional Experience
        </Typography>

        {expes?.map((expe, i) => (
          <Box className="experience-box">
            <img className="experience-image" src={expe.img} alt={expe.alt} />
            <Box className="experience-content-box">
              <Typography sx={{ color: "#FFF964", fontSize: "25px" }}>
                {expe.Title},{expe.CompanyName}
              </Typography>
              <Typography sx={{ color: "#F5F5F5", fontSize: "18px" }}>
                {expe.Duration}
              </Typography>
              <Typography sx={{ color: "#F5F5F5", fontSize: "18px" }}>
                {expe.SkillsAcquired}
              </Typography>
              <Typography sx={{ color: "#F5F5F5", fontSize: "18px" }}>
                {expe.Work}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </CssBaseline>
  );
};

export default Experience;
