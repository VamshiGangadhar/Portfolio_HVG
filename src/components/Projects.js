import React from "react";
import { Card, CardMedia, CardContent, Typography, Button, Chip, Grid } from "@mui/material";
import projectsData from "./dataStore/projectsData";

const ProjectsSection = () => {
  return (
    <div className="projects-section">
      <Typography variant="h4" component="div" gutterBottom align="center" style={{ margin: '30px 0' }}>
        My Projects
      </Typography>
      <div style={{ display: 'flex', overflowX: 'auto', padding: '0 10px' }}>
        {projectsData.map((project, index) => (
          <div key={index} style={{ flex: '0 0 auto', marginRight: '20px', width: '300px' }}>
            <Card style={{ height: "100%", display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <CardMedia
                component="img"
                height="200"
                image={project.img}
                alt={project.alt}
              />
              <CardContent style={{ textAlign: 'center' }}>
                <Typography variant="h5" component="div" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {project.description}
                </Typography>
                <Typography variant="body2" style={{ marginTop: 10 }}>
                  <strong>Languages/Tools Used:</strong>
                </Typography>
                <div style={{ marginTop: 5, marginBottom: 10 }}>
                  {project.languagesUsed.split(", ").map((language, idx) => (
                    <Chip
                      key={idx}
                      label={language}
                      variant="outlined"
                      style={{ marginRight: 5, marginBottom: 5 }}
                    />
                  ))}
                </div>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      href={project.githublink}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                    >
                      GitHub
                    </Button>
                  </Grid>
                  {project.viewproj && (
                    <Grid item>
                      <Button
                        variant="outlined"
                        color="primary"
                        href={project.viewproj}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                      >
                        Live Demo
                      </Button>
                    </Grid>
                  )}
                </Grid>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
