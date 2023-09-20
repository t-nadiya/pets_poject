import { createSelector, createSlice } from '@reduxjs/toolkit';
import { addRowsCols } from '../utilities/addRowsCols';
import { getVotes, voteOnCat } from './thunks';

const initialState: VotesState = {
    votes: [],
    imageStatus: null,
    imageError: null
};


const votesSlice = createSlice({
    name: 'votes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getVotes.pending, (state) => {
            state.imageStatus = 'loading'
            state.imageError = null
        }).addCase(getVotes.fulfilled, (state, { payload }) => {
            state.imageStatus = 'resolved'
            state.votes = payload
        }).addCase(getVotes.rejected, (state, { payload }) => {
            state.imageStatus = 'rejected'
            state.imageError = payload
        }).addCase(voteOnCat.pending, () => {
            //
        }).addCase(voteOnCat.fulfilled, (_, { payload }) => {
            console.log(payload);
        }).addCase(voteOnCat.rejected, (state, { payload }) => {
            state.imageError = payload
        })
    }
})

const selectLikesState = (state: { votes: { votes: Vote[] } }) => state.votes.votes;

export const selectLikes = createSelector(
    selectLikesState,
    (votesState) => {
        const votes = votesState;
        const likes = votes.filter((like: Vote) => like.value === 1);
        const formattedLikes = addRowsCols(likes);
        return formattedLikes;
    }
)
export const selectDislikes = createSelector(
    selectLikesState,
    (votesState) => {
        const votes = votesState;
        const dislikes = votes.filter((like: Vote) => like.value === -1);
        const formattedDislikes = addRowsCols(dislikes);
        return formattedDislikes;
    }
)

export const selectImageStatus = (state: { votes: { imageStatus: string } }) => state.votes.imageStatus;
export const selectError = (state: { votes: { imageError: string } }) => state.votes.imageError;

export default votesSlice.reducer;
