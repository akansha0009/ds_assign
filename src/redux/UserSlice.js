import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {data: [], loading: false, error: null}

const url = 'https://jsonplaceholder.typicode.com/users'
export const fetchUser = createAsyncThunk('fetchUser', async () => {
    const res = await axios.get(url);
    console.log(res.data)
    return res.data;
})


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userDeleted: (state, action) => {
            state.data = state.data.filter((user) => user.id !== action.payload);
          },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(fetchUser.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchUser.rejected, (state, action) => {
            state.error = action.error.message;
        })
    }
})

export const { userDeleted } = userSlice.actions;

export default userSlice.reducer