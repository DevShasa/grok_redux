import { createSlice, createAsyncThunk }from "@reduxjs/toolkit";
import axios from "axios"

const USERS_URL= "https://jsonplaceholder.typicode.com/users"

const initialState = []


export const fetchUsers = createAsyncThunk('users/fetchUsers', async () =>{
    try{
        const response = await axios.get(USERS_URL)
        return response.data
    }catch(error){
        return error.message;
    }
})

const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
            .addCase(fetchUsers.fulfilled, (state, action)=>{
                // replace the entire state
                return action.payload
            })
    }
})

// export the reducer for the store 
export default userSlice.reducer

// fetch data from slice
export const fetchAllUsers = (state)=> state.users;