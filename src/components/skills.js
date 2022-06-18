import React from 'react';
import Box from '@mui/material/Box';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import skills from './cards';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Skills() {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <Box
                className="d-flex flex-row justify-content-center m-auto p-auto"
            >
                {skills.map((skill, index) => (
                    <Card sx={{
                        margin: 1,
                        padding: 1,
                        width: '13%',
                        background: '#766CCE'
                    }}>
                        <Typography gutterBottom variant="h5" component="div" className="text-center text-white">
                            {skill.title}
                        </Typography>

                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                            sx={{
                                color: 'white'
                            }}
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent className="text-white">
                                {skill.skills.map((item) => (
                                    <CardContent>
                                        {item}
                                    </CardContent>
                                ))}
                            </CardContent>
                        </Collapse>
                    </Card>
                ))}

            </Box>

        </>
    )
}