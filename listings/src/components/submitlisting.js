import React, {useState} from 'react';
import { useDispatch} from 'react-redux';
import {addListing} from '../redux/listingsReducer';

const SubmitListing = () =>{
    const [name, setName] = useState();
    const [age, setAge] =  useState();
    const dispatch = useDispatch();

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(addListing(name, age))
    };

    return(
        <form onSubmit={handleSubmit}>
            <input
                type = "text"
                placeholder = "Name"
                onChange = {({target})=> setName(target.value)}
            />
            <input
                type = "text"
                placeholder = "Age"
                onChange = {({target})=> setAge(target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    )
};

export default SubmitListing;