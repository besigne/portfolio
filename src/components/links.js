import { Box } from '@mui/material';


export default function Links() {

    return (
        <Box
            className="d-flex flex-row justify-content-center m-auto p-auto"
        >
            <a href="https://github.com/besigne/" className="text-muted text-decoration-none m-1">
                Github
            </a>
            <a href="https://www.linkedin.com/in/matheus-boesing-285031163/" className="text-muted text-decoration-none m-1">
                Linkedin
            </a>
        </Box>
    )
}