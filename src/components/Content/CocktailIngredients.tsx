import * as React from "react";

import { ICocktailInfo } from "../../interfaces/ICocktailInfo";
// @ts-expect-error
import styles from "./styles.module.css";

const IngredientElement = React.memo<{ measure: string; ingredient: string }>(
  ({ measure, ingredient }) => {
    return (
      <div className={styles.ingredientElementContainer}>
        <div className={styles.measureContainer}>{measure.padEnd(20)}</div>
        <div>{ingredient}</div>
      </div>
    );
  }
);

export const CocktailIngredients = React.memo<
  Pick<
    ICocktailInfo,
    | "strMeasure1"
    | "strIngredient1"
    | "strMeasure2"
    | "strIngredient2"
    | "strMeasure3"
    | "strIngredient3"
  >
>((props) => {
  const ingredientElements = React.useMemo(() => {
    const {
      strMeasure1,
      strMeasure2,
      strMeasure3,
      strIngredient1,
      strIngredient2,
      strIngredient3,
    } = props;

    return [
      { measure: strMeasure1, ingredient: strIngredient1 },
      { measure: strMeasure2, ingredient: strIngredient2 },
      { measure: strMeasure3, ingredient: strIngredient3 },
    ].map(({ measure, ingredient }, index) => (
      <IngredientElement
        key={["ingredient_element", index].join("_")}
        measure={measure || "\u2014"}
        ingredient={ingredient || "\u2014"}
      />
    ));
  }, [props]);

  return (
    <div>
      <div>{"List of ingredients:"}</div>
      {ingredientElements}
    </div>
  );
});
