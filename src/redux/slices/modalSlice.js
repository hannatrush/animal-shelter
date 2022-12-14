import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalItem: null
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModalItem(state, action) {
            state.modalItem = action.payload;
        },
    } 
});

export const{ setModalItem } = modalSlice.actions;

export default modalSlice.reducer;