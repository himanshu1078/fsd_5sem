import React from 'react'

const Counter = () => {
    let count = 0;
    const increment = () => {
        count++;
        console.log(count);
    }

    return (
        <div>
            <h1>Counter Application</h1>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Counter