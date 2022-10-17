import { useContext } from "react";
import Model from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const ctxCart = useContext(CartContext);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctxCart.items.map((item) => (
        <CartItem
          price={item.price}
          name={item.name}
          quantity={item.quantity}
          key={item.id}
          id={item.id}
        />
      ))}
    </ul>
  );

  return (
    <Model onClose={props.onCartChange}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{Number(ctxCart.amount).toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCartChange}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Model>
  );
};

export default Cart;
