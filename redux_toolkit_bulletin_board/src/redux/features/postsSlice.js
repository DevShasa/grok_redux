import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: "1", title:'Learning Redux Toolkit', content: "Ive heard good things"},
    {id: "2", title:'Slices', content: "Hehe slices za kenyatalk hehe"},
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        addPost: (state, action) =>{
            state.push(action.payload)
        }
    }
})

// extract reducer and register it in store
export default postsSlice.reducer

// extract actions and export them 
export const { addPost } = postsSlice.actions

// reference state data directly
export const selectAllPosts = (state) => state.posts