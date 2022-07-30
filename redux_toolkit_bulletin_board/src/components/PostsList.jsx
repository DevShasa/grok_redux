import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';
import { 
    selectAllPosts, 
    fetchPosts,
    getPostsStatus,
    getPostsError,
    getAddingStatus
} from '../redux/features/postsSlice';

import PostItem from './PostItem';

const PostsList = () => {
    const dispatch = useDispatch()


    // const posts = useSelector(state => state.posts)
    const posts = useSelector(selectAllPosts)
    const postsStatus = useSelector(getPostsStatus)
    const postsError = useSelector(getPostsError)
    const addStatus = useSelector(getAddingStatus)
    const [adding, setAdding] = useState(false)



    useEffect(()=>{
        if(postsStatus === "idle"){
            dispatch(fetchPosts())
        }

        if(addStatus){
            setAdding(true)
        }else{
            setAdding(false)
        }
    },[dispatch, postsStatus,addStatus ])

    function orderedPosts(posts){
        // orders the posts by most recent
        return posts
                    .slice()
                    .sort((a, b) =>b.date.localeCompare(a.date))
    } 


    return (
        <PostsListContaier>
            {adding && <h3>Adding a new post</h3>}
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
