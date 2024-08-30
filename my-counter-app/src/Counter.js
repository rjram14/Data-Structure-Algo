// src/Counter.js
import React, { useContext } from 'react';
import { CountContext } from './CountContext';

const Counter = () => {
  const { count, setCount } = useContext(CountContext);

  const increaseCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrementCount = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button className='mx-4' onClick={increaseCount}>Increase Count</button>
      <button onClick={decrementCount}>Decrement Count</button>
    </div>
  );
};

export default Counter;
