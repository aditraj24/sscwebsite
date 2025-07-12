'use client';
import { Grid, Card, CardContent, Typography, Box, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';

const galleries = [
  {
    title: 'Naivete Fete',
    description: 'Participants engaged in an interactive [activity type – e.g., Group Discussion/Extempore/Mock Interview/Public Speaking] where they explored real-world topics, received personalized feedback, and learned strategies to express their thoughts with confidence. Highlighting the growing need for emotional intelligence and teamwork in modern careers.',
    images: ['/sscpics/nv.jpeg', '/sscpics/nv2.jpeg', '/ssc2/nv4.jpeg'],
    bg: 'linear-gradient(to right, #FFDEE9, #B5FFFC)',
  },
  {
    title: 'Group Discussion',
    description: 'he event provided a platform for participants to engage in thought-provoking group discussions on current affairs, social issues, and abstract topics. Students were divided into small groups and evaluated on key aspects such as clarity of thought, confidence, active listening, logical reasoning, and teamwork..',
    images: ['/sscpics/gd.jpeg', '/gdimage/pic.jpeg', '/sscpics/gd3.jpeg'],
    bg: 'linear-gradient(to right, #D9AFD9, #97D9E1)',
  },
  {
    title: 'Visioucue',
    description: 'In this engaging session, participants were shown a thought-provoking image designed to spark curiosity .Following a brief individual observation phase, attendees formed small groups to initiate open-ended discussions based on what they saw —emotions, context, and possible narratives behind the image.',
    images: ['/ssc2/vc1.jpeg', '/ssc2/vc2.jpeg'],
    bg: 'linear-gradient(to right, #FFF6B7, #F6416C)',
  },
];

export default function ThreeGalleriesPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,width:'100%'}}
  >
    <Typography
  variant="h4"
  fontWeight={700}
  textAlign="center"
  gutterBottom
  sx={{
    mt: 4,
    mb: 2,
    color: '#333',
    fontFamily: 'Montserrat, sans-serif',
  }}
>
  ✨ Event Highlights
</Typography>
  
    <Grid container spacing={4}  sx={{ p: 4 }}>
      {galleries.map((gallery, i) => (
        <Grid item xs={12} md={4} sm={8} key={i}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
          >


            
          
            <Card
              sx={{
                height:'auto',
                minheight: 400,
                display:'flex',
               // overflow: 'hidden',
               flexDirection:'column',
               justifyContent:'space-between',
                borderRadius: 4,
                boxShadow: 8,
                background: gallery.bg,
                color: 'black',
                p:2,
              }}
            >
              <CardContent>
                <Stack spacing={1} mb={2}>
                  <Typography variant="h6" fontWeight={700} sx={{fontSize: { xs: '1.2rem', md: '1.5rem' }, mb: 1
}}>{gallery.title}</Typography>
                  <Typography variant="body2" sx={{
    fontSize: { xs: '0.9rem', md: '1rem' },
    mb: 2,
    textAlign: 'justify',
  }}

>{gallery.description}</Typography>
                </Stack>
                <Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    alignItems: 'center',
    width: '100%',
    px: { xs: 2, sm: 4, md: 6 },
  }}
>
  {gallery.images.map((src, idx) => (
    <Box
      key={idx}
      sx={{
        width: '100%',
        maxWidth: 600,
        height: { xs: 180, sm: 240, md: 280 },
        position: 'relative',
        borderRadius: 3,
        overflow: 'hidden',
        boxShadow: 3,
      }}
    >
      <Image
        src={src}
        alt={`${gallery.title} image ${idx + 1}`}
        fill
        style={{ objectFit: 'cover' }}
      />
    </Box>
  ))}
</Box>

          
                          
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
        
      
      ))}

  
    
    

</Grid>
  
  <Box
    component={motion.div}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    sx={{
      mt: 10,
      py: 6,
      px: 3,
      textAlign: 'center',
      background: 'linear-gradient(to right, #D9AFD9, #97D9E1)',
      borderRadius: 6,
      boxShadow: '0 0 30px rgba(0,0,0,0.08)',
    }}
  >
    <Typography
      variant="h5"
      fontWeight={600}
      sx={{
        letterSpacing: 1,
        color: '#3B3B3B',
        mb: 2,
        fontSize: { xs: '1.5rem', sm: '2rem' },
        textTransform: 'uppercase',
      }}
    >
      Upcoming Events
    </Typography>

    <Typography
      variant="h2"
      fontWeight={900}
      sx={{
        textTransform: 'uppercase',
        letterSpacing: 3,
        color: '#222',
        fontSize: { xs: '2.8rem', sm: '3.5rem' },
        fontFamily: 'Orbitron, sans-serif',
        background: 'linear-gradient(to right, #ff4e50, #f9d423)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      To Be Notified
    </Typography>
  </Box>
;


  </Box>
  )}