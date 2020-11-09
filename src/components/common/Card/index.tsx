import React, { ReactNode, ReactNodeArray, ReactElement } from 'react';
import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

interface Props {
    children: ReactNode | ReactNodeArray;
    size: number;
    transparent?: boolean;
}

const StyledCard = styled.div`
    background-color: ${(props) => props.theme.colors.background2};
    color: ${(props) => props.theme.colors.text};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 2rem;
    padding: 1.75rem 3rem;
    box-sizing: border-box;
    position: absolute;
    z-index: 10;

    ${({ transparent }: Props) =>
        transparent &&
        css`
            background-color: ${(props) => transparentize(0.15, props.theme.colors.background2)};
        `};

    ${({ size }: Props) =>
        size &&
        css`
            width: min(80vw, ${size / 10}rem);
            height: fit-content;
        `};
`;

export const Card: React.FC<Props> = ({ size, children, transparent }: Props): ReactElement => {
    return (
        <StyledCard size={size} transparent={transparent}>
            {children}
        </StyledCard>
    );
};
