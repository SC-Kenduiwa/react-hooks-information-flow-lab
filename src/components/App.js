import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./header";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <header handleMode={onDarkModeClick} isDarkMode={isDarkMode}>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
