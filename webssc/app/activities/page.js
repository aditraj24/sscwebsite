
"use client";
import React, { useState, useRef } from 'react';
import { Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';
import {
  Forum,
  RecordVoiceOver,
  Slideshow,
  MenuBook,
  Groups,
  PersonSearch,
  Brush,
  Campaign,
  Assignment,
  Quiz,
  Article,
  EmojiPeople
} from '@mui/icons-material';

const activities = [
  { name: "Debate", icon: Forum },
  { name: "Extempore", icon: RecordVoiceOver },
  { name: "PPT Presentation", icon: Slideshow },
  { name: "Story Writing", icon: MenuBook },
  { name: "Group Discussion", icon: Groups },
  { name: "Mock Interview", icon: PersonSearch },
  { name: "Poster Making", icon: Brush },
  { name: "Public Speaking", icon: Campaign },
  { name: "Report Writing", icon: Assignment },
  { name: "Fun Quiz", icon: Quiz },
  { name: "Content Writing", icon: Article },
  { name: "Anchoring", icon: EmojiPeople }
];

export default function Activities() {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);

  const visibleActivities = showAll ? activities : activities.slice(0, 9);

  const handleExploreClick = () => {
    setShowAll(true);
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div
      id="activities"
      ref={sectionRef}
      style={{
        padding: '2rem',
        textAlign: 'center',
       // background: '#f5faff', // light blueish background
        minHeight: '100vh',
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        fontWeight="bold"
        color="green"
        sx={{ mb: 4 }}
      >
        Activities We Organize
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {visibleActivities.map((activity, index) => {
          const IconComponent = activity.icon;
          return (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  minHeight: 140,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  borderRadius: 2,
                  boxShadow: 3,
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 6px 20px rgba(0, 123, 0, 0.3)",
                  },
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Box sx={{ color: "#006400" }}>
                    <IconComponent fontSize="large" />
                  </Box>
                  <Typography
                    variant="subtitle1"
                    fontWeight="medium"
                    mt={1}
                    color="text.primary"
                  >
                    {activity.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      {!showAll && (
        <Button
          variant="contained"
          sx={{
            mt: 4,
            backgroundColor: '#006400',
            "&:hover": {
              backgroundColor: '#004d00',
            },
            color: 'white',
            px: 4,
            py: 1
          }}
          onClick={handleExploreClick}
        >
          Explore All
        </Button>
      )}
    </div>
  );
}