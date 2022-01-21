import { useState } from "react";

function Sub(){

    const [ num1, setNum1 ] = useState(0);
    const [ num2, setNum2 ] = useState(0);
    const [ result, setResult ] = useState(0);

    function subFun() {
        setResult(num1 - num2);
    }

    return (
        <>
            <h1>Sub Component</h1>
            <h1>Addition of two numbers</h1>
            <input type="text" onChange={ e => setNum1(parseInt(e.target.value)) }/>
            <input type="text" onChange={ e => setNum2(parseInt(e.target.value)) } />
            <button onClick={subFun}>Get Subtraction</button>
            <div>{result}</div>
            <div>{result}</div>
            <div>{result}</div>
        </>
    );

}

export default Sub;