import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { Box, Typography, Link } from '@mui/material';
import { IconButton } from '@mui/material';
import { GitHub } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
    projectCard: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        padding: '1rem',
        borderRadius: '8px',
        backgroundColor: '#7472727d',
        boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.3)',
        color: '#fff',
        marginBottom: '1rem',
    },
    imageSection: {
        width: '30%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    projectImage: {
        width: '100%',
        height: 'auto',
        maxHeight: '200px',
        objectFit: 'cover',
        display: 'block',
        borderRadius: '8px',
        // cursor: 'pointer',
        transition: 'filter 0.2s ease-in-out',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0,
        transition: 'opacity 0.3s ease', // Smooth transition,
        borderRadius: '8px',
    },
    imageSectionHover: {
        '&:hover $overlay': {
            opacity: 1,
        },
    },
    contentSection: {
        width: '70%',
        paddingLeft: '1rem',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
    },
    titleText: {
        fontSize: '1.5rem !important',
        fontWeight: 'bold !important',
        marginBottom: '0.5rem',
    },
    descriptionText: {
        marginBottom: '1rem !important',
        fontSize: '1rem !important',
    },
    technologiesText: {
        marginBottom: '0.5rem',
        fontSize: '1rem',
        display: 'flex',
        flexWrap: 'wrap',
        '@media (max-width: 900px)': {
            flexDirection: 'column',
            width: 'fit-content',
        },
    },
    technology: {
        backgroundColor: theme.palette.secondary.main,
        color: 'white',
        padding: '0.25rem 0.5rem',
        borderRadius: '0.25rem',
        marginRight: '0.5rem',
        marginBottom: '0.5rem', // Add margin-bottom for spacing when stacked
    },
    socialIcon: {
        color: 'white !important',
        fontSize: '2rem',
        '&:hover': {
            color: 'lightgrey !important', // Subtle dark gray
        },
    },
}));

const ProjectCard = ({ image, title, description, technologies, link, language, githubLink }) => {
    const classes = useStyles();

    return (
        <Box className={classes.projectCard}>
            <Box className={`${classes.imageSection} ${classes.imageSectionHover}`}>
                <Link href={link} target='_blank' style={{ cursor: link ? 'pointer' : 'default' }}>
                    <img src={image} alt={title} className={classes.projectImage} />
                    {link && (
                        <Box className={classes.overlay}>
                            <Typography variant="h6">Visit Project</Typography>
                        </Box>
                    )}
                </Link>
            </Box>

            {/* Section 2: Title, Description, Technologies */}
            <Box className={classes.contentSection}>
                <Box display="flex" alignItems="center">
                    <Typography variant="h6" className={classes.titleText}>
                        {title}
                    </Typography>
                    {githubLink && (
                        <IconButton
                            className={classes.socialIcon}
                            component="a"
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitHub />
                        </IconButton>
                    )}
                </Box>
                <Typography variant="body2" className={classes.descriptionText}>
                    {description[language]}
                </Typography>
                {technologies && (
                    <Typography variant="body2" className={classes.technologiesText}>
                        {technologies.map((tech, index) => (
                            <span key={index} className={classes.technology}>{tech}</span>
                        ))}
                    </Typography>
                )}
            </Box>
        </Box>
    );
};

ProjectCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.shape({
        en: PropTypes.string.isRequired,
        es: PropTypes.string.isRequired,
    }).isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string,
    language: PropTypes.string.isRequired,
    githubLink: PropTypes.string
};

export default ProjectCard;