import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { Box, Typography, Link } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const useStyles = makeStyles((theme) => ({
    experienceCard: {
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
    timelineSection: {
        width: '15%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Aligns horizontally centered
        alignItems: 'center',     // Centers the text vertically
    },
    timelineText: {
        textAlign: 'center',
        fontSize: '1rem',
        color: '#757575',
    },
    contentSection: {
        width: '85%',
        paddingLeft: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Aligns horizontally centered with the timeline
    },
    companyTitleContainer: {
        display: 'flex',
        alignItems: 'center', // Ensures title is aligned with company name on the same line
        marginBottom: '0.5rem',
    },
    companyText: {
        fontSize: '1.2rem !important', // Reduced size for the title
        color: theme.palette.secondary.main + ' !important',
        textDecoration: 'none !important',
        '&:hover': {
            textDecoration: 'underline !important',
        },
    },
    titleText: {
        fontSize: '1.5rem !important',
        fontWeight: 'bold !important',
        marginRight: '0.75rem !important', // Adds space between company and title
    },
    technologiesText: {
        marginBottom: '0.5rem',
        fontSize: '1rem',
    },
    technology: {
        backgroundColor: theme.palette.secondary.main,
        color: 'white',
        padding: '0.25rem 0.5rem',
        borderRadius: '0.25rem',
        marginRight: '0.5rem',
    },
    linksContainer: {
        display: 'flex',
        gap: '1rem',
        marginTop: '0.5rem',
    },
    linkText: {
        color: '#30dd7c',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    descriptionList: {
        listStyleType: 'none',
        paddingLeft: 0,
    },
    descriptionItem: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '0.5rem',
    },
    descriptionIcon: {
        marginRight: '0.5rem',
        color: theme.palette.secondary.main,
    },
}));

const ExperienceCard = ({ company, title, timeline, description, link, language }) => {
    const classes = useStyles();

    const desc = description[language];

    return (
        <Box className={classes.experienceCard}>
            {/* Section 1: Timeline */}
            <Box className={classes.timelineSection}>
                <Typography variant="body2" className={classes.timelineText}>
                    {language === 'en' ? timeline.en : timeline.es}
                </Typography>
            </Box>

            {/* Section 2: Company, Title, Technologies, Links */}
            <Box className={classes.contentSection}>
                <Box className={classes.companyTitleContainer}>
                    <Typography variant="h6" className={classes.titleText}>
                        {language === 'en' ? title.en : title.es}
                    </Typography>
                    {/* <Typography variant="subtitle1" className={classes.companyText}> */}
                        <Link href={link} className={classes.companyText} target='_blank'>
                            {company}
                        </Link>
                    {/* </Typography> */}
                </Box>
                {/* {technologies && (
                    <Typography variant="body2" className={classes.technologiesText}>
                        {technologies.map((tech, index) => (
                            <span key={index} className={classes.technology}>{tech}</span>
                        ))}
                    </Typography>
                )} */}
                {/* bullet points with description of job */}
                <Typography variant="body2" component="ul" className={classes.descriptionList}>
                    {desc.map((point, index) => (
                        <li key={index} className={classes.descriptionItem}>
                            {/* <CheckCircleIcon className={classes.descriptionIcon} /> */}
                            {point}
                        </li>
                    ))}
                </Typography>
                {/* {links && (
                    <Box className={classes.linksContainer}>
                        {links.map((link, index) => (
                            <Link key={index} href={link.url} className={classes.linkText} target='_blank' >
                                {language === 'en' ? link.label.en : link.label.es}
                            </Link>
                        ))}
                    </Box>
                )} */}
            </Box>
        </Box>
    );
};

ExperienceCard.propTypes = {
    company: PropTypes.string.isRequired,
    title: PropTypes.shape({
        en: PropTypes.string.isRequired,
        es: PropTypes.string.isRequired,
    }).isRequired,
    timeline: PropTypes.shape({
        en: PropTypes.string.isRequired,
        es: PropTypes.string.isRequired,
    }).isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.arrayOf(PropTypes.string),
    // links: PropTypes.arrayOf(
    //     PropTypes.shape({
    //         url: PropTypes.string.isRequired,
    //         label: PropTypes.shape({
    //             en: PropTypes.string.isRequired,
    //             es: PropTypes.string.isRequired,
    //         }).isRequired,
    //     })
    // ),
    link: PropTypes.string,
    language: PropTypes.string.isRequired,
};

export default ExperienceCard;
