import React from "react";
import { Carousel } from "react-bootstrap";
import { Card, CardContent, Typography, Grid, Chip } from "@mui/material";
import experienceData from "./dataStore/experienceData";

const ExperienceSection = () => {
  return (
    <div className="experience-carousel">
      <Carousel>
        {experienceData.map((exp, index) => (
          <Carousel.Item key={index}>
            <Grid container justifyContent="center">
              <Card
                style={{
                  maxWidth: 600,
                  marginTop: 20,
                  marginBottom: 20,
                  padding: "20px",
                  backgroundColor: "#f5f5f5",
                }}
              >
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} sm={4}>
                    <img
                      src={exp.img}
                      alt={exp.CompanyName}
                      style={{
                        width: "100%",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <CardContent>
                      <Typography variant="h5" component="div" gutterBottom>
                        {exp.CompanyName}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {exp.Duration}
                      </Typography>
                      <Typography variant="body1" style={{ marginTop: 10 }}>
                        <strong>Title:</strong> {exp.Title}
                      </Typography>
                      <Typography variant="body2" style={{ marginTop: 10 }}>
                        <strong>Work:</strong> {exp.Work}
                      </Typography>
                      <Typography variant="body2" style={{ marginTop: 10 }}>
                        <strong>Skills Acquired:</strong>
                      </Typography>
                      <div style={{ marginTop: 5 }}>
                        {exp.SkillsAcquired.split(", ").map((skill, idx) => (
                          <Chip
                            key={idx}
                            label={skill}
                            variant="outlined"
                            style={{ marginRight: 5, marginBottom: 5 }}
                          />
                        ))}
                      </div>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ExperienceSection;
