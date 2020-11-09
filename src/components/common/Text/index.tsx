import React, { ReactElement, ReactNode, ReactNodeArray } from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

interface Props {
    color?: string;
    children: ReactNode | ReactNodeArray;
}

const StyledText = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: flex-start;
    color: ${(props) => (props.color !== undefined ? props.color : props.theme.colors.text)};
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    text-align: justify;
    line-height: 3.5rem;
`;

const StyledTextHighlight = styled.span`
    color: ${(props) => (props.color !== undefined ? props.color : lighten('0.35', props.theme.colors.highlight1))};
    font-weight: 700;
`;

/* const StyledTitle = styled(StyledText)`
    
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    line-height: 30px;
    font-size: 28px;

    ${({ bigTitle }: Props) =>
        bigTitle &&
        css`
            font-size: 32px;
        `}
`;

const StyledParagraph = styled.p`
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    text-align: justify;
    line-height: 1.5rem;
    color: ${(props) => (props.color ? props.color : props.theme.colors.text)};
`; */

const Text: React.FC<Props> = ({ color, children }: Props): ReactElement => {
    return <StyledText color={color}>{children}</StyledText>;
};

const TextHighlight: React.FC<Props> = ({ color, children }: Props): ReactElement => {
    return <StyledTextHighlight color={color}>{children}</StyledTextHighlight>;
};

export { Text, TextHighlight };
