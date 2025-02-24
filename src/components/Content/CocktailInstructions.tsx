import styled from '@emotion/styled';
import * as React from 'react';

export const CocktailInstructions = React.memo<{ instructions: string }>(({ instructions }) => {
    return (
        <CocktailInstructionsContainer>
            <div>{'Instructions:'}</div>
            <div>{instructions}</div>
        </CocktailInstructionsContainer>
    );
});

const CocktailInstructionsContainer = styled.div`
    margin-bottom: 1rem;
`;
