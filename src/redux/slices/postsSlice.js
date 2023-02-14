import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {postsApi} from "../../utils/api/postsApi";


const initialState = {
    postsList: [],
    loading: false,
    error: false
}

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (_, thunkAPI) => {
        try {
            return await postsApi.getAllPosts().then(response => {
                return response.data
            })
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const fetchFullPost = createAsyncThunk(
    'posts/fetchFullPost',
    async (id, thunkAPI) => {
        try {
            return await postsApi.getFullPost(id).then(response => {
                return response.data
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
            .addCase(fetchFullPost.pending, (state) => {
                state.postsList = []
                state.loading = true
                state.error = null
            })
            .addCase(fetchFullPost.fulfilled, (state, action) => {
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