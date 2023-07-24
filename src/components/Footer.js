import { Typography, Button } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const Footer = () => {
  return (
    <div>
      <Typography sx={{ m: 3 }} variant="h4" color="lightgoldenrodyellow">
        Let's Work Together
      </Typography>
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
    </div>
  );
};

export default Footer;
