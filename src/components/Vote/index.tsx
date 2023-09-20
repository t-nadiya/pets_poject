import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { ReactComponent as Like } from '../../assets/icons/like_small.svg';
import { ReactComponent as Favourite } from '../../assets/icons/fav_small.svg';
import { ReactComponent as Dislike } from '../../assets/icons/dislike_small.svg';
import { GreyField } from '../styled';

const Vote = ({ created_at, image_id, value }: Vote) => {
    const [desc, setDesc] = useState('');

    useEffect(() => {
        value === 1 ? setDesc('Likes') : value === -1 ? setDesc('Dislikes') : !value ? setDesc('Favourites') : '';
    }, [value]);

    return (
        <GreyField>
            <Stack direction="row">
                <Box sx={{ background: '#FFF', p: '3px 10px', borderRadius: '5px', mr: '20px' }}>
                    <Typography>{created_at}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', color: '#8C8C8C' }}>
                    <Typography sx={{ pr: '4px' }}>Image ID: </Typography>
                    <Typography sx={{ color: '#1D1D1D', fontWeight: 500, pr: '4px' }}>{image_id}</Typography>
                    <Typography>{`was added to ${desc}`}</Typography>
                </Box>
            </Stack>
            <Stack direction="row" mr="5px">
                {value && value === 1 ? (
                    <Like />
                ) : value && value === -1 ? (
                    <Dislike />
                ) : !value ? (
                    <Favourite color="#FF868E" />
                ) : (
                    <Box />
                )}
            </Stack>
        </GreyField>
    );
};

export default Vote;
