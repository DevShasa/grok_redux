import { createSlice } from "@reduxjs/toolkit"
//actions and reducers for the counter functionality 

const initialState = {
    count: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        // these are the actions
        increment: (state) =>{ state.count += 1},
        decrement: (state) => {state.count -= 1},
        reset: (state)=> {state.count = 0},

        incrementByAmmount: (state, action ) =>{
            state.count += parseInt(action.payload);
        }, 
    }
}) 

// export the actions needed to dispatch stuff 
export const { 
    increment, 
    decrement, 
    reset,
    incrementByAmmount,
} = counterSlice.actions;

// export the reducer, needed by the store
export default counterSlice.reducer;