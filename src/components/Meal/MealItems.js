import MealForm from "./MealForm";
import classes from "./MealItems.module.css";

const MealItems = (props) => {
  const price = `₹ ${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.desc}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <MealForm />
    </li>
  );
};

export default MealItems;
