import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {getPostById, editingPostStatus, failedtoEditPost} from "../redux/features/postsSlice";

import AuthorByline from "../components/AuthorByline";
import ReactionButtons from "../components/ReactionButtons";
import TimeAgo from "../components/TimeAgo";


const SinglePagePost = () => {

    const isPostBeingUpdated = useSelector(editingPostStatus)
    const { postId } = useParams()
    const post = useSelector((state)=> getPostById(state, Number(postId)))
    const failedToEdit = useSelector(failedtoEditPost)


    return (
        <div>
            {!post 
                ? (<NotFound>
                        <h2>Post Not found</h2>
                        <BackHome to="/">Go back Home</BackHome>
                    </NotFound> )
                :(
                    <>
                        {isPostBeingUpdated && <Updating>...Updating this post...</Updating>}
                        {failedToEdit && <Updating>...Failed to edit post...</Updating>}
                        <PostContainer>
                            <h2>{post?.title}</h2>
                            <p>{post?.body}</p>
                            <div>
                                <AuthorByline authorId={post?.userId}/>
                                <TimeAgo timestamp = {post?.date}/>
                            </div>
                            <ReactionButtons post={post} postDetailView/>
                        </PostContainer>
                    </>
            )}
        </div>
    )
}

export default SinglePagePost

const Updating =styled.h3`
    text-align:center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 5px;
    background: rgb(131,58,180);
    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
    color: white;
    margin-bottom: 1rem;
`

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
`;

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