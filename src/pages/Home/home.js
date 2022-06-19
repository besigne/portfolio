import Menu from '../../components/menu.js';
import React from 'react';
import { Box, Typography } from '@mui/material';
import Skills from '../../components/skills.js';
import Links from '../../components/links.js';
import Perfil from '../../components/perfil.js';


export default function Home() {
    return (
        <>
            {/* <Menu /> */}
            <Box
                sx={{
                    backgroundImage: '../../imgs/background.jpg',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <Box
                    sx={{
                        width: '60%',
                        fontFamily: "-moz-initial",
                        background: 'white',
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
                        <Typography className="m-3 p-auto text-center">
                            I have a diverse set of skills, ranging from
                            frontend, <b>Javascript, HTML </b>and<b> CSS</b> all the way to
                            backend using <b>Python </b>and<b> PHP</b>.
                        </Typography>
                    </Typography>
                </Box>

                <Skills />
                <Links />

                <Perfil />

            </Box>
        </>
    )
}