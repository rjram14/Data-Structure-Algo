// src/App.js
import React from 'react';
import { CountProvider } from './CountContext';
import Counter from './Counter';

function App() {
  return (
    <CountProvider>
      <div className="App">
        <h1>React Counter with useContext</h1>
        <Counter />
      </div>
    </CountProvider>
  );
}

export default App;
