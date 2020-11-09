import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        background: ${(props) => props.theme.colors.background1};
        font-size: 1.6rem;
        color: ${(props) => props.theme.colors.text};
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
        line-height: 2.25rem;
    }

    h1, h2, h3 {
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
    }

    h4, h5, h6 {
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
    }

    small {
        font-size: 1.8rem;
        font-family: 'Nunito', sans-serif;
        font-weight: 200;
    }
`;
