import React, { useState } from 'react';
import './App.css';

const ItemListManager = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="container">
      <h1 className="title">Item List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index} className="item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListManager;
