import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {getPostById} from "../redux/features/postsSlice";

import AuthorByline from "../components/AuthorByline";
import ReactionButtons from "../components/ReactionButtons";
import TimeAgo from "../components/TimeAgo";


const SinglePagePost = () => {

    const { postId } = useParams()
    const post = useSelector((state)=> getPostById(state, Number(postId)))

    return (
        <div>
            {!post 
                ? (<NotFound>
                        <h2>Post Not found</h2>
                        <BackHome to="/">Go back Home</BackHome>
                    </NotFound> )
                :(
                <PostContainer>
                    <h2>{post?.title}</h2>
                    <p>{post?.body}</p>
                    <div>
                        <AuthorByline authorId={post?.userId}/>
                        <TimeAgo timestamp = {post?.date}/>
                    </div>
                    <ReactionButtons post={post} postDetailView/>
                </PostContainer>
                
            )}
        </div>
    )
}

export default SinglePagePost

const PostContainer = styled.div`
    border: 1px solid #acaaaa;
    border-radius: .5rem;
    padding: 1rem;
    background-color: #ffffff;
`;

const BackHome = styled(Link)`
    padding:10px;
    border: 1px solid #000000;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bolder;
    color:white;
    background-color: #353535
`

const NotFound = styled.div`
    display: grid;
    place-items: center;
    height: 90vh;

    h2{
        padding: 5rem;
        border-radius: 0.7rem;
        background-color: #ffff;
        box-shadow:
            2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
            6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
            12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
            22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
            41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
            100px 100px 80px rgba(0, 0, 0, 0.07);
        }
`