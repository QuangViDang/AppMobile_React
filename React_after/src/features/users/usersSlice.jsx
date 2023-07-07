import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { client } from '../../api/client'

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const reponse = await client.get('/fakeApi/users')
    return reponse.data
})
const initialState = [
    { id: '1', name: 'Vi Dang Quang' },
    { id: '2', name: 'Tieu Vi' },
    { id: '3', name: 'Coronatus' },
]

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
export const selectUserById = (state, userId) =>
    state.users.find((user) => user.id === userId)

export default usersSlice.reducer