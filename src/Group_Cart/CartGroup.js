import React, { useMemo } from "react";

const Cart = ({ cartItems }) => {
  // Group items by category
  const groupedItems = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});
  }, [cartItems]);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {Object.entries(groupedItems).map(([category, items]) => (
        <div key={category}>
          <h3>{category}</h3>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Cart;
