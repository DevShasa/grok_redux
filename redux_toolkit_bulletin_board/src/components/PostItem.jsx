import React from 'react'
import AuthorByline from './AuthorByline';
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const PostItem = ({post}) => {
    return (  
        <PostListItem >
            <h3>{post.title}</h3>
            <p>{post.body.substring(0,69)}</p>
            <AuthorByline authorId={post.userId}/>
            <TimeAgo timestamp = {post.date}/>
            <ToPostDetail to={`/post/${post.id}`}>View More</ToPostDetail>
            <ReactionButtons post={post} />
        </PostListItem>
    )
}

export default PostItem

const ToPostDetail = styled(Link)`
    color:grey;
    margin-left: 1rem
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