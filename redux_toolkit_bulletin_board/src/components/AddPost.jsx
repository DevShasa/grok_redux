import React, { useState } from 'react';
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { addNewPost,} from '../redux/features/postsSlice';
import { fetchAllUsers } from "../redux/features/usersSlice";


const AddPost = () => {

    const dispatch = useDispatch()
    
    const [ title, setTitle ] = useState("")
    const [ content, setContent ] = useState("")
    const [ userId, setUserId ] = useState("")
    const [addRequestStatus, setAddRequestStatus] = useState(false)

    const users = useSelector(fetchAllUsers)

    const canSave = [title, content, userId].every(Boolean) && addRequestStatus === false

    function submitContent(){
        if(canSave){
            try{
                setAddRequestStatus(true)
                dispatch(addNewPost({title, body: content, userId})).unwrap()
                // .unwrap returns payload or error   
                // dispatch(addPost(title, content, parseInt(userId)));
                setTitle("");
                setContent("");
                setUserId("");
                setAddRequestStatus(false)
            }catch(error){
                console.log('failed to save post', error)
            }finally{
                setAddRequestStatus(false)
            }

        }else{
            window.alert("Please include title and content")
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
                    value = {content}
                    onChange = {(e) => setContent(e.target.value)}
                    placeholder = "Enter text here"
                />

                <select value={userId} onChange={(e)=>setUserId(e.target.value)}>
                    <option value="" disabled hidden>Select Author</option>
                    {users.map((user)=>(
                        <option key={user.id} value={user.id}>{user.name}</option>
                    ))}
                </select>

                <button onClick ={submitContent} type="button" disabled = {!canSave} style={{cursor: canSave ?"pointer" :"not-allowed"}}>
                    Add New Bulletin
                </button>
            </FormDiv>
        </FormContainer>
    )
}

export default AddPost
const FormContainer = styled.div`
    height: fit-content;
    margin-right: 1rem;
    position:sticky;
    top: 1rem;
    z-index: 10;

`

const FormDiv = styled.form`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    border: 1px solid #b5b5b6;

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