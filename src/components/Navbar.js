import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import "./components.css";
import { Button } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <AppBar sx={{}}>
        <Toolbar
          sx={{
            paddingLeft: 1,
            paddingRight: 1,
            justifyContent: "space-between",
            padding: 0.4,
            bgcolor: "#1B1A17",
          }}
        >
          <img className="logo" src="/Images/HVG.jpg" alt="logo" />
          <Button
            href="mailto:vamshi.gangadhar365@gmail.com"
            variant="contained"
            sx={{
              border: 0.3,
              color: "#FAF4F4",
              borderRadius: 3,
            }}
          >
            <MailIcon />
            Contact Me
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
