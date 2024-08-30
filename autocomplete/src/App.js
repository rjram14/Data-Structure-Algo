// src/App.js

import React from 'react';
import Autocomplete from './Autocomplete';
import './App.css';

const App = () => {
  return (
    <div className="App d-flex text-align-center" >
      <h1>Autocomplete</h1>
      <div className='margin-auto'>
      <Autocomplete />

      </div>
    </div>
  );
};

export default App;
