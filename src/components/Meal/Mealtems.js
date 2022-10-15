import classes from "./Mealtems.module.css";

const MealItems = (props) => {
  const price = `₹ ${props.price.toFixed(2)}`;

  return (
    <li>
      <div>
        <h3>{props.name}</h3>
      </div>
      <div>{props.desc}</div>
      <div>{price}</div>
    </li>
  );
};

export default MealItems;
