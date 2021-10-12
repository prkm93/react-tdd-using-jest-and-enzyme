import React, {useState} from 'react';

function App() {

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
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>This is counter</h1>
      <button id="increment-btn" onClick={() => incrementHandler()}>Increment</button>
      <button id="decrement-btn" onClick={() => decrementHandler()} disabled={flag}>Decrement</button>
      <div id="counter-value">{counter}</div>
    </div>
  );
}

export default App;
