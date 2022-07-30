import { createSlice, createAsyncThunk }from "@reduxjs/toolkit";
import axios from "axios"

const USERS_URL= "https://jsonplaceholder.typicode.com/users"

const initialState = []


export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_,{rejectWithValue}) =>{
    try{
        const userList = localStorage.getItem("users")
        if(userList){
            //lama iko kitu
            return JSON.parse(userList)
        }else{
            // hakuna kitu buana
            const response = await axios.get(USERS_URL)
            localStorage.setItem("users", JSON.stringify(response.data))
            return response.data
        }

    }catch(error){
        console.log('error', error);
        console.log('data', error.response.data);
        // console.log('message', error.response.data.message);
        return rejectWithValue(error.response.data);
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