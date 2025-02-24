import * as React from "react";
import clsx from "clsx";

// @ts-expect-error
import styles from "./styles.module.css";
import { ICocktailInfo } from "../../interfaces/ICocktailInfo";

export const CocktailInfo = React.memo<
  Pick<ICocktailInfo, "strDrink" | "strCategory" | "strAlcoholic" | "strGlass">
>(({ strDrink, strCategory, strAlcoholic, strGlass }) => {
  return (
    <>
      <div className={clsx(styles.infoElement, styles.gutterBottom)}>
        {strDrink}
      </div>
      <div className={styles.infoElement}>{strCategory}</div>
      <div className={styles.infoElement}>{strAlcoholic}</div>
      <div className={clsx(styles.infoElement, styles.gutterBottom)}>
        {strGlass}
      </div>
    </>
  );
});
