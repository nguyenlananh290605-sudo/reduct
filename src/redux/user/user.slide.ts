import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchListUsers = createAsyncThunk(
    'users/fetchListUsers',
    async (userId, thunkAPI) => {
        const res = await fetch("http://localhost:8000/users")
        const data = await res.json();
        return data;
    }
)

const initialState = {
    listUser: [],

}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(fetchListUsers.fulfilled, (state, action) => {
            console.log(">>check actions", action)
        })
    },
})

// Action creators are generated for each case reducer function
export const { } = userSlice.actions

export default userSlice.reducer