import { createEffect, createEvent, createStore, sample } from "effector";
import { CocktailCode } from "../../enums/CocktailCode";
import { ICocktailInfo } from "../../interfaces/ICocktailInfo";
import { generateCocktailApiUrl } from "../../utils/cocktails";
import { makeRequest } from "../../utils/makeRequest";
import { $requestError, $isRequestLoading } from "../core/models";
import {
  $cocktailInfo,
  $currentCocktailCode,
  $isInvalidCocktailCode,
} from "./models";

export const fetchCocktailInfo = createEvent<{ cocktailCode: CocktailCode }>();
const fetchCocktailInfoFx = createEffect(
  ({ cocktailUrl }: { cocktailUrl: string }) => {
    return makeRequest<{ drinks: ICocktailInfo[] }>({
      requestUrl: cocktailUrl,
    });
  }
);

sample({
  clock: fetchCocktailInfo,
  source: $isRequestLoading,
  filter: (isRequestLoading) => !isRequestLoading,
  fn: (_, { cocktailCode }) => ({
    cocktailUrl: generateCocktailApiUrl({ cocktailCode }),
  }),
  target: fetchCocktailInfoFx,
});

sample({
  clock: fetchCocktailInfoFx.doneData,
  fn: ({ drinks }) => drinks,
  target: $cocktailInfo,
});

sample({
  clock: fetchCocktailInfoFx.failData,
  fn: (err) => err.message ?? "",
  target: $requestError,
});

export const resetCocktailInfo = createEvent();
$cocktailInfo.reset([resetCocktailInfo, fetchCocktailInfoFx]);

$isRequestLoading.on(fetchCocktailInfoFx, () => true);
$isRequestLoading.reset(fetchCocktailInfoFx.finally);

$requestError.reset(fetchCocktailInfoFx);

export const setCurrentCocktailCode = createEvent<{
  cocktailCode: CocktailCode;
}>();
export const resetCurrentCocktailCode = createEvent();
$currentCocktailCode.on(
  setCurrentCocktailCode,
  (_, { cocktailCode }) => cocktailCode
);
$currentCocktailCode.reset(resetCurrentCocktailCode);

export const setIsInvalidCocktailCode = createEvent<{
  isInvalidCocktailCode: boolean;
}>();
$isInvalidCocktailCode.on(
  setIsInvalidCocktailCode,
  (_, { isInvalidCocktailCode }) => isInvalidCocktailCode
);
