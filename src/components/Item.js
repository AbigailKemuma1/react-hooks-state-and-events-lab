import React, { useState } from "react";

function Item({ name, category }) {
  // 1. Add state to track if item is in cart
  const [isInCart, setIsInCart] = useState(false);

  // 2. Toggle cart status on button click
  function handleAddToCartClick() {
    setIsInCart((prev) => !prev);
  }

  // 3. Apply class conditionally
  const itemClass = isInCart ? "in-cart" : "";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCartClick}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
