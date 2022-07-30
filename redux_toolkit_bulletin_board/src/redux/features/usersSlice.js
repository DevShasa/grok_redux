import { createSlice }from "@reduxjs/toolkit";

const initialState = [
    {id: 0, name:"Bro Chure"},
    {id: 1, name:"Haleh Luhiah"},
    {id: 2, name:'Mwana Mziki'}
]

const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{

    }
})

// export the reducer for the store 
export default userSlice.reducer

// fetch data from slice
export const fetchAllUsers = (state)=> state.users;