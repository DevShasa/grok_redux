import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getPostById, updatePost, deletePost } from "../redux/features/postsSlice";
import { useParams, useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

import { fetchAllUsers } from '../redux/features/usersSlice';

const Editpost = () => {

    const { postId } = useParams()
    const navigate = useNavigate()
    const post  = useSelector((state)=> getPostById(state, Number(postId)))
    const users = useSelector(fetchAllUsers)

    const [ title, setTitle ] = useState(post?.title)
    const [ content, setContent ] = useState(post?.body)
    const [ userId, setUserId ] = useState(post?.userId)
    const [ updateRequestStatus, setUpdateRequestStatus ] = useState("idle")

    const dispatch = useDispatch()

    if(!post){
        return(
            <NotFound>
                <h2>Post Not found</h2>
                <BackHome to="/">Go back Home</BackHome>
            </NotFound> 
        )
    }

    const canSave = [title, content, userId].every(Boolean) && updateRequestStatus === "idle";

    const submitContentForUpdate = () =>{
        if(canSave){
            try{
                setUpdateRequestStatus("pending")
                dispatch(updatePost({
                    id: post.id,
                    title,
                    body: content,
                    userId, 
                    reactions: post.reactions
                })).unwrap()
                setTitle("");
                setContent("");
                setUserId("");
                navigate(`/post/${postId}`)
            }catch(err){
                console.error('Failed to save the post', err)
            }finally{
                setUpdateRequestStatus("idle")
            }
        }
    }

    const deleteThisPost = ()=>{
        try{
            setUpdateRequestStatus("pending")
            dispatch(deletePost(post.id)).unwrap()
            setTitle("");
            setContent("");
            setUserId("");
            navigate(`/`)
        }catch(err){
            console.log("failed to delete post")
        }finally{
            setUpdateRequestStatus("idle")
        }
    }

    return (
        <FormContainer>
            <FormDiv>
                <input 
                    type = "text"
                    name = "title"
                    value = {title}
                    onChange = {(e) => setTitle(e.target.value)}
                    placeholder = "Title"
                />

                <textarea 
                    name = "content"
                    type = "text"
                    rows="30" cols="10"
                    value = {content}
                    onChange = {(e) => setContent(e.target.value)}
                    placeholder = "Enter text here"
                />

                <select defaultValue={userId} onChange={(e)=>setUserId(e.target.value)}>
                    <option value="" disabled hidden>Select Author</option>
                    {users.map((user)=>(
                        <option key={user.id} value={user.id}>{user.name}</option>
                    ))}
                </select>

                <button onClick ={submitContentForUpdate} type="button" disabled = {!canSave} style={{cursor: canSave ?"pointer" :"not-allowed"}}>
                    Edit Post
                </button>
                <button onClick ={deleteThisPost} type="button" disabled = {!canSave} style={{
                    cursor: canSave ?"pointer" :"not-allowed",
                    color: "white",
                    backgroundColor:"black"
                    }}>
                    Delete Post
                </button>
            </FormDiv>
        </FormContainer>
    )
}

export default Editpost
const FormContainer = styled.div`
    margin-top: 2rem;
    height: fit-content;
    margin-right: 1rem;
    position:sticky;
    top: 1rem;
    min-width: 70%;
    min-height: 70%;

`

const FormDiv = styled.form`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 1rem;
    border: 1px solid #b5b5b6;
    height: 100%;

    & * + * {
        margin-top: 1rem;
    }

    & * {
        padding: 5px;
        border-radius: 4px;
        border: none;
    }

    button {
        border: 1px solid grey;
    }
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
const BackHome = styled(Link)`
    padding:10px;
    border: 1px solid #000000;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bolder;
    color:white;
    background-color: #353535
`;
