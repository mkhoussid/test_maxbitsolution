import * as React from "react";

// @ts-expect-error
import styles from "./styles.module.css";
import { ICocktailInfo } from "../../interfaces/ICocktailInfo";
import { ErrorSegment } from "../ErrorSegment";
import { InvalidCocktailSegment } from "../InvalidCocktailSegment";
import { CocktailInfo } from "./CocktailInfo";
import { CocktailInstructions } from "./CocktailInstructions";
import { CocktailIngredients } from "./CocktailIngredients";
import { CocktailThumb } from "./CocktailThumb";
import clsx from "clsx";
import { useUnit } from "effector-react";
import { $isRequestLoading, $requestError } from "../../effector/core/models";
import { LoadingSegment } from "../LoadingSegment";
import {
  $cocktailInfo,
  $isInvalidCocktailCode,
} from "../../effector/cocktails/models";
import { Cocktail } from "./Cocktail";

export const Content = React.memo(() => {
  const isRequestLoading = useUnit($isRequestLoading);
  const requestError = useUnit($requestError);
  const isInvalidCocktailCode = useUnit($isInvalidCocktailCode);
  const cocktailInfo = useUnit($cocktailInfo);

  const handleRenderCocktailInfo = React.useCallback(
    (cocktail: ICocktailInfo, index: number) => {
      return (
        <Cocktail
          key={["cocktail", index].join("_")}
          className={clsx(!index && styles.gutterTop)}
          {...cocktail}
        />
      );
    },
    []
  );

  const content = React.useMemo(() => {
    if (isRequestLoading) {
      return <LoadingSegment />;
    }

    if (requestError) {
      return <ErrorSegment requestError={requestError} />;
    }

    if (isInvalidCocktailCode) {
      return <InvalidCocktailSegment />;
    }

    if (Array.isArray(cocktailInfo)) {
      if (!cocktailInfo.length) {
        return <div>No cocktail info</div>;
      }

      return cocktailInfo.map(handleRenderCocktailInfo);
    }

    return <div>Choose a cocktail</div>;
  }, [isRequestLoading, requestError, cocktailInfo, isInvalidCocktailCode]);

  return <div className={styles.content}>{content}</div>;
});
