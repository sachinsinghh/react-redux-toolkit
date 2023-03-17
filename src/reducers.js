import {createReducer, createSlice} from '@reduxjs/toolkit';

const initialState = {
    c: 10
}


 export default createReducer(initialState, {
    increment: (state, action) => {
        state.c += 1;
        console.warn('increment..',state.c)
    },
    incrementByFive: (state, action) => {
        state.c += action.payload;
        console.warn('increment By Five..',state.c)
    },
    decrement: (state, action) => {
        state.c -= 1;
        console.warn('decrement..',state.c)
    }
});
