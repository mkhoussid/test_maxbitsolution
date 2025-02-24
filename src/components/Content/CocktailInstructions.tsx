import * as React from "react";

// @ts-expect-error
import styles from "./styles.module.css";

export const CocktailInstructions = React.memo<{ instructions: string }>(
  ({ instructions }) => {
    return (
      <div className={styles.gutterBottom}>
        <div>{"Instructions:"}</div>
        <div>{instructions}</div>
      </div>
    );
  }
);
