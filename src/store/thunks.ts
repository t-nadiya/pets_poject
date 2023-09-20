import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import {
    API_KEY,
    API_URL,
    API_URL_GET_BREEDS,
    API_URL_GET_CAT,
    API_URL_GET_FAVOURITES,
    API_URL_GET_VOTES
} from './apiConfig'

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common['x-api-key'] = API_KEY;

// Cat
export const getRandomCat: any = createAsyncThunk(
    'images/getRandomCat',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(API_URL_GET_CAT)
            return response.data
        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
)

// Cat[]
export const getCatsImages: any = createAsyncThunk(
    'images/getCatsImages',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${API_URL_GET_CAT}?limit=30`)
            return response.data
        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
)

// Vote[]
export const getVotes: any = createAsyncThunk(
    'votes/getVotes',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${API_URL_GET_VOTES}?limit=5&order=DESC`)
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
)

// Vote[]
export const getFavourites: any = createAsyncThunk(
    'favourites/getFavourites',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${API_URL_GET_FAVOURITES}?limit=5&order=DESC`)

            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
)

// Breed
export const getBreeds: any = createAsyncThunk(
    'breeds/getBreeds',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(API_URL_GET_BREEDS);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
)

// Cat[]
export const getCatsByBreed: any = createAsyncThunk(
    'breeds/getCatsByBreed',
    async (breedId: any, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${API_URL_GET_CAT}?limit=5&breed_ids=${breedId}`)
            return response.data
        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
)

// 
export const voteOnCat: any = createAsyncThunk(
    'votes/voteOnCat',
    async ({ image_id, rate }: VotingRequestParams, { rejectWithValue }) => {
        try {
            const response = await axios.post(API_URL_GET_VOTES, { image_id, value: rate })

            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
)

// FavouringResponse
export const favourCat: any = createAsyncThunk(
    'favourites/favourCat',
    async ({ image_id }: FavouringRequestParams, { rejectWithValue }) => {
        try {
            const response = await axios.post(API_URL_GET_FAVOURITES, { image_id })

            return { data: response.data, id: image_id };
        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
)

// undefined
export const unFavourCat: any = createAsyncThunk(
    'voting/unFavourCat',
    async (favouriteId: UnFavourRequestData, { rejectWithValue }) => {
        try {
            axios.delete(`${API_URL_GET_FAVOURITES}/${favouriteId}`)

            // return response.data;
        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
)
