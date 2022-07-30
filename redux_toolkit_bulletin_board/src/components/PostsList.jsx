import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';
import { 
    selectAllPosts, 
    fetchPosts,
    getPostsStatus,
    getPostsError,
} from '../redux/features/postsSlice';

import PostItem from './PostItem';

const PostsList = () => {
    const dispatch = useDispatch()

    // const posts = useSelector(state => state.posts)
    const posts = useSelector(selectAllPosts)
    const postsStatus = useSelector(getPostsStatus)
    const postsError = useSelector(getPostsError)

    useEffect(()=>{
        if(postsStatus === "idle"){
            dispatch(fetchPosts())
        }
    },[dispatch, postsStatus])

    function orderedPosts(posts){
        // orders the posts by most recent
        return posts
                    .slice()
                    .sort((a, b) =>b.date.localeCompare(a.date))
    } 


    return (
        <PostsListContaier>
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
`
