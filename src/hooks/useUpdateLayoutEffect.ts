import { DependencyList, useLayoutEffect, useRef } from "react";

export function useUpdateLayoutEffect(
  effect: () => void,
  dependencies: DependencyList = []
) {
  const isInitialMount = useRef(true);

  useLayoutEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      effect();
    }
  }, dependencies);
}
