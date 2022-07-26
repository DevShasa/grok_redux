import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addPost } from '../redux/features/postsSlice';
import styled from "styled-components";
import { nanoid } from '@reduxjs/toolkit';

const AddPost = () => {

    const dispatch = useDispatch()
    
    const [ title, setTitle ] = useState("")
    const [ content, setContent ] = useState("")


    function submitContent(){

        const newBulletinItem = {
            id: nanoid(),
            title: title,
            content: content
        }
        console.log(newBulletinItem)
        
        dispatch(addPost(newBulletinItem))
        setTitle("")
        setContent("")
    }

    return (
        <div style = {{marginRight: "1rem"}}>
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

                <button onClick ={submitContent} type="button">
                    Add New Bulletin
                </button>
            </FormDiv>
        </div>
    )
}

export default AddPost

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
        cursor: pointer;
    }
`