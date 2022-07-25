import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmmount } from "../redux/counterSlice";
import styled from "styled-components";

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

    const [incrementAmmount, setIncrementAmmount] = useState(0)

    return (
        <CounterContainer>
            <Counterdiv>
                <p>
                    { count }
                </p>
                <Buttonbox>
                    <button onClick={()=>dispatch(increment())}>+</button>
                    <button onClick={()=>dispatch(decrement())}>-</button>
                </Buttonbox>
            </Counterdiv>
            <IncrementBy>
                <button
                    onClick = {()=>dispatch(incrementByAmmount(incrementAmmount))}
                >
                    Increment By 
                </button>
                <input 
                    type = "number"
                    value = {incrementAmmount}
                    onChange = {(e)=>setIncrementAmmount(e.target.value)}
                />
            </IncrementBy>

            <Resetcount>
                <button onClick = {()=>dispatch(reset())}>
                    RESET
                </button>
            </Resetcount>

    </CounterContainer>
    )
}

export default Counter

const Resetcount = styled.div`
    button{
        padding-top: 5px;
        padding-bottom: 5px;
        border: 1px solid #b3b3b3;
        border-radius: 4px;
        font-size: 1.2rem;
        font-weight:bolder;
        width: 100%;
        cursor: pointer;
    }
`

const IncrementBy = styled.div`
    button{
        padding-top: 5px;
        padding-bottom: 5px;
        border: 1px solid #b3b3b3;
        border-radius: 4px;
        font-size: 1.2rem;
        margin-right: 1rem;
        cursor: pointer;
    }

    input{
        padding: 5px;
        border-radius: 4px;
        outline: none;
        border: none;
        font-size: 1.2rem;
    }
`

const CounterContainer = styled.div`
    display: flex;
    flex-direction: column;

    & div + div {
        margin-top: 0.5rem;
    }
`

const Counterdiv = styled.div`
    font-size: 1.5rem;
    border: 1px solid grey;
    padding: 1rem;
    border-radius: 5px;
    background-color: #fdfdfd;
    box-shadow:
    2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);

    p{
        text-align: center
    }

`
const Buttonbox = styled.div`
    margin-top: 5px;
    display: flex;
    justify-content: center;

    button{
        width: 50px;
        padding-top: 5px;
        padding-bottom: 5px;
        border: 1px solid #b3b3b3;
        border-radius: 4px;
        font-size: 1.2rem;
        font-weight:bolder;
    }

    & button + button {
        margin-left: 1rem;
    }
`
