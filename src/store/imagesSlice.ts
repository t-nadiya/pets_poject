import { createSelector, createSlice } from '@reduxjs/toolkit';
import { addRowsCols } from '../utilities/addRowsCols';
import { favourCat, getCatsImages, getRandomCat, unFavourCat } from './thunks';

const initialState: ImagesesState = {
    randomCat: {},
    randomCatStatus: null,
    randomCatError: null,
    cats: [],
    catsStatus: null,
    catsError: null,
    favouriteStatus: null,
    favouriteError: null,
    deleteStatus: null,
    deleteError: null
};

const imagesSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        addFavouriteId: (state, { payload }) => {
            const cat = state.cats.find(cat => cat.id === payload)
            if (cat) {

                cat.favourite = { favouriteId: 1 }
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getRandomCat.pending, (state) => {
            state.randomCatStatus = 'loading'
            state.randomCatError = null
        }).addCase(getRandomCat.fulfilled, (state, { payload }) => {
            state.randomCatStatus = 'resolved'
            const [cat] = payload;
            state.randomCat = cat;
        }).addCase(getRandomCat.rejected, (state, { payload }) => {
            state.randomCatStatus = 'rejected'
            state.randomCatError = payload
        }).addCase(getCatsImages.pending, (state) => {
            state.catsStatus = 'loading'
            state.catsError = null
        }).addCase(getCatsImages.fulfilled, (state, { payload }) => {
            state.catsStatus = 'resolved'
            state.cats = payload
        }).addCase(getCatsImages.rejected, (state, { payload }) => {
            state.catsStatus = 'rejected'
            state.catsError = payload
        }).addCase(favourCat.pending, (state) => {
            state.favouriteStatus = 'loading'
            state.favouriteError = null
        }).addCase(favourCat.fulfilled, (state, { payload }) => {
            state.favouriteStatus = 'resolved'
            const { data, id } = payload;
            if (data.message === 'SUCCESS') {
                state.randomCat = { ...state.randomCat, favourite: { favouriteId: data.id } }
                const cat = state.cats.find(cat => cat.id === id);
                if (cat) {

                    cat.favourite = { favouriteId: data.id }
                }
            }

        }).addCase(favourCat.rejected, (state, { payload }) => {
            state.favouriteStatus = 'rejected'
            state.favouriteError = payload
        }).addCase(unFavourCat.pending, (state) => {
            state.deleteStatus = 'loading'
            state.deleteError = null
        }).addCase(unFavourCat.fulfilled, (state) => {

            // const time: number = Date.now()
            state.deleteStatus = 'resolved'
        }).addCase(unFavourCat.rejected, (state, { payload }) => {
            state.deleteStatus = 'rejected'
            state.deleteError = payload
        })
    }
})

export const selectRandomCat = (state: { images: { randomCat: Cat } }) => state.images.randomCat;
export const selectRandomCatStatus = (state: { images: { randomCatStatus: string } }) => state.images.randomCatStatus;
export const selectRandomCatError = (state: { images: { randomCatError: string } }) => state.images.randomCatError;

export const selectCatsImagesState = (state: { images: { cats: Cat[] } }) => state.images.cats;
export const selectCatsImages = createSelector(
    selectCatsImagesState,
    (cats) => {
        const fotmattedCats = addRowsCols(cats);
        return fotmattedCats;
    }
)
export const selectCatsStatus = (state: { images: { catsStatus: string } }) => state.images.catsStatus;
export const selectCatsError = (state: { images: { catsError: string } }) => state.images.catsError;

export const { addFavouriteId } = imagesSlice.actions

export default imagesSlice.reducer
