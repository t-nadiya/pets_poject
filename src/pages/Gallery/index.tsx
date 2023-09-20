import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, ImageList, ImageListItem, Typography } from '@mui/material';
import { favourCat, getCatsImages, unFavourCat } from '../../store/thunks';
import FallBack from '../../components/FallBack';
import ImagesSkeleton from '../../components/ImagesSkeleton';
import { Background, FavButton, GreyField, ImageHover, srcset } from '../../components/styled';
import { addFavouriteId, selectCatsError, selectCatsImages, selectCatsStatus } from '../../store/imagesSlice';
import { ReactComponent as Favourite } from '../../assets/icons/fav_small.svg';
import noImage from '../../assets/icons/no_image.svg';
import { selectFavourStatus } from '../../store/favouritesSlice';

const Gallery = () => {
    const dispatch = useDispatch();
    const [isFavourite, setIsFavourite] = useState(false);
    const cats: any = useSelector(selectCatsImages);
    const catsStatus: string = useSelector(selectCatsStatus);
    const catsError: string = useSelector(selectCatsError);
    const favorStatus: string = useSelector(selectFavourStatus);

    useEffect(() => {
        if (!cats.length) {
            dispatch(getCatsImages());
        }
    }, [cats]);

    const handleToggleFavour = (cat: Cat) => {
        if (!isFavourite) {
            dispatch(favourCat({ image_id: cat.id }));
            dispatch(addFavouriteId(cat.id));
        } else {
            dispatch(unFavourCat(cat.favourite.favouriteId));
        }
        setIsFavourite(!isFavourite);
    };

    return (
        <Background>
            <Box sx={{ mb: '20px' }}>
                <FallBack bg="#FF868E" color="#FFF" />
            </Box>
            {catsStatus === 'rejected' && catsError && (
                <Box>
                    <Typography>{catsError}</Typography>
                </Box>
            )}
            {catsStatus === 'loading' ? (
                <ImagesSkeleton />
            ) : catsStatus === 'resolved' ? (
                <>
                    {cats.length ? (
                        <ImageList variant="quilted" cols={3} rowHeight={140} gap={20}>
                            {cats.map((cat: Cat) => (
                                <ImageListItem key={cat.id} cols={cat.cols} rows={cat.rows}>
                                    {cat.url ? (
                                        <img {...srcset(cat.url, 140, cat.rows, cat.cols)} alt="cat" loading="lazy" />
                                    ) : (
                                        <img {...srcset(noImage, 140, cat.rows, cat.cols)} alt="cat" loading="lazy" />
                                    )}
                                    <ImageHover>
                                        <FavButton
                                            value="favour"
                                            selected={isFavourite}
                                            onClick={() => handleToggleFavour(cat)}
                                            disabled={favorStatus === 'loading'}
                                            aria-label="favour"
                                        >
                                            <Favourite />
                                        </FavButton>
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

export default Gallery;
