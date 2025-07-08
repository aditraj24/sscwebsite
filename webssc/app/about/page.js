"use client";
import React from 'react';
import { Box, Typography, Avatar, Container, Grid, Card, CardContent, Divider } from '@mui/material';
import { motion } from 'framer-motion';

// Sample data
const professor = {
  name: 'Prof. Dr. Rajiv Bhusan',
  role: 'Professor In-Charge',
  photo: '/images/professor.jpg',
  bio: 'Guiding the club with wisdom, experience, and a passion for nurturing soft skills in students.',
};

const teams = [
  {
    name: 'Creative Team',
    members: [
      {
        name: 'Aditi Singh',
        role: 'Creative Lead',
        photo: '/images/creative/aditi.jpg',
      },
      {
        name: 'Rahul Mehra',
        role: 'Graphic Designer',
        photo: '/images/creative/rahul.jpg',
      },
      {
        name: 'Simran Kaur',
        role: 'Photographer',
        photo: '/images/creative/simran.jpg',
      },
    ],
  },
  {
    name: 'Content Team',
    members: [
      {
        name: 'Vikram Patel',
        role: 'Content Head',
        photo: '/images/content/vikram.jpg',
      },
      {
        name: 'Neha Joshi',
        role: 'Writer',
        photo: '/images/content/neha.jpg',
      },
      {
        name: 'Arjun Rao',
        role: 'Editor',
        photo: '/images/content/arjun.jpg',
      },
    ],
  },
  {
    name: 'Web Team',
    members: [
      {
        name: 'Riya Gupta',
        role: 'Web Lead',
        photo: '/images/web/riya.jpg',
      },
      {
        name: 'Sahil Verma',
        role: 'Frontend Developer',
        photo: '/images/web/sahil.jpg',
      },
      {
        name: 'Ankit Sharma',
        role: 'Backend Developer',
        photo: '/images/web/ankit.jpg',
      },
    ],
  },
  {
    name: 'EM and PR Team',
    members: [
      {
        name: 'Riya Gupta',
        role: 'Web Lead',
        photo: '/images/web/riya.jpg',
      },
      {
        name: 'Sahil Verma',
        role: 'Frontend Developer',
        photo: '/images/web/sahil.jpg',
      },
      {
        name: 'Ankit Sharma',
        role: 'Backend Developer',
        photo: '/images/web/ankit.jpg',
      },
    ],
  },
  {
    name: 'Web Team (Contributors for this website)',
    members: [
      {
        name: 'Anoop Kr. Burnwal',
        role: 'Web Lead',
        photo: '/images/web/riya.jpg',
      },
      {
        name: 'Aditya Raj',
        role: 'Frontend Developer',
        photo: '/images/web/sahil.jpg',
      },
      {
        name: 'Saad Ansari',
        role: 'Backend Developer',
        photo: '/images/web/ankit.jpg',
      },
      {
        name: 'Yashika Singh',
        role: 'Web Lead',
        photo: '/images/web/riya.jpg',
      },
      {
        name: 'Shristy Shreya',
        role: 'Frontend Developer',
        photo: '/images/web/sahil.jpg',
      },
      {
        name: 'Ayush Verma',
        role: 'Backend Developer',
        photo: '/images/web/ankit.jpg',
      },
    ],
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

export default function AboutUsPage() {
  return (
    <Box sx={{
      minHeight: '100vh',
      py: 5,
      background: 'linear-gradient(to bottom, #e0f2fe, #fff)'
    }}>
      <Container maxWidth="lg" sx={{ py: 5 }}>
        {/* Club Short Description */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <Box sx={{ mb: 5 }}>
          <Typography variant="h2" fontWeight="bold" gutterBottom display={"flex"} alignItems={"center"} justifyContent={"center"}>
            Who We Are
          </Typography>
          <Typography variant="body1">
            The <b>Soft Skills Club</b> is a vibrant community dedicated to empowering individuals with essential interpersonal and professional skills. Our mission is to foster growth in communication, leadership, teamwork, and emotional intelligence, preparing members for success in both academic and professional environments.
          </Typography>
        </Box>
      </motion.div>

      {/* Professor In Charge */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 6, flexDirection: { xs: 'column', md: 'row' }, textAlign: { xs: 'center', md: 'left' } }}  
        >
          <motion.div variants={fadeInLeft}>
            <Avatar
              src={professor.photo}
              alt={professor.name}
              sx={{ width: 300, height: 300, mr: { md: 3 }, mb: { xs: 2, md: 0 } ,
              boxShadow: 3,
                '&:hover': {
                    boxShadow: 8,
                    zIndex: 1,
                },
            }}
              
            />
          </motion.div>
          <motion.div variants={fadeInRight}>
            <Box>
              <Typography variant="h4" fontWeight="bold">
                {professor.name}
              </Typography>
              <Typography variant="h5" color="text.primary">
                {professor.role}
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                {professor.bio}
              </Typography>
            </Box>
          </motion.div>
        </Box>
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <Divider sx={{ mb: 4 }} />
      </motion.div>

      {/* Meet Our Team */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <Typography variant="h2" fontWeight="bold" gutterBottom sx={{ display: 'flex', justifyContent: 'center' }}>
          Meet Our Team
        </Typography>
      </motion.div>

      {teams.map((team, teamIndex) => (
        <motion.div
          key={team.name}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <Box spacing={3} sx={{ mt: 5 }}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                {team.name}
              </Typography>
            </motion.div>
            <Grid container spacing={5} sx={{ display: 'flex', justifyContent: 'center' }}>
              {team.members.map((member, memberIndex) => (
                <Grid item xs={12} sm={6} md={4} key={member.name}>
                  <motion.div
                    variants={cardVariant}
                    whileHover="hover"
                    style={{ height: '100%' }}
                  >
                    <Card sx={{ 
                      alignItems: 'center', 
                      textAlign: 'center', 
                      py: 2,
                      height: '100%',
                      px:4,
                      boxShadow: 3,
                      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)',
                      color: 'white',
                      '&:hover': {
                        boxShadow: 8
                      }
                    }}>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Avatar
                          src={member.photo}
                          alt={member.name}
                          sx={{ width: 160, height: 160, mx: "auto", mb: 2 }}
                        />
                      </motion.div>
                      <CardContent>
                        <Typography variant="h6" fontWeight="medium">
                          {member.name}
                        </Typography>
                        <Typography variant="subtitle2">
                          {member.role}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      ))}
      </Container>
    </Box>
  );
}