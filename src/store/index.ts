import { configureStore } from '@reduxjs/toolkit';
import imagesReducer from './imagesSlice'
import votingReducer from './votingSlice';
import votesReducer from './votesSlice';
import favouritesReducer from './favouritesSlice';
import breedsReducer from './breedsSlice'

const store = configureStore({
    reducer: {
        images: imagesReducer,
        voting: votingReducer,
        votes: votesReducer,
        favourites: favouritesReducer,
        breeds: breedsReducer
    },
});

export default store;
