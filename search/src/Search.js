import React, { useState } from 'react';

const Search = () => {
  const initialData = ['apple', 'banana', 'orange', 'cat', 'dog'];
  const [searchText, setSearchText] = useState('');

  const filterItems = initialData.filter((item) =>
    item.toLowerCase().includes(searchText.toLowerCase())
  );
  const changeHandler = (e) => {
    setSearchText(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <h2>Search Component</h2>
      <input type="text" onChange={changeHandler} />
      {filterItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </>
  );
};

export default Search;
