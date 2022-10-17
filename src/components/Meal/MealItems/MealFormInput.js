import React from "react";
import classes from "./MealFormInput.module.css";

const MealFormInput = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor="">Available</label>
      <input
        type="number"
        id={`amount` + props.id}
        defaultValue="1"
        min={1}
        ref={props.inputElement}
      />
    </div>
  );
};

export default MealFormInput;
