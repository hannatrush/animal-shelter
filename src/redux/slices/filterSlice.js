import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeCategory: 0,
    currentPage: 1,
    sort: 0
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setActiveCategory(state, action) {
            state.activeCategory = action.payload;
        },
        setSort(state, action) {
            state.sort = action.payload;
        },
        setCurrentPage(state, action) {
            state.currentPage= action.payload;
        },
    } 
});

export const { setActiveCategory, setSort, setCurrentPage, setFilters } = filterSlice.actions;

export default filterSlice.reducer;