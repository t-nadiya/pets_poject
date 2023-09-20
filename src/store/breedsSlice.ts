import { createSlice, createSelector } from '@reduxjs/toolkit';
import { addRowsCols } from '../utilities/addRowsCols';
import { getBreeds, getCatsByBreed } from './thunks';

const initialState: BreedsState = {
    breeds: [],
    breedStatus: null,
    breedsError: null,
    allBreeds: [],
    catsByBreed: [],
    catsByBreedStatus: null,
    catsByBreedError: null,
    breedInfo: null,
}

const breedsSlice = createSlice({
    name: 'breeds',
    initialState,
    reducers: {
        setDscOrder: (state) => {
            state.breeds.sort((a, b) => {
                return b.name.localeCompare(a.name)
            })
        },
        setAscOrder: (state) => {
            state.breeds.sort((a, b) => {
                return a.name.localeCompare(b.name)
            })
        },
        setLimits: (state, { payload }) => {
            payload ?
                state.breeds = state.allBreeds.slice(0, payload) :
                state.breeds = state.allBreeds;

        },
        filterImages: (state, { payload }) => {
            payload ?
                state.breeds = state.allBreeds.filter(item => item.id === payload) :
                state.breeds = state.allBreeds;

        }
    },
    extraReducers: (builder) => {
        builder.addCase(getBreeds.pending, (state) => {
            state.breedStatus = 'loading'
            state.breedsError = null
        }).addCase(getBreeds.fulfilled, (state, { payload }) => {
            state.breedStatus = 'resolved'
            state.allBreeds = payload;
            state.breeds = state.allBreeds;
        }).addCase(getBreeds.rejected, (state, { payload }) => {
            state.breedStatus = 'rejected'
            state.breedsError = payload
        }).addCase(getCatsByBreed.pending, (state) => {
            state.catsByBreedStatus = 'loading'
            state.catsByBreedError = null
        }).addCase(getCatsByBreed.fulfilled, (state, { payload }) => {
            state.breedInfo = null
            state.catsByBreedStatus = 'resolved'
            state.catsByBreed = payload;

            if (payload.length) {
                const { breeds } = payload[0];
                const [info] = breeds
                state.breedInfo = info;
            }
        }).addCase(getCatsByBreed.rejected, (state, { payload }) => {
            state.catsByBreedStatus = 'rejected'
            state.catsByBreedError = payload
        })
    }
})

const selectBreedsState = (state: { breeds: { breeds: Breed[] } }) => state.breeds.breeds;
export const selectBreeds = createSelector(
    selectBreedsState,
    (breeds) => {
        const fotmattedBreeds = addRowsCols(breeds);
        return fotmattedBreeds;
    }
)

export const selectAllBreeds = (state: { breeds: { allBreeds: Breed[] } }) => state.breeds.allBreeds;

export const selectBreedsStatus = (state: { breeds: { breedStatus: string } }) => state.breeds.breedStatus;
export const selectBreedsError = (state: { breeds: { breedsError: string } }) => state.breeds.breedsError;

const selectCatsByBreedState = (state: { breeds: { catsByBreed: Cat[] } }) => state.breeds.catsByBreed;
export const selectCatsByBreed = createSelector(
    selectCatsByBreedState,
    (cats) => {
        const fotmattedBreeds = addRowsCols(cats);
        return fotmattedBreeds;
    }
)
export const selectCatsByBreedStatus = (state: { breeds: { catsByBreedStatus: string } }) => state.breeds.catsByBreedStatus;
export const selectcatsByBreedError = (state: { breeds: { catsByBreedError: string } }) => state.breeds.catsByBreedError;

export const selectBreedInfo = (state: { breeds: { breedInfo: Breed } }) => state.breeds.breedInfo;
export const selectLimit = (state: { breeds: { breedsLimit: string } }) => state.breeds.breedsLimit;

export const { filterImages, setAscOrder, setDscOrder, setLimits } = breedsSlice.actions;

export default breedsSlice.reducer;
