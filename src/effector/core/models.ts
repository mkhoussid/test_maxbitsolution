import { createStore } from "effector";

export const $isRequestLoading = createStore(false);
export const $requestError = createStore<string | null>(null);
