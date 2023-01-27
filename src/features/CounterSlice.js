import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => { state.value += 1; },
        incByAmount: (state, action) => { state.value += action.payload; },
        decrease: (state, action) => { state.value -= action.payload; },
        reset: (state) => { state.value = 0; }
    }
});

export const { increment, incByAmount, decrease, reset } = counterSlice.actions; // connecting with actions
export const selectCount = (state) => state.counter.value; // for showing value

export default counterSlice.reducer; // for store