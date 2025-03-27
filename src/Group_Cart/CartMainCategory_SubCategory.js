import React, { useMemo } from "react";

const sampleCartItems = [
  { id: 1, name: "Apple", price: 1.2, quantity: 3, mainCategory: "Fruits", subCategory: "Fresh" },
  { id: 2, name: "Banana", price: 0.5, quantity: 6, mainCategory: "Fruits", subCategory: "Fresh" },
  { id: 3, name: "Orange Juice", price: 3.0, quantity: 1, mainCategory: "Beverages", subCategory: "Juices" },
  { id: 4, name: "Milk", price: 2.5, quantity: 2, mainCategory: "Dairy", subCategory: "Milk & Cheese" },
  { id: 5, name: "Cheese", price: 4.0, quantity: 1, mainCategory: "Dairy", subCategory: "Milk & Cheese" },
  { id: 6, name: "Green Tea", price: 5.0, quantity: 1, mainCategory: "Beverages", subCategory: "Tea & Coffee" },
  { id: 7, name: "Coffee", price: 6.5, quantity: 1, mainCategory: "Beverages", subCategory: "Tea & Coffee" }
];

const CartMainSubCategories = ({ cartItems = sampleCartItems }) => {
  // Group items by main category and subcategory
  const groupedItems = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      if (!acc[item.mainCategory]) {
        acc[item.mainCategory] = {};
      }
      if (!acc[item.mainCategory][item.subCategory]) {
        acc[item.mainCategory][item.subCategory] = [];
      }
      acc[item.mainCategory][item.subCategory].push(item);
      return acc;
    }, {});
  }, [cartItems]);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {Object.entries(groupedItems).map(([mainCategory, subCategories]) => (
        <div key={mainCategory}>
          <h3>{mainCategory}</h3>
          {Object.entries(subCategories).map(([subCategory, items]) => (
            <div key={subCategory}>
              <h4>{subCategory}</h4>
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
      ))}
    </div>
  );
};

export default CartMainSubCategories;
