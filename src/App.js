import React, { useState, useEffect } from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme, FormControlLabel, Switch } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LeftMenu from './components/LeftMenu';
import Section from './components/Section';
import About from './components/About';
import ExperienceCard from './components/ExperienceCard';
import Contact from './components/Contact';
import ProjectCard from './components/ProjectCard';
import particlesJS from 'particles.js';
import particlesConfig from './utils/particles-config.json';
import jobDescriptions from './jobDescriptions.json';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000080', // Navy blue
    },
    secondary: {
      main: '#30dd7c', // Seafoam green
    },
    text: {
      primary: '#ffffff', // White text
    },
  },
  typography: {
    fontFamily: 'Trebuchet MS, sans-serif', // Option 9: Trebuchet MS
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#2e2e2e',
        },
      },
    },
  },
});

function App() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
  };

  useEffect(() => {
    window.particlesJS('particles-js', particlesConfig);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div id="particles-js" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></div>
      <Router>
        <Box
          display="flex"
          height="100vh"
          sx={{
            overflow: 'hidden',
            flexDirection: { xs: 'column', md: 'row' }, // Column for small screens, row for medium and larger screens
          }}
        >
          <Box
            sx={{
              display: { xs: 'none', md: 'block' }, // Hide for small screens, show for medium and larger screens
              flex: '1 1 30%', // Flex-grow, flex-shrink, and flex-basis for responsive width
              maxWidth: '50%', // Max width of 35%
              height: '100vh', // 100% height for medium and larger screens
            }}
          >
            <LeftMenu language={language} />
          </Box>
          <Box
            sx={{
              flex: '1 1 70%', // Flex-grow, flex-shrink, and flex-basis for responsive width
              padding: '2rem',
              overflowY: 'auto',
              color: 'white',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              '-ms-overflow-style': 'none', // IE and Edge
              'scrollbar-width': 'none', // Firefox
            }}
          >
            <Box sx={{
              position: 'fixed',
              top: '10px',
              right: '20px',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              zIndex: 1000,
              opacity: 0.7,
            }}>
              <Box sx={{ marginRight: '10px', fontWeight: language === 'en' ? 'bold' : 'normal' }}>English</Box>
              {/* Language Toggle Switch */}
              <FormControlLabel
                control={
                  <Switch
                    checked={language === 'es'}
                    onChange={toggleLanguage}
                    color="secondary"
                  />
                }
                label={<Box sx={{ fontWeight: language === 'es' ? 'bold' : 'normal' }}>Español</Box>}
              />
            </Box>

            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Section id="about" title={language === 'en' ? 'About' : 'Acerca de'}>
                      <About language={language} />
                    </Section>
                    <Section id="experience" title={language === 'en' ? 'Experience' : 'Experiencia'}>
                      <ExperienceCard 
                        company="Deloitte"
                        title={{en: "Solutions Engineer", es: "Ingeniero de Soluciones"}}
                        timeline={{en: "2022 - Present", es: "2022 - Presente"}} 
                        technologies={['React', 'Node.js', 'Express', 'MongoDB']}
                        description={jobDescriptions.Deloitte}
                        link='https://www2.deloitte.com/us/en.html'
                        language={language}
                      />
                      <ExperienceCard 
                        company="James Robinson Consulting"
                        title={{en: "Owner, CEO", es: "Propietario, CEO"}}
                        timeline={{en: "2020 - 2022", es: "2020 - 2022"}} 
                        technologies={['React', 'Node.js', 'Express', 'MongoDB']}
                        description={jobDescriptions.JamesRobinsonConsulting}
                        link='https://jamesrobinsonconsulting.com'
                        language={language}
                      />
                      <ExperienceCard 
                        company="SimpleLTC"
                        title={{en: "Sofware Engineer", es: "Ingeniero de Software"}}
                        timeline={{en: "2020 - 2021", es: "2020 - 2021"}} 
                        technologies={['React', 'Node.js', 'Express', 'MongoDB']}
                        description={jobDescriptions.SimpleLTC}
                        link='https://www.simpleltc.com/'
                        language={language}
                      />
                    </Section>
                    <Section id="projects" title={language === 'en' ? 'Projects' : 'Proyectos'}>
                      <ProjectCard
                        image="coibox-login.png"
                        title="Coibox"
                        description={{en: "An Airbnb competitor in the Dominican Republic", es: "Un competidor de Airbnb en la República Dominicana"}}
                        technologies={['Next.js', 'MongoDB', 'React']}
                        language={language}
                      />
                      <ProjectCard
                        image="apt-dashboard.png"
                        title="Apartment Dashboard"
                        description={{en: "A display for my apartment that shows relevant information like New York train times, weather, etc.", es: "Un tablero para mi apartamento que muestra información relevante como los horarios de los trenes de Nueva York, el clima, etc."}}
                        technologies={['React', 'Flask', 'AWS']}
                        link="https://jakerdou.github.io/apt-dashboard/"
                        githubLink='https://github.com/jakerdou/apt-dashboard'
                        language={language}
                      />
                      <ProjectCard
                        image="not-pot.png"
                        title="Not Pot"
                        description={{en: "A web app that allows users to upload an image and interface with a machine learning model that will tell them if their image contains marijuana.", es: "Una aplicación web que permite a los usuarios subir una imagen e interactuar con un modelo de aprendizaje automático que les dirá si su imagen contiene marihuana."}}
                        technologies={['React', 'Flask', 'TensorFlow']}
                        link="https://github.com/jakerdou/not-pot"
                        githubLink='https://github.com/jakerdou/not-pot'
                        language={language}
                      />
                    </Section>
                    <Section id="contact" title={language === 'en' ? 'Contact' : 'Contacto'}>
                      <Contact language={language} />
                    </Section>
                  </>
                }
              />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
