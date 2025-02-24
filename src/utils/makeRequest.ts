import { setRequestError } from '../effector/core/actions';

export const makeRequest = async <T = unknown>({ requestUrl }: { requestUrl: string }) => {
    try {
        const controller = new AbortController();

        const requestTimeout = setTimeout(() => {
            controller.abort('timeout');

            setRequestError({ message: 'Request timed out' });
        }, 15_000);

        const response = await fetch(requestUrl, {
            method: 'get',
            signal: controller.signal,
        });

        clearTimeout(requestTimeout);

        return response.json() as T;
    } catch (err) {
        console.error('Error caught: ', err);

        throw err;
    }
};
