import React, { useEffect, useState } from 'react';
import { Avatar, Button, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { Instagram, GitHub, LinkedIn } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#7472727d',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        height: '90vh',
        marginTop: '5vh',
        marginLeft: '2rem',
        marginRight: '2rem',
        borderRadius: '1rem',
        boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.3)',
    },
    name: {
      fontSize: '2rem !important',
      '@media (max-width:1600px)': {
        fontSize: '1.5rem !important',
      },
      '@media (max-width:900px)': {
        fontSize: '1.25rem !important',
      },
    },
    avatar: {
        marginBottom: '1rem !important',
        width: '20vw !important', 
        height: '20vw !important', 
        maxWidth: '400px !important', 
        maxHeight: '400px !important',
        '@media (max-width:1600px)': {
          width: '14vw !important',
          height: '14vw !important',
          maxWidth: '200px !important',
          maxHeight: '200px !important',
        },
        '@media (max-width:900px)': {
          width: '10vw !important',
          height: '10vw !important',
          maxWidth: '150px !important',
          maxHeight: '150px !important',
        }
    },
    menu: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '2rem',
    },
    menuItem: {
        marginBottom: '.1rem',
        fontSize: '1.5rem',
        color: theme.palette.secondary.main, // Seafoam green
        transition: 'background-color 0.2s ease',
        borderRadius: '0.5rem',
        '&.active': {
            backgroundColor: '#5a5a5a', // Subtle dark gray
            color: 'white',
            boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.3)',
        },
        '&:hover': {
            backgroundColor: '#5a5a5a', // Subtle dark gray
            borderRadius: '0.5rem',
        }
    },
    menuButton: {
        color: 'inherit !important',
        backgroundColor: 'inherit !important',
        fontSize: '1.5rem !important',
        '@media (max-width:1600px)': {
          fontSize: '1.1rem !important',
        },
        '@media (max-width:900px)': {
          fontSize: '1rem !important',
        },
        textTransform: 'none !important', 
        width: '100% !important',
        borderRadius: 'inherit !important',
    },
    socialIcon: {
        color: 'white !important',
        fontSize: '2rem',
        '&:hover': {
            color: 'lightgrey !important', // Subtle dark gray
        },
    },
}));

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const LeftMenu = ({ language }) => {
  const classes = useStyles();
  const [activeSection, setActiveSection] = useState('');

useEffect(() => {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        },
        { threshold: 0.5 } // Adjust this value as needed
    );

    sections.forEach((section) => {
        observer.observe(section);
    });

    return () => {
        sections.forEach((section) => {
            observer.unobserve(section);
        });
    };
}, []);

  return (
    <Box className={classes.root}>
      <Avatar
        alt="James Robinson"
        src="headshot_new_background_resize.png"
        className={classes.avatar}
      />
      <Typography variant="h4" className={classes.name}>James Robinson</Typography>
      <Box className={classes.menu}>
        <Link to="#about" className={`${classes.menuItem} ${activeSection === 'about' ? 'active' : ''}`} onClick={() => scrollToSection('about')} style={{ width: '100%' }}>
          <Button className={classes.menuButton}>{language === 'es' ? 'Acerca de' : 'About'}</Button>
        </Link>
        <Link to="#experience" className={`${classes.menuItem} ${activeSection === 'experience' ? 'active' : ''}`} onClick={() => scrollToSection('experience')} style={{ width: '100%' }}>
          <Button className={classes.menuButton}>{language === 'es' ? 'Experiencia' : 'Experience'}</Button>
        </Link>
        <Link to="#projects" className={`${classes.menuItem} ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => scrollToSection('projects')} style={{ width: '100%' }}>
          <Button className={classes.menuButton}>{language === 'es' ? 'Proyectos' : 'Projects'}</Button>
        </Link>
        <Link to="#contact" className={`${classes.menuItem} ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => scrollToSection('contact')} style={{ width: '100%' }}>
          <Button className={classes.menuButton}>{language === 'es' ? 'Contacto' : 'Contact'}</Button>
        </Link>
      </Box>
      <Box sx={{ marginTop: '1rem' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <IconButton
            className={classes.socialIcon}
            component="a"
            href="https://www.instagram.com/j.triangle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </IconButton>
          <IconButton
            className={classes.socialIcon}
            component="a"
            href="https://github.com/jakerdou"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </IconButton>
          <IconButton
            className={classes.socialIcon}
            component="a"
            href="https://www.linkedin.com/in/james-d-robinson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default LeftMenu;