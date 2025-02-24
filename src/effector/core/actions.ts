import { createEvent, sample } from 'effector';

import { $isRequestLoading, $requestError } from './models';

export const setIsRequestLoading = createEvent<{ isRequestLoading: boolean }>();

sample({
    clock: setIsRequestLoading,
    fn: ({ isRequestLoading }) => isRequestLoading,
    target: $isRequestLoading,
});

export const setRequestError = createEvent<{ message: string }>();
export const resetRequestError = createEvent();
$requestError.on(setRequestError, (_, { message }) => message);
$requestError.reset(resetRequestError);
