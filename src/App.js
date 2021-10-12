import React, {useState} from 'react';

function App() {

  const [counter, setCounter] = useState(0);
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
      <button id="increment-btn" onClick={() => setCounter(cnt => cnt + 1)}>Increment</button>
      <button id="decrement-btn" onClick={() => setCounter(cnt => cnt - 1)}>Decrement</button>
      <div id="counter-value">{counter}</div>
    </div>
  );
}

export default App;
