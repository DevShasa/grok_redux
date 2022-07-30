import React from 'react'
import AuthorByline from './AuthorByline';
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import styled from 'styled-components';

const PostItem = ({post}) => {
    return (
        <PostListItem >
            <h3>{post.title}</h3>
            <p>{post.body.substring(0,100)}</p>
            <AuthorByline authorId={post.userId}/>
            <TimeAgo timestamp = {post.date}/>
            <ReactionButtons post={post} />
        </PostListItem>
    )
}

export default PostItem

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