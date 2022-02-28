import { Typography } from '@mui/material';


export default function Footer() {

    const footerSx = {
        textAlign:'center',
        marginBottom: '20px'
    }

    return (
        <Typography sx={footerSx}>
            This is not an official site. For educational purposes only.
        </Typography>
    );
}