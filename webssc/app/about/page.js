"use client";
import React from "react";
import Link from "next/link";
import {
  Box,
  Typography,
  Avatar,
  Container,
  Grid,
  Card,
  CardContent,
  Divider,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { GitHub, LinkedIn, MenuBook } from "@mui/icons-material";

// Sample data
const professor = {
  name: "Prof. Dr. Rajiv Bhusan",
  role: "Professor In-Charge",
  photo: "/aboutUsImages/sir1.jpg",
  bio: "Guiding the club with wisdom, experience, and a passion for nurturing soft skills in students.",
};

const leadership = [
  {
    name: "Kumar Raunak",
    role: "President",
    photo: "/aboutUsImages/President.jpg",
    bio: "Leading the club with vision and dedication to student development.",
  },
  {
    name: "Shiwangi Kumari",
    role: "Vice President",
    photo: "/aboutUsImages/VP.jpg",
    bio: "Supporting club initiatives and fostering team collaboration.",
  },
  {
    name: "Amarjeet Ahuja",
    role: "Vice President",
    photo: "/aboutUsImages/AmarjeetSir.jpg",
    bio: "Supporting club initiatives and fostering team collaboration.",
  },
  {
    name: "Sanaya Singh",
    role: "Vice President",
    photo: "/aboutUsImages/SanayaMam.jpg",
    bio: "Supporting club initiatives and fostering team collaboration.",
  },
];

const teams = [
  {
    name: "General Secretary",
    members: [
      {
        name: "Satwik Pal",
        role: "General Sec.",
        photo: "/aboutUsImages/GenSec.jpg",
        github: "https://github.com/Anoopkr1906",
        linkedin: "https://www.linkedin.com/in/anoop-kumar-burnwal-1906/",
      },
    ],
  },
  {
    name: "Joint Secretaries",
    members: [
      {
        name: "Anshu Raj",
        role: "Joint Sec.",
        photo: "/aboutUsImages/AnshuSir.jpg",
        github: "https://github.com/Anoopkr1906",
        linkedin: "https://www.linkedin.com/in/anoop-kumar-burnwal-1906/",
      },
      {
        name: "Sakshi Kumari",
        role: "Joint Sec.",
        photo: "/aboutUsImages/SakshiMam.jpg",
        github: "https://github.com/Anoopkr1906",
        linkedin: "https://www.linkedin.com/in/anoop-kumar-burnwal-1906/",
      },
      {
        name: "Subhodeep Paramanik",
        role: "Joint Sec.",
        photo: "/aboutUsImages/SubhodeepSir.jpg",
        github: "https://github.com/Anoopkr1906",
        linkedin: "https://www.linkedin.com/in/anoop-kumar-burnwal-1906/",
      },
      {
        name: "Apoorva Jain",
        role: "Joint Sec.",
        photo: "/aboutUsImages/ApoorvaMam.jpg",
        github: "https://github.com/Anoopkr1906",
        linkedin: "https://www.linkedin.com/in/anoop-kumar-burnwal-1906/",
      },
    ],
  },
  {
    name: "Team Manager",
    members: [
      {
        name: "Dhiraj Barnwal",
        role: "Team Manager",
        photo: "/aboutUsImages/DhirajSir.jpg",
        github: "https://github.com/Anoopkr1906",
        linkedin: "https://www.linkedin.com/in/anoop-kumar-burnwal-1906/",
      },
    ],
  },
  {
    name: "Head of Departments",
    members: [
      {
        name: "Ayush Kumar",
        role: "Web Head",
        photo: "/aboutUsImages/AyushSir.jpg",
        github: "https://github.com/Anoopkr1906",
        linkedin: "https://www.linkedin.com/in/anoop-kumar-burnwal-1906/",
      },
      {
        name: "Nihal Sahay",
        role: "Logistics Head",
        photo: "/aboutUsImages/NihalSir.jpg",
        github: "https://github.com/Anoopkr1906",
        linkedin: "https://www.linkedin.com/in/anoop-kumar-burnwal-1906/",
      },
      {
        name: "Harsh Vardhan",
        role: "Logistics Head",
        photo: "/aboutUsImages/harshSir.jpg",
        github: "https://github.com/Anoopkr1906",
        linkedin: "https://www.linkedin.com/in/anoop-kumar-burnwal-1906/",
      },
      {
        name: "Jay Prakash",
        role: "Hospitality Head",
        photo: "/aboutUsImages/JpSir.jpg",
        github: "https://github.com/Anoopkr1906",
        linkedin: "https://www.linkedin.com/in/anoop-kumar-burnwal-1906/",
      },
      {
        name: "Bhumika",
        role: "Literary Head",
        photo: "/aboutUsImages/BhumikaMam.jpg",
        github: "https://github.com/Anoopkr1906",
        linkedin: "https://www.linkedin.com/in/anoop-kumar-burnwal-1906/",
      },
      {
        name: "Ketan Rawat",
        role: "Creative Head",
        photo: "/aboutUsImages/KetanSir.jpg",
        github: "https://github.com/Anoopkr1906",
        linkedin: "https://www.linkedin.com/in/anoop-kumar-burnwal-1906/",
      },
      {
        name: "Shubham Singh",
        role: "Strategic and Planning Head",
        photo: "/aboutUsImages/ShubhamSir.jpg",
        github: "https://github.com/Anoopkr1906",
        linkedin: "https://www.linkedin.com/in/anoop-kumar-burnwal-1906/",
      },
      {
        name: "Poojitha Eluru",
        role: "Visual Media Head",
        photo: "/aboutUsImages/PoojithaMam.jpg",
        github: "https://github.com/Anoopkr1906",
        linkedin: "https://www.linkedin.com/in/anoop-kumar-burnwal-1906/",
      },
      {
        name: "Ishika Gupta",
        role: "Social Media Head",
        photo: "/aboutUsImages/IshikaMam.jpg",
        github: "https://github.com/Anoopkr1906",
        linkedin: "https://www.linkedin.com/in/anoop-kumar-burnwal-1906/",
      },
    ],
  },
  {
    name: "Coordinators",
    members: [
      {
        name: "Shradha Manre",
        role: "Coordinator",
        photo: "/aboutUsImages/ShradhaMam.jpg",
        github: "https://github.com/Anoopkr1906",
        linkedin: "https://www.linkedin.com/in/anoop-kumar-burnwal-1906/",
      },
      {
        name: "Shristi Suman",
        role: "Coordinator",
        photo: "/aboutUsImages/ShristiMam.jpg",
        github: "https://github.com/Anoopkr1906",
        linkedin: "https://www.linkedin.com/in/anoop-kumar-burnwal-1906/",
      },
      {
        name: "Sri Lineesha",
        role: "Coordinator",
        photo: "/aboutUsImages/SriMam.jpg",
        github: "https://github.com/Anoopkr1906",
        linkedin: "https://www.linkedin.com/in/anoop-kumar-burnwal-1906/",
      },
    ],
  },
  {
    name: "Web Team (Contributors for this website)",
    members: [
      {
        name: "Anoop Kr. Burnwal",
        role: "Backend Developer",
        photo: "/aboutUsImages/anoop2.jpg",
        github: "https://github.com/Anoopkr1906",
        linkedin: "https://www.linkedin.com/in/anoop-kumar-burnwal-1906/",
      },
      {
        name: "Aditya Raj",
        role: "Backend Developer",
        photo: "/aboutUsImages/Aditya.jpg",
        github: "https://github.com/aditraj24",
        linkedin: "https://www.linkedin.com/in/aditraj24/",
      },
      {
        name: "Ayush Verma",
        role: "Backend Developer",
        photo: "/aboutUsImages/Ayush.jpg",
        github: "https://github.com/ayushv-nitj",
        linkedin: "https://www.linkedin.com/in/ayush-verma-jsr25",
      },
      {
        name: "Saad Ansari",
        role: "Frontend Developer",
        photo: "/aboutUsImages/Saad.jpg",
        github: "https://github.com/saadhaq70",
        linkedin: "http://www.linkedin.com/in/mohammad-saad-62b033333",
      },
      {
        name: "Yashika Singh",
        role: "Frontend Developer",
        photo: "/aboutUsImages/Yashika.jpg",
        github: "https://github.com/Yasheekaa",
        linkedin: "https://www.linkedin.com/in/yashika-singh-33983a329/",
      },
      {
        name: "Shristy Shreya",
        role: "Frontend Developer",
        photo: "/aboutUsImages/Shristy.jpg",
        github: "https://github.com/Shristy46",
        linkedin: "https://www.linkedin.com/in/shristy-shreya-686562327/",
      },
    ],
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export default function AboutUsPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: { xs: 2, sm: 3, md: 5 },
        bgcolor: "white",
        fontFamily: "Fondamento, cursive",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ py: { xs: 2, sm: 3, md: 5 }, px: { xs: 2, sm: 3 } }}
      >
        {/* Club Short Description */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <Box sx={{ mb: 5 }}>
            <Typography
              variant="h2"
              fontWeight="bold"
              color="#004225"
              gutterBottom
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
                textAlign: "center",
                lineHeight: { xs: 1.2, sm: 1.3 },
              }}
            >
              Who We Are
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.25rem" },
                textAlign: "justify",
                lineHeight: { xs: 1.5, sm: 1.6 },
              }}
            >
              The <b>Soft Skills Club</b> at NIT Jamshedpur is dedicated to
              nurturing essential soft skills and fostering all-round
              personality development among students. The club&apos;s mission is
              to promote empathy, integrity, and personal growth by organizing a
              variety of activities such as group discussions, debates, mock
              interviews, workshops on CV writing, creative writing sessions,
              and aptitude or puzzle-solving events.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: 2,
                fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.25rem" },
                textAlign: "justify",
                lineHeight: { xs: 1.5, sm: 1.6 },
              }}
            >
              It plays a crucial role in preparing students for professional
              environments by enhancing their communication, leadership, and
              interpersonal skills. The club regularly collaborates with
              industry leaders and organizes training programs, placement talks,
              and interactive sessions with experts to help students become not
              just skilled professionals but also responsible and empathetic
              individuals.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: 2,
                fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.25rem" },
                textAlign: "justify",
                lineHeight: { xs: 1.5, sm: 1.6 },
              }}
            >
              Through its vibrant community and diverse events, the Soft Skills
              Club aims to bring out the best in every student and equip them
              with the confidence and abilities needed for both campus life and
              future careers.
            </Typography>
          </Box>
        </motion.div>

        {/* Literary Works Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <Box sx={{ mb: 6, textAlign: "center" }}>
            <Link href="/literary" style={{ textDecoration: "none" }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 2,
                    px: 4,
                    py: 2.5,
                    borderRadius: 3,
                    background: "linear-gradient(135deg, #0B6B52 0%, #FF7F50 100%)",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                    boxShadow: 3,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: 6,
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <MenuBook style={{ fontSize: "1.5rem" }} />
                  Explore Literary Works
                </Box>
              </motion.div>
            </Link>
            <Typography
              variant="body2"
              sx={{
                mt: 2,
                color: "text.secondary",
                fontSize: { xs: "0.9rem", sm: "1rem" },
                maxWidth: "600px",
                mx: "auto",
              }}
            >
              Discover creative expressions and insights from our talented team members
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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 6,
              flexDirection: { xs: "column", md: "row" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <motion.div variants={fadeInLeft}>
              <Avatar
                src={professor.photo}
                alt={professor.name}
                sx={{
                  width: { xs: 200, sm: 250, md: 300 },
                  height: { xs: 200, sm: 250, md: 300 },
                  mr: { md: 3 },
                  mb: { xs: 2, md: 0 },
                  boxShadow: 3,
                  "&:hover": {
                    boxShadow: 8,
                    zIndex: 1,
                  },
                  border: "4px solid #004225",
                }}
              />
            </motion.div>
            <motion.div variants={fadeInRight}>
              <Box sx={{ px: { xs: 2, md: 0 } }}>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  color="#004225"
                  sx={{
                    fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                    lineHeight: { xs: 1.2, sm: 1.3 },
                  }}
                >
                  {professor.name}
                </Typography>
                <Typography
                  variant="h5"
                  color="text.primary"
                  sx={{
                    fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.5rem" },
                    lineHeight: { xs: 1.2, sm: 1.3 },
                  }}
                >
                  {professor.role}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mt: 1,
                    fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.2rem" },
                    lineHeight: { xs: 1.5, sm: 1.6 },
                  }}
                >
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: { xs: 2, md: 4 },
              mb: 6,
              flexWrap: "wrap",
            }}
          >
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                variants={index === 0 ? fadeInLeft : fadeInRight}
                style={{
                  flex: { xs: "1 1 100%", md: "0 1 45%" },
                  minWidth: "280px",
                  maxWidth: "450px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: { xs: "column", sm: "row" },
                    textAlign: { xs: "center", sm: "left" },
                    height: "100%",
                    px: { xs: 2, sm: 0 },
                  }}
                >
                  <Avatar
                    src={leader.photo}
                    alt={leader.name}
                    sx={{
                      width: { xs: 200, sm: 220, md: 280 },
                      height: { xs: 200, sm: 220, md: 280 },
                      mr: { sm: 2 },
                      mb: { xs: 2, sm: 0 },
                      boxShadow: 3,
                      "&:hover": {
                        boxShadow: 8,
                        zIndex: 1,
                      },
                      border: "4px solid #004225",
                    }}
                  />
                  <Box>
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      color="#004225"
                      sx={{
                        fontSize: { xs: "1.3rem", sm: "1.5rem", md: "2rem" },
                        lineHeight: { xs: 1.2, sm: 1.3 },
                      }}
                    >
                      {leader.name}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="text.primary"
                      sx={{
                        fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.3rem" },
                        lineHeight: { xs: 1.2, sm: 1.3 },
                      }}
                    >
                      {leader.role}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        mt: 1,
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                        lineHeight: { xs: 1.5, sm: 1.6 },
                      }}
                    >
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
          <Typography
            variant="h2"
            fontWeight="bold"
            color="#004225"
            gutterBottom
            sx={{
              display: "flex",
              justifyContent: "center",
              fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
              textAlign: "center",
              lineHeight: { xs: 1.2, sm: 1.3 },
            }}
          >
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
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  color="#004225"
                  sx={{
                    mb: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2.2rem" },
                    textAlign: "center",
                    lineHeight: { xs: 1.2, sm: 1.3 },
                  }}
                >
                  {team.name}
                </Typography>
              </motion.div>
              <Grid
                container
                spacing={3}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                {team.members.map((member, memberIndex) => (
                  <Grid item xs={12} sm={6} md={4} key={member.name}>
                    <motion.div
                      variants={cardVariant}
                      whileHover="hover"
                      style={{ height: "100%" }}
                    >
                      <Card
                        sx={{
                          alignItems: "center",
                          textAlign: "center",
                          py: 2,
                          height: "100%",
                          width: "100%",
                          minHeight: "350px",
                          px: 2,
                          boxShadow: 3,
                          borderRadius: 5,
                          background:
                            "linear-gradient(to bottom right, #0B6B52, #083D30)",
                          color: "white",
                          "&:hover": {
                            boxShadow: 8,
                          },
                        }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Avatar
                            src={member.photo}
                            alt={member.name}
                            sx={{
                              width: { xs: 140, sm: 160, md: 180 },
                              height: { xs: 140, sm: 160, md: 180 },
                              mx: "auto",
                              mb: 2,
                              borderRadius: 2,
                            }}
                          />
                        </motion.div>
                        <CardContent sx={{ px: 1 }}>
                          <Typography
                            variant="h6"
                            fontWeight="medium"
                            sx={{
                              fontSize: {
                                xs: "1rem",
                                sm: "1.1rem",
                                md: "1.2rem",
                              },
                              lineHeight: { xs: 1.2, sm: 1.3 },
                              mb: 1,
                            }}
                          >
                            {member.name}
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontSize: {
                                xs: "0.85rem",
                                sm: "0.95rem",
                                md: "1rem",
                              },
                              lineHeight: { xs: 1.2, sm: 1.3 },
                              mb: 2,
                            }}
                          >
                            {member.role}
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              gap: 1,
                            }}
                          >
                            {member.linkedin && (
                              <IconButton
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                  color: "white",
                                  "&:hover": {
                                    color: "#0077b5",
                                    backgroundColor: "rgba(255,255,255,0.1)",
                                  },
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
                                  color: "white",
                                  "&:hover": {
                                    color: "#333",
                                    backgroundColor: "rgba(255,255,255,0.1)",
                                  },
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
