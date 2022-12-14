import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchPets = createAsyncThunk('pets/fetchByIdStatus', async (params) => {
    const { category, sortBy, currentPage} = params;
    const { data } = await axios
        .get(`https://6304d33c761a3bce77f07e90.mockapi.io/pets?page=${currentPage}&limit=8${category}${sortBy}`
        );
        
        return data;      
});

const initialState = {
    pets: []
}

const petSlice = createSlice({
    name: 'pets',
    initialState,
    reducers: {
        setPets(state, action) {
            state.pets = action.payload;
        }
    },
    extraReducers: {
        [fetchPets.pending]: (state) => {
            state.pets = [];
            state.status = 'loading';
        },
        [fetchPets.fulfilled]: (state, action) => {
            state.pets = action.payload;
            state.status = 'completed';
        },
        [fetchPets.rejected]: (state) => {
            state.pets = [];
            state.status = 'error';
        }
    }
})

export const { setPets } = petSlice.actions;

export default petSlice.reducer;