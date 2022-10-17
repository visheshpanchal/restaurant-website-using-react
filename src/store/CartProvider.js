import CartContext from "./cart-context";
import { useState } from "react";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [amount, setAmount] = useState(0);

  const addItemToCartHandler = (item) => {
    console.log("Function Called");
    if (typeof item !== "object") {
      setItems((prevState) => {
        const index = prevState.findIndex((prevItem) => item === prevItem.id);

        const foundItem = prevState[index];

        let updatedItem = {
          ...foundItem,
          quantity: Number(foundItem.quantity) + 1,
        };

        // Need to make copy because cart increment copy
        const updatedItems = [...prevState];
        updatedItems[index] = updatedItem;
        return updatedItems;
      });

      setAmount((prevAmount) => {
        const index = items.findIndex((prevItem) => item === prevItem.id);

        const foundItem = items[index];

        return Number(prevAmount) + Number(foundItem.price);
      });
    } else {
      setItems((prevState) => {
        return [...prevState, item];
      });

      setAmount((prevAmount) => {
        return Number(prevAmount) + Number(item.price);
      });
    }
  };

  const removeItemFromCartHandler = (id) => {
    setItems((prevState) => {
      const index = prevState.findIndex((prevItem) => id === prevItem.id);

      const foundItem = prevState[index];

      let updatedItem = {
        ...foundItem,
        quantity: Number(foundItem.quantity) - 1,
      };

      // Need to make copy because cart increment copy
      if (foundItem.quantity > 1) {
        const updatedItems = [...prevState];
        updatedItems[index] = updatedItem;
        return updatedItems;
      } else {
        const updatedItems = [...prevState];
        updatedItems.splice(index, 1);
        return updatedItems;
      }
    });

    setAmount((prevAmount) => {
      const index = items.findIndex((prevItem) => id === prevItem.id);

      const foundItem = items[index];

      return Number(prevAmount) - Number(foundItem.price);
    });
  };
  const store = {
    items: items, //[{ id: "C1", name: "Pizza", description: "Food", price: 490,quantity:1 }],
    amount: amount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={store}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;
