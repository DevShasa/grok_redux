import React from 'react';
import styled from "styled-components";
import { useDispatch, } from 'react-redux';
import {addReactions} from "../redux/features/postsSlice";

const emoji = {
    thumbsUp:'👍',
    wow:'😮',
    heart:'❤️',
    rocket:'🚀',
    coffee:'☕',
}

const ReactionButtons = ({post}) => {
    const dispatch = useDispatch()
    const { id,  reactions} = post
    return (
        <ReactionBox>
            {Object.entries(emoji).map(([name, emojiIcon])=>(
                <ReactionIcon key={name} onClick={()=>dispatch(addReactions({postId: id, reaction: name}))}>
                    {emojiIcon} { reactions[name] }
                </ReactionIcon>
            ))}
        </ReactionBox>
    )
}

export default ReactionButtons

const ReactionBox = styled.div`
    display: flex;
    margin-top: 7px;
    justify-content: space-between;
`;

const ReactionIcon = styled.div`
    font-size: 0.9rem;
    color: grey;
    cursor: pointer;
`;