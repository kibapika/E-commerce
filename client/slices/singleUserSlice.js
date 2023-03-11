import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSingleUserAsync = createAsyncThunk("/users/:id", async (id) => {
    try{
        const {data} = await axios.get(`http://localhost:3000/api/users/${id}`);
        return data;
    } catch(err){
        alert("err occured for fetchSingleUser, check console")
        console.log(err);
    }
});

const singleUserSlice = createSlice ({
    name: "singleUser",
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSingleUserAsync.fulfilled, (state, action) => {
            return action.payload;
        });
    }
});

export const selectSingleUser = (state) => state.singleUser;

export default singleUserSlice.reducer;