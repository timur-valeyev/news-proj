import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
    postsList: [],
    loading: false,
    error: false
}
const API_KEY = '43a3ab7248174b60b7fc1ebd5eeaa4c2'

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (_, thunkAPI) => {
        try {
            return await axios.get(`https://newsapi.org/v2/everything?q=Apple&from=2023-02-13&sortBy=popularity&apiKey=${API_KEY}`).then(response => {
                return response.data.articles
            })
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.postsList = []
                state.loading = true
                state.error = null
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.postsList = action.payload
                state.loading = false
                state.error = false
            })
            .addMatcher(isError, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
    }
})

function isError(action) {
    return action.type.endsWith('rejected')
}

export default postSlice.reducer