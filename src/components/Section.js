// src/components/Section.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Section = ({ id, title, children }) => {
  return (
    <motion.div
      id={id}
      className='section'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 0.4 }} // Trigger animation earlier
    >
      <Box sx={{ padding: '2rem 0', minHeight: '100vh' }}>
        <Typography variant="h2" color="secondary" sx={{ marginBottom: '1rem' }}>
          {title}
        </Typography>
        <Typography variant="body1" color="textPrimary">
          {children}
        </Typography>
      </Box>
    </motion.div>
  );
};

export default Section;