// src/CountContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create the Context
export const CountContext = createContext();

// Create a Provider Component
export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  // Optional: useEffect to perform side effects when count changes
  useEffect(() => {
    console.log(`Count changed to: ${count}`);
  }, [count]);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};
