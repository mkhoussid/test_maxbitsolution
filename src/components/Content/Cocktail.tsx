import * as React from "react";
import clsx from "clsx";

// @ts-expect-error
import styles from "./styles.module.css";
import { CocktailInfo } from "./CocktailInfo";
import { CocktailInstructions } from "./CocktailInstructions";
import { CocktailIngredients } from "./CocktailIngredients";
import { CocktailThumb } from "./CocktailThumb";
import { ICocktailInfo } from "../../interfaces/ICocktailInfo";

export const Cocktail = React.memo<{ className?: string } & ICocktailInfo>(
  ({ className, ...cocktail }) => {
    return (
      <div
        className={clsx(styles.cocktailWrapper, styles.gutterBottom, className)}
      >
        <div className={clsx(styles.infoContainer, styles.gutterBottom)}>
          <CocktailInfo {...cocktail} />
          <CocktailInstructions
            instructions={cocktail.strInstructions || "/u2014"}
          />
          <CocktailIngredients {...cocktail} />
        </div>
        <CocktailThumb thumbUrl={cocktail.strDrinkThumb} />
      </div>
    );
  }
);
