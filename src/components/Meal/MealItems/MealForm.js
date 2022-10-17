import React, { useRef } from "react";
import classes from "./MealForm.module.css";
import MealFormInput from "./MealFormInput";

const MealForm = (props) => {
  const inputElement = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const x = inputElement.current.value;

    console.log(x);
    props.addToCart(x);
  };

  return (
    <div className={classes.form}>
      <form onSubmit={formSubmitHandler}>
        <MealFormInput inputElement={inputElement} />
        <button>+ Add</button>
      </form>
    </div>
  );
};

export default MealForm;
