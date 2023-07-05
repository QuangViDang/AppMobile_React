import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: '1', name: 'Vi Dang Quang' },
    { id: '2', name: 'Tieu Vi' },
    { id: '3', name: 'Coronatus' },
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
})

export default usersSlice.reducer