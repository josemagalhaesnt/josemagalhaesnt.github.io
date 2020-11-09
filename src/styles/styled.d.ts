import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            primary: string;
            secondary: string;
            tertiary: string;
            highlight1: string;
            highlight2: string;
            background1: string;
            background2: string;
            text: string;
        };
        mobile: string;
    }
}
