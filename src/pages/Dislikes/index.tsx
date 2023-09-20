import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, ImageList, ImageListItem, Typography } from '@mui/material';
import FallBack from '../../components/FallBack';
import ImagesSkeleton from '../../components/ImagesSkeleton';
import { Background, GreyField, srcset } from '../../components/styled';
import { selectDislikes, selectError, selectImageStatus } from '../../store/votesSlice';
import { getVotes } from '../../store/thunks';

const DisLikes = () => {
    const dispatch = useDispatch();
    const dislikes: any = useSelector(selectDislikes);
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
                    {dislikes.length ? (
                        <ImageList variant="quilted" cols={3} rowHeight={140} gap={20}>
                            {dislikes.map((dislike: Vote) => (
                                <ImageListItem
                                    key={dislike.id}
                                    cols={dislike.cols}
                                    rows={dislike.rows}
                                    sx={{ '& img': { borderRadius: '20px' } }}
                                >
                                    <img
                                        {...srcset(dislike.image.url, 140, dislike.rows, dislike.cols)}
                                        alt={dislike.image_id}
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

export default DisLikes;
