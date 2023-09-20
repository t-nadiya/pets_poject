import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { NavButton, TitleMain } from '../styled';
import logo from '../../assets/icons/logo.svg';
import { linksData } from '../consts';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <Box sx={{ position: 'fixed', width: '30%', p: '30px 60px 30px 100px' }}>
            <Box sx={{ maxWidth: 55, mb: 10 }}>
                <Box component="img" src={logo} alt="logo" />
            </Box>
            <Box sx={{ mb: '60px' }}>
                <TitleMain variant="h1">Cats project</TitleMain>
                <Typography variant="h6" color="#8C8C8C" sx={{ fontWeight: 400 }}>
                    Welcome
                </Typography>
            </Box>
            <Stack useFlexGap spacing={2}>
                {linksData.map((link: NavButtonData) => (
                    <NavButton key={link.id}>
                        <NavLink to={link.path}>{link.title}</NavLink>
                    </NavButton>
                ))}
            </Stack>
        </Box>
    );
};

export default Navigation;
