import { configureStore, createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({ 
    name: 'toogle',
    initialState: { counter: 0 },
    reducers : {
    add(state){
        state.counter++;
    },
    sub(state){
        state.counter--;
    },
    addByTwo(state,action){
        state.counter = state.counter + action.payload;
    }
}
})

export const store = configureStore({
    reducer : counterSlice.reducer
})

export const counterActions = counterSlice.actions;