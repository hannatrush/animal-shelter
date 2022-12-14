import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import pets from './slices/petSlice';
import modal from './slices/modalSlice';

export const store = configureStore({
    reducer: {
        filter,
        pets,
        modal
    }
});