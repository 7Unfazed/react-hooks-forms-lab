import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import Filter from "./Filter"; // Import Filter component
import ItemForm from "./ItemForm"; // Import ItemForm component
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchText, setSearchText] = useState('');

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleSearchChange(text) {
    setSearchText(text);
  }

  function handleItemFormSubmit(newItem) {
    setItems([...items, newItem]);
  }

  // Filter items based on search text and category
  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <Filter onSearchChange={handleSearchChange} />
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ShoppingList items={filteredItems} />
    </div>
  );
}

export default App;
