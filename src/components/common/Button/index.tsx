import React, { ReactElement, ReactNodeArray, ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface Props {
    primary?: boolean;
    transparent?: boolean;
    children: ReactNode | ReactNodeArray;
    size?: number;
    onClick(): void;
}

const StyledButton = styled.button`
   /*  width: ${(props) => props.size}px;
    height: ${(props) => props.size}px; */
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.text};
    font-size: 1.2rem;
    margin: 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid ${(props) => props.theme.colors.secondary};
    border-radius: 1rem;
    box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);

    &:focus {
        outline: none;
    }

    &:hover, &:focus {
        ${({ transparent }: Props) =>
            !transparent &&
            css`
                background-color: ${(props) => props.theme.colors.highlight1};
                border: 1px solid ${(props) => props.theme.colors.highlight1};
            `}  
    }

    ${({ primary }: Props) =>
        primary &&
        css`
            background-color: ${(props) => props.theme.colors.primary};
            color: white;
        `}
    ${({ transparent }: Props) =>
        transparent &&
        css`
            background-color: transparent;
            border: none;
            box-shadow: none;
        `}
`;

const StyledButtonRounded = styled(StyledButton)`
    border-radius: 100%;
`;

const Button: React.FC<Props> = ({ primary, children, transparent, size, onClick }: Props): ReactElement => {
    return (
        <StyledButton primary={primary} transparent={transparent} size={size} onClick={onClick}>
            {children}
        </StyledButton>
    );
};

const ButtonRounded: React.FC<Props> = ({ primary, children, transparent, size, onClick }: Props): ReactElement => {
    return (
        <StyledButtonRounded primary={primary} transparent={transparent} size={size} onClick={onClick}>
            {children}
        </StyledButtonRounded>
    );
};

export { Button, ButtonRounded };
