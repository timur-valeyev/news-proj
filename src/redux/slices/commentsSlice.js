import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {commentsApi} from '../../utils/api/commentsApi'


const initialState = {
    commentsList: [],
    loading: false,
    error: false
}

export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async (id, thunkAPI) => {
        try {
            return await commentsApi.getAllComments(id).then(response => {
                return response.data
            })
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const addComment = createAsyncThunk(
    'comments/addComment',
    async (text, thunkAPI) => {
        try {
             await commentsApi.addNewComment(text).then(response => {
                return response.data
            })
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.pending, (state) => {
                state.commentsList = []
                state.loading = true
                state.error = null
            })
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.commentsList = action.payload
                state.loading = false
                state.error = false
            })
            .addCase(addComment.pending, (state) => {
                state.commentsList = []
                state.loading = true
                state.error = null
            })
            .addCase(addComment.fulfilled, (state, action) => {
                console.log(action.payload)
                state.commentsList = action.payload
                state.loading = false
                state.error = false
            })
            // .addCase(searchPost.pending, (state) => {
            //     state.postsList = []
            //     state.loading = true
            //     state.error = null
            // })
            // .addCase(searchPost.fulfilled, (state, action) => {
            //     state.postsList = action.payload
            //     state.loading = false
            //     state.error = false
            // })
            .addMatcher(isError, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
    }
})

function isError(action) {
    return action.type.endsWith('rejected')
}

export default commentsSlice.reducer