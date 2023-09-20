import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, ImageList, ImageListItem, Stack, Typography } from '@mui/material';
import FallBack from '../../components/FallBack';
import ImagesSkeleton from '../../components/ImagesSkeleton';
import { Background, GreyField, ImageHover, srcset } from '../../components/styled';
import { getCatsByBreed } from '../../store/thunks';
import { selectCatsByBreed, selectcatsByBreedError, selectCatsByBreedStatus } from '../../store/breedsSlice';
import noImage from '../../assets/icons/no_image.svg';

const Search = () => {
    const { breedId } = useParams();
    const dispatch = useDispatch();
    const catsByBreed: any = useSelector(selectCatsByBreed);
    const catsByBreedStatus: string = useSelector(selectCatsByBreedStatus);
    const catsByBreedError: string = useSelector(selectcatsByBreedError);
    const [breedName, setBreedName] = useState('');

    useEffect(() => {
        if (breedId) {
            dispatch(getCatsByBreed(breedId));
        }
    }, [breedId]);

    useEffect(() => {
        if (catsByBreed.length) {
            const { breeds } = catsByBreed[0];
            const [breedInfo] = breeds;
            setBreedName(breedInfo.name);
        }
    }, [catsByBreed]);

    return (
        <Background>
            <Box sx={{ mb: '20px' }}>
                <FallBack bg="#FF868E" color="#FFF" />
            </Box>
            {catsByBreedStatus === 'rejected' && catsByBreedError && (
                <Box>
                    <Typography>{catsByBreedError}</Typography>
                </Box>
            )}
            {catsByBreedStatus === 'loading' ? (
                <ImagesSkeleton />
            ) : catsByBreedStatus === 'resolved' ? (
                <>
                    {catsByBreed.length ? (
                        <>
                            <Stack direction="row" useFlexGap spacing="4px" mb="20px">
                                <Typography>Search results for:</Typography>
                                <Typography sx={{ fontWeight: 500 }}>{breedName}</Typography>
                            </Stack>
                            <ImageList variant="quilted" cols={3} rowHeight={140} gap={20}>
                                {catsByBreed.map((cat: Cat) => (
                                    <ImageListItem key={cat.id} cols={cat.cols} rows={cat.rows}>
                                        {cat.url.length ? (
                                            <img
                                                {...srcset(cat.url, 140, cat.rows, cat.cols)}
                                                alt={cat.id}
                                                loading="lazy"
                                            />
                                        ) : (
                                            <img
                                                {...srcset(noImage, 140, cat.rows, cat.cols)}
                                                alt={cat.id}
                                                loading="lazy"
                                            />
                                        )}
                                        <ImageHover>
                                            <Typography>{breedName}</Typography>
                                        </ImageHover>
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </>
                    ) : (
                        <GreyField>
                            <Typography>No item found</Typography>
                        </GreyField>
                    )}
                </>
            ) : null}
        </Background>
    );
};

export default Search;
