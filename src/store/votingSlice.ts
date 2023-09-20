import { createSelector, createSlice } from '@reduxjs/toolkit';
import { formatTime } from '../utilities/formatDate';

const initialState: VotingState = {
    userLogs: []
}

const votingSlice = createSlice({
    name: 'voting',
    initialState,
    reducers: {},
})

const selectVotesState = (state: { votes: { votes: Vote[] } }) => state.votes.votes;
const selectFavouritesState = (state: { favourites: { favourites: Vote[] } }) => state.favourites.favourites;

export const selectUserLogs = createSelector(
    [selectVotesState, selectFavouritesState],
    (votesState, favouritesState) => {
        const userLogs = [...votesState, ...favouritesState];
        userLogs.sort((a: Vote, b: Vote) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())

        const formattedUserLogs = userLogs.map(log => {
            return { ...log, created_at: formatTime(log.created_at) }
        })

        return formattedUserLogs;
    }
)

export default votingSlice.reducer

