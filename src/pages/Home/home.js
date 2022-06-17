import Menu from '../../components/menu.js';
import React from 'react';
import { Box, Typography } from '@mui/material';
import PerfilImage from '../../imgs/perfil.JPG';
import Skills from '../../components/skills.js';


export default function Home() {
    return (
        <>
            <Menu />
            
                <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    background: 'red',
                    backgroundImage: '../../imgs/background.jpg',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
                >
                <Box
                    sx={{
                        width: '60%',
                        height: '100%',
                        fontFamily: "-moz-initial",
                        background: 'white',
                        border: 1,
                    }}
                    className="d-flex flex-row justify-content-center m-auto p-auto"
                >
                    <Typography className="text-center"
                    sx={{
                        width: '50%',
                    }}>
                        <Typography
                        sx={{
                            fontSize: 45,
                            marginTop: 4,
                            marginBottom: 2,
                        }}
                        >
                            matheus.io
                        </Typography>

                        Hello there! My full name is Matheus Boesing da Silva,
                        currently living in south Brazil, english is my second
                        language and I hope to learn a third one soon.
                    <Typography className="m-auto p-auto text-center">
                        I have a diverse set of skills, ranging from
                        frontend, <b>Javascript, HTML </b>and<b> CSS</b> all the way to
                        backend on <b>Python </b>and<b> PHP</b>
                    </Typography>
                    </Typography>
                </Box>

                <Skills />
                
                <Box
                    className="d-flex flex-row justify-content-center m-auto p-auto"
                >
                    
                <Box
                    component="img"
                    src={PerfilImage}
                    alt="me"
                    sx={{
                        width: 250,
                        height: 250,
                        border: 3,
                        borderColor: 'white',
                        borderRadius: 50
                    }}
                    className="m-3"
                />
                </Box>
                </Box>
                <Box
                 className="d-flex flex-row justify-content-center m-auto p-auto"
                >
                <a href="https://github.com/besigne/" className="text-muted text-decoration-none">
                    Github
                </a>
                </Box>

        </>
    )
}