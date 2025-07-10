
// components/HeadOfDepartments.tsx
"use client";
import React from 'react';
import { Container, Grid, Avatar, Typography, Card, CardContent,Box } from '@mui/material';
import { Bold } from 'lucide-react';

const topProfiles = [
  {
    name: 'Naivete Fete',
    title: ' First Event for Freshers',
    description: 'Participants engaged in an interactive [activity type – e.g., Group Discussion/Extempore/Mock Interview/Public Speaking] where they explored real-world topics, received personalized feedback, and learned strategies to express their thoughts with confidence.  Highlighting the growing need for emotional intelligence and teamwork in modern careers.',
    image: '/images/ayush.jpg',
    
  },
  {
    name: 'Group Discussion',
    title: 'Enhancing the critical thinking',
    description: 'The event provided a platform for participants to engage in thought-provoking group discussions on current affairs, social issues, and abstract topics. Students were divided into small groups and evaluated on key aspects such as clarity of thought, confidence, active listening, logical reasoning, and teamwork..',
    image: '/images/sahil.jpg',
  },
  {
    name: 'Debate',
    title: 'Battle of words',
    description: 'his intellectually stimulating event not only encouraged healthy competition but also helped participants gain confidence in public speaking and learn the value of respectful disagreement — key elements of effective communication in any field.',
    image: '/images/ankit.jpg',
  },
];

const bottomProfiles = [
  {
    name: 'Case Study Challenge',
    title: 'Bridging theory and practice',
    description: 'Event conducted in our technical fest Ojass by soft Skills Club',
    image: '/images/pooja.jpg',
  },
  {
    name: 'Visiocue',
    title: 'Percieve discuss and pen down',
    description: 'Event to develop both thinking and writing skill.',
    image: '/images/rohan.jpg',
  },
];

const cardStyles = {
  backgroundColor: '#ffffff',
  color: '#212121',
  borderRadius: 3,
  py: 3,
  textAlign: 'center',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 20px rgba(0, 255, 0, 0.4)',
  },
};

const HeadOfDepartments = () => {
  return (
    <Box sx={{ py: 5, backgroundColor: '#e8f5e9', background:'liner-gradient(to right,#f5f7fa,#c3cfe2)'}}>
      <Typography variant="h4" align="center" gutterBottom  sx={{ color: '#1b5e20', fontWeight:'bold', textDecoration:'underline' }}>
        Inside The Skillverse
      </Typography>

      {/* 🔼 Top Row */}
      <Grid container spacing={4}>
        {topProfiles.map((person, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card sx={cardStyles}>
              <Avatar
                src={person.image}
                alt={person.name}
                sx={{ width: 200, height: 200, margin: 'auto', mb: 2 ,border: '4px solid #4caf50'}}
              />
              <CardContent>
                <Typography variant="h6" sx={{ color: '#4caf50' }}>
                  {person.name}
                </Typography>
                <Typography variant="subtitle2" sx={{ color: '#1b5e20' }}>
                  {person.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {person.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* 🔽 Bottom Row */}
      <Grid container spacing={4} justifyContent="center" sx={{ mt: 3 }}>
        {bottomProfiles.map((person, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card sx={cardStyles}>
              <Avatar
                src={person.image}
                alt={person.name}
                sx={{ width: 200, height: 200, margin: '0 auto', mb: 2, border:'4px solid #4caf50' }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ color: '#4caf50' }}>
                  {person.name}
                </Typography>
                <Typography variant="subtitle2" sx={{ color: '#1b5e20' }}>
                  {person.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {person.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HeadOfDepartments;