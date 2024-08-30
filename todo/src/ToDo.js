import React, { useState } from 'react';

const ToDo = () => {
  const [todoItems, setTodoItems] = useState(['React', 'Angular','JavaScript']);
  const [searchText, setSearchText] = useState('');

  const clickHandler = (e) => {
    if (!todoItems.includes(searchText) && searchText.length > 0) {
      setTodoItems([...todoItems, searchText]);
    }
    setSearchText('');
  };
  
  const deleteItem = (i) => {
    setTodoItems(todoItems.filter((item) => item != i));
  };
  return (
    <>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            clickHandler();
          }
        }}
      />
      <button onClick={clickHandler}>Add</button>
      <ul>
        {todoItems.map((item) => (
          <li key={item}>
            <span>{item}</span>
            <button onClick={() => deleteItem(item)}>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDo;
