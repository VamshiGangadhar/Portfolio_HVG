import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Chip,
  Grid,
  Container,
} from "@mui/material";
import projectsData from "./dataStore/projectsData";

const ProjectsSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography
        variant="h4"
        component="div"
        align="center"
        sx={{ mb: 4, fontWeight: "bold" }}
      >
        My Projects
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {projectsData.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: 3,
                boxShadow: 3,
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={project.img}
                alt={project.alt}
              />
              <CardContent sx={{ textAlign: "center", flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  component="div"
                  fontWeight="bold"
                  gutterBottom
                >
                  {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {project.description}
                </Typography>
                <Typography variant="body2" fontWeight="bold" sx={{ mt: 1 }}>
                  Technologies Used:
                </Typography>
                <Grid
                  container
                  spacing={1}
                  justifyContent="center"
                  sx={{ mt: 1 }}
                >
                  {project.languagesUsed.split(", ").map((language, idx) => (
                    <Grid item key={idx}>
                      <Chip
                        label={language}
                        variant="outlined"
                        color="primary"
                        size="small"
                      />
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                sx={{ mb: 2 }}
              >
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    href={project.githublink}
                    target="_blank"
                    size="small"
                  >
                    GitHub
                  </Button>
                </Grid>
                {project.viewproj && (
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="secondary"
                      href={project.viewproj}
                      target="_blank"
                      size="small"
                    >
                      Live Demo
                    </Button>
                  </Grid>
                )}
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectsSection;
