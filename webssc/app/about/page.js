"use client";
import React from 'react';
import { Box, Typography, Avatar, Container, Grid, Card, CardContent, Divider, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, LinkedIn } from '@mui/icons-material';

// Sample data
const professor = {
  name: 'Prof. Dr. Rajiv Bhusan',
  role: 'Professor In-Charge',
  photo: '/images/professor.jpg',
  bio: 'Guiding the club with wisdom, experience, and a passion for nurturing soft skills in students.',
};

const leadership = [
  {
    name: 'Rahul Sharma',
    role: 'President',
    photo: '/images/leadership/president.jpg',
    bio: 'Leading the club with vision and dedication to student development.',
  },
  {
    name: 'Priya Agarwal',
    role: 'Vice President',
    photo: '/images/leadership/vicepresident.jpg',
    bio: 'Supporting club initiatives and fostering team collaboration.',
  },
];

const teams = [
  {
    name: 'Creative Team',
    members: [
      {
        name: 'Aditi Singh',
        role: 'Creative Lead',
        photo: '/images/creative/aditi.jpg',
        github: "https://github.com/Anoopkr1906",
        linkedin: "https://www.linkedin.com/in/anoop-kumar-burnwal-1906/",
      },
      {
        name: 'Rahul Mehra',
        role: 'Graphic Designer',
        photo: '/images/creative/rahul.jpg',
        github: "https://github.com/Anoopkr1906",
        linkedin: "https://www.linkedin.com/in/anoop-kumar-burnwal-1906/",
      },
      {
        name: 'Simran Kaur',
        role: 'Photographer',
        photo: '/images/creative/simran.jpg',
        github: "https://github.com/Anoopkr1906",
        linkedin: "https://www.linkedin.com/in/anoop-kumar-burnwal-1906/",
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
        github: "https://github.com/Anoopkr1906",
        linkedin: "https://www.linkedin.com/in/anoop-kumar-burnwal-1906/",
      },
      {
        name: 'Neha Joshi',
        role: 'Writer',
        photo: '/images/content/neha.jpg',
        github: "https://github.com/Anoopkr1906",
        linkedin: "https://www.linkedin.com/in/anoop-kumar-burnwal-1906/",
      },
      {
        name: 'Arjun Rao',
        role: 'Editor',
        photo: '/images/content/arjun.jpg',
        github: "https://github.com/Anoopkr1906",
        linkedin: "https://www.linkedin.com/in/anoop-kumar-burnwal-1906/",
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
        github: "https://github.com/Anoopkr1906",
        linkedin: "https://www.linkedin.com/in/anoop-kumar-burnwal-1906/",
      },
      {
        name: 'Sahil Verma',
        role: 'Frontend Developer',
        photo: '/images/web/sahil.jpg',
        github: "https://github.com/Anoopkr1906",
        linkedin: "https://www.linkedin.com/in/anoop-kumar-burnwal-1906/",
      },
      {
        name: 'Ankit Sharma',
        role: 'Backend Developer',
        photo: '/images/web/ankit.jpg',
        github: "https://github.com/Anoopkr1906",
        linkedin: "https://www.linkedin.com/in/anoop-kumar-burnwal-1906/",
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
        github: "https://github.com/Anoopkr1906",
        linkedin: "https://www.linkedin.com/in/anoop-kumar-burnwal-1906/",
      },
      {
        name: 'Sahil Verma',
        role: 'Frontend Developer',
        photo: '/images/web/sahil.jpg',
        github: "https://github.com/Anoopkr1906",
        linkedin: "https://www.linkedin.com/in/anoop-kumar-burnwal-1906/",
      },
      {
        name: 'Ankit Sharma',
        role: 'Backend Developer',
        photo: '/images/web/ankit.jpg',
        github: "https://github.com/Anoopkr1906",
        linkedin: "https://www.linkedin.com/in/anoop-kumar-burnwal-1906/",
      },
    ],
  },
  {
    name: 'Web Team (Contributors for this website)',
    members: [
      {
        name: 'Anoop Kr. Burnwal',
        role: 'Backend Developer',
        photo: '/aboutUsImages/Anoop.jpg',
        github: "https://github.com/Anoopkr1906",
        linkedin: "https://www.linkedin.com/in/anoop-kumar-burnwal-1906/",
      },
      {
        name: 'Aditya Raj',
        role: 'Backend Developer',
        photo: '/images/web/sahil.jpg',
        github: "https://github.com/aditraj24",
        linkedin: "https://www.linkedin.com/in/aditraj24/",
      },
      {
        name: 'Saad Ansari',
        role: 'Frontend Developer',
        photo: '/aboutUsImages/Saad.jpg',
        github: "https://github.com/saadhaq70",
        linkedin: "http://www.linkedin.com/in/mohammad-saad-62b033333",
      },
      {
        name: 'Yashika Singh',
        role: 'Frontend Developer',
        photo: '/images/web/riya.jpg',
        github: "https://github.com/Yasheekaa",
        linkedin: "https://www.linkedin.com/in/yashika-singh-33983a329/",
      },
      {
        name: 'Shristy Shreya',
        role: 'Frontend Developer',
        photo: '/images/web/sahil.jpg',
        github: "https://github.com/Shristy46",
        linkedin: "https://www.linkedin.com/in/shristy-shreya-686562327/",
      },
      {
        name: 'Ayush Verma',
        role: 'Backend Developer',
        photo: '/aboutUsImages/Ayush.jpg',
        github: "https://github.com/ayushv-nitj",
        linkedin: "https://www.linkedin.com/in/ayush-verma-jsr25",
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
      bgcolor: "white",
      fontFamily: "Fondamento, cursive",
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
          <Typography variant="h2" fontWeight="bold" color="#004225" gutterBottom display={"flex"} alignItems={"center"} justifyContent={"center"}>
            Who We Are
          </Typography>
          <Typography variant="body1">
            The <b>Soft Skills Club</b> at NIT Jamshedpur is dedicated to nurturing essential soft skills and fostering all-round personality development among students. The club’s mission is to promote empathy, integrity, and personal growth by organizing a variety of activities such as group discussions, debates, mock interviews, workshops on CV writing, creative writing sessions, and aptitude or puzzle-solving events.
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            It plays a crucial role in preparing students for professional environments by enhancing their communication, leadership, and interpersonal skills. The club regularly collaborates with industry leaders and organizes training programs, placement talks, and interactive sessions with experts to help students become not just skilled professionals but also responsible and empathetic individuals.
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Through its vibrant community and diverse events, the Soft Skills Club aims to bring out the best in every student and equip them with the confidence and abilities needed for both campus life and future careers.
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
          <motion.div variants={fadeInLeft} >
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
              <Typography variant="h4" fontWeight="bold" color="#004225">
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

      {/* President and Vice President */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mb: 6, flexWrap: 'wrap' }}>
          {leadership.map((leader, index) => (
            <motion.div 
              key={leader.name}
              variants={index === 0 ? fadeInLeft : fadeInRight}
              style={{ flex: '0 1 45%', minWidth: '300px' }}
            >
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                flexDirection: { xs: 'column', sm: 'row' }, 
                textAlign: { xs: 'center', sm: 'left' },
                height: '100%'
              }}>
                <Avatar
                  src={leader.photo}
                  alt={leader.name}
                  sx={{ 
                    width: 240, 
                    height: 240, 
                    mr: { sm: 2 }, 
                    mb: { xs: 2, sm: 0 },
                    boxShadow: 3,
                    '&:hover': {
                      boxShadow: 8,
                      zIndex: 1,
                    },
                  }}
                />
                <Box>
                  <Typography variant="h5" fontWeight="bold" color="#004225">
                    {leader.name}
                  </Typography>
                  <Typography variant="h6" color="text.primary">
                    {leader.role}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {leader.bio}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
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
        <Typography variant="h2" fontWeight="bold" color="#004225" gutterBottom sx={{ display: 'flex', justifyContent: 'center' }}>
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
              <Typography variant="h4" fontWeight="bold" color="#004225"  sx={{ mb: 2 }} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                {team.name}
              </Typography>
            </motion.div>
            <Grid container spacing={5} sx={{ display: 'flex', justifyContent: 'center' }}>
              {team.members.map((member, memberIndex) => (
                <Grid item xs={12} sm={8} md={6} key={member.name}>
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
                      width: '100%',
                      minWidth: '300px',
                      maxWidth: '350px',
                      px:4,
                      boxShadow: 3,
                      background: 'linear-gradient(to bottom right, #0B6B52, #083D30)',
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
                          sx={{ width: 190, height: 190, mx: "auto", mb: 2, borderRadius: 2 }}
                        />
                      </motion.div>
                      <CardContent>
                        <Typography variant="h6" fontWeight="medium">
                          {member.name}
                        </Typography>
                        <Typography variant="subtitle2">
                          {member.role}
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                          {member.linkedin && (
                            <IconButton
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{ 
                                color: 'white',
                                '&:hover': {
                                  color: '#0077b5',
                                  backgroundColor: 'rgba(255,255,255,0.1)'
                                }
                              }}
                            >
                              <LinkedIn />
                            </IconButton>
                          )}
                          {member.github && (
                            <IconButton
                              href={member.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{ 
                                color: 'white',
                                '&:hover': {
                                  color: '#333',
                                  backgroundColor: 'rgba(255,255,255,0.1)'
                                }
                              }}
                            >
                              <GitHub />
                            </IconButton>
                          )}
                        </Box>
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