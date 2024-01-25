import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
};

export const countChanger = createSlice({
    name: 'count',
    initialState,
    reducers: {
        reset: () => initialState,
        increment: (state) => {state.count += 1;},
        decrement: (state) => {state.count -= 1;},
        changeCount: (state, action) => {
            state.count = action.payload;
        },
    }
})

export const {
    increment,
    decrement,
    changeCount,
    reset,
} = countChanger.actions;
export default countChanger.reducer;