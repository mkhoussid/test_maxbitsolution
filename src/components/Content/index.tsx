import styled from '@emotion/styled';
import { useUnit } from 'effector-react';
import * as React from 'react';

import { $cocktailInfo, $isInvalidCocktailCode } from '../../effector/cocktails/models';
import { $isRequestLoading, $requestError } from '../../effector/core/models';
import { ICocktailInfo } from '../../interfaces/ICocktailInfo';
import { ErrorSegment } from '../ErrorSegment';
import { InvalidCocktailSegment } from '../InvalidCocktailSegment';
import { LoadingSegment } from '../LoadingSegment';
import { Cocktail } from './Cocktail';

export const Content = React.memo(() => {
    const isRequestLoading = useUnit($isRequestLoading);
    const requestError = useUnit($requestError);
    const isInvalidCocktailCode = useUnit($isInvalidCocktailCode);
    const cocktailInfo = useUnit($cocktailInfo);

    const handleRenderCocktailInfo = React.useCallback((cocktail: ICocktailInfo, index: number) => {
        return <Cocktail key={['cocktail', index].join('_')} withGutterTop={!index} {...cocktail} />;
    }, []);

    const content = React.useMemo(() => {
        if (isRequestLoading) {
            return <LoadingSegment />;
        }

        if (requestError) {
            return <ErrorSegment requestError={requestError} />;
        }

        if (isInvalidCocktailCode) {
            return <InvalidCocktailSegment />;
        }

        if (Array.isArray(cocktailInfo)) {
            if (!cocktailInfo.length) {
                return <div>No cocktail info</div>;
            }

            return cocktailInfo.map(handleRenderCocktailInfo);
        }

        return <div>Choose a cocktail</div>;
    }, [isRequestLoading, requestError, cocktailInfo, isInvalidCocktailCode]);

    return <Container>{content}</Container>;
});

const Container = styled.div`
    height: 100%;
    overflow: auto;
`;
