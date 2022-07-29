import { createSlice, nanoid } from "@reduxjs/toolkit";
import {sub} from "date-fns";

const initialState = [
    {   id: "1", 
        title:'Learning Redux Toolkit', 
        content: "Ive heard good things", 
        date :sub(new Date(), {minutes: 10}).toISOString(),
        reactions:{
            thumbsUp: 0,
            wow: 0,
            heart:0,
            rocket:0, 
            coffee:0,
        }
    },
    {
        id: "2", 
        title:'Slices', 
        content: "Hehe slices za kenyatalk hehe",
        date :sub(new Date(), {minutes: 5}).toISOString(),
        reactions:{
            thumbsUp: 0,
            wow: 0,
            heart:0,
            rocket:1, 
            coffee:0,
        }
    },
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
                    payload:{
                            id: nanoid(), 
                            title, 
                            content, 
                            userId,
                            date:new Date().toISOString(),
                            reactions:{
                                thumbsUp: 0,
                                wow: 0,
                                heart:0,
                                rocket:0, 
                                coffee:0,
                            }
                        }
                }
            }
        }, // end of first reducer
        addReactions: (state, action) =>{
            const { postId, reaction } = action.payload
            const existingPost = state.find(post => post.id === postId);
            if(existingPost){
                existingPost.reactions[reaction]++
            }
        }
    }
})

// extract reducer and register it in store
export default postsSlice.reducer

// extract actions and export them 
export const { addPost,  addReactions } = postsSlice.actions

// reference state data directly
export const selectAllPosts = (state) => state.posts