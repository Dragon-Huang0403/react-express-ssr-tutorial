import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [rotateClockwise, setRotateClockwise] = useState(true);
  const toggleRotatingDirection = () => {
    setRotateClockwise((prev) => !prev);
  };
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={toggleRotatingDirection}>
          Toggle Rotating Direction
        </button>
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{ animationDirection: rotateClockwise ? 'normal' : 'reverse' }}
        />
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
      </header>
    </div>
  );
}

export default App;
