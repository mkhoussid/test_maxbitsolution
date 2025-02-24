import * as React from "react";
import clsx from "clsx";

// @ts-expect-error
import styles from "./styles.module.css";
import { useUpdateLayoutEffect } from "../../hooks/useUpdateLayoutEffect";
import { ICocktailInfo } from "../../interfaces/ICocktailInfo";
import { makeRequest } from "../../utils/makeRequest";
import {
  fetchCocktailInfo,
  resetCocktailInfo,
  resetCurrentCocktailCode,
  setCurrentCocktailCode,
  setIsInvalidCocktailCode,
} from "../../effector/cocktails/actions";
import { CocktailCode } from "../../enums/CocktailCode";
import { useUnit } from "effector-react";
import { $isRequestLoading } from "../../effector/core/models";
import { $currentCocktailCode } from "../../effector/cocktails/models";
import { useSearchParams } from "react-router";
import { cocktailCodeSearchParam } from "../../constants/cocktails";

const options: { label: string; code: CocktailCode }[] = [
  {
    label: "Margarita",
    code: CocktailCode.Margarita,
  },
  {
    label: "Mojito",
    code: CocktailCode.Mojito,
  },
  {
    label: "A1",
    code: CocktailCode.A1,
  },
  {
    label: "Kir",
    code: CocktailCode.Kir,
  },
];

export const Sidebar = React.memo(() => {
  const currentCocktailCode = useUnit($currentCocktailCode);
  const isRequestLoading = useUnit($isRequestLoading);

  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = React.useCallback(
    (cocktailCode: CocktailCode) => () => {
      if (!isRequestLoading) {
        setSearchParams((params) => {
          params.set(cocktailCodeSearchParam, cocktailCode);
          return params;
        });
      }
    },
    [isRequestLoading]
  );

  const handleSetCurrentCocktailCode = React.useCallback(() => {
    if (isRequestLoading) {
      return;
    }

    setIsInvalidCocktailCode({ isInvalidCocktailCode: false });

    const currentCocktailCode = searchParams.get(
      cocktailCodeSearchParam
    ) as CocktailCode | null;

    console.log("currentCocktailCode", currentCocktailCode);

    if (!currentCocktailCode) {
      const firstCode = options[0].code;

      setCurrentCocktailCode({
        cocktailCode: firstCode,
      });

      setSearchParams((searchParams) => {
        searchParams.set(cocktailCodeSearchParam, firstCode);

        return searchParams;
      });

      return;
    }

    if (currentCocktailCode) {
      if (
        Object.values(CocktailCode).includes(
          currentCocktailCode as CocktailCode
        )
      ) {
        setCurrentCocktailCode({
          cocktailCode: currentCocktailCode as CocktailCode,
        });

        return;
      }

      setIsInvalidCocktailCode({ isInvalidCocktailCode: true });
      return;
    }

    resetCurrentCocktailCode();
    setSearchParams((searchParams) => {
      searchParams.delete(cocktailCodeSearchParam);

      return searchParams;
    });
  }, [searchParams, isRequestLoading]);

  React.useLayoutEffect(() => {
    handleSetCurrentCocktailCode();
  }, [handleSetCurrentCocktailCode]);

  useUpdateLayoutEffect(() => {
    if (!currentCocktailCode) {
      resetCocktailInfo();

      return;
    }

    fetchCocktailInfo({ cocktailCode: currentCocktailCode });
  }, [currentCocktailCode]);

  const mappedOptions = React.useMemo(() => {
    return options.map(({ label, code }, index) => {
      const isActive = currentCocktailCode === code;

      return (
        <div
          key={[code, index].join("_")}
          className={clsx(styles.sidebarOption, {
            [styles.active]: isActive,
            [styles.loading]: isRequestLoading,
          })}
          onClick={handleClick(code)}
        >
          {label}
        </div>
      );
    });
  }, [currentCocktailCode, isRequestLoading]);

  return <div className={styles.sidebar}>{mappedOptions}</div>;
});
