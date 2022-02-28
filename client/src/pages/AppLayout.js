import Form from '../components/Form';
import { Box, Stack } from '@mui/material';
import { mainContainer } from '../settings';

export default function AppLayout() {

    return (
        <Box component='main' sx={mainContainer}>
            <Box component='img' src='../../img/motion.svg' alt='MotionLab logo' sx={{ height: '2rem'}} />
            <Box component='section' sx={{padding: '0 100px 0 100px'}}>
                <Stack justifyContent="center">
                    <Form />
                </Stack>
            </Box>
        </Box>
    )

}