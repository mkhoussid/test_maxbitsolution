import * as React from 'react';

export const ErrorSegment = React.memo<{ requestError: string }>(({ requestError }) => {
    return <div>Error boundary: {requestError}</div>;
});
