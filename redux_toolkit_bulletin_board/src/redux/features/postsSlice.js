import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import {sub} from "date-fns";
import axios from "axios";

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';



const initialState = {
    posts: [],
    status: 'idle', // 'idle' | 'loading' | 'failed' | 'succeeded'
    error: null
}

// action with thunk 
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () =>{
    try{
        const response = await axios.get(POSTS_URL)
        return response.data
    }catch(error){
        return error.message;
    }
})

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        addPost: {
            reducer(state, action){state.posts.push(action.payload)},
            prepare(title, body, userId){
                // callback into which data is first passed
                return {
                    payload:{
                            id: nanoid(), 
                            title, 
                            body, 
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
            const existingPost = state.posts.find(post => post.id === postId);
            if(existingPost){
                existingPost.reactions[reaction]++
            }
        }
    }, 
    extraReducers(builder){
        builder
            .addCase(fetchPosts.pending, (state, action) =>{
                state.status = "loading"
            })
            .addCase(fetchPosts.fulfilled,(state, action)=>{
                state.status = "succeeded"
                let min = 1
                const loadedPosts = action.payload.map(post =>{
                    post.date =  sub(new Date(), {minutes: min++}).toISOString()
                    post.reactions = {
                        thumbsUp: 0,
                        wow: 0,
                        heart:0,
                        rocket:0, 
                        coffee:0,
                    }

                    return post;
                })

                state.posts = loadedPosts
            })
            .addCase(fetchPosts.rejected, (state, action)=>{
                state.status = "failed"
                state.error = action.error.message
            })

    }
})

// extract reducer and register it in store
export default postsSlice.reducer

// extract actions and export them 
export const { addPost,  addReactions } = postsSlice.actions

// reference state data directly
export const selectAllPosts = (state) => state.posts.posts
export const getPostsStatus = (state) => state.posts.status
export const getPostsError = (state) => state.posts.error
