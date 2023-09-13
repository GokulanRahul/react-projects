import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { useRef } from 'react';
import emailjs from "@emailjs/browser";
import Footer from './Footer';

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
});

export default function Contacts() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_09qxbmp",
                "template_zdaoa2y",
                form.current,
                "3M61wTMCq-qLyV3sm"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };


    return (
        <section id="Contacts">

            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 5,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',

                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <ContactMailIcon sx={{ bgcolor: "secondary" }} />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Contact Me
                        </Typography>
                        <Box
                            ref={form} onSubmit={sendEmail}
                            component="form"
                            noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="user_name"
                                label="Name"
                                type="text"
                                id="password"

                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="user_email"


                            />
                            <TextField
                                fullWidth
                                label="Enter Your Message"
                                margin='normal'
                                id="fullWidth"
                                variant="filled"
                                name="message"
                            />

                            <Button
                                type="submit"
                                fullWidth
                                value="Send"
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sumbit
                            </Button>

                        </Box>
                    </Box>

                </Container>
            </ThemeProvider>

            <Footer/>
        </section>
    );
}