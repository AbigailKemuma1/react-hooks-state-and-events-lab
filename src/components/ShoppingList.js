import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // 1. Add state to track selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // 2. Handle change in dropdown
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // 3. Filter items based on selected category
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
