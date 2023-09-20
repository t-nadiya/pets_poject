import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, ImageList, ImageListItem, Typography } from '@mui/material';
import { getVotes } from '../../store/thunks';
import FallBack from '../../components/FallBack';
import ImagesSkeleton from '../../components/ImagesSkeleton';
import { Background, GreyField, srcset } from '../../components/styled';
import { selectError, selectImageStatus, selectLikes } from '../../store/votesSlice';

const Likes = () => {
    const dispatch = useDispatch();
    const likes: any = useSelector(selectLikes);
    const imageStatus: string = useSelector(selectImageStatus);
    const imageError: string = useSelector(selectError);

    useEffect(() => {
        dispatch(getVotes());
    }, []);

    return (
        <Background>
            <Box sx={{ mb: '20px' }}>
                <FallBack bg="#FF868E" color="#FFF" />
            </Box>
            {imageStatus === 'rejected' && imageError && (
                <Box>
                    <Typography>{imageError}</Typography>
                </Box>
            )}
            {imageStatus === 'loading' ? (
                <ImagesSkeleton />
            ) : imageStatus === 'resolved' ? (
                <>
                    {likes.length ? (
                        <ImageList variant="quilted" cols={3} rowHeight={140} gap={20}>
                            {likes.map((like: Vote) => (
                                <ImageListItem
                                    key={like.id}
                                    cols={like.cols}
                                    rows={like.rows}
                                    sx={{ '& img': { borderRadius: '20px' } }}
                                >
                                    <img
                                        {...srcset(like.image.url, 140, like.rows, like.cols)}
                                        alt={like.image_id}
                                        loading="lazy"
                                    />
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

export default Likes;
