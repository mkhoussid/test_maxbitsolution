import styled from '@emotion/styled';
import * as React from 'react';

import { ICocktailInfo } from '../../interfaces/ICocktailInfo';

export const CocktailInfo = React.memo<Pick<ICocktailInfo, 'strDrink' | 'strCategory' | 'strAlcoholic' | 'strGlass'>>(
    ({ strDrink, strCategory, strAlcoholic, strGlass }) => {
        return (
            <>
                <InfoElement withGutterBottom>{strDrink}</InfoElement>
                <InfoElement>{strCategory}</InfoElement>
                <InfoElement>{strAlcoholic}</InfoElement>
                <InfoElement withGutterBottom>{strGlass}</InfoElement>
            </>
        );
    }
);

const InfoElement = styled.div<{ withGutterBottom?: boolean }>`
    ${({ withGutterBottom }) => `margin-bottom: ${+!!withGutterBottom}rem;`}
`;
