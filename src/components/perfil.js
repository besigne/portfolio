import { Box } from '@mui/material';
import PerfilImage from '../imgs/perfil.JPG';

export default function Perfil() {
    return (

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
                    borderColor: '#766CCE',
                    borderRadius: 50
                }}
                className="m-3"
            />
        </Box>

    )
}