import styled from 'styled-components';

import { transparentize } from 'polished';
import headerBackground from '../../assets/photos/header/old/header_eq1t6f_c_scale,w_1290.jpg';

export const HeaderWrapper = styled.header`
    /* background-image: linear-gradient(
            to right bottom,
            ${(props) => transparentize(0.8, props.theme.colors.primary)},
            ${(props) => props.theme.colors.background2}
        ),
        url(${headerBackground}); */
    background-color: ${(props) => props.theme.colors.primary};
    background-size: cover;
    background-position: center top;
    clip-path: polygon(0 0, 100% 0, 100% 83%, 0 100%);
    height: 100vh;
    position: relative;
    margin: 0;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    border: none;
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    padding: 6rem 2.5rem;
`;

export const HeaderMessage = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    margin: 3.5rem 0 auto;
    max-height: 25rem;
`;
