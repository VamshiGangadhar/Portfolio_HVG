import { Button, Typography } from "@mui/material";
import "./projects.css";

const itemData = [
  {
    img: "/Images/temp.png",
    alt: "tempcontrol",
    title: "Temperature Control",
    description:
      "This is a temperature app which changes its state on increase or decrease of temperature",
    languagesUsed: "React js,Material UI,CSS",
    githublink: "https://github.com/VamshiGangadhar/Temparature-Control",
    viewproj: "https://temparature-control.vercel.app/"
  },
  // {
  //   img: "/Images/temp.png",
  //   alt: "Simplecounter",
  //   title: "Simple Counter",
  //   description:
  //     "This is a temperature app which changes its state on increase or decrease of temperature",
  //   languagesUsed: "React js,Material UI,CSS",
  //   githublink: "https://github.com/VamshiGangadhar/Simple-counter",
  //   viewproj: ""
  // },
  {
    img: "/Images/tictactoe.jpg",
    alt: "tictactoe",
    title: "Tic Tac Toe",
    description:
      "This is a temperature app which changes its state on increase or decrease of temperature",
    languagesUsed: "React js,Material UI,CSS",
    githublink: "https://github.com/VamshiGangadhar/tic-tac-toe",
    viewproj: "https://vamshigangadhar.github.io/tic-tac-toe/"
  },
  {
    img: "/Images/acmwebsite.png",
    alt: "acm",
    title: "JNTUGV CEV(A) ACM Chapter",
    description: "This website is built using Wordpress",
    languagesUsed: "WordPress",
    githublink: "https://jntukucev.acm.org/",
    viewproj: "https://jntukucev.acm.org/"
  },
  {
    img: "/Images/bytes.png",
    alt: "bytesthenewsletter",
    title: "Bytes the News Letter",
    description:
      "This is a temperature app which changes its state on increase or decrease of temperature",
    languagesUsed: "React js,Material UI,CSS",
    githublink: "https://github.com/CodeBytes02/bytesthenewsletter",
    viewproj: "http://bytesthenewsletter.com/"
  }
];

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
      <p className="project-description">{item.description}</p>
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

const Projects = () => {
  return (
    <div>
      <Typography sx={{ m: 2 }} variant="h4" color="lightgoldenrodyellow">
        Projects
      </Typography>
      <div className="project-complete-box">
        {itemData.map((item) => (
          <ImageCard key={item.alt} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
