import { useState } from "react/cjs/react.production.min";
const Counter = () => {
    const [counter, setCounter] = useState(0);
    
    const increment = () => {
        setCounter(prev => prev + 1);
    }
    
    const decrement = () => {
        setCounter(prev => prev - 1);
    }
    
    return(
        <div>
            <div>{counter}</div>
            <div className='button-container'>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Increment</button>
            </div>
        </div>
    )
}

export default Counter;