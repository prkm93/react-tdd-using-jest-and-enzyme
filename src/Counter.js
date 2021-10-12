import React, {useState} from 'react';

function Counter() {
    
  const [counter, setCounter] = useState(0);
  const [flag, setFlag] = useState(false);

  const decrementHandler = () => {
    const count = counter - 1;
    setCounter(count);
    if (count < 0) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  }

  const incrementHandler = () => {
    const count = counter + 1;
    setCounter(count);
    if (count >= 0) {
      setFlag(false);
    }
  }
    
    return (
        <div>
            <h1>This is counter</h1>
            <button id="increment-btn" onClick={() => incrementHandler()}>Increment</button>
            <button id="decrement-btn" onClick={() => decrementHandler()} disabled={flag}>Decrement</button>
            <div id="counter-value">{counter}</div>
        </div>
    )
}

export default Counter;