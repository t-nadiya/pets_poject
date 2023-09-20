import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Skeleton, Typography } from '@mui/material';
import { selectUserLogs } from '../../store/votingSlice';
import { selectRandomCatError, selectRandomCat, selectRandomCatStatus } from '../../store/imagesSlice';
import { favourCat, getFavourites, getRandomCat, getVotes, unFavourCat, voteOnCat } from '../../store/thunks';
import FallBack from '../../components/FallBack';
import Vote from '../../components/Vote';
import { Background, DislikeButton, FavButtonBig, LikeButton, VoteButtons } from '../../components/styled';
import { ReactComponent as Like } from '../../assets/icons/like_big.svg';
import { ReactComponent as Favourite } from '../../assets/icons/fav_big.svg';
import { ReactComponent as Dislike } from '../../assets/icons/dislike_big.svg';

const Voting = () => {
    const dispatch = useDispatch();
    const [isFavourite, setIsFavourite] = useState(false);
    const randomCat: Cat = useSelector(selectRandomCat);
    const imageStatus: string = useSelector(selectRandomCatStatus);
    const imageError: string = useSelector(selectRandomCatError);
    const userLogs: Vote[] = useSelector(selectUserLogs);

    useEffect(() => {
        dispatch(getRandomCat());
        dispatch(getVotes());
        dispatch(getFavourites());
    }, []);

    const updateView = () => {
        dispatch(getVotes());
        dispatch(getRandomCat());
    };

    const addToLikes = () => {
        dispatch(voteOnCat({ image_id: randomCat.id, rate: 1 }));
        updateView();
    };

    const handleFavouriteClick = () => {
        if (!isFavourite) {
            dispatch(favourCat({ image_id: randomCat.id }));
            dispatch(getFavourites());
        } else {
            const { favouriteId } = randomCat.favourite;
            dispatch(unFavourCat(favouriteId));
            dispatch(getFavourites());
        }
        setIsFavourite(!isFavourite);
    };

    const addToDislikes = () => {
        dispatch(voteOnCat({ image_id: randomCat.id, rate: -1 }));
        updateView();
    };

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
            {imageStatus === 'loading' && (
                <Box>
                    <Skeleton variant="rounded" width="100%" height="300px" animation="wave" sx={{ mb: 3 }} />
                    {[1, 2, 3, 4, 5, 6].map((r) => (
                        <Skeleton
                            key={r}
                            variant="rounded"
                            width="100%"
                            height="60px"
                            animation="wave"
                            sx={{ mb: 1 }}
                        />
                    ))}
                </Box>
            )}
            {imageStatus === 'resolved' && (
                <>
                    <Box sx={{ position: 'relative', mb: '52px' }}>
                        <Box component="img" src={randomCat.url} sx={{ borderRadius: '20px' }} alt="cat" />
                        <VoteButtons>
                            <LikeButton onClick={addToLikes} aria-label="like">
                                <Like />
                            </LikeButton>
                            <FavButtonBig
                                value="favour"
                                selected={isFavourite}
                                onClick={handleFavouriteClick}
                                aria-label="favourite"
                            >
                                <Favourite />
                            </FavButtonBig>
                            <DislikeButton onClick={addToDislikes} aria-label="dislike">
                                <Dislike />
                            </DislikeButton>
                        </VoteButtons>
                    </Box>
                    {userLogs && (
                        <Box>
                            {userLogs.map((log: Vote) => (
                                <Vote key={log.id} {...log} />
                            ))}
                        </Box>
                    )}
                </>
            )}
        </Background>
    );
};

export default Voting;
