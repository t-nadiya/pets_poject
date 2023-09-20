import { createSlice, createSelector } from '@reduxjs/toolkit';
import { addRowsCols } from '../utilities/addRowsCols';
import { getFavourites } from './thunks';

const initialState: FavouritesState = {
    favourites: [],
    favouritesStatus: null,
    favouritesError: null,
    favourStatus: null,
    favourError: null,
};

const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getFavourites.pending, (state) => {
            state.favouritesStatus = 'loading'
            state.favouritesError = null
        }).addCase(getFavourites.fulfilled, (state, { payload }) => {
            state.favouritesStatus = 'resolved'
            state.favourites = payload
        }).addCase(getFavourites.rejected, (state, { payload }) => {
            state.favouritesStatus = 'rejected'
            state.favouritesError = payload;
        })
    }
})

const selectFavouritesState = (state: { favourites: { favourites: Vote[] } }) => state.favourites.favourites;
export const selectFavourites = createSelector(
    [selectFavouritesState],
    (favourites) => {
        const formattedFavs = addRowsCols(favourites);
        return formattedFavs;
    }
)
export const selectImageStatus = (state: { favourites: { favouritesStatus: string } }) => state.favourites.favouritesStatus;
export const selectFavouritesError = (state: { favourites: { favouritesError: string } }) => state.favourites.favouritesError;
export const selectFavourStatus = (state: { favourites: { favourStatus: string } }) => state.favourites.favourStatus;

export default favouritesSlice.reducer;
