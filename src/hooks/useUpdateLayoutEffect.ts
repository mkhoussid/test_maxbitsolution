import * as React from 'react';

export function useUpdateLayoutEffect(effect: () => void, dependencies: React.DependencyList = []) {
    const isInitialMount = React.useRef(true);

    React.useLayoutEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            effect();
        }
    }, dependencies);
}
