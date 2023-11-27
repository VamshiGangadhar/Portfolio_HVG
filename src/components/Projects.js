import { Button, Typography } from "@mui/material";
import "./projects.css";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../firebase";
import {  useState } from "react";
import projectsData from "./dataStore/projectsData";

const Projects = () => {
  const [projs] = useState(projectsData);
  // useEffect(() => {
  //   const fetchPost = async () => {
  //     await getDocs(collection(db, "projects")).then((querySnapshot) => {
  //       const newData = querySnapshot.docs.map((doc) => ({
  //         ...doc.data(),
  //         id: doc.id,
  //       }));
  //       setProjs(newData);
  //     });
  //   };
  //   fetchPost();
  // }, []);
  const ImageCard = ({ item }) => (
    // <div className="whole-project-section">
    <div className="project-individual-box" key={item.alt}>
      <div className="project-image-box">
        <img className="project-image" src={item.img} alt={item.alt} />
      </div>
      <div className="project-content-box">
        <Typography
          sx={{ m: 1.5, color: "yellow" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {item.title}
        </Typography>
        <p style={{textAlign: "justify", margin: "7px"}} className="project-description">{item.description}</p>
        <p className="project-languages">{item.languagesUsed}</p>
        <div className="project-buttons-box">
          <Button href={item.githublink} sx={{ m: 2 }} variant="contained">
            Github Repository
          </Button>

          <Button variant="contained" href={item.viewproj}>
            View Project
          </Button>
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <Typography sx={{ m: 2 }} variant="h4" color="lightgoldenrodyellow">
        Projects
      </Typography>
      <div className="project-complete-box" style={{marginLeft: "9%"}}>
        {projs?.map((item) => (
          <ImageCard key={item.alt} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
