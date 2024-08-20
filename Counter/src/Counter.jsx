import React, { useEffect, useState } from 'react'
import './Counter.css'

function Counter() {
    const [count, setCount] = useState(0);

    let Add = ()=>{
        setCount(count + 1)
    }
    let Sub =()=>{      
        setCount(count - 1)     
    }

    //using useeffect to show an alert every 5 counts

    useEffect(()=>{
        if(count !== 0 && count % 5 === 0){
            alert(`count reached ${count}`)
        }
    })
    return (
        <div className='main'>
            <div className="innerDiv">
                <h1>Button clicked <span>{count}</span>  times</h1>
                <div className="btn">
                <button onClick={Add}>Increase</button>                    
                {count > 0 && ( <button onClick={Sub}>Decrease</button> )}
                </div>
            </div>
        </div>
    )
}

export default Counter
