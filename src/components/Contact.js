import React, { useState } from 'react';
import { Box, Typography, Snackbar, Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import emailjs from 'emailjs-com';
import CircularProgress from '@mui/material/CircularProgress';

const useStyles = makeStyles((theme) => ({
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
        backgroundColor: '#7472727d',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginTop: theme.spacing(2),
    },
    formField: {
        marginBottom: theme.spacing(2),
        width: '100%',
        maxWidth: '400px',
    },
    formLabel: {
        marginBottom: theme.spacing(1),
        fontWeight: 'bold',
    },
    formInput: {
        padding: theme.spacing(1),
        borderRadius: '4px',
        border: '1px solid #ccc',
        width: '100%',
        resize: 'none',
        fontFamily: 'Arial, sans-serif',
    },
    formButton: {
        padding: theme.spacing(1, 2),
        backgroundColor: theme.palette.secondary.main,
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
        },
        '&:disabled': {
            backgroundColor: theme.palette.secondary.light,
            cursor: 'default',
        },
        display: 'block',
        margin: '0 auto',
    },
}));

const Contact = ({ language }) => {
    const classes = useStyles();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [loading, setLoading] = useState(false);
    const [cooldown, setCooldown] = useState(false);

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cooldown) return;

        setLoading(true);
        setCooldown(true);
        // Handle form submission logic here
        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            formData,
            process.env.REACT_APP_EMAILJS_USER_ID
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                
                setOpenSnackbar(true);
                
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
                setLoading(false);
                setTimeout(() => setCooldown(false), 30000);
            }, (error) => {
                console.log('FAILED...', error);
                setLoading(false);
                setCooldown(false);
            });
        
        console.log('Form data submitted:', formData);
        
    };

    const translations = {
        en: {
            emailText: "Feel free to email me at james@jamesdrobinson.com or fill out the form below",
            name: "Name",
            email: "Email",
            phone: "Phone Number",
            message: "Message",
            send: "Send"
        },
        es: {
            emailText: "No dudes en enviarme un correo electrónico a james@jamesdrobinson.com o completa el formulario a continuación",
            name: "Nombre",
            email: "Correo Electrónico",
            phone: "Número de Teléfono",
            message: "Mensaje",
            send: "Enviar"
        }
    };

    const t = translations[language] || translations.en;

    return (
        <Box>
            <Typography variant="body">{t.emailText}</Typography>
            <div className={classes.formContainer}>
                <form onSubmit={handleSubmit}>
                    <div className={classes.formField}>
                        <label htmlFor="name" className={classes.formLabel}>{t.name}</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={classes.formInput}
                        />
                    </div>
                    <div className={classes.formField}>
                        <label htmlFor="email" className={classes.formLabel}>{t.email}</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={classes.formInput}
                        />
                    </div>
                    <div className={classes.formField}>
                        <label htmlFor="phone" className={classes.formLabel}>{t.phone}</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={classes.formInput}
                        />
                    </div>
                    <div className={classes.formField}>
                        <label htmlFor="message" className={classes.formLabel}>{t.message} <span style={{ color: '#ff4949' }}>*</span></label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className={classes.formInput}
                            required
                        ></textarea>
                    </div>
                    <Tooltip title={cooldown ? "Please wait before sending another message" : ""}>
                        <span>
                            <button type="submit" className={classes.formButton} disabled={loading || cooldown}>
                                {loading ? <CircularProgress size={24} color="inherit" /> : t.send}
                            </button>
                        </span>
                    </Tooltip>
                </form>
            </div>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                message="Message sent! I'll get back to you shortly."
                action={
                    <button onClick={handleSnackbarClose} style={{ color: '#fff', background: 'none', border: 'none', cursor: 'pointer' }}>
                        Close
                    </button>
                }
            />
        </Box>
    );
};

export default Contact;