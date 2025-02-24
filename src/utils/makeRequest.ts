import { setRequestError } from "../effector/core/actions";

export const makeRequest = async <T = unknown>({
  requestUrl,
}: {
  requestUrl: string;
}) => {
  try {
    const controller = new AbortController();

    const requestTimeout = setTimeout(() => {
      controller.abort("timeout");

      setRequestError({ message: "Request timed out" });
    }, 5_000);

    console.log("making request...");

    const response = await fetch(requestUrl, {
      method: "get",
      signal: controller.signal,
    });

    clearTimeout(requestTimeout);

    return response.json() as T;
  } catch (err) {
    console.error("Error caught: ", err);

    throw err;
  }
};
