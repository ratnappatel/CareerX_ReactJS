import React, {useState} from 'react';

function CalculatorCount(){

    const [count, setCount]=useState(0);
    const increment=()=>setCount(count+1);
    const decrement=()=>setCount(count-1);

    return(
        <div>
            <p> You Clicked to increment {count} times.</p>
            <p> After decrement Count is {count} .</p>
            <button onClick={increment}> ++ </button>
            <button onClick={decrement}> -- </button>
        </div>
    );
}
export default CalculatorCount;