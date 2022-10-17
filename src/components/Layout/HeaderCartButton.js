import React, { useContext, useEffect } from "react";
import classes from "./HeaderCartButton.module.css";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
  const ctxStore = useContext(CartContext);

  const cartItem = ctxStore.items.length;

  return (
    <button className={classes.button} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart </span>

      <span className={classes.badge}>{cartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
