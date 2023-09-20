import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, ImageList, ImageListItem, Typography } from '@mui/material';
import FallBack from '../../components/FallBack';
import ImagesSkeleton from '../../components/ImagesSkeleton';
import { Background, GreyField, ImageHover, srcset, UnFavButton } from '../../components/styled';
import { selectFavourites, selectFavouritesError, selectImageStatus } from '../../store/favouritesSlice';
import { getFavourites, unFavourCat } from '../../store/thunks';
import { ReactComponent as Favourite } from '../../assets/icons/fav_small.svg';
import noImage from '../../assets/icons/no_image.svg';

const Favourites = () => {
    const dispatch = useDispatch();
    const favourites: any = useSelector(selectFavourites);
    const imageStatus: string = useSelector(selectImageStatus);
    const imageError: string = useSelector(selectFavouritesError);

    useEffect(() => {
        dispatch(getFavourites());
    }, []);

    const removeFromFavourites = (favouriteId: number) => {
        dispatch(unFavourCat(favouriteId)).then(() => dispatch(getFavourites()));
    };

    return (
        <Background>
            <Box sx={{ mb: '20px' }}>
                <FallBack bg="#FF868E" color="#FFF" />
            </Box>
            {imageStatus === 'rejected' && imageError && (
                <GreyField>
                    <Typography>{imageError}</Typography>
                </GreyField>
            )}
            {imageStatus === 'loading' ? (
                <ImagesSkeleton />
            ) : imageStatus === 'resolved' ? (
                <>
                    {favourites.length ? (
                        <ImageList variant="quilted" cols={3} rowHeight={140} gap={20}>
                            {favourites.map((fav: Vote) => (
                                <ImageListItem key={fav.id} cols={fav.cols} rows={fav.rows}>
                                    {fav.image ? (
                                        <img
                                            {...srcset(fav.image.url, 140, fav.rows, fav.cols)}
                                            alt={fav.image_id}
                                            loading="lazy"
                                        />
                                    ) : (
                                        <img
                                            {...srcset(noImage, 140, fav.rows, fav.cols)}
                                            alt={fav.image_id}
                                            loading="lazy"
                                        />
                                    )}
                                    <ImageHover>
                                        <UnFavButton onClick={() => removeFromFavourites(fav.id)} aria-label="unfavour">
                                            <Favourite />
                                        </UnFavButton>
                                    </ImageHover>
                                </ImageListItem>
                            ))}
                        </ImageList>
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

export default Favourites;
