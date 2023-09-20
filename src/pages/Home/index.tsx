import React from 'react';
import { Box } from '@mui/material';
import cat from '../../assets/images/cat.jpg';

const Home = () => {
    return (
        <Box sx={{ width: '55%', position: 'relative', p: '30px' }}>
            <Box component="img" src={cat} sx={{ borderRadius: '20px' }} />
        </Box>
    );
};

export default Home;
