import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, Paper, Skeleton, Stack, Typography } from '@mui/material';
import { selectBreedInfo, selectcatsByBreedError, selectCatsByBreedStatus } from '../../store/breedsSlice';
import { getCatsByBreed } from '../../store/thunks';
import FallBack from '../../components/FallBack';
import ImageCarousel from '../../components/ImageCarousel';
import { Background, DescriptionBox, SubTitle, TitlePage } from '../../components/styled';

const BreedInfo = () => {
    const { breedId } = useParams();
    const dispatch = useDispatch();
    const catsByBreedStatus: string = useSelector(selectCatsByBreedStatus);
    const catsByBreedError: string = useSelector(selectcatsByBreedError);
    const breedInfo: Breed = useSelector(selectBreedInfo);
    const [pathName, setPathName] = useState('');

    useEffect(() => {
        if (breedId) {
            dispatch(getCatsByBreed(breedId));
            setPathName(breedId.toLocaleUpperCase());
        }
    }, [breedId]);

    return (
        <Background>
            <Stack direction="row" mb="20px">
                <FallBack bg="#FBE0DC" color="#FF868E" />
                {pathName && (
                    <Box
                        sx={{
                            background: '#FF868E',
                            color: '#FFF',
                            borderRadius: '10px',
                            padding: '5px 30px',
                            '& p': {
                                fontSize: '20px',
                                fontWeight: 500,
                            },
                        }}
                    >
                        <Typography>{pathName}</Typography>
                    </Box>
                )}
            </Stack>
            {catsByBreedStatus === 'rejected' && catsByBreedError && (
                <Box>
                    <Typography>{catsByBreedError}</Typography>
                </Box>
            )}
            {catsByBreedStatus === 'loading' && (
                <Box>
                    <Skeleton variant="rounded" width="100%" height="400px" animation="wave" sx={{ mb: 3 }} />
                    <Skeleton variant="rounded" width="100%" height="200px" animation="wave" />
                </Box>
            )}
            {catsByBreedStatus === 'resolved' && (
                <>
                    <ImageCarousel />
                    {breedInfo ? (
                        <Box sx={{ textAlign: 'center', position: 'relative', mb: '30px' }}>
                            <Box
                                sx={{
                                    background: '#FFF',
                                    padding: '5px 40px',
                                    position: 'absolute',
                                    top: '-26px',
                                    left: '50%',
                                    transform: 'translate(-50%)',
                                }}
                            >
                                <TitlePage variant="h4">{breedInfo.name}</TitlePage>
                            </Box>
                            <Paper
                                elevation={0}
                                sx={{ border: '2px solid #FBE0DC', borderRadius: '20px', padding: '25px 40px 40px' }}
                            >
                                <Typography variant="h6" color="#8C8C8C" sx={{ mb: '20px' }}>
                                    {breedInfo.alt_names}
                                </Typography>
                                <Stack direction="row" useFlexGap spacing="10px">
                                    <DescriptionBox>
                                        <SubTitle>Temperament:</SubTitle>
                                        <Typography>{breedInfo.temperament}</Typography>
                                    </DescriptionBox>
                                    <DescriptionBox sx={{ '& div:not(:last-child)': { mb: '4px' } }}>
                                        <Stack direction="row" useFlexGap spacing="4px">
                                            <SubTitle>Origin:</SubTitle>
                                            <Typography>{breedInfo.origin}</Typography>
                                        </Stack>
                                        <Stack direction="row" useFlexGap spacing="4px">
                                            <SubTitle>Weight:</SubTitle>
                                            <Typography>{breedInfo.weight.metric} kg</Typography>
                                        </Stack>
                                        <Stack direction="row" useFlexGap spacing="4px">
                                            <SubTitle>Life span:</SubTitle>
                                            <Typography>{breedInfo.life_span} years</Typography>
                                        </Stack>
                                    </DescriptionBox>
                                </Stack>
                            </Paper>
                        </Box>
                    ) : (
                        <Box>No info</Box>
                    )}
                </>
            )}
        </Background>
    );
};

export default BreedInfo;
