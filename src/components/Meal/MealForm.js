import React from "react";
import classes from "./MealForm.module.css";
import MealFormInput from "./MealFormInput";

const MealForm = () => {
  return (
    <div className={classes.form}>
      <form>
        <MealFormInput />
        <button>+ Add</button>
      </form>
    </div>
  );
};

export default MealForm;
