import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {id: "1", title:'Learning Redux Toolkit', content: "Ive heard good things"},
    {id: "2", title:'Slices', content: "Hehe slices za kenyatalk hehe"},
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        addPost: {
            reducer(state, action){state.push(action.payload)},
            prepare(title, content, userId){
                // callback into which data is first passed
                return {
                    payload:{id: nanoid(), title, content, userId }
                }
            }
        }, // end of first reducer
    }
})

// extract reducer and register it in store
export default postsSlice.reducer

// extract actions and export them 
export const { addPost } = postsSlice.actions

// reference state data directly
export const selectAllPosts = (state) => state.posts