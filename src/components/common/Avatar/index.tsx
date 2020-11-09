import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
    picture?: string;
}

const StyledAvatar = styled.div`
    display: flex;
    flex-flow: column wrap;
    width: 9.6rem;
    height: 9.6rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.highlight1};

    ${({ picture }: Props) =>
        picture &&
        css`
            background-image: url(${picture}),
                linear-gradient(
                    to right,
                    ${(props) => props.theme.colors.secondary},
                    ${(props) => props.theme.colors.secondary}
                );
            background-size: cover, contain;
            background-position: center, right bottom;
            background-repeat: no-repeat, no-repeat;
        `}
`;

const Avatar: React.FC<Props> = ({ picture }: Props) => {
    return <StyledAvatar picture={picture} />;
};

export { Avatar };
