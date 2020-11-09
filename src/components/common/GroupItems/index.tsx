import React, { ReactNode, ReactNodeArray } from 'react';
import styled, { css } from 'styled-components';

interface Props {
    size?: number;
    children: ReactNode | ReactNodeArray;
    spacing?: number;
    horizontal?: boolean;
}

const GroupItems: React.FC<Props> = ({ children, spacing, horizontal }: Props) => {
    return (
        <StyledGroupItems spacing={spacing} horizontal={horizontal}>
            {children}
        </StyledGroupItems>
    );
};

export const StyledGroupItems = styled.div`
    display: flex;
    flex-direction: ${(props) => (props.horizontal ? 'row' : 'column')};
    align-items: center;
    justify-content: space-around;

    ${({ spacing }: Props) =>
        spacing &&
        css`
            > :::not(::last-child) {
                margin-right: ${spacing / 10}rem;
            }
        `}
`;

export default GroupItems;
