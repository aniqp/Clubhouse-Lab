import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './counterSlice';


function IncrementByAmount () {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();

    const [incrementValue, setIncrementValue] = React.useState();

    const handleInput = (e) => {
        setIncrementValue(e.target.value);
    }

    const handleIncrement = () => {
        for(let i = 0; i < incrementValue; i++){
            dispatch(increment());
        }
    }

    return(
        <div>
            <h5>Current value:&nbsp;{count}</h5>
            <label> Enter a value to increment the counter:&nbsp;
                <input name='value' type='number' onChange={handleInput}></input>
                <button 
                    style={{marginLeft:'10px'}}
                    onClick={handleIncrement}
                >Increment</button>
            </label>
        </div>
    )

}

export default IncrementByAmount;