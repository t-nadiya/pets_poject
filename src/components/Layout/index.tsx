import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Navigation from '../Navigatoin';

const Layout = () => {
    return (
        <Container disableGutters={true} sx={{ display: 'flex', height: '900px' }}>
            <Navigation />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                <Outlet />
            </Box>
        </Container>
    );
};

export default Layout;
