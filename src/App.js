import React from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meal/Meal";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartIsShown, setCartIsShown] = React.useState(false);

  const changeCartState = () => {
    setCartIsShown((prevState) => {
      return !prevState;
    });
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onCartChange={changeCartState} />}
      <Header onShowCart={changeCartState} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
