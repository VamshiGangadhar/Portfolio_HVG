import React from "react";
import { Carousel } from "react-bootstrap";
import { Card, CardContent, Typography, Grid, Chip, Box } from "@mui/material";
import experienceData from "./dataStore/experienceData";

const ExperienceSection = () => {
  return (
    <Box
      sx={{
        padding: { xs: "40px 10px", sm: "60px 20px" },
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{ fontSize: { xs: "1.8rem", sm: "2.2rem", color: "lightgoldenrodyellow" } }}
      >
        Work Experience
      </Typography>
      <Typography
        variant="subtitle1"
        color="textSecondary"
        gutterBottom
        sx={{ fontSize: { xs: "0.9rem", sm: "1rem" }, px: { xs: 2, sm: 0 } }}
      >
        My journey through various roles and organizations.
      </Typography>

      <Carousel indicators={true} fade>
        {experienceData.map((exp, index) => (
          <Carousel.Item key={index}>
            <Grid container justifyContent="center">
              <Card
                sx={{
                  maxWidth: { xs: "90%", sm: 700 },
                  mt: 3,
                  mb: 3,
                  p: { xs: 2, sm: 3 },
                  borderRadius: 3,
                  boxShadow: 3,
                  backgroundColor: "white",
                }}
              >
                <Grid container spacing={3} alignItems="center">
                  {/* Image Section */}
                  <Grid item xs={12} sm={4}>
                    <Box
                      component="img"
                      src={exp.img}
                      alt={exp.CompanyName}
                      sx={{
                        width: "100%",
                        height: "auto",
                        borderRadius: 2,
                        boxShadow: 2,
                        objectFit: "cover",
                      }}
                    />
                  </Grid>

                  {/* Text Content */}
                  <Grid item xs={12} sm={8}>
                    <CardContent>
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        gutterBottom
                        sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }}
                      >
                        {exp.CompanyName}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        color="textSecondary"
                        sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}
                      >
                        {exp.Duration}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ mt: 1, fontSize: { xs: "0.9rem", sm: "1rem" } }}
                      >
                        <strong>Title:</strong> {exp.Title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ mt: 1, fontSize: { xs: "0.85rem", sm: "1rem" } }}
                      >
                        <strong>Work:</strong> {exp.Work}
                      </Typography>

                      {/* Skills Acquired */}
                      <Typography variant="body2" sx={{ mt: 2 }}>
                        <strong>Skills Acquired:</strong>
                      </Typography>
                      <Box
                        sx={{
                          mt: 1,
                          display: "flex",
                          flexWrap: "wrap",
                          justifyContent: { xs: "center", sm: "flex-start" },
                        }}
                      >
                        {exp.SkillsAcquired.split(", ").map((skill, idx) => (
                          <Chip
                            key={idx}
                            label={skill}
                            variant="outlined"
                            sx={{
                              mr: 1,
                              mb: 1,
                              backgroundColor: "#e3f2fd",
                              fontWeight: "bold",
                              fontSize: { xs: "0.7rem", sm: "0.9rem" },
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Carousel.Item>
        ))}
      </Carousel>
    </Box>
  );
};

export default ExperienceSection;
