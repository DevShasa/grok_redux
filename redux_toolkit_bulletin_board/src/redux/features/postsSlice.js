import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import {sub} from "date-fns";
import axios from "axios";

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';



const initialState = {
    posts: [],
    status: 'idle', // 'idle' | 'loading' | 'failed' | 'succeeded'
    error: null,
    addingPost: false,
    editingPost: false 
}

// action with thunk 
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_,{rejectWithValue}) =>{
    try{
        const response = await axios.get(POSTS_URL)
        return response.data
    }catch(error){
        console.log('error', error);
        console.log('data', error.response.data);
        // console.log('message', error.response.data.message);
        return rejectWithValue(error.response.data);
    }
})

export const addNewPost = createAsyncThunk('posts/addNewPost', async(initialPost, {rejectWithValue})=>{
    try{
        const response = await axios.post(POSTS_URL, initialPost)
        return response.data
    }catch(error){
        console.log('error', error);
        console.log('data', error.response.data);
        // console.log('message', error.response.data.message);
        return rejectWithValue(error.response.data);    }
})

export const updatePost = createAsyncThunk("posts/UpdatePost", async (updatePostDetails, {rejectWithValue})=>{
    const {id, title, body, userId, reactions} = updatePostDetails;
    try {
        const response = await axios.put(`${POSTS_URL}/${id}`, {id, title, body, userId, reactions})
        return response.data // the changed object
    }catch(err){
        console.log("error when updating")
        return rejectWithValue(err.response.data);
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

                state.status = "succeeded"
                state.posts = loadedPosts
            })
            .addCase(fetchPosts.rejected, (state, action)=>{
                state.status = "failed"
                state.error = action.error.message
            })
            .addCase(addNewPost.pending, (state, action)=>{
                state.addingPost = true
            })
            .addCase(addNewPost.fulfilled, (state, action)=>{
                // returns the saved post we prepare it before pushing it
                action.payload.id = state.posts[state.posts.length - 1].id + 1
                action.payload.userId = Number(action.payload.userId)
                action.payload.date = new Date().toISOString()
                action.payload.reactions={
                    thumbsUp: 0,
                    wow: 0,
                    heart:0,
                    rocket:0, 
                    coffee:0,
                }

                console.log(action.payload)
                state.posts.push(action.payload)
                state.addingPost = false
            })
            .addCase(updatePost.pending, (state, action)=>{
                state.editingPost = true
            })
            .addCase(updatePost.fulfilled, (state, action)=>{
                // hmm, this might not be nescesary
                // using rejectWithValue means that failed requests are registered as...
                // ...updatePost.rejected
                if(!action.payload?.id){
                    console.log("Update could not be completed")
                    console.log(action.payload)
                    state.editingPost = false
                    return
                }

                // update state with new data
                const { id } = action.payload;
                action.payload.date = new Date().toISOString()
                action.payload.userId = Number(action.payload.userId)
                const newPostsList = state.posts.filter(post=> post.id !== id)

                state.posts = [...newPostsList, action.payload]
                state.editingPost = false
            })

    }
})

// extract reducer and register it in store
export default postsSlice.reducer

// extract actions and export them 
export const { addPost,  addReactions, setPendingTrue, setPendingFalse} = postsSlice.actions

// reference state data directly
export const selectAllPosts = (state) => state.posts.posts
export const getPostsStatus = (state) => state.posts.status
export const getPostsError = (state) => state.posts.error
export const getAddingStatus = (state) => state.posts.addingPost
export const editingPostStatus = (state) => state.posts.editingPost
export const getPostById = (state, postId) =>
    state.posts.posts.find(post=> post.id === postId)
