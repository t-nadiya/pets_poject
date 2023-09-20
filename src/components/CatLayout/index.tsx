import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import { NavIcon } from '../styled';
import { ReactComponent as Like } from '../../assets/icons/like_big.svg';
import { ReactComponent as Favourite } from '../../assets/icons/fav_big.svg';
import { ReactComponent as Dislike } from '../../assets/icons/dislike_big.svg';

import SearchBar from '../SearchBar';
import { getBreeds } from '../../store/thunks';
import { useDispatch } from 'react-redux';

const CatLayout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBreeds());
    }, []);

    return (
        <Box sx={{ width: '65%', p: '30px 30px 20px 65px' }}>
            <Stack direction="row" spacing={{ justifyContent: 'space-between', gap: '10px' }} mb="10px">
                <SearchBar />
                <Stack direction="row" spacing="10px" useFlexGap>
                    <NavIcon>
                        <NavLink to="likes">
                            <Like />
                        </NavLink>
                    </NavIcon>
                    <NavIcon>
                        <NavLink to="favourites">
                            <Favourite />
                        </NavLink>
                    </NavIcon>
                    <NavIcon>
                        <NavLink to="dislikes">
                            <Dislike />
                        </NavLink>
                    </NavIcon>
                </Stack>
            </Stack>
            <Outlet />
        </Box>
    );
};

export default CatLayout;
