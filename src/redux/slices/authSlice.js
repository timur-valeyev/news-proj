import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    users: [],
    login: false,
    loading: false,
    error: false
}

export const fetchUsers = createAsyncThunk(
    'posts/fetchUsers',
    async (_, thunkAPI) => {
        try {
            return await axios.get('http://localhost:8888/users').then(response => {
                return response.data
            })
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login (state, action) {
            const password = action.payload.toLowerCase()

            if(password === '') {
                state.login = undefined
            } else {
                state.users.filter(user => {
                    if(user.password.toLowerCase().includes(password)){
                        state.login = true
                    } else {
                        state.login = false
                    }
                })
            }
        },
        logout (state) {
            state.login = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.users = []
                state.loading = true
                state.error = null
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                console.log(action.payload)
                state.users = action.payload
                state.loading = false
                state.error = false
            })
            .addMatcher(isError, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
    }
})
export const { login, logout } = authSlice.actions

function isError(action) {
    return action.type.endsWith('rejected')
}

export default authSlice.reducer