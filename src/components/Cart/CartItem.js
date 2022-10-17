import { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const ctxStore = useContext(CartContext);
  const price = `₹ ${props.price}`;

  const onAdd = () => {
    ctxStore.addItem(props.id);
  };

  const onRemove = () => {
    ctxStore.removeItem(props.id);
  };

  return (
    <li className={classes["cart-item"]} key={props.id}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
