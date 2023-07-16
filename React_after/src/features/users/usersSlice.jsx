import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { client } from '../../api/client'

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const reponse = await client.get('/fakeApi/users')
    return reponse.data
})
const initialState = {
    users: [],
    status: 'idle',
    error: null,
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload
        })
    },
})

export const selectAllUsers = (state) => state.users
export const selectUserById = (state, userId) => {
    return state.users.find((user) => {
        // console.log(user.id)
        return user.id === userId
    })
}

export default usersSlice.reducer
