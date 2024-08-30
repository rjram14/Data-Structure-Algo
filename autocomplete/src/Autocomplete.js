// src/Autocomplete.js

import React, { useState, useEffect } from 'react';
import './Autocomplete.css'; // Import CSS for styling
import axios from 'axios'; // We'll use axios for data fetching

const Autocomplete = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    // Fetch suggestions from the API
    // const options = {
    //     method: 'GET',
    //     url: 'https://api-football-v1.p.rapidapi.com/v2/odds/league/865927/bookmaker/5',
    //     params: {page: '2'},
    //     headers: {
    //       'x-rapidapi-key': 'Sign Up for Key',
    //       'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
    //     }
    //   };
    const fetchSuggestions = async () => {
      try {
        const response = await axios.get("https://api-football-v1.p.rapidapi.com/v2/odds/league/865927/bookmaker/5");
        console.log("response",response);
        setSuggestions(response.data);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    };

    fetchSuggestions();
  }, []);

  useEffect(() => {
    if (inputValue) {
      const filtered = suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    }
  }, [inputValue, suggestions]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = (value) => {
    setInputValue(value);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <div className="autocomplete">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
        onFocus={() => setShowSuggestions(true)}
      />
      {showSuggestions && inputValue && (
        <ul className="suggestions-list">
          {filteredSuggestions.length ? (
            filteredSuggestions.map((suggestion, index) => (
              <li key={index} onClick={() => handleClick(suggestion)}>
                {suggestion}
              </li>
            ))
          ) : (
            <li>No suggestions</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
