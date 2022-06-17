import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
 import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { Pages } from '../pages.js';

export default function Menu() {
    

    return(
        <>
            <Box sx={{
                'auto': 750,
                'color': '#253f78',
                overflow: 'hidden'
            }}
            className=""
            >
                <List className="d-flex flex-row justify-content-center" sx={{
                    background: '#000',
                }}>
                    {Pages.map((route, index)=> (
                        route.menuVisible ?
                        <a href={route.path} className="text-muted text-decoration-none" key={index}>
                            <ListItem className="text-white p-2">
                                <ListItemText primary={route.menuName}/>
                            </ListItem>
                        </a>
                        :
                        <></>
                    ))}
                </List>
            </Box>
        </>
    )
}