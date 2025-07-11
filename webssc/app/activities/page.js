'use client';
import { Grid, Card, CardContent, Typography, Box, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';

const galleries = [
  {
    title: 'Naivete Fete',
    description: 'Participants engaged in an interactive [activity type – e.g., Group Discussion/Extempore/Mock Interview/Public Speaking] where they explored real-world topics, received personalized feedback, and learned strategies to express their thoughts with confidence. The event also featured a short motivational talk by [Faculty/Guest Name if any], highlighting the growing need for emotional intelligence and teamwork in modern careers.',
    images: ['/gallery/fete1.jpg', '/gallery/fete2.jpg', '/gallery/fete3.jpg','/gallery/fetel4.jpg','/gallery/fete5.jpg'],
    bg: 'linear-gradient(to right, #FFDEE9, #B5FFFC)',
  },
  {
    title: 'Group Discussion',
    description: 'he event provided a platform for participants to engage in thought-provoking group discussions on current affairs, social issues, and abstract topics. Students were divided into small groups and evaluated on key aspects such as clarity of thought, confidence, active listening, logical reasoning, and teamwork..',
    images: ['/gallery/leader1.jpg', '/gallery/leader2.jpg', '/gallery/leader3.jpg'],
    bg: 'linear-gradient(to right, #D9AFD9, #97D9E1)',
  },
  {
    title: 'Visioucue',
    description: 'n this engaging session, participants were shown a thought-provoking image designed to spark curiosity and varied interpretations. Following a brief individual observation phase, attendees formed small groups to initiate open-ended discussions based on what they saw — exploring themes, emotions, context, and possible narratives behind the image.',
    images: ['/gallery/creative1.jpg', '/gallery/creative2.jpg', '/gallery/creative3.jpg'],
    bg: 'linear-gradient(to right, #FFF6B7, #F6416C)',
  },
];

export default function ThreeGalleriesPage() {
  return (
    <Grid container spacing={4} sx={{ p: 4 }}>
      {galleries.map((gallery, i) => (
        <Grid item xs={12} md={4} key={i}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <Card
              sx={{
                height: 460,
                overflow: 'hidden',
                borderRadius: 4,
                boxShadow: 8,
                background: gallery.bg,
                color: 'black',
              }}
            >
              <CardContent>
                <Stack spacing={1} mb={2}>
                  <Typography variant="h6" fontWeight={700}>{gallery.title}</Typography>
                  <Typography variant="body2">{gallery.description}</Typography>
                </Stack>

                <Box sx={{ width: '100%', height: 250, overflow: 'hidden' }}>
                  <motion.div
                    style={{ display: 'flex', gap: 16 ,width:'100%' }}
                    animate={{ x: [0, -300, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    {gallery.images.map((src, idx) => (
                      <Box
                        key={idx}
                        component={motion.div}
                        whileHover={{ scale: 1.08 }}
                        sx={{
                          minWidth: 200,
                          height: 200,
                          position: 'relative',
                          borderRadius: 3,
                          boxShadow: 4,
                          overflow: 'hidden',
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
                  </motion.div>
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
}