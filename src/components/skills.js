import { React, useState } from 'react';
import Box from '@mui/material/Box';
import { Card } from '@mui/material';
import { skills } from './cards';
import { CardContent, Typography } from '@mui/material/';

export default function Skills() {

    return (
        <>
            <Box
                className="d-flex flex-row justify-content-center m-auto p-auto"
            >
                {skills.map((skill, index) => (
                    <>
                        <Card
                            sx={{
                                margin: 1,
                                padding: 1,
                                width: '13%',
                                background: '#766CCE',
                            }}
                        >



                            <Typography
                                className="text-center text-white"
                                variant="h5"
                                sx={{
                                    fontFamily: 'monospace',
                                }}
                            >
                                <b>{skill.title}</b>
                            </Typography>
                            <Box
                                className="d-flex flex-row justify-content-center m-auto p-auto"
                                sx={{
                                    borderBottom: 1,
                                    color: 'white'
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: 12,
                                        color: 'white'
                                    }}>
                                    {skill.time} experience
                                </Typography>
                            </Box>

                            {skill.skillset.map((item, index) => (
                                <CardContent className="text-white text-center">
                                    {item}
                                </CardContent>
                            ))}
                        </Card>
                    </>
                ))}
            </Box>

        </>
    )
}