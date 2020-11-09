import styled from 'styled-components';
import { transparentize } from 'polished';
import { alignCenter } from '../../assets/mixins';

export const StyledContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    background-color: transparent;
`;

export const StyledAppBar = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: min(90vw, 50rem);
    height: max(10vh, 5rem);
    background-color: ${(props) => transparentize(0.55, props.theme.colors.background2)};
    color: ${(props) => props.theme.colors.text};
    border-radius: 2rem;
    bottom: 20px;
    ${alignCenter};
`;
