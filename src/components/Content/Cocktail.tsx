import styled from '@emotion/styled';
import * as React from 'react';

import { ICocktailInfo } from '../../interfaces/ICocktailInfo';
import { CocktailInfo } from './CocktailInfo';
import { CocktailIngredients } from './CocktailIngredients';
import { CocktailInstructions } from './CocktailInstructions';
import { CocktailThumb } from './CocktailThumb';

export const Cocktail = React.memo<{ className?: string; withGutterTop: boolean } & ICocktailInfo>(({ className, withGutterTop, ...cocktail }) => {
    return (
        <Container withGutterTop={withGutterTop} className={className}>
            <InfoContainer>
                <CocktailInfo {...cocktail} />
                <CocktailInstructions instructions={cocktail.strInstructions || '/u2014'} />
                <CocktailIngredients {...cocktail} />
            </InfoContainer>
            <CocktailThumb thumbUrl={cocktail.strDrinkThumb} />
        </Container>
    );
});

const Container = styled.div<{ withGutterTop: boolean }>`
    ${({ withGutterTop }) => `
    margin-top: ${+withGutterTop}rem;
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 1rem;

    &:not(:last-child) {
      border-bottom: 1px solid gray;
    }
  `}
`;

const InfoContainer = styled.div`
    flex: 1;
    margin-bottom: 1rem;
`;
