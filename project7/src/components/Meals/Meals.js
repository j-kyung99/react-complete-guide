import MealsSummary from "./MealsSummary";
import AvalibaleMeals from "./AvailableMeals";
import { Fragment } from "react";

const Meals = (props) => {
  return (
    <Fragment>
      <MealsSummary />
      <AvalibaleMeals />
    </Fragment>
  );
};

export default Meals;
