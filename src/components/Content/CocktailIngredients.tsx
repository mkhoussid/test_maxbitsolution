import styled from '@emotion/styled';
import * as React from 'react';

import { ICocktailInfo } from '../../interfaces/ICocktailInfo';

const IngredientElement = React.memo<{ measure: string; ingredient: string }>(({ measure, ingredient }) => {
    return (
        <IngredientElementContainer>
            <MeasureContainer>{measure.padEnd(20)}</MeasureContainer>
            <div>{ingredient}</div>
        </IngredientElementContainer>
    );
});

const IngredientElementContainer = styled.div`
    display: flex;
`;

const MeasureContainer = styled.div`
    padding-right: 1rem;
    min-width: 4rem;
`;

export const CocktailIngredients = React.memo<
    Pick<ICocktailInfo, 'strMeasure1' | 'strIngredient1' | 'strMeasure2' | 'strIngredient2' | 'strMeasure3' | 'strIngredient3'>
>((props) => {
    const ingredientElements = React.useMemo(() => {
        const { strMeasure1, strMeasure2, strMeasure3, strIngredient1, strIngredient2, strIngredient3 } = props;

        return [
            { measure: strMeasure1, ingredient: strIngredient1 },
            { measure: strMeasure2, ingredient: strIngredient2 },
            { measure: strMeasure3, ingredient: strIngredient3 },
        ].map(({ measure, ingredient }, index) => (
            <IngredientElement key={['ingredient_element', index].join('_')} measure={measure || '\u2014'} ingredient={ingredient || '\u2014'} />
        ));
    }, [props]);

    return (
        <div>
            <div>{'List of ingredients:'}</div>
            {ingredientElements}
        </div>
    );
});
