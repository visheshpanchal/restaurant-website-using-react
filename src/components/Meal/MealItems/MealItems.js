import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import MealForm from "./MealForm";
import classes from "./MealItems.module.css";

const MealItems = (props) => {
  const price = Number(props.price).toFixed(2);
  // ₹
  const ctxStore = useContext(CartContext);

  const addToCart = (x) => {
    const item = {
      price: price,
      name: props.name,
      description: props.desc,
      quantity: Number(x),
      id: props.id,
    };

    ctxStore.addItem(item);
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.desc}</div>
        <div className={classes.price}>{"₹ " + price}</div>
      </div>
      <MealForm addToCart={addToCart} />
    </li>
  );
};

export default MealItems;
