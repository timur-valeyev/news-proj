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

export const updateComment = createAsyncThunk(
    'comments/updateComment',
    async (obj, thunkAPI) => {
        const body = {
            'id': obj.id,
            'firstName': 'Ivan',
            'lastName': 'Ivanovich',
            'surName': 'Ivanov',
            'email': 'ivanov@ivan.kz',
            'phone': '+77776663322',
            'comment': obj.comment,
            'postId': obj.postId
        }
        try {
            await commentsApi.updateComment(body).then(response => {
                return response.data
            })
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const deleteComment = createAsyncThunk(
    'comments/deleteComment',
    async (id, thunkAPI) => {
        try {
            return await commentsApi.deleteComment(id).then(response => {
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
                state.commentsList = action.payload
                state.loading = false
                state.error = false
            })
            .addCase(updateComment.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(updateComment.fulfilled, (state, action) => {
                state.commentsList = action.payload
            })
            .addCase(deleteComment.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(deleteComment.fulfilled, (state, action) => {
                state.commentsList = action.payload
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

export default commentsSlice.reducer