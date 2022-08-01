import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';
import { 
    selectAllPosts, 
    // fetchPosts,
    getPostsStatus,
    getPostsError,
    getAddingStatus
} from "../redux/features/postsSlice";

import PostItem from "../components/PostItem";

const PostsList = () => {
    // const dispatch = useDispatch()


    // const posts = useSelector(state => state.posts)
    const posts = useSelector(selectAllPosts)
    const postsStatus = useSelector(getPostsStatus)
    const postsError = useSelector(getPostsError)
    const addStatus = useSelector(getAddingStatus)
    // const [adding, setAdding] = useState(false)



    // useEffect(()=>{
    //     // if(postsStatus === "idle"){
    //     //     dispatch(fetchPosts())
    //     // }

    //     if(addStatus){
    //         setAdding(true)
    //     }else{
    //         setAdding(false)
    //     }
    // },[dispatch,/* postsStatus*/addStatus ])

    function orderedPosts(posts){
        // orders the posts by most recent
        return posts
                    .slice()
                    .sort((a, b) =>b.date.localeCompare(a.date))
    } 


    return (
        <PostsListContaier>
            {addStatus && <AddingIndicator>...Adding a new post...</AddingIndicator>}
            {postsStatus === 'loading'
                ? <h2>Loading posts......</h2>
                : postsStatus ==="succeeded"
                ? orderedPosts(posts).map((post)=>( <PostItem key={post.id} post = {post}/> ))
                : <p>{postsError}</p>
            }
        </PostsListContaier>
    )
}

export default PostsList

const PostsListContaier = styled.div`
    padding: 1rem;
    background-color: #ffffff;
    border-radius: 1rem;
    overflow-y: auto;

    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    ::-webkit-scrollbar {
        display: none;
    }
`
const AddingIndicator = styled.h3`
    text-align:center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 5px;
    background: rgb(131,58,180);
    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
    color: white;
    margin-bottom: 1rem;
`