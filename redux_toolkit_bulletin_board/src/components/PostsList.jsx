import React from 'react';
import { useSelector } from "react-redux";
import styled from 'styled-components';
import { selectAllPosts } from '../redux/features/postsSlice';
import AuthorByline from './AuthorByline';
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
    // const posts = useSelector(state => state.posts)
    const posts = useSelector(selectAllPosts)
    const orderedPosts =  posts
                            .slice() // return a shallow copy of the array
                            .sort((a, b) =>b.date.localeCompare(a.date))

    return (
        <PostsListContaier>
            {orderedPosts.map((post)=>(
                <PostListItem key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.content.substring(0,100)}</p>
                    <AuthorByline authorId={post.userId}/>
                    <TimeAgo timestamp = {post.date}/>
                    <ReactionButtons post={post} />
                </PostListItem>
            ))}
        </PostsListContaier>
    )
}

export default PostsList

const PostsListContaier = styled.div`
    padding: 1rem;
    background-color: #ffffff;
    border-radius: 1rem;
    height: fit-content;
`

const PostListItem = styled.div`
    padding: 10px;
    border: 1px solid #b5b5b6;
    border-radius: 5px;
    & + &{
        margin-top: 1rem;
    }

    h3{
        font-size: 1.3rem;
        margin-bottom: 5px;
    }
`