import { CocktailCode } from "../enums/CocktailCode";

export const generateCocktailApiUrl = ({
  cocktailCode,
}: {
  cocktailCode: CocktailCode;
}) =>
  `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailCode}`;
