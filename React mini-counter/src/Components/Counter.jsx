import React,  { useState } from 'react'
import "../Components/Counter.css"

function Counter() {
    const [count, setCount] = useState(0)

    const increase = () =>{
        if(count < 10){
            setCount(count + 1)
        }
    }
    const decrease = () =>{
        if(count > 0){
            setCount(count - 1)
        }
    }
    return (
        <div className='main'>
            <h1>Counter</h1>
            <h2>{count}</h2>

            <div className='btn'>
                <button onClick={increase}>Increase</button>
                <button onClick={decrease}>Decrease</button>
            </div>

        </div>
    )
}

export default Counter
