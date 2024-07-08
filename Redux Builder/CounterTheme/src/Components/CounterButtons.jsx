import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { increment,decrement } from '../Store/action';


const CounterButtons = () => {
    const dispatch = useDispatch();
//useS

const data =useSelector((state)=>state.counter.count)
console.log(data);
    const handleAdd = () => {
        dispatch(increment(1));
    };

    const handleReduce = () => {
        dispatch(decrement(1));
    };

    return (
        <div>
           
            <Button onClick={handleAdd} variant="success">ADD</Button>{' '} &nbsp;&nbsp;&nbsp;
            <Button  onClick={handleReduce}  variant="danger" disabled={data==0}>REDUCE</Button>
        </div>
    );
};

export default CounterButtons;