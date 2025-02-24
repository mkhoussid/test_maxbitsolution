import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { useSearchParams } from 'react-router-dom';
import { CocktailOption } from 'src/interfaces/CocktailOption';

import { cocktailCodeSearchParam } from '../../constants/cocktails';
import {
    fetchCocktailInfo,
    resetCocktailInfo,
    resetCurrentCocktailCode,
    setCurrentCocktailCode,
    setIsInvalidCocktailCode,
} from '../../effector/cocktails/actions';
import { $currentCocktailCode } from '../../effector/cocktails/models';
import { $isRequestLoading } from '../../effector/core/models';
import { CocktailCode } from '../../enums/CocktailCode';
import { useUpdateLayoutEffect } from '../../hooks/useUpdateLayoutEffect';

const options: CocktailOption[] = [
    {
        label: 'Margarita',
        code: CocktailCode.Margarita,
    },
    {
        label: 'Mojito',
        code: CocktailCode.Mojito,
    },
    {
        label: 'A1',
        code: CocktailCode.A1,
    },
    {
        label: 'Kir',
        code: CocktailCode.Kir,
    },
];

export const Sidebar = React.memo(() => {
    const currentCocktailCode = useUnit($currentCocktailCode);
    const isRequestLoading = useUnit($isRequestLoading);

    const [searchParams, setSearchParams] = useSearchParams();

    const handleClick = React.useCallback(
        (cocktailCode: CocktailCode) => () => {
            if (!isRequestLoading) {
                setSearchParams((params) => {
                    params.set(cocktailCodeSearchParam, cocktailCode);
                    return params;
                });
            }
        },
        [isRequestLoading]
    );

    const handleSetCurrentCocktailCode = React.useCallback(() => {
        if (isRequestLoading) {
            return;
        }

        setIsInvalidCocktailCode({ isInvalidCocktailCode: false });

        const currentCocktailCode = searchParams.get(cocktailCodeSearchParam) as CocktailCode | null;

        if (!currentCocktailCode) {
            const firstCode = options[0].code;

            setCurrentCocktailCode({
                cocktailCode: firstCode,
            });

            setSearchParams((searchParams) => {
                searchParams.set(cocktailCodeSearchParam, firstCode);

                return searchParams;
            });

            return;
        }

        if (currentCocktailCode) {
            if (Object.values(CocktailCode).includes(currentCocktailCode as CocktailCode)) {
                setCurrentCocktailCode({
                    cocktailCode: currentCocktailCode as CocktailCode,
                });

                return;
            }

            setIsInvalidCocktailCode({ isInvalidCocktailCode: true });
            return;
        }

        resetCurrentCocktailCode();
        setSearchParams((searchParams) => {
            searchParams.delete(cocktailCodeSearchParam);

            return searchParams;
        });
    }, [searchParams, isRequestLoading]);

    React.useLayoutEffect(() => {
        handleSetCurrentCocktailCode();
    }, [handleSetCurrentCocktailCode]);

    useUpdateLayoutEffect(() => {
        if (!currentCocktailCode) {
            resetCocktailInfo();

            return;
        }

        fetchCocktailInfo({ cocktailCode: currentCocktailCode });
    }, [currentCocktailCode]);

    const mappedOptions = React.useMemo(() => {
        return options.map(({ label, code }, index) => {
            const isActive = currentCocktailCode === code;

            return (
                <SidebarOption key={[code, index].join('_')} isActive={isActive} isLoading={isRequestLoading} onClick={handleClick(code)}>
                    {label}
                </SidebarOption>
            );
        });
    }, [currentCocktailCode, isRequestLoading]);

    return <Container>{mappedOptions}</Container>;
});

const Container = styled.div`
    border-right: 1px solid black;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    margin-right: 0.5rem;
`;

const SidebarOption = styled.div<{ isActive: boolean; isLoading: boolean }>`
    ${({ isActive, isLoading }) => css`
        padding: 0.25rem;
        cursor: ${isLoading ? 'wait' : isActive ? 'default' : 'pointer'};
        transition: 0.3s ease-in-out;

        ${isActive ? 'background-color: rgba(1, 1, 1, 0.1);' : ''}

        &:hover {
            background-color: ${isActive ? 'rgba(1, 1, 1, 0.1)' : 'rgba(1, 1, 1, 0.3)'};
        }
    `}
`;
