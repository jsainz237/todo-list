import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            bg: string;
            fg: string;
            offsetBg: string;
            offsetFg: string;

            darkGray: string;
            lightGray: string;
        };

        breakpoints: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            xxl: string;
        };

        shadow: string;
    }
}