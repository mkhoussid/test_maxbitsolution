import { createStore } from 'effector';

import { CocktailCode } from '../../enums/CocktailCode';
import { ICocktailInfo } from '../../interfaces/ICocktailInfo';

export const $cocktailInfo = createStore<ICocktailInfo[] | null>(null);

export const $currentCocktailCode = createStore<CocktailCode | null>(null);

export const $isInvalidCocktailCode = createStore(false);
